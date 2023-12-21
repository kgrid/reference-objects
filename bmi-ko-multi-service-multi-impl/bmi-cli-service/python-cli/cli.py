import argparse
def calculate_bmi(weight:float,height:float,metric:bool):
    scaling_factor = 703 if not metric else 1
    return (weight / (height ** 2)) * scaling_factor


def get_bmi_category(bmi:float):
    bmi=bmi
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 24.9:
        return "Normal weight"
    elif 25 <= bmi < 29.9:
        return "Overweight"
    else:
        return "Obese"

if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog='PROG')
    subparsers = parser.add_subparsers(help='sub-command help')

    # create the parser for the "bmi" command
    parser_b = subparsers.add_parser('bmi', help='bmi help')
    parser_b.add_argument('weight', type=float, help='weight (lb/kg)')
    parser_b.add_argument('height', type=float, help='height (in/m)')
    parser_b.add_argument('-m', required=False,default=False,action='store_true', help='flag for using metric input')

    # create the parser for the "" command
    parser_c = subparsers.add_parser('category', help='category help')
    parser_c.add_argument('bmi', type=float, help='BMI')        
    args = parser.parse_args()
    if hasattr(args,"weight"):
        print(calculate_bmi(args.height,args.weight,args.m))
    elif hasattr(args,"bmi"):
        print(get_bmi_category(args.bmi))
    
        