from fastapi import APIRouter
from src.probability.config import relocation_modifiers

router = APIRouter(prefix="/probability-config")


@router.get("/", response_model=list[str])
async def get_countires():
    countires = []

    for region in relocation_modifiers.geography_modifiers.values():
        for country in region["countries"]:
            countires.append(country)
    return countires
