# BMI-KO-SEPERATE-KNOWLEDGE-JAVASCRIPT

This KO is able to calculate BMI functions. This knowledge object has multiple services which can be used to apply the same underlying knowledge. Each service within this object has its own seperate implementations of this knowledge.

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively. Each service has its own seperate implementations of this knowledge.

## Services Available
- **multi-end-service** A service that allows the knowledge to be run using the [KGrid Deno activator](https://github.com/kgrid/javascript-activator) as an API endpoint. This service exposes two endpoints, one for calculating bmi information from height and weight and another for calculating weight categorization information from bmi.
- **combined-service:**  A service that allows the knowledge to be run using the [KGrid Deno activator](https://github.com/kgrid/javascript-activator) as an API endpoint. This service exposes one endpoint which calculates weight categorization from weight and height.

## Usage
This package is intended to be used within the [KGrid Deno Activator](https://github.com/kgrid/javascript-activator). Please refer to it's documentation to navigate deploying and usage this object within the activator.

### Request
Input : POST
```json
{
    "height": 1.8,
    "weight": 70,
    "unit_system": "metric"
}
```
### Run Tests
This module includes tests that verify both the underlying knowledge implementation and the activator service. Please navigate to the implementation directories to run tests.
```
deno test test_knowledge.ts
deno test test_activator.ts
```

## Structure
*(2 services).(1 implementations).(implementation depth=2)*

This KO contain two different services that each one has only one implementation. The implementations are placed in separate service folders. 

KO is structured as

- KO folder
  - Service 1 folder (combined-service)
        - Implementation files and folders            
        - Deployment file     
      - Service specification
  - Service 2 folder (multi-end-service)
        - Implementation files and folders            
        - Deployment file
      - Service specification
  - Metadata

Service section of the metadata is structured as follows. Since these are two different services, each one has its own service specification file. "hasServiceSpecification":"bmi-activator-service/service.yaml" indicates that the service file of first service is located at ./bmi-activator-service/ and is called service.yaml. "hasServiceSpecification":"bmi-cli-service/help.txt" indicates that the service file of second service is located at ./bmi-cli-service/ and is called help.txt.

"@id": "bmi-activator-service" indicates that the python implementation is located at ./bmi-activator-service/ and "@id": "bmi-cli-service" indicates that the cli service implementation is located at ./bmi-cli-service/.

Refer to the metadata file for additional specs on the organization of the KO 