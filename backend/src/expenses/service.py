from os import name
import httpx
from bs4 import BeautifulSoup
import re
import json

from src.expenses.models import CostOfItem, CostRange, LivingCostOfCountry


class ExpensesService:
    """
    A class to scrape cost of living data from Numbeo website.
    """

    @staticmethod
    def _normalize_country_name(country: str) -> str:
        """
        Normalize country name for URL formatting.

        :param country: Country name to normalize
        :return: Normalized country name for URL
        """
        return "-".join(country.title().split())

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

        url = (
            "https://www.numbeo.com/cost-of-living/country_result.jsp"
            f"?country={country}&displayCurrency={currency}"
        )

        async with httpx.AsyncClient() as client:
            try:
                response = await client.get(url)
                response.raise_for_status()
            except httpx.RequestError as e:
                raise ValueError(f"Error fetching data: {e}")

        soup = BeautifulSoup(response.text, "html.parser")

        table = soup.find("table", class_="data_wide_table")

        costs: list[CostOfItem] = []
        if table:
            rows = table.find_all("tr")[1:]  # type: ignore
            for row in rows:
                cols = row.find_all("td")
                if len(cols) >= 3:
                    try:
                        # Extract item name
                        item = cols[0].get_text(strip=True)

                        cost_text = cols[1].get_text(strip=True)
                        cost_match = re.search(r"([\d,.]+)", cost_text)
                        cost: float | int = cost_match.group(
                            1) if cost_match else None

                        # Extract range
                        range_text = cols[2].get_text(strip=True)
                        range_parts = range_text.split("-")
                        range_low = (
                            range_parts[0].strip() if len(
                                range_parts) > 0 else None
                        )
                        range_high = (
                            range_parts[1].strip() if len(
                                range_parts) > 1 else None
                        )

                        if item and cost:
                            costs.append(
                                CostOfItem(
                                    item=item,
                                    cost=cost,
                                    const_range=CostRange(
                                        low=range_low, high=range_high
                                    ),
                                )
                            )
                    except Exception as e:
                        print(f"Error parsing row: {e}")

        return LivingCostOfCountry(
            name=normalized_country.replace("-", " "), currency=currency, costs=costs
        )


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
