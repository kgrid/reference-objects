import { assertEquals} from "https://deno.land/std@0.202.0/assert/mod.ts";
import { batch_process} from "../batch";
import { readCSV,writeCSV } from "https://deno.land/x/csv/mod.ts";
//import { readCSV } from "https://deno.land/x/csv/mod.ts";
Deno.test("test bmi calculation", async ()=>{
    await batch_process("./batch_client/tests/test.csv","./batch_client/tests/out.csv")
   const asd = await Deno.open("./batch_client/tests/out.csv");
    console.log("Opened file")
    const list=[19.83,29.22,43.04,31.11,22.80,17.16];
    let i=0;
    for await (const row of readCSV(asd)) {
        for await(const cell of row) {
            console.log(cell+" "+i);
            assertEquals(Number(cell),list[i])
        }
        i++;
    }
    asd.close()
    Deno.removeSync("./batch_client/tests/out.csv");
});