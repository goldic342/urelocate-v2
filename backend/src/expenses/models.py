from pydantic import BaseModel


class CostRange(BaseModel):
    low: float | int | None = None
    high: float | int | None = None


class CostOfItem(BaseModel):
    item: str
    cost: float | int | None = None
    const_range: CostRange


class LivingCostOfCountry(BaseModel):
    name: str
    currency: str
    costs: list[CostOfItem]
