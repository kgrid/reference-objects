# BMI-KO-SINGLE-SERVICE-PYTHON-2

This KO is able to calculate BMI functions. 

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively.

## Services Available
- **bmi-activator-service:** A service that allows the knowledge to be run using the [KGrid python activator](https://github.com/kgrid/python-activator) as an API endpoint.

This service has a single implementation. 

## Structure
*(1 services).(1 implementations).(implementation depth=1)*

This KOs, similar to the previous ones, contain only one service which has only one implementation. But the implementation is placed in a service folder which helps to better organize the code. 

KO is structured as

- KO folder
    - Implementation folder (python-activator)
        - Implementation files and folders            
        - Deployment file
    - Service specification
    - Metadata

Service section of the metadata is structured as follows. "hasServiceSpecification":"python-activator/service.yaml" tells that the service file is located at ./python-activator/ for JavaScript implementation at service.yaml.

@id of the implementedBy field tells where the implementation is located so "@id": "python-activator" indicates that the implementation is located at ./python-activator/.

Refer to the metadata file for additional specs on the organization of the KO 