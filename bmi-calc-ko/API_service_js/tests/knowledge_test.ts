import { calculate_bmi,get_bmi_category} from "../../knowledge/bmi_calculator.ts";
import { assertEquals} from "https://deno.land/std@0.202.0/assert/mod.ts";

Deno.test("knowledge - test bmi calculation", ()=>{
  
  assertEquals(calculate_bmi(1.82,64,true),19.32133800265668);
});

Deno.test("knowledge - test bmi category", ()=>{
  
  assertEquals(get_bmi_category(20),"Normal weight");
});