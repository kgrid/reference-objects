import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import { get_bmi_category,calculate_bmi } from "../service_deps";
import { parse, stringify } from "https://deno.land/std@0.202.0/csv/mod.ts";
import { readCSV,writeCSV } from "https://deno.land/x/csv/mod.ts";
import { TableLayout } from "https://deno.land/x/cliffy@v1.0.0-rc.3/table/_layout.ts";

export async function batch_process(infile:string,outfile:string){
    try{
        console.log("Started");
        const asd = await Deno.open(infile);
        console.log("Opened file")
        let output=[];
        for await (const row of readCSV(asd)) {
            let tout=[]
            for await(const cell of row) {
                tout.push(cell);
            }
            output.push([calculate_bmi(tout[0],tout[1],tout[2].replace(/[^0-9a-z]/gi, '')=="Metric").toFixed(2)]);
            
        }
        asd.close();
        console.log("parsed input")
        const f = await Deno.open(outfile, {
        write: true,
        create: true,
        truncate: true,
        });

        await writeCSV(f, output);
        
        f.close();
        console.log("Complete");
    }catch(_error){
        console.log(_error);
    }

}
await new Command()
  .name("Knowledge object")
  .version("0.0.1")
  .description("Calculates BMI information")

  .command("bmi", "Calculate BMI")
  .option("-i --input <input:string>","Input File",{required: true})
  .option("-o --output <output:string>","Output File",{required: true})
  .action(async (options) => await batch_process(options.input,options.output))
  .parse(Deno.args);




