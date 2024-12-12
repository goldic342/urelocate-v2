from os import path
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    CAREERJET_AFFID: str
    CACHE_DIR: str

    model_config = SettingsConfigDict(
        case_sensitive=True,
        env_file=".env" if path.exists(".env") else "./backend/.env",
    )


settings = Settings()
