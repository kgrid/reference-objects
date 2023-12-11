# BMI_KO_SIMPLE_PYTHON

This KO is able to calculate BMI functions. It contains service intended to be used in within the [KGrid python activator](https://github.com/kgrid/python-activator)

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively.

## Usage
This package is intended to be used within the [KGrid Python Activator](https://github.com/kgrid/python-activator). Please refer to it's documentation to navigate deploying and usage this object within the activator. It takes in weight, height, and unit system input through a post request and returns the corresponding BMI category.

### Request
Input : POST
```json
{
    "height": 175,
    "weight": 70,
    "unit_system": "imperial"
}
```

### Run Tests
This module includes tests that verify both the underlying knowledge implementation and the activator service. Run this command from within the tests folder.
```pytest test.py```

## Structure
*(one service).(one implementation).(depth=0)*

This KO contain only one service which has only one implementation. The implementation is placed in the root of the KO. This is the simplest KO structure. 

KO is structured as

- KO folder 
    - Implementation files (bmi_calculator.py and module.py)
    - Test files (test.py)
    - Service specification (service.yaml)
    - Deployment file (deployment.yaml)
    - Metadata (metadata.json)

Service section of metadata is structured as follows. hasServiceSpecification has a relative path to the root of KO so "hasServiceSpecification":"service.yaml" tells that the service specification file is located at the root of the KO and is called service.yaml.

@id of the implementedBy field tells where the implementation is located so in this case "@id": "." is representing that the implementation is located at the root of KO.