import re
import pytest
from ..python_bmi_web_service.bmi_service import calculate_bmi,get_bmi_category


def test_calculate_bmi_service_works():
    input= {
        "height":1.82,
        "weight":64,
        "unit_system":"metric"
    }
    test=calculate_bmi(input)
    assert test==19.32133800265668
    
def test_get_bmi_category_service_works():
    input= {
        "bmi":19.3
    }
    test=get_bmi_category(input)
    assert test=="Normal weight"    
    

       
        
