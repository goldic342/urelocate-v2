
from fastapi import FastAPI


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_methods=["*"],
    allow_headers=["*"],
)
