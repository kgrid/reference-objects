export function calculate_bmi(height:number,weight:number,metric:boolean=true):number{
    var scaling_factor:number = metric ? 1 : 703;
    return (weight / (height ** 2)) * scaling_factor;
}

export function get_bmi_category(bmi:number):string{
  if (bmi < 18.5){
        return "Underweight"
  }else if( 18.5 <= bmi && bmi < 24.9){
        return "Normal weight"
  }else if( 25 <= bmi && bmi< 29.9){
        return "Overweight"
  }else{
        return "Obese"
  }
}

