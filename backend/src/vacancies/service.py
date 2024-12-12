from careerjet_api import CareerjetAPIClient

from src.config import settings
from src.vacancies.config import vacancies_config
from bs4 import BeautifulSoup
from typing import Any, Literal
from src.vacancies.models import Technology, VacanciesList, Vacancy
import re


class VacanciesService:
    def __init__(self, locale: str = "en_GB"):
        self.client = CareerjetAPIClient(locale)

    def __get_vacancies(
        self,
        keywords: list[str] = [],
        location: str = "",
        page: int = 1,
        page_size: int = 10,
        sort_type: Literal["relevance", "salary", "date"] = "relevance",
        user_agent: str | None = None,
        user_ip: str | None = None,
        url: str | None = None,
    ):
        response = self.client.search(
            {
                "keywords": ", ".join(keywords),
                "location": location,
                "url": url or "https://example.com",
                "user_agent": user_agent or "python-careerjet client",
                "user_ip": user_ip or "127.0.0.1",
                "page": page,
                "pagesize": page_size,
                "sort": sort_type,
                "affid": settings.CAREERJET_AFFID,
            }
        )

        return response

    def check_relocation(
        self,
        description: str,
    ) -> dict:
        """
        Overcomplicated function for checking,
        is job has a relocation support
        """
        soup = BeautifulSoup(description, "html.parser")
        clean_text = soup.get_text(separator=" ", strip=True).lower()

        # Advanced matching with weighted scoring
        def advanced_keyword_match(
            keywords: list[str], text: str
        ) -> list[dict[str, Any]]:
            """
            NOTE: idk how it works, written by claude.ai
            (maybe I should rewrite this)
            """
            matches = []
            for keyword in keywords:
                # Weighted keyword matching
                keyword_lower = keyword.lower()
                keyword_weight = (
                    len(keyword.split()) / 3.0
                )  # More words = more specific

                # Find whole word matches with surrounding context
                pattern = r"(\w+\s){0,3}" + re.escape(keyword_lower) + r"(\s\w+){0,3}"
                context_matches = re.findall(pattern, text, re.IGNORECASE)

                # Calculate match quality
                match_count = len(context_matches)
                if match_count > 0:
                    matches.append(
                        {
                            "keyword": keyword,
                            "match_count": match_count,
                            "weighted_score": match_count * keyword_weight,
                        }
                    )

            return matches

        supported_matches = advanced_keyword_match(
            vacancies_config.relocation_keywords_supported, clean_text
        )
        unsupported_matches = advanced_keyword_match(
            vacancies_config.relocation_keywords_not_supported, clean_text
        )

        total_supported_score = sum(
            match["weighted_score"] for match in supported_matches
        )
        total_unsupported_score = sum(
            match["weighted_score"] for match in unsupported_matches
        )

        total_score = total_supported_score - total_unsupported_score
        has_relocation = total_score > 0

        return {
            "has_relocation": has_relocation,
            "total_score": total_score,
            # Not needed, but keep here bc why not
            # "detailed_analysis": {
            #    "supported_score": total_supported_score,
            #    "unsupported_score": total_unsupported_score,
            # },
        }

    def get_relocation_vacancies(
        self,
        stack: str,
        technologies: list[Technology],
        **kwargs,
    ):
        """
        Gives a list of vacancies that has relocation support
        Stack and technologies must exists in config
        """
        api_response = self.__get_vacancies(
            keywords=[
                vacancies_config.base_relocation_keyword,
                stack,
                *[item.name for item in technologies],
            ],
            **kwargs,
        )
        job_list = (
            [Vacancy(**job) for job in api_response["jobs"]]
            if api_response.get("jobs")
            else []
        )

        vacancies = VacanciesList(
            jobs=job_list,
            hits=api_response["hits"],
            pages=api_response["pages"],
            response_time=api_response["response_time"],
        )

        checked_vacancies: list[Vacancy] = []
        hits_relocation = 0

        for vacancy in vacancies.jobs:
            has_relocation = self.check_relocation(description=vacancy.description)[
                "has_relocation"
            ]

            vacancy.has_relocation = has_relocation
            if has_relocation:
                hits_relocation += 1

            checked_vacancies.append(vacancy)

        return VacanciesList(
            jobs=checked_vacancies,
            pages=vacancies.pages,
            response_time=vacancies.response_time,
            hits=vacancies.hits,
            hits_relocation=hits_relocation,
        )


if __name__ == "__main__":
    print(
        VacanciesService().get_relocation_vacancies(
            "frontend", ["react"], location="usa"
        )
    )
