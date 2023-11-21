from python_simple_v1_0.src import print_name 
import pytest
def test_basic():
    input={"name":"Anurag"}
    assert(print_name(input)=="Welcome to KGrid, Anurag")
def test_no_input():
    input={}
    with pytest.raises(KeyError,match="name"):
        print_name(input)