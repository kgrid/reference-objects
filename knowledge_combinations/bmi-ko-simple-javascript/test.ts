import { assertThrows} from "https://deno.land/std@0.202.0/assert/mod.ts";
import { assertEquals} from "https://deno.land/std@0.202.0/assert/mod.ts";
import { bmi_category} from "./http_service.ts";
import { calculate_bmi,get_bmi_category} from "./http_service.ts";

Deno.test("test bmi calculation", ()=>{
  const input ={
    height:1.82,
    weight:64,
    unit_system:"metric"
  }
  bmi_category(input);
});

Deno.test("missing arguments", ()=>{
  const input ={
    height:1.82,
    unit_system:"metric"
  }
  assertThrows(()=>bmi_category(input));
});
Deno.test("Incorrect Input types bmi calc", ()=>{
  const input ={
    height:1.82,
    weight:"hello",
    unit_system:"metric"
  }
  assertThrows(()=>bmi_category(input));
});

Deno.test("test bmi calculation", ()=>{
    assertEquals(calculate_bmi(1.82,64,true), 64/(1.82**2));
  });
  Deno.test("test bmi calculation imperial", ()=>{
    assertEquals(calculate_bmi(68,150,false), 150/(68**2)*703);
  });
  Deno.test("test category calc", ()=>{
    assertEquals(get_bmi_category(20.5),"Normal weight");
  });