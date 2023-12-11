# BMI-KO-2.2.2

This KO is able to calculate BMI functions. This knowledge object has multiple services which can be used to apply the same underlying knowledge.

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively.

## Services Available
- **bmi-activator-service:** A service that allows the knowledge to be run using the [KGrid deno activator](https://github.com/kgrid/javascript-activator) or a [KGrid python activator](https://github.com/kgrid/python-activator) as an API endpoint.
- **bmi-cli-service:** A Deno command line interface for bmi calculation

Each service has two different implementations, one in Python and another in Javascript. 

## Structure
*(2 services).(2 implementations).(implementation depth=2)*

This KO contain two different services that each one has only one implementation. The implementations are placed in two different implementation folder each of which is located in separate service folders. This helps organize the code better and be ready to organize KOs with multiple services and multiple implementations.

KO is structured as

- KO folder
  - Service 1 folder (bmi-activator-service)
      - Implementation 1 folder (deno)
        - Implementation files and folders            
        - Deployment file      
      - Implementation 2 folder (python)
        - Implementation files and folders            
        - Deployment file
      - Service specification
  - Service 2 folder (bmi-cli-service)
      - Implementation 1 folder (deno-cli)
        - Implementation files and folders            
        - Deployment file
      - Implementation 2 folder (python-cli)
        - Implementation files and folders            
        - Deployment file
      - Service specification
  - Metadata

Service section of the metadata is structured as follows. Since these are two different services, each one has its own service specification file. Also since each service has two different implementations there are two implementation folders in each service folder.  "hasServiceSpecification":"bmi-activator-service/service.yaml" indicates that the service file of first service is located at ./bmi-activator-service/ and is called service.yaml. "hasServiceSpecification":"bmi-cli-service/help.txt" indicates that the service file of second service is located at ./bmi-cli-service/ and is called help.txt.

"@id": "bmi-activator-service/python" indicates that the python implementation of first service is located at ./bmi-activator-service/python/ and "@id": "bmi-activator-service/deno" indicates that the JavaScript implementation of first service is located at ./bmi-activator-service/deno/.  "@id": "bmi-cli-service/basic-cli" indicates that the first implementation of the second service is located at ./bmi-cli-service/basic-cli/ and "@id": "bmi-cli-service/batch-cli" indicates that the second implementation of the second service is located at ./bmi-cli-service/batch-cli/.

Refer to the metadata file for additional specs on the organization of the KO 