from javascript import require
hello = require("hello-world-npm")

def endpoint(input):
    return hello.helloWorld()