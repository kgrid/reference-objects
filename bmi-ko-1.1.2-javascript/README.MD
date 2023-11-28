# BMI-KO-1.1.2-javascript

This KO is able to calculate BMI functions. 

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively.

## Services Available
- **bmi-activator-service:** A service that allows the knowledge to be run using the [KGrid deno activator](https://github.com/kgrid/javascript-activator) as an API endpoint.

This service has a single implementation. 

## Structure
*(1 services).(1 implementations).(implementation depth=2)*

This KO, similar to the previous ones, contain only one service which has only one implementation. But, the implementation is placed in an implementation folder inside a service folder which helps to better organize the code and get ready for KOs with multiple implementation of each service. 

KO is structured as

- KO folder
  - Service folder (bmi-activator-service)    
      - Implementation folder (deno)
        - Implementation files and folders            
        - Deployment file
      - Service specification
  - Metadata

Service section of the metadata is structured as follows. "hasServiceSpecification":"bmi-activator-service/service.yaml" tells that the service file is located at ./bmi-activator-service/ for JavaScript implementation

"@id": "bmi-activator-service/deno" indicates that the implementation is located at ./bmi-activator-service/deno/

Refer to the metadata file for additional specs on the organization of the KO 