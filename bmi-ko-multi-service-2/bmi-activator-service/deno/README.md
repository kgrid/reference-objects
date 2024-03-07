# Body Mass Index Calculator: Deno Activator Service
This is a service that implements a BMI calculator and exposes it to a web interface through the KGrid deno activator. The included service.yaml and deployment.yaml files contain more information about the implementation of this service. This service depends on knowledge which is collectively shared across different services listed in service_deps.ts

## Usage
This package is intended to be used within the [KGrid Deno Activator](https://github.com/kgrid/javascript-activator). Please refer to it's documentation to navigate deploying and usage this object within the activator. 

### Run Tests
This module includes tests that verify both the underlying knowledge implementation and the activator service.
```deno test ```
