from typing import Literal
from pydantic import BaseModel, Field

from src.vacancies.models import Technology


class Dependents(BaseModel):
    adults: int = Field(ge=1, default=1)
    children: int = Field(ge=0, default=0)


class UserTechStack(BaseModel):
    # Not counting databse as scope
    scope: Literal["frontend", "backend", "devops", "mobile"]
    # Must be a Technology from src/vacancies/config.py
    tools: list[Technology]


class UserData(BaseModel):
    from_county: str
    to_country: str
    expirience_level: int = Field(ge=1, le=4)
    local_lang_level: int = Field(ge=1, le=3)
    english_level: int = Field(ge=1, le=3)
    savings: int  # in USD
    tech_stack: UserTechStack
    dependents: Dependents
