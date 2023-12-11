# Body Mass Index Calculator: Standalone Web Server
This is a service that implements a BMI calculator and exposes it via a POST request on the local network. 

## Usage
Run all commands from the service directory ("bmi-calc-ko/web_app")
### Request Format
```
POST localhost:8080
application/json
{
    weight:50,
    height:1.8,
    unit:metric
}
```
### Run
The follow command runs the web server and allows it to read to and write files.
````
    deno run server.ts --allow-net --allow-env --allow-read
````
