from fastapi import APIRouter
from src.vacancies.models import TechStackList
from src.vacancies.config import vacancies_config

router = APIRouter(prefix="/techstack")


@router.get("/", response_model=TechStackList)
async def get_tech_stack():
    return vacancies_config.tech_stack_variants
