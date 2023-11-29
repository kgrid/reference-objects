from python_activator_bmi_calc.bmi_calculator import get_bmi_category


def test_calculate_bmi_works():
    test=get_bmi_category(20.0)
    assert test=="Normal weight"
    