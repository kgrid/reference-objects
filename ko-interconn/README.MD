# BMI-KO-1.1.1-python

This KO uses inter-KO calling to calculate BMI functions without implementing the knowledge. It imports the knowledge from another KO (BMICalculator) located at /bmi-calc-ko.

## Underlying Knowledge
There is no knowledge implemented in this KO. it uses  calculate_bmi,get_bmi_category functions from python_bmi_web_service package and bmi module of the BMICalculator KO.

## Services Available
- **python-activaotr:** A service that allows the knowledge to be run using the [KGrid python activator](https://github.com/kgrid/python-activator) as an API endpoint.

This service has a single implementation. 

## usage
When using this KO by itself the python_bmi_web_service of bmi-calc-ko KO ( id:BMICalculator) needs to be manually installed using 'pip install' in the workspace. Once it is installed, then the import command in the implementation of the service would work. You can run "pytest" in the implementation folder (/ko-interconn/python-service) to test if the service works. 

When using this KO with the Python activator, the bmi-calc-ko KO ( id:BMICalculator) needs to be activated as well. The order in which KOs are listed on the manifest and installed is important. The KO which is dependant on another one must be installed later. When the Python activator installs KOs as part of the activation process, packages within the KOs will be installed automatically in the system's temp location. This enables inter-ko calling between KOs that are activated using the activator.
 

## Structure
*(1 services).(1 implementations).(implementation depth=1)*

This KOs only one service which has only one implementation. But the implementation is placed in a service folder which helps to better organize the code. 

KO is structured as

- KO folder   
    - service folder
        - implementation files and folders
        - service specification
        - deployment file
    - metadata 

