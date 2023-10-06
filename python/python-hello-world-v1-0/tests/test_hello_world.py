from python_hello_world_v1_0.src import func

def test_output():
    assert(func({})=="Hello World")
def test_with_input():
    input={"name": "Jim"}
    assert(func(input)=="Hello World")