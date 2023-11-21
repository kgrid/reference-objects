
def input_primative(var):
    return "Your input is " + str(var)


def input_list(list_input):
    str_list = [str(i) for i in list_input]
    return "Your array is " + " ".join(str_list)


def input_dict(dict_input):
    output="Your dict is "
    output+=" ".join([str(key)+":"+str(value) for key,value in dict_input.items()])
    return output

