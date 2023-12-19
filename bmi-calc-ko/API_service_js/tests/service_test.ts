import { assertThrows} from "https://deno.land/std@0.202.0/assert/mod.ts";
import { bmi_category} from "../http_service.ts";

Deno.test("service - test bmi calculation", ()=>{
  const input ={
    height:1.82,
    weight:64,
    unit_system:"metric"
  }
  bmi_category(input);
});

Deno.test("service - missing arguments", ()=>{
  const input ={
    height:1.82,
    unit_system:"metric"
  }
  assertThrows(()=>bmi_category(input));
});
Deno.test("service - Incorrect Input types bmi calc", ()=>{
  const input ={
    height:1.82,
    weight:"hello",
    unit_system:"metric"
  }
  assertThrows(()=>bmi_category(input));
});