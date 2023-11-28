# BMI-KO-2.1.2

This KO is able to calculate BMI functions. This knowledge object has multiple services which can be used to apply the same underlying knowledge.

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively.

## Services Available
- **bmi-activator-service:** A service that allows the knowledge to be run using the [KGrid deno activator](https://github.com/kgrid/javascript-activator) as an API endpoint.
- **bmi-cli-service:** A Deno command line interface for bmi calculation


## Structure
*(2 services).(1 implementations).(implementation depth=2)*

This KO contain two different services that each one has only one implementation. The implementations are placed in two different implementation folder each of which is located in separate service folders. This helps organize the code better and be ready to organize KOs with multiple services and multiple implementations.

KO is structured as

- KO folder
  - Service 1 folder (bmi-activator-service)
      - Implementation folder (deno)
        - Implementation files and folders            
        - Deployment file     
      - Service specification
  - Service 2 folder (bmi-cli-service)
      - Implementation folder (basic-cli)
        - Implementation files and folders            
        - Deployment file
      - Service specification
  - Metadata

Service section of the metadata is structured as follows. "hasServiceSpecification":"bmi-activator-service/service.yaml" indicates that the service file of first service is located at ./bmi-activator-service/ and is called service.yaml. "hasServiceSpecification":"bmi-cli-service/help.txt" indicates that the service file of second service is located at ./bmi-cli-service/ and is called help.txt.

"@id": "bmi-activator-service/deno" indicates that the javascript implementation is located at ./bmi-activator-service/deno/ and "@id": "bmi-cli-service/basic-cli" indicates that the cli service implementation is located at ./bmi-cli-service/basic-cli/.

Refer to the metadata file for additional specs on the organization of the KO 