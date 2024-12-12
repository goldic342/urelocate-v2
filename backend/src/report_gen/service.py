from src.vacancies.models import Technology
from src.expenses.service import ExpensesService
from src.vacancies.service import VacanciesService
from src.probability.models import UserData, UserTechStack
from src.report_gen.models import Report, UserDataInput
from src.probability.service import RelocationProbabilityService


class ReportService:
    async def get_report(self, data: UserDataInput) -> Report:
        user_data = UserData(
            **data.model_dump(),
            tech_stack=UserTechStack(
                scope=data.tech_stack_scope,
                tools=[Technology(name=item) for item in data.tech_stack_tools],
            ),
        )
        percentage = await RelocationProbabilityService().calc_propability(user_data)
        vacancies = VacanciesService().get_relocation_vacancies(
            user_data.tech_stack.scope,
            user_data.tech_stack.tools,
            location=user_data.to_country,
        )
        expenses = await ExpensesService().get_monthly_living_costs(
            user_data.to_country,
            "USD",
            user_data.dependents.children,
            user_data.dependents.adults,
        )

        return Report(percentage=percentage, vacancies=vacancies, expenses=expenses)
