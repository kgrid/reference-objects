import re
import pytest
from package_name.module import bmi_category


def test_get_bmi_category_works():
    input= {
        "height":1.82,
        "weight":64,
        "unit_system":"metric"
    }
    test=bmi_category(input)
    print(test)
    assert test=="Normal weight"    
    

       
        
