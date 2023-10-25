import { get_bmi_category,calculate_bmi } from "../service_deps.ts";
export function calculate(){
    const weight= document.getElementById("weight").value;
    const height= document.getElementById("hieght").value;
    const metric= document.getElementById("unit").value==="metric";
    document.getElementById("result").value = calculate_bmi(weight,height,metric);
}