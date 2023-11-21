// deno-lint-ignore-file no-explicit-any
export function bmi_category(input:any):string{
    const example={
        weight:1.0,
        height:1.0,
        unit_system:"string"
      }
      validate_type(input,example);
      const bmi=calculate_bmi(input.height,input.weight,input.unit_system==="metric");
      console.log(bmi);
      return get_bmi_category(bmi);
}

function validate_type(input:any,type_obj:any){
    for (const key in type_obj){
          if((typeof input[key]) != (typeof type_obj[key])){
                throw new Error("Invalid type");
          }
    }
}
function calculate_bmi(height:number,weight:number,metric=true):number{
      const scaling_factor:number = metric ? 1 : 703;
      return (weight / (height ** 2)) * scaling_factor;
  }
  
function get_bmi_category(bmi:number):string{
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