from src.expenses.enums import ExpenseCategory
from src.expenses.models import MonthlyCostSchema, CategorySchema


class ExpenseCategorizer:
    """
    Categorization helper for living expenses
    """

    # TODO: move to a config file, (lazy rn)
    _EXPENSE_CATEGORY_MAP = {
        # Food Categories
        ExpenseCategory.FOOD: [
            "Loaf of Fresh White Bread (500g)",
            "Rice (white), (1kg)",
            "Eggs (regular) (12)",
            "Local Cheese (1kg)",
            "Chicken Fillets (1kg)",
            "Beef Round (1kg)",
            "Apples (1kg)",
            "Banana (1kg)",
            "Oranges (1kg)",
            "Tomato (1kg)",
            "Potato (1kg)",
            "Onion (1kg)",
            "Lettuce (1 head)",
        ],
        # Beverages
        ExpenseCategory.BEVERAGES: [
            "Milk (regular), (1 liter)",
            "Water (1.5 liter bottle)",
            "Cappuccino (regular)",
            "Coke/Pepsi (0.33 liter bottle)",
            "Water (0.33 liter bottle)",
        ],
        # Dining Out
        ExpenseCategory.DINING_OUT: [
            "Meal, Inexpensive Restaurant",
            "Meal for 2 People, Mid-range Restaurant, Three-course",
            "McMeal at McDonalds (or Equivalent Combo Meal)",
        ],
        # Alcohol
        ExpenseCategory.ALCOHOL: [
            "Domestic Beer (0.5 liter draught)",
            "Imported Beer (0.33 liter bottle)",
            "Bottle of Wine (Mid-Range)",
            "Domestic Beer (0.5 liter bottle)",
        ],
        # Transportation
        ExpenseCategory.TRANSPORTATION: [
            "One-way Ticket (Local Transport)",
            "Monthly Pass (Regular Price)",
            "Taxi Start (Normal Tariff)",
            "Taxi 1km (Normal Tariff)",
            "Taxi 1hour Waiting (Normal Tariff)",
            "Gasoline (1 liter)",
        ],
        # Housing & Utilities
        ExpenseCategory.HOUSING: [
            "Apartment (1 bedroom) in City Centre",
            "Apartment (1 bedroom) Outside of Centre",
            "Apartment (3 bedrooms) in City Centre",
            "Apartment (3 bedrooms) Outside of Centre",
        ],
        ExpenseCategory.UTILITIES: [
            "Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment",
            "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)",
            "Mobile Phone Monthly Plan with Calls and 10GB+ Data",
        ],
        # Entertainment
        ExpenseCategory.ENTERTAINMENT: [
            "Fitness Club, Monthly Fee for 1 Adult",
            "Tennis Court Rent (1 Hour on Weekend)",
            "Cinema, International Release, 1 Seat",
        ],
        # Education
        ExpenseCategory.EDUCATION: [
            "Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child",
            "International Primary School, Yearly for 1 Child",
        ],
        # Clothing
        ExpenseCategory.CLOTHING: [
            "1 Pair of Jeans (Levis 501 Or Similar)",
            "1 Summer Dress in a Chain Store (Zara, H&M, ...)",
            "1 Pair of Nike Running Shoes (Mid-Range)",
            "1 Pair of Men Leather Business Shoes",
        ],
        # Communication
        ExpenseCategory.COMMUNICATION: [
            "Mobile Phone Monthly Plan with Calls and 10GB+ Data",
            "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)",
        ],
    }

    @classmethod
    def categorize_expenses(cls, expenses: dict[str, float]) -> MonthlyCostSchema:
        """
        Categorize expenses into predefined categories

        :param expenses: Dictionary of expense items and their costs
        :return: Categorized expenses as MonthlyCostSchema
        """
        # Initialize category totals
        categorized_expenses: dict[ExpenseCategory, dict[str, float]] = {
            category: {} for category in ExpenseCategory
        }

        # Categorize expenses
        for item, cost in expenses.items():
            # Find the category for the item
            found_category = False
            for category, items in cls._EXPENSE_CATEGORY_MAP.items():
                if item in items:
                    categorized_expenses[category][item] = cost
                    found_category = True
                    break

            # If no category found, place in miscellaneous
            if not found_category:
                categorized_expenses[ExpenseCategory.MISCELLANEOUS][item] = cost

        # Convert to MonthlyCostSchema
        total_sum = sum(
            sum(category_items.values())
            for category_items in categorized_expenses.values()
        )

        categories = [
            CategorySchema(
                name=category.name.lower(),
                category_sum=sum(items.values()),
                items=items,
            )
            for category, items in categorized_expenses.items()
            if items
        ]

        return MonthlyCostSchema(total_sum=total_sum, categories=categories)
