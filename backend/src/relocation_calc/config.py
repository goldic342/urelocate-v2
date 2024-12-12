from pydantic_settings import BaseSettings


class RelocationModifiers(BaseSettings):
    base_probability: int = 20

    experience_modifiers: dict[int, int | float] = {
        1: -30,  # junior
        2: +10,  # middle
        3: +30,  # senior
        4: +40,  # lead, architect
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

    geography_modifiers: dict[str, int | float] = {
        # Europe
        "Eastern Europe": +10,  # Высокая вероятность из-за популярности релокации в регионе
        "Western Europe": +5,  # Сложнее, но все еще возможно
        "Northern Europe": +10,  # Популярные страны, такие как Норвегия и Швеция
        "Southern Europe": -5,  # Меньший спрос на разработчиков для релокации
        # Americas
        "USA": -20,  # Сложности с визами, но высокий спрос в долгосрочной перспективе
        "Canada": +15,  # Более простая процедура релокации и высокий спрос
        "Latin America": +10,  # Растущий спрос, но меньше компаний с релокацией
        # Asia
        "India": +15,  # Высокий спрос на разработчиков, но конкуренция
        "China": -15,  # Ограничения на визы и культура трудоустройства
        "Japan": +2,  # Нужен высокий уровень языка, но спрос на разработчиков растет
        "Southeast Asia": +5,  # Таиланд, Вьетнам — спрос умеренный
        # CIS
        "Russia": +10,
        "Ukraine": +25,
        "Belarus": +13,
        # Middle East
        "Israel": +5,  # Высокий уровень конкуренции внутри страны
        "Turkey": +10,  # Умеренный спрос и доступность релокации
        # Africa
        "North Africa": +5,  # Умеренный спрос, но низкий общий объем релокаций
        "Sub-Saharan Africa": +10,  # Растущий интерес к разработчикам
        # Oceania
        "Australia": +12,  # Сложные визовые процессы, но высокий спрос на разработчиков
        "New Zealand": +7.5,  # Схожа с Австралией, но рынок меньше
    }

    language_modifiers: dict[str, int | float] = {
        "beginner": -20,
        "intermediate": +10,
        "advanced": +20,
    }

    savings_modifiers: dict[str, int | float] = {
        "low": -20,  # <1 mounth
        "medium": -10,  # 1>=3 mounths
        "high": +10,  # >3 mounths
    }

    dependents_modifiers: dict[str, int | float] = {
        "adult": -5.5,
        "child": -10,
    }
