# BMI-KO-MULTI-SERVICE-1

This KO is able to calculate BMI functions. This knowledge object has multiple services which can be used to apply the same underlying knowledge.

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively.

## Services Available
- **bmi-activator-service:** A service that allows the knowledge to be run using the [KGrid deno activator](https://github.com/kgrid/javascript-activator) as an API endpoint.
- **bmi-cli-service:** A Deno command line interface for bmi calculation


## Structure
*(2 services).(1 implementations).(implementation depth=1)*

This KO contain two different services that each one has only one implementation. The implementations are placed in separate service folders. 

KO is structured as

- KO folder
  - Service 1 folder (bmi-activator-service)
        - Implementation files and folders            
        - Deployment file     
      - Service specification
  - Service 2 folder (bmi-cli-service)
        - Implementation files and folders            
        - Deployment file
      - Service specification
  - Metadata

Service section of the metadata is structured as follows. Since these are two different services, each one has its own service specification file. "hasServiceSpecification":"bmi-activator-service/service.yaml" indicates that the service file of first service is located at ./bmi-activator-service/ and is called service.yaml. "hasServiceSpecification":"bmi-cli-service/help.txt" indicates that the service file of second service is located at ./bmi-cli-service/ and is called help.txt.

"@id": "bmi-activator-service" indicates that the python implementation is located at ./bmi-activator-service/ and "@id": "bmi-cli-service" indicates that the cli service implementation is located at ./bmi-cli-service/.

Refer to the metadata file for additional specs on the organization of the KO 