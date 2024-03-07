def calculate_bmi(height:float,weight:float,unit_system:str="unit_system"):
    scaling_factor = 703 if unit_system == "imperial" else 1
    return (weight / (height ** 2)) * scaling_factor


def get_bmi_category(bmi:float):
    bmi=bmi
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 24.9:
        return "Normal weight"
    elif 25 <= bmi < 29.9:
        return "Overweight"
    else:
        return "Obese"