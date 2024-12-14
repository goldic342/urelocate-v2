from fastapi.exceptions import HTTPException
import httpx
from bs4 import BeautifulSoup
import re
import json
from random import choice


from src.expenses.config import living_cost_multipliers
from src.expenses.models import (
    CostOfItem,
    CostRange,
    LivingCostOfCountry,
    MonthlyCostSchema,
)
from src.expenses.categorize import ExpenseCategorizer


class ExpensesService:
    @staticmethod
    def _normalize_country_name(country: str) -> str:
        """
        Normalize country name for URL formatting.

        :param country: Country name to normalize
        :return: Normalized country name for URL
        """
        return "+".join(country.title().split())

    @staticmethod
    def __gen_random_user_agent() -> str:
        user_agents = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/89.0",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36",
            "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1",
            "Mozilla/5.0 (Android 11; Mobile; rv:89.0) Gecko/89.0 Firefox/89.0",
            "Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1",
        ]

        return choice(user_agents)

    async def __get_exp_table(self, country: str, currency: str = "USD"):
        url = (
            "https://www.numbeo.com/cost-of-living/country_result.jsp"
            f"?country={country}&displayCurrency={currency}"
        )

        async with httpx.AsyncClient(
            headers={"User-Agent": self.__gen_random_user_agent()}
        ) as client:
            try:
                response = await client.get(url)
                response.raise_for_status()
            except httpx.RequestError as e:
                raise ValueError(f"Error fetching data: {e}")

        soup = BeautifulSoup(response.text, "html.parser")
        return soup.find("table", class_="data_wide_table")

    async def country_cost_of_living(
        self, country: str, currency: str = "USD"
    ) -> LivingCostOfCountry:
        """
        Asynchronously retrieve cost of living data for a given country from Numbeo.

        :param country: Name of the country
        :param currency: Currency to display costs in (default: CAD)
        :return: Dictionary containing country, currency, and cost of living data
        """

        normalized_country = self._normalize_country_name(country)
        print(normalized_country)
        table = None

        for i in range(4):
            table = await self.__get_exp_table(normalized_country)
            if table:
                break

        if not table:
            raise HTTPException(
                status_code=401, detail="Failed to get expenses, try again later"
            )
        costs: list[CostOfItem] = []
        rows = table.find_all("tr")[1:]  # type: ignore

        for row in rows:
            cols = row.find_all("td")
            if len(cols) >= 2:
                try:
                    # Extract item name
                    item = cols[0].get_text(strip=True)

                    cost_text = cols[1].get_text(strip=True)
                    cost_match = re.search(r"([\d,.]+)", cost_text)
                    cost = cost_match.group(1) if cost_match else None

                    try:
                        cost = float(cost.replace(",", ""))  # type: ignore
                    except ValueError:
                        cost = None

                    # Extract range
                    range_text = cols[2].get_text(strip=True)
                    range_parts = range_text.split("-")
                    range_low = (
                        range_parts[0].strip().replace(",", "")
                        if len(range_parts) > 0
                        else None
                    )
                    range_high = (
                        range_parts[1].strip().replace(",", "")
                        if len(range_parts) > 1
                        else None
                    )

                    if item and cost:
                        costs.append(
                            CostOfItem(
                                item=item,
                                cost=float(cost),
                                cost_range=CostRange(
                                    low=range_low or None, high=range_high or None
                                ),
                            )
                        )
                except Exception as e:
                    print(f"Error parsing row: {e}")

        return LivingCostOfCountry(
            name=normalized_country.replace("-", " "), currency=currency, costs=costs
        )

    def _get_item_cost(self, item: CostOfItem) -> float:
        """
        Extract cost from a CostOfItem, prioritizing the 'cost' field
        """
        if item.cost is not None:
            return float(item.cost)
        if item.cost_range and item.cost_range.low is not None:
            return float(item.cost_range.low)
        return 0.0

    def __calculate_monthly_costs(
        self,
        data: LivingCostOfCountry,
        multipliers: dict[str, float],
        additional_costs: dict[str, float] = {},
        people_multiplier: int = 1,
    ) -> dict[str, float]:
        """
        Calculate monthly costs based on given multipliers and additional costs
        """
        monthly_costs: dict[str, int | float] = {}
        additional_costs = additional_costs or {}

        for item in data.costs:
            # Check if item has a multiplier
            if item.item in multipliers:
                cost = self._get_item_cost(item)

                monthly_cost = cost * \
                    multipliers[item.item] * 30  # daily * 30 days
                monthly_costs[item.item] = round(
                    monthly_cost, 2) * people_multiplier

        for key, value in additional_costs.items():
            # Find the item in costs
            matching_item = next(
                (item for item in data.costs if item.item == key), None
            )
            if matching_item:
                cost = self._get_item_cost(matching_item)

                monthly_costs[key] = round(cost * value, 2) * people_multiplier

        return monthly_costs

    async def get_monthly_living_costs(
        self,
        country: str,
        currency: str = "USD",
        children_count: int = 0,
        adult_count: int = 1,
    ) -> MonthlyCostSchema:
        """
        Get monthly living costs for adult and child
        """

        living_cost_data = await self.country_cost_of_living(
            country=country, currency=currency
        )

        child_monthly_expenses = self.__calculate_monthly_costs(
            living_cost_data,
            living_cost_multipliers.child_multipliers,
            living_cost_multipliers.child_additional_costs,
            people_multiplier=children_count,
        )
        adult_monthly_expenses = self.__calculate_monthly_costs(
            living_cost_data,
            living_cost_multipliers.adult_multipliers,
            people_multiplier=adult_count,
        )

        total_expenses = {}
        for k, v in child_monthly_expenses.items():
            if k in adult_monthly_expenses:
                total_expenses[k] = v + adult_monthly_expenses[k]

        return ExpenseCategorizer().categorize_expenses(total_expenses)


if __name__ == "__main__":
    import asyncio

    async def main():
        try:
            scraper = ExpensesService()
            result = await scraper.country_cost_of_living("Russia", "RUB")
            with open("s.json", "w") as f:
                json.dump(result, f)

            print(result)
        except Exception as e:
            print(f"An error occurred: {e}")

    asyncio.run(main())
