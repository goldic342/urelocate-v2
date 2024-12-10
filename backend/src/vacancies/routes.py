from fastapi import APIRouter
from src.vacancies.models import TechStack
from src.vacancies.config import vacancies_settings

router = APIRouter(prefix="/techstack")


@router.get("/", response_model=TechStack)
async def get_tech_stack():
    return TechStack(**vacancies_settings.stack_keywords)
