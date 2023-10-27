import pytest
from hello_world.src import endpoint
def test_hello_world():
    assert(endpoint(10)=="Hello World NPM")