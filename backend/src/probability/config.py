from pydantic_settings import BaseSettings
from typing import TypedDict


class RelocationModifiers(BaseSettings):
    base_probability: int = 20

    class HumanNameMod(TypedDict):
        human_name: str
        mod: int | float

    class RegionsMod(TypedDict):
        countries: list[str]
        language_coefficient: int | float
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
        "eastern-europe": {
            "mod": 10,
            "language_coefficient": 8,
            "countries": [
                "russia",
                "ukraine",
                "belarus",
                "poland",
                "romania",
                "bulgaria",
                "moldova",
                "estonia",
                "latvia",
                "lithuania",
            ],
        },
        "western-europe": {
            "mod": 5,
            "language_coefficient": 4,
            "countries": [
                "germany",
                "france",
                "netherlands",
                "uk",
                "belgium",
                "switzerland",
                "austria",
            ],
        },
        "northern-europe": {
            "mod": 10,
            "language_coefficient": 6,
            "countries": [
                "norway",
                "sweden",
                "finland",
                "denmark",
                "iceland",
                "ireland",
            ],
        },
        "southern-europe": {
            "mod": -5,
            "language_coefficient": 7,
            "countries": [
                "italy",
                "spain",
                "portugal",
                "greece",
                "croatia",
                "serbia",
                "albania",
                "malta",
            ],
        },
        "usa": {"mod": -20, "language_coefficient": 1, "countries": ["usa"]},
        "canada": {"mod": 15, "language_coefficient": 2, "countries": ["canada"]},
        "latin-america": {
            "mod": 10,
            "language_coefficient": 8,
            "countries": [
                "mexico",
                "brazil",
                "argentina",
                "colombia",
                "chile",
                "peru",
                "venezuela",
                "ecuador",
            ],
        },
        "india": {
            "mod": 15,
            "language_coefficient": 9,
            "countries": ["india", "pakistan", "bangladesh", "sri lanka"],
        },
        "china": {
            "mod": -15,
            "language_coefficient": 10,
            "countries": ["china", "taiwan", "hong kong"],
        },
        "japan": {"mod": 2, "language_coefficient": 10, "countries": ["japan"]},
        "southeast-asia": {
            "mod": 5,
            "language_coefficient": 7,
            "countries": [
                "thailand",
                "vietnam",
                "indonesia",
                "philippines",
                "malaysia",
                "singapore",
                "cambodia",
                "myanmar",
            ],
        },
        "israel": {"mod": 5, "language_coefficient": 6, "countries": ["israel"]},
        "turkey": {"mod": 10, "language_coefficient": 7, "countries": ["turkey"]},
        "north-africa": {
            "mod": 5,
            "language_coefficient": 8,
            "countries": ["egypt", "morocco", "algeria", "tunisia", "libya"],
        },
        "sub-saharan-africa": {
            "mod": 10,
            "language_coefficient": 6,
            "countries": [
                "nigeria",
                "kenya",
                "south africa",
                "ghana",
                "ethiopia",
                "uganda",
                "tanzania",
            ],
        },
        "australia": {"mod": 12, "language_coefficient": 2, "countries": ["australia"]},
        "new-zealand": {
            "mod": 7.5,
            "language_coefficient": 2,
            "countries": ["new zealand"],
        },
    }

    # A scaling factor determining how much English proficiency offsets the need for the local language.
    english_offset = 0.25

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
