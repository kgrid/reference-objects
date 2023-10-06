from python_input_v1_0.io import input_primative,input_list,input_dict

def test_input_primative():
    assert(input_primative("string")=="Your input is string")
    assert(input_primative(10)=="Your input is 10")
    assert(input_primative(False)=="Your input is False")
    assert(input_primative(10.0)=="Your input is 10.0")
    assert(input_primative({"name":"Anurag"})=="Your input is {\'name\': \'Anurag\'}")
    assert(input_primative([10,10,10])=="Your input is [10, 10, 10]")
def test_input_list():
    assert(input_list(["Bunch","of","strings"])=="Your array is Bunch of strings")
    assert(input_list([10,10,10])=="Your array is 10 10 10")
    assert(input_list(["A number",10,"and a bool",False])=="Your array is A number 10 and a bool False")
def test_input_dict():
    assert(input_dict({})=="Your dict is ")
    assert(input_dict({"name":"Anurag","number":3,10:10})=="Your dict is name:Anurag number:3 10:10")