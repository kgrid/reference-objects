This KO contain only one service which has only one implementation. The implementation is placed in the root of the KO. This is the simplest KO structure. 

KO is structured as

- KO folder 
    - implementation folder (python_activator_bmi_calc)
        - implementation files (bmi_calculator.py and module.py)
    - service specification (service.yaml)
    - deployment file (deployment.yaml)
    - metadata (metadata.json)

Service section of metadata is structured as follows. hasServiceSpecification has a relative path to the root of KO so "hasServiceSpecification":"service.yaml" tells that the service specification file is located at the root of the KO and is called service.yaml.

@id of the implementedBy field tells where the implementation is located so in this case "@id": "." is representing that the implementation is located at the root of KO.
