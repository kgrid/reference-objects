import { get_bmi_category,calculate_bmi } from "../service_deps";

export function bmi_category(input:any):string{
    var example={
        weight:1.0,
        height:1.0,
        unit_system:"string"
      }
      validate_type(input,example);
      var bmi=calculate_bmi(input.weight,input.height,input.unit_system!=="imperial");
      return get_bmi_category(bmi);
}

function validate_type(input:any,type_obj:any){
    for (var key in type_obj){
          if((typeof input[key]) != (typeof type_obj[key])){
                throw new Error("Invalid type");
          }
    }
}