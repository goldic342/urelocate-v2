from pydantic import BaseModel


class CostRange(BaseModel):
    low: float | int | None = None
    high: float | int | None = None


class CostOfItem(BaseModel):
    item: str
    cost: float | int | None = None
    cost_range: CostRange | None


class LivingCostOfCountry(BaseModel):
    name: str
    currency: str
    costs: list[CostOfItem]


class CategorySchema(BaseModel):
    name: str
    category_sum: int | float
    items: dict[str, float | int]


class MonthlyCostSchema(BaseModel):
    total_sum: int | float
    categories: list[CategorySchema] | None = None
