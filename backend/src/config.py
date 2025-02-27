from os import path
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    CAREERJET_AFFID: str
    CACHE_DIR: str
    NTFY_BOT_TOKEN: str
    NTFY_CHAT_ID: str | int

    model_config = SettingsConfigDict(
        case_sensitive=True,
        env_file=".env" if path.exists(".env") else "./backend/.env",
    )


settings = Settings()
