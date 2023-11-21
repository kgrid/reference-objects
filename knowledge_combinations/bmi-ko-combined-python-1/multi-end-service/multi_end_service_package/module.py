from  ...knowledge.bmi_calculator import calculate_bmi,get_bmi_category
import json

def bmi(input:any):
    validate_type(input)
    return calculate_bmi(input["height"],input["weight"],input["unit_system"])
def category(input:any):
    validate_type(input)
    return get_bmi_category(input["bmi"])
def validate_type(input):
    try:
        # Parse the JSON input
        input_data = json.loads(input)

        # Check if the parsed JSON has the expected structure and types
        if isinstance(input_data, dict) and "weight" in input_data and "height" in input_data and "unit_system" in input_data:
            weight = input_data["weight"]
            height = input_data["height"]
            unit_system = input_data["unit_system"]

            if isinstance(weight, (int, float)) and isinstance(height, (int, float)) and isinstance(unit_system, str):
                return True  # Input is valid
    except (json.JSONDecodeError, KeyError, TypeError):
        pass  # Handle validation errors

    return False  # Input is invalid
