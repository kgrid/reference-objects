# Body Mass Index Calculator: Batch Processing Service
This is a service that implements a BMI calculator and exposes it via a command line interface. It takes in a CSV file which encodes for patient information and returns a CSV file wiht the coordesponding BMI information. 

## Usage
Run all commands from the service directory ("bmi-calc-ko/batch_client")
### Run
````
    deno run batch.ts --help                                                //Get cmdline interface help
    deno run batch.ts {Input_file} {output_file} --allow-read --allow-write //Run Program
    deno run test.ts --allow-read --allow-write                             //Run Tests
````
