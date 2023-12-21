import { assertEquals} from "https://deno.land/std@0.202.0/assert/mod.ts";
import { batch_process} from "../batch.ts";
import { readCSV,writeCSV } from "https://deno.land/x/csv/mod.ts";
import * as path from 'https://deno.land/std@0.102.0/path/mod.ts';
Deno.test("batch - test bmi calculation", async ()=>{
    Deno.chdir(path.dirname(path.fromFileUrl(Deno.mainModule)));
    const output_file=await Deno.makeTempFile();
    await batch_process("./test.csv",output_file);
    const asd = await Deno.open(output_file);
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
    asd.close();
});