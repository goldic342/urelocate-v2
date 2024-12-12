from pydantic import BaseModel, HttpUrl


class Vacancy(BaseModel):
    locations: str
    site: str | None = None
    date: str
    url: str
    title: str
    description: str
    company: str
    salary: str | None = None
    salary_min: float | None = None
    salary_max: float | None = None
    salary_type: str | None = None
    salary_currency_code: str | None = None
    has_relocation: bool | None = None


class VacanciesList(BaseModel):
    # called not vacancy bc does not match with api json
    jobs: list[Vacancy]
    pages: int
    hits: int
    hits_relocation: int = 0
    response_type: str = "JOBS"
    response_time: float


class Technology(BaseModel):
    name: str
    icon: HttpUrl | str | None = None


class TechStackList(BaseModel):
    frontend: list[Technology]
    backend: list[Technology]
    devops: list[Technology]
    mobile: list[Technology]
    database: list[Technology]
