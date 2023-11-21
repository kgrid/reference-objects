import HelloWorldNPM from "npm:hello-world-npm@1.1.1"
import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

await new Command()
  .name("Hello world object")
  .version("0.0.1")
  .description("Simple multilanguage object")
  .action(() => console.log(HelloWorldNPM.helloWorld()))
  .parse(Deno.args);

