# BMI-KO-1.1.0-javascript

This KO is able to calculate BMI functions. It contains service intended to be used in within the [KGrid deno activator](https://github.com/kgrid/javascript-activator)

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively.

## Structure
*(one service).(one implementation).(depth=0)*

This KO contain only one service which has only one implementation. The implementation is placed in the root of the KO. This is the simplest KO structure. 

KO is structured as

- KO folder 
    - Implementation files (bmi_calculator.ts and http_service.ts)
    - Test files (test_activator.ts and test_knowledge.ts)
    - Service specification (service.yaml)
    - Deployment file (deployment.yaml)
    - Metadata (metadata.json)

Service section of metadata is structured as follows. hasServiceSpecification has a relative path to the root of KO so "hasServiceSpecification":"service.yaml" tells that the service specification file is located at the root of the KO and is called service.yaml.

@id of the implementedBy field tells where the implementation is located so in this case "@id": "." is representing that the implementation is located at the root of KO.
