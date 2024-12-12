from fastapi import APIRouter

from src.report_gen.service import ReportService
from src.report_gen.models import Report, UserDataInput

router = APIRouter(prefix="/report", tags=["Relocation report"])


@router.post("/", response_model=Report)
async def get_report(user_input: UserDataInput):
    report = await ReportService().get_report(user_input)

    return report

