from fastapi import APIRouter, Request, HTTPException, Depends
import httpx
from pydantic import BaseModel
from src.config import settings
import time

router = APIRouter(prefix="/contact", tags=["Contact the admin"])

LAST_REQUEST_TIME = {}


class ContactInfo(BaseModel):
    name: str
    tg_username: str


class SendedStatus(BaseModel):
    successful: bool = True


async def get_ip_info(ip: str) -> dict:
    """Fetches location info based on IP address."""
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"https://ipinfo.io/{ip}/json")
            if response.status_code == 200:
                return response.json()
    except Exception:
        pass
    return {}


async def rate_limiter(request: Request):
    """Rate limits requests to one per 30 minutes per IP address."""
    user_ip = request.client.host  # Extract user's IP address
    now = time.time()
    last_request = LAST_REQUEST_TIME.get(user_ip, 0)

    if now - last_request < 1800:  # 1800 seconds = 30 minutes
        raise HTTPException(
            status_code=429, detail="Too many requests from this IP. Try again later."
        )

    LAST_REQUEST_TIME[user_ip] = now


def get_device_info(user_agent: str) -> str:
    """Parses User-Agent string to detect browser and OS."""
    browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera", "MSIE", "Trident"]
    os_list = ["Windows", "Mac OS", "Linux", "Android", "iOS", "Ubuntu"]

    detected_browser = "Unknown Browser"
    detected_os = "Unknown OS"

    for browser in browsers:
        if browser in user_agent:
            detected_browser = browser
            break

    for os in os_list:
        if os in user_agent:
            detected_os = os
            break

    return f"{detected_browser} on {detected_os}"


def get_accept_language(accept_lang: str) -> str:
    """Parses Accept-Language header and extracts primary language."""
    return accept_lang.split(",")[0] if accept_lang else "Unknown"


@router.post("/", response_model=SendedStatus, dependencies=[Depends(rate_limiter)])
async def get_report(user_info: ContactInfo, request: Request):
    user_ip = request.client.host

    ip_data = {}
    if user_ip != "127.0.0.1":
        ip_data = await get_ip_info(user_ip)

    location = ip_data.get("city", "Unknown") + ", " + ip_data.get("country", "Unknown")
    isp = ip_data.get("org", "Unknown ISP")

    user_agent = request.headers.get("user-agent", "unknown")
    accept_lang = request.headers.get("Accept-Language", "Unknown")

    device_info = get_device_info(user_agent)
    user_language = get_accept_language(accept_lang)

    message = (
        f"*New Contact Request*\n"
        f"👤 *Name:* `{user_info.name}`\n"
        f"📱 *Telegram:* {user_info.tg_username}\n"
        f"🌍 *IP Address:* `{user_ip}`\n"
        f"📍 *Location:* `{location}`\n"
        f"🔌 *ISP:* `{isp}`\n"
        f"💻 *Device:* `{device_info}`\n"
        f"🗣 *Preferred Language:* `{user_language}`\n\n"
        f"*Raw Data*\n"
        f"*UserAgent*: `{user_agent}`\n"
        f"*Accept-Language*: `{accept_lang}`"
    )

    url = f"https://api.telegram.org/bot{settings.NTFY_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": settings.NTFY_CHAT_ID,
        "text": message,
        "parse_mode": "Markdown",
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json=payload)
        return SendedStatus(successful=response.status_code == 200)
