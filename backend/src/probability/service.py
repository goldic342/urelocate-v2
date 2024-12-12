from os import stat
from typing import Any, final
from src.probability.models import UserData, UserTechStack
from src.probability.config import relocation_modifiers
from src.vacancies.config import vacancies_config
from src.expenses.service import ExpensesService


class RelocationProbabilityService:
    @staticmethod
    def __get_mod(path: Any, data: Any) -> int | float:
        return path.model_dump().get(data, {}).get("mod", 0)

    @staticmethod
    def __calc_technolohies_mod(tech_stack: UserTechStack) -> int | float:
        total = 0
        # Complicated and dirty, but how cares
        user_technologies_names = [t.name for t in tech_stack.tools]

        for technology in vacancies_config.tech_stack_variants.model_dump()[
            tech_stack.scope
        ]:
            user_has = technology.name.lower() in user_technologies_names
            has_mod = technology.name in relocation_modifiers.tech_modifiers.keys()

            if user_has and has_mod:
                total += relocation_modifiers.tech_modifiers[technology.name]

        return total

    @staticmethod
    def __calc_geography_mod(user_country: str) -> int | float:
        for region in relocation_modifiers.geography_modifiers:
            for country in region["countries"]:  # type: ignore
                if user_country == country:
                    return region["mod"]  # type: ignore

        raise ValueError("Country not in list")

    @staticmethod
    def __calc_language_mod(user_data: UserData, region: str) -> int | float:
        region_mod = relocation_modifiers.geography_modifiers[region]["mod"]
        lang_coef = relocation_modifiers.geography_modifiers[region][
            "language_coefficient"
        ]
        user_mod = relocation_modifiers.language_modifiers[user_data.local_lang_level][
            "mod"
        ]

        return region_mod + (
            lang_coef * (1 - relocation_modifiers.english_offset) * user_mod
        )

    async def __calc_finance_mod(self, user_data: UserData) -> int | float:
        user_savings = user_data.savings
        cost_of_living = await ExpensesService().get_monthly_living_costs(
            user_data.to_country,
            "USD",
            user_data.dependents.children,
            user_data.dependents.adults,
        )

        savings_index = 1
        if user_savings < cost_of_living.total_sum:
            savings_index = 1
        elif (
            cost_of_living.total_sum <= user_data.savings < 3 * cost_of_living.total_sum
        ):
            savings_index = 2
        else:
            savings_index = 3

        return self.__get_mod(relocation_modifiers.savings_modifiers, savings_index)

    async def calc_propability(self, user_data: UserData):
        modifiers = 0

        modifiers += self.__get_mod(
            relocation_modifiers.experience_modifiers, user_data.expirience_level
        )

        # TODO: add vacancies consideration, no time rn
        modifiers += self.__calc_technolohies_mod(user_data.tech_stack)
        modifiers += self.__calc_geography_mod(user_data.to_country)
        modifiers += self.__calc_language_mod(user_data, user_data.to_country)
        modifiers += await self.__calc_finance_mod(user_data)

        final_probability = relocation_modifiers.base_probability + modifiers

        # Please do not be alwas ~100% 🙏
        return max(0, min(100, final_probability))
