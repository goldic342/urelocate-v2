from pydantic import BaseModel, Field
from typing import Literal
from src.vacancies.models import VacanciesList
from src.expenses.models import MonthlyCostSchema
from src.probability.models import Dependents


class UserDataInput(BaseModel):
    # Mostly copied
    from_county: str
    to_country: str
    expirience_level: int = Field(ge=1, le=4)
    local_lang_level: int = Field(ge=1, le=3)
    english_level: int = Field(ge=1, le=3)
    savings: int  # in USD
    tech_stack_scope: Literal["frontend", "backend", "devops", "mobile"]
    # Validated on frontend, no strict rules, if not found - ignored
    tech_stack_tools: list[str]  # str for easer api reference
    dependents: Dependents


class Report(BaseModel):
    percentage: float
    expenses: MonthlyCostSchema
    vacancies: VacanciesList
    # TODO: add later
    # advices: list[str]
