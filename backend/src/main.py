from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.vacancies.routes import router as vacancies_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(vacancies_router)
