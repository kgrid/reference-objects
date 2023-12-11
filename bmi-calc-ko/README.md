# Basic BMI calculator module
This is an expirimental KO based off of a BMI calculator. This knowledge object has multiple services which can be used to apply the same underlying knowledge. Each service contains a readme which describes its usage and also one or more implementations.

## Run tests
Deno tests can be run using ```deno test {test_file}```. Python tests files can be run using ```pytest {test_file}```.

## Underlying Knowledge
There are two functions inherent to this knowledge object: calculate_bmi and get_bmi_category. These functions implement the underlying knowledge used to calculate bmi values and to categorize weight classes based on bmi respectively.
## Services Available
- **API_service_js:** A service that allows the knowledge to be run using the [KGrid deno activator](https://github.com/kgrid/javascript-activator) as an API endpoint.
- **API_service_py:** A service that allows the knowledge to be run using the [KGrid python activator](https://github.com/kgrid/python-activator) as an API endpoint.
- **batch_client:** A Deno command line interface that processes batch data in the form of CSV
- **cli:** A Deno command line interface for bmi calculation
- **web_app:** A standalone service that exposes POST endpoints for bmi calculation

Please refer to the individual services for additional details

## Knowledge Object Layout
```
./bmi-calc-ko
├── API_service_js         (Service)
├── API_service_py         (Service)
├── batch_client           (Service)
├── cli                    (Service)
├── knowledge              (Knowledge)
├── python-bmi-web-service (Service)
└── web_app                (Service)
```
