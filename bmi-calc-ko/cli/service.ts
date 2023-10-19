import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import { get_bmi_category,calculate_bmi } from "../service_deps.ts";

interface Options {
    weight: number;
    height: number;
    metric: boolean;
    bmi:number;
}

await new Command()
  .name("Knowledge object")
  .version("0.0.1")
  .description("Calculates BMI information")

  .command("bmi", "Calculate BMI")
  .option("-w --weight <weight:number>","Weight(lb/kg)",{required: true})
  .option("--height <height:number>","Height(in/m)",{required: true})
  .option("-m --metric [metric:boolean]","Using metric system input",{required: false})
  .action((options:Options) => console.log(calculate_bmi(options.weight,options.height,options.metric)))

  .command("category", "Calculate BMI Category")
  .option("-b --bmi <bmi:number>","BMI",{required: true})
  .action((options:Options) => console.log(get_bmi_category(options.bmi)))
  .parse(Deno.args);