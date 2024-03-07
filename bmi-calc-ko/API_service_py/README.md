# Body Mass Index Calculator: Python Activator Service
This is a service that implements a BMI calculator and exposes it to a web interface through the KGrid python activator. The included service.yaml and deployment.yaml files contain more information about the implementation of this service. 
## Endpoints
This service exposes a the following endpoints:
- /bmi
    - Input: width, height, and unit system
    - Output: bmi
- /category
    - Input: bmi
    - Output: weight category
### Request
Input : POST /bmi
```json
{
    "height": 1.8,
    "weight": 70,
    "unit_system": "metric"
}
```
Input : POST /category
```json
{
    "bmi": 19.8
}
```
## Usage
This package is intended to be used within the [KGrid Python Activator](https://github.com/kgrid/python-activator). Please refer to it's documentation to navigate deploying and usage this object within the activator. 

### Run Tests
This module includes tests that verify both the underlying knowledge implementation and the activator service. 
```pytest```
