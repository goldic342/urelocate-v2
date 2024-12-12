from fastapi import APIRouter
from src.vacancies.models import TechStackList
from src.vacancies.config import vacancies_settings

router = APIRouter(prefix="/techstack")


@router.get("/", response_model=TechStackList)
async def get_tech_stack():
    return TechStackList(**vacancies_settings.tech_stack_variants)
