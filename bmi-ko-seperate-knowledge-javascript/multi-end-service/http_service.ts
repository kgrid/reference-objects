// deno-lint-ignore-file no-explicit-any
import { get_bmi_category,calculate_bmi } from "./bmi_calculator.ts";

export function bmi(input:any):string{
    const example={
        weight:1.0,
        height:1.0,
        unit_system:"string"
      }
      validate_type(input,example);
      const bmi=calculate_bmi(input.height,input.weight,input.unit_system==="metric");
      return bmi.toString();
}
export function category(input:any):string{
      const example={
          bmi:1.0,
        }
        validate_type(input,example);
        return get_bmi_category(input.bmi);
  }

function validate_type(input:any,type_obj:any){
    for (const key in type_obj){
          if((typeof input[key]) != (typeof type_obj[key])){
                throw new Error("Invalid type");
          }
    }
}