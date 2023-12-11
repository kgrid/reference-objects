import { assertThrows} from "https://deno.land/std@0.202.0/assert/mod.ts";
import { bmi,category} from "./http_service.ts";

Deno.test("test bmi calculation", ()=>{
  const input ={
    height:1.82,
    weight:64,
    unit_system:"metric"
  }
  bmi(input);
});

Deno.test("missing arguments", ()=>{
  const input ={
    height:1.82,
    unit_system:"metric"
  }
  assertThrows(()=>bmi(input));
});
Deno.test("Incorrect Input types bmi calc", ()=>{
  const input ={
    height:1.82,
    weight:"hello",
    unit_system:"metric"
  }
  assertThrows(()=>bmi(input));
});

Deno.test("test category calculation", ()=>{
  const input ={
    bmi:40
  }
  category(input);
});

Deno.test("missing arguments in category", ()=>{
  const input ={
    height:1.82,
    unit_system:"metric"
  }
  assertThrows(()=>category(input));
});
Deno.test("Incorrect Input types bmi category calc", ()=>{
  const input ={
    height:1.82,
    weight:"hello",
    unit_system:"metric"
  }
  assertThrows(()=>category(input));
});