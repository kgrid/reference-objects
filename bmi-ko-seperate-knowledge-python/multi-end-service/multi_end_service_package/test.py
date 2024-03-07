import re
import pytest
from .bmi_calculator import calculate_bmi,get_bmi_category
from .module import bmi,category

def test_calculate_bmi_works():
    input= {
        "height":1.82,
        "weight":64,
        "unit_system":"metric"
    }
    test=calculate_bmi(input["height"],input["weight"],input["unit_system"])
    cat=get_bmi_category(test)
    assert test==19.32133800265668
    assert cat=='Normal weight'

def test_get_bmi_category_works():
    input= {
        "height":1.82,
        "weight":64,
        "unit_system":"metric"
    }
    test=bmi(input)
    cat=category({'bmi':test})
    assert cat=="Normal weight"    
    
def test_calculate_bmi_exception_missing_argument_name():
    input= {
        "weight":64,
        "unit_system":"metric"
    }
    with pytest.raises(KeyError):
        bmi(input)
        
def test_calculate_bmi_exception_wrong_data_type():
    input= {
        "height":1.82,
        "weight":"64",
        "unit_system":"metric"
    }
    with pytest.raises(TypeError):
        bmi(input) 
        
def test_get_bmi_category_exception_missing_argument_name():
    input= {
        "weight":19.3
    }
    with pytest.raises(KeyError):
        category(input)
        
def test_get_bmi_category_exception_wrong_data_type():
    input= {
        "bmi":"19.3"
    }
    with pytest.raises(TypeError):
        category(input)  

