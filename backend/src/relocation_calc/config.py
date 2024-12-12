from pydantic_settings import BaseSettings
from typing import TypedDict


class RelocationModifiers(BaseSettings):
    base_probability: int = 20

    class HumanNameMod(TypedDict):
        human_name: str
        mod: int | float

    class RegionsMod(TypedDict):
        countries: list[str]
        mod: int | float

    experience_modifiers: dict[int, HumanNameMod] = {
        1: {"human_name": "junior", "mod": -30},
        2: {"human_name": "middle", "mod": +10},
        3: {"human_name": "senior", "mod": +30},
        4: {"human_name": "lead/architect", "mod": +40},
    }

    tech_modifiers: dict[str, float] = {
        "js": 3.46,
        "python": 2.55,
        "sql": 2.55,
        "java": 1.515,
        "c#": 1.355,
        "c++": 1.15,
        "c": 1.015,
        "node.js": 2.265,
        "react": 1.975,
        "jquery": 1.07,
        "next.js": 0.895,
        "express": 0.89,
        "angular": 0.855,
        "asp.net core": 0.845,
        "vue.js": 0.77,
        "asp.net": 0.645,
        "flask": 0.645,
    }

    # Maybe adjust later
    geography_modifiers: dict[str, RegionsMod] = {
        "Eastern Europe": {
            "countries": [
                "Russia",
                "Ukraine",
                "Belarus",
                "Poland",
                "Romania",
                "Bulgaria",
                "Moldova",
                "Estonia",
                "Latvia",
                "Lithuania",
            ],
            "mod": 10,
        },
        "Western Europe": {
            "countries": [
                "Germany",
                "France",
                "Netherlands",
                "UK",
                "Belgium",
                "Switzerland",
                "Austria",
            ],
            "mod": 5,
        },
        "Northern Europe": {
            "countries": [
                "Norway",
                "Sweden",
                "Finland",
                "Denmark",
                "Iceland",
                "Ireland",
            ],
            "mod": 10,
        },
        "Southern Europe": {
            "countries": [
                "Italy",
                "Spain",
                "Portugal",
                "Greece",
                "Croatia",
                "Serbia",
                "Albania",
                "Malta",
            ],
            "mod": -5,
        },
        "USA": {"countries": ["USA"], "mod": -20},
        "Canada": {"countries": ["Canada"], "mod": 15},
        "Latin America": {
            "countries": [
                "Mexico",
                "Brazil",
                "Argentina",
                "Colombia",
                "Chile",
                "Peru",
                "Venezuela",
                "Ecuador",
            ],
            "mod": 10,
        },
        "India": {
            "countries": ["India", "Pakistan", "Bangladesh", "Sri Lanka"],
            "mod": 15,
        },
        "China": {"countries": ["China", "Taiwan", "Hong Kong"], "mod": -15},
        "Japan": {"countries": ["Japan"], "mod": 2},
        "Southeast Asia": {
            "countries": [
                "Thailand",
                "Vietnam",
                "Indonesia",
                "Philippines",
                "Malaysia",
                "Singapore",
                "Cambodia",
                "Myanmar",
            ],
            "mod": 5,
        },
        "Israel": {"countries": ["Israel"], "mod": 5},
        "Turkey": {"countries": ["Turkey"], "mod": 10},
        "North Africa": {
            "countries": ["Egypt", "Morocco", "Algeria", "Tunisia", "Libya"],
            "mod": 5,
        },
        "Sub-Saharan Africa": {
            "countries": [
                "Nigeria",
                "Kenya",
                "South Africa",
                "Ghana",
                "Ethiopia",
                "Uganda",
                "Tanzania",
            ],
            "mod": 10,
        },
        "Australia": {"countries": ["Australia"], "mod": 12},
        "New Zealand": {"countries": ["New Zealand"], "mod": 7.5},
    }
    language_modifiers: dict[int, HumanNameMod] = {
        1: {"human_name": "beginner", "mod": -20},
        2: {"human_name": "intermediate", "mod": +10},
        3: {"human_name": "advanced", "mod": +20},
    }

    savings_modifiers: dict[int, HumanNameMod] = {
        1: {"human_name": "low", "mod": -20},  # <1 month
        2: {"human_name": "medium", "mod": -10},  # 1 >= 3 months
        3: {"human_name": "high", "mod": +10},  # >3 months
    }
    dependents_modifiers: dict[str, int | float] = {
        "adult": -5.5,
        "child": -10,
    }


relocation_modifiers = RelocationModifiers()
