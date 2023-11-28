# BMI-KO-1.2.2

This KO is able to calculate BMI functions. 

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively.

## Services Available
- **bmi-activator-service:** A service that allows the knowledge to be run using the [KGrid deno activator](https://github.com/kgrid/javascript-activator) or a [KGrid python activator](https://github.com/kgrid/python-activator) as an API endpoint.

This service has two different implementations, one in Python and another in Javascript. 

## Structure
*(1 services).(2 implementations).(implementation depth=2)*

This KO contain one service that has two implementations (of the same service). The implementations are placed in separate implementation folders inside a service folder. 

KO is structured as

- KO folder
  - Service folder (bmi-activator-service)
      - Implementation 1 folder (deno)
        - Implementation files and folders            
        - Deployment file      
      - Implementation 2 folder (python)
        - Implementation files and folders            
        - Deployment file
      - Service specification
  - Metadata

Service section of the metadata is structured as follows. "hasServiceSpecification":"bmi-activator-service/service.yaml" indicates that the service file is located at ./bmi-activator-service/ and it is called service.yaml.

"@id": "bmi-activator-service/python" indicates that the python implementation is located at ./bmi-activator-service/python/ and "@id": "bmi-activator-service/deno" indicates that the JavaScript implementation is located at ./bmi-activator-service/deno/.

Refer to the metadata file for additional specs on the organization of the KO 