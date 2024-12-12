from pydantic_settings import BaseSettings


class LivingCostMultipliers(BaseSettings):
    """
    Calculated by Claude.ai, looking good for me
    """

    # Adult consumption multipliers (approximate daily consumption)
    adult_multipliers = {
        # Food items (daily consumption)
        "Milk (regular), (1 liter)": 0.5,  # About half a liter per day
        "Loaf of Fresh White Bread (500g)": 1 / 7,  # One loaf per week
        "Rice (white), (1kg)": 1 / 30,  # Small portion per day
        "Eggs (regular) (12)": 2 / 30,  # 2 eggs every few days
        "Local Cheese (1kg)": 1 / 30,  # Small daily portion
        "Chicken Fillets (1kg)": 1 / 14,  # About 200g every two days
        "Beef Round (1kg)": 1 / 21,  # Occasional red meat consumption
        "Apples (1kg)": 1 / 7,  # A few apples per week
        "Banana (1kg)": 1 / 7,  # A few bananas per week
        "Oranges (1kg)": 1 / 7,  # A few oranges per week
        "Tomato (1kg)": 1 / 7,  # Some tomatoes per week
        "Potato (1kg)": 1 / 7,  # Potatoes per week
        "Onion (1kg)": 1 / 14,  # Some onions every two weeks
        "Lettuce (1 head)": 1 / 3,  # Few times a month
        # Beverages
        "Water (1.5 liter bottle)": 1.5,  # Daily hydration
        "Cappuccino (regular)": 1,  # Daily coffee
        "Coke/Pepsi (0.33 liter bottle)": 0.5,  # Occasional soft drink
        "Water (0.33 liter bottle)": 1,  # Bottled water
        # Eating out
        "Meal, Inexpensive Restaurant": 2,  # Occasional eating out
        # Occasional fast food
        "McMeal at McDonalds (or Equivalent Combo Meal)": 1,
        # Drinks
        "Domestic Beer (0.5 liter draught)": 1,  # Occasional drink
        "Bottle of Wine (Mid-Range)": 1 / 4,  # Occasional wine
    }

    # Child consumption multipliers (adjusted for lower consumption)
    # TODO: remove cofee, wine, beer, etc.
    child_multipliers = {key: value * 0.5 for key, value in adult_multipliers.items()}

    # Additional child-specific adjustments
    child_additional_costs = {
        "Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child": 1,
        "International Primary School, Yearly for 1 Child": 1
        / 12,  # Converted to monthly
    }


living_cost_multipliers = LivingCostMultipliers()
