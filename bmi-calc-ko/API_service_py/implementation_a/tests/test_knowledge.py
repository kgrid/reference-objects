import re
import pytest
from ..python_bmi_web_service.bmi_knowledge import calculate_bmi_knowledge,get_bmi_category_knowledge


def test_calculate_bmi_knowledge_works():
    input= {
        "height":1.82,
        "weight":64,
        "unit_system":"metric"
    }
    test=calculate_bmi_knowledge(input)
    assert test==19.32133800265668
    
def test_get_bmi_category_knowledge_works():
    input= {
        "bmi":19.3
    }
    test=get_bmi_category_knowledge(input)
    assert test=="Normal weight"    
    
def test_calculate_bmi_knowledge_exception_missing_argument_name():
    input= {
        "weight":64,
        "unit_system":"metric"
    }
    with pytest.raises(KeyError, match="height"):
        calculate_bmi_knowledge(input)
        
def test_calculate_bmi_knowledge_exception_wrong_data_type():
    input= {
        "height":1.82,
        "weight":"64",
        "unit_system":"metric"
    }
    with pytest.raises(TypeError, match=re.escape("unsupported operand type(s) for /: 'str' and 'float'")):
        calculate_bmi_knowledge(input) 
        
def test_get_bmi_category_knowledge_exception_missing_argument_name():
    input= {
        "weight":19.3
    }
    with pytest.raises(KeyError, match="bmi"):
        get_bmi_category_knowledge(input)
        
def test_get_bmi_category_knowledge_exception_wrong_data_type():
    input= {
        "bmi":"19.3"
    }
    with pytest.raises(TypeError, match="'<' not supported between instances of 'str' and 'float'"):
        get_bmi_category_knowledge(input)  
        
       
        
