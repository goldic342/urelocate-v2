from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.vacancies.routes import router as vacancies_router
from src.report_gen.routes import router as report_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(vacancies_router)
app.include_router(report_router)
