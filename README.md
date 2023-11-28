# Reference Knowledge Objects (KOs)
These objects are Kgrid 2 reference knowledge objects made for the purpose of 
- verifying new activator implementations 
- assisting the development of new KOs
- showcasing other services like cli, web service, activator
- demonstrating and including supporting material to different ways of trying out the knowledge and services

Each KO may have different types of services implemented that could be used to utilize knowledge. These services include API (activated using activators), CLI and Stand-alone Web Services. This document shows how each one of these services could be used to utilize knowledge.

The knowledge and the service implemented in a KO could also be applied using Native ways of accessing and executing code artifacts and packages. This document also shows those other native ways of using KOs.

## Activate API services in activators
A collection of knowledge objects, that have API services implemented, could be run (activated) simultaneously within any specification compliant activator. To activate the repository, clone it into your collection path directory.

Knowledge objects need to be activated by their corresponding activator. Currently, reference object implementations have been created for the [python](https://github.com/kgrid/python-activator) and [javascript](https://github.com/kgrid/javascript-activator) activators. A [Local Manifest file](https://github.com/kgrid/reference-objects/blob/main/local_manifest.json) is provided in this repository to help loading these KOs from a cloned location. Please follow the instructions on these pages to install and run the activators. Simple steps to activated KOs in this repository include:

1. clone this repository
    ```
    git clone https://github.com/kgrid/reference-objects.git
    ```
2. run the activator of interest and give the path to the cloned repository as the collection path. for example:
    ```
    ORG_KGRID_PYTHON_ACTIVATOR_COLLECTION_PATH=/home/code/reference-objects  uvicorn python_activator.api:app --port=8000
    ```
    or
    ```
    ORG_KGRID_JAVASCRIPT_ACTIVATOR_COLLECTION_PATH=/home/code/reference-objects deno run --allow-net --allow-env --allow-read --allow-write --allow-run --unstable -A  api.ts
    ```

You can also try out our deployed [python](https://python-activator-06fae3ea8e83.herokuapp.com/docs) and [javascript](https://javascript-activator-3a6e3a45c6f0.herokuapp.com/doc) activators.

Once activator is running with these KOs on the server you can
- access documentation and list of activator endpoints at /doc
- access the list of KOs and check their activation status at /kos 
- access the list of activated endpoints at /endpoints
- try out each activated KO's endpoints in openapi and swagger editor using the documentation link provided at /kos (if the KO has a service specification file)
- access activated endpoints via an http Post requests to /endpoints/{ko id}/{endpoint id} with a json body to run the function behind the endpoint.

## Knowledge objects structural details
The following Knowledge Objects (KOs) showcase diverse structures, to demonstrate the flexibility of activators. Implementation of services may be placed in the root of Knowledge Objects (KOs) or organized within service folders, each of which may further contain implementation folders. This allows for a spectrum of complexity, from simplest KO, when there is only one service and one implementation, to more complicated cases with multiple services and potentially multiple implementations of the same service.

## bmi-ko naming scheme
For specific KOs in this list that showcase structural variations, naming schema represents the structure of KO and how services and their implementations could be placed inside a KO folder.

KO names that has the following combination bmi-ko.{Services}.{Implementations}.{Depth} represent 
- Services: number of services
- Implementations: number of implementations per service.
- Depth: having an implementation in the base of the ko is 0. Having the implementaiton in a folder is 1. Having the implementation within a folder, within a service folder is 2. 

### bmi-ko-1.1.0-Javascript and bmi-ko-1.1.0-python
These KOs contain only one service which has only one implementation. The implementation is placed in the root of the KO. This is the simplest KO structure. 

KO is structured as

- KO folder 
    - implementation files and folders
    - service specification
    - deployment file
    - metadata  

Service section of metadata is structured as follows. hasServiceSpecification has a relative path to the root of KO so "hasServiceSpecification":"service.yaml" tells that the service specification file is located at the root of the KO and is called service.yaml.

@id of the implementedBy field tells where the implementation is located so in this case "@id": "." is representing that the implementation is located at the root of KO.

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": ".",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "javascript"            
            ]
          }
        ]
  
      }
    ]
    ```
and 

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": ".",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "python"            
            ]
          }
        ]
  
      }
    ]
    ```

### bmi-ko-1.1.1-Javascript and bmi-ko-1.1.1-python
These two KOs, similar to the previouse ones, contain only one service which has only one implementation. But the implementation is placed in a service folder which helps to better organize the code. 

KO is structured as

- KO folder   
    - service folder
        - implementation files and folders
        - service specification
        - deployment file
    - metadata 

Service section of the metadata is structured as follows. "hasServiceSpecification":"deno-activator/service.yaml" tells that the service file is located at ./deno-activator/ for JavaScript implementation and "hasServiceSpecification":"python-activator/service.yaml" tells that it is located at ./python-activator/ folder and in both cases it is called service.yaml.

@id of the implementedBy field tells where the implementation is located so "@id": "deno-activator" indicates that the implementation is located at ./deno-activator/ and "@id": "python-activator" indicates that it is located at ./python-activator/.

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"deno-activator/service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "deno-activator",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "javascript"            
            ]
          }
        ]
  
      }
    ]
    ```
or

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"python-activator/service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "python-activator",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "python"            
            ]
          }
        ]
  
      }
    ]
    ```

### bmi-ko-1.1.2-Javascript and bmi-ko-1.1.2-python
These two KOs, similar to the previous ones, contain only one service which has only one implementation. But, the implementation is placed in an implementation folder inside a service folder which helps to better organize the code and get ready for KOs with multiple implementation of each service. 

KO is structured as

- KO folder   
    - service folder
        - implementation folder
            - implementation files and folders            
            - deployment file
        - service specification
    - metadata

Service section of the metadata is structured as follows. "hasServiceSpecification":"bmi-activator-service/service.yaml" tells that the service file is located at ./bmi-activator-service/ for JavaScript implementation and "hasServiceSpecification":"bmi-activator-service/service.yaml" tells that it is located at ./bmi-activator-service/ and in both cases it is called service.yaml.

"@id": "bmi-activator-service/deno" indicates that the implementation is located at ./bmi-activator-service/deno/ and "@id": "bmi-activator-service/python" indicates that it is located at ./bmi-activator-service/python/.

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"bmi-activator-service/service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "bmi-activator-service/deno",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "javascript"            
            ]
          }
        ]
  
      }
    ]
    ```
or

    ```
    "koio:hasService":[      
    {
      "@type":"API",
      "hasServiceSpecification":"bmi-activator-service/service.yaml",
      "dependsOn":"bmiFunction",
      "implementedBy" : [
        {
          "@id": "bmi-activator-service/python",
          "@type":[
            "https://kgrid.org/specs/activationSpec.html#object",
            "python"            
          ]
        }
      ]

    }
  ]
    ```


### bmi-ko-1.2.0
This KO contain one service that has two implementations (of the same service). The implementations are placed in separate implementation folders in the root of KO. 

KO is structured as

- KO folder   
    - implementation 1 folder
        - implementation files and folders            
        - deployment file
    - implementation 2 folder
        - implementation files and folders            
        - deployment file
    - service specification
    - metadata

Service section of the metadata is structured as follows.  "hasServiceSpecification":"service.yaml" indicates that the service file is located at the root of KO and it is called service.yaml.

"@id": "python-activator" indicates that the python implementation is located at ./python-activator/ and "@id": "deno-activator" indicates that the JavaScript implementation is located at ./deno-activator/.

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "python-activator",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "python"            
            ]
          },
          {
            "@id": "deno-activator",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "javascript"            
            ]
          }
        ]
  
      }
    ]
    ```

### bmi-ko-1.2.1
This KO contain one service that has two implementations (of the same service). The implementations are placed in separate implementation folders inside a service folder. 

KO is structured as

- KO folder 
    -service folder  
      - implementation 1 folder
          - implementation files and folders            
          - deployment file
      - implementation 2 folder
          - implementation files and folders            
          - deployment file
      - service specification
    - metadata

Service section of the metadata is structured as follows. "hasServiceSpecification":"bmi-activator-service/service.yaml" indicates that the service file is located at ./bmi-activator-service/ and it is called service.yaml.

"@id": "bmi-activator-service/python" indicates that the python implementation is located at ./bmi-activator-service/python/ and "@id": "bmi-activator-service/deno" indicates that the JavaScript implementation is located at ./bmi-activator-service/deno/.

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"bmi-activator-service/service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "bmi-activator-service/python",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "python"            
            ]
          },
          {
            "@id": "bmi-activator-service/deno",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "javascript"            
            ]
          }
        ]
  
      }
    ]
    ```

### bmi-ko-2.1.1
This KO contain two different services that each one has only one implementation. The implementations are placed in separate service folders. 

KO is structured as

- KO folder
  - service 1 folder  
      - implementation files and folders            
      - deployment file
      - service specification
  - service 2 folder  
      - implementation files and folders            
      - deployment file
      - service specification
  - metadata

Service section of the metadata is structured as follows. Since these are two different services, each one has its own service specification file. "hasServiceSpecification":"bmi-activator-service/service.yaml" indicates that the service file of first service is located at ./bmi-activator-service/ and is called service.yaml. "hasServiceSpecification":"bmi-cli-service/help.txt" indicates that the service file of second service is located at ./bmi-cli-service/ and is called help.txt.

"@id": "bmi-activator-service" indicates that the python implementation is located at ./bmi-activator-service/ and "@id": "bmi-cli-service" indicates that the cli service implementation is located at ./bmi-cli-service/.

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"bmi-activator-service/service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "bmi-activator-service",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "javascript"            
            ]
          }
        ]
  
      },
      {
        "@type":"cli",
        "hasServiceSpecification":"bmi-cli-service/help.txt",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "bmi-cli-service",
            "@type":"cli"
          }
        ]
  
      }
    ]
    ```

### bmi-ko-2.1.2
This KO contain two different services that each one has only one implementation. The implementations are placed in two different implementation folder each of which is located in separate service folders. This helps organize the code better and be ready to organize KOs with multiple services and multiple implementations.

KO is structured as

- KO folder
  - service 1 folder  
      - implementation folder
        - implementation files and folders            
        - deployment file
      - service specification
  - service 2 folder  
      - implementation folder
        - implementation files and folders            
        - deployment file
      - service specification
  - metadata

Service section of the metadata is structured as follows. "hasServiceSpecification":"bmi-activator-service/service.yaml" indicates that the service file of first service is located at ./bmi-activator-service/ and is called service.yaml. "hasServiceSpecification":"bmi-cli-service/help.txt" indicates that the service file of second service is located at ./bmi-cli-service/ and is called help.txt.

"@id": "bmi-activator-service/deno" indicates that the javascript implementation is located at ./bmi-activator-service/deno/ and "@id": "bmi-cli-service/basic-cli" indicates that the cli service implementation is located at ./bmi-cli-service/basic-cli/.

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"bmi-activator-service/service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "bmi-activator-service/deno",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "javascript"            
            ]
          }
        ]
  
      },
      {
        "@type":"cli",
        "hasServiceSpecification":"bmi-cli-service/help.txt",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "bmi-cli-service/basic-cli",
            "@type":"cli"
          }
        ]
  
      }
    ]

### bmi-ko-2.2.2
This KO contain two different services that each one has two implementations. The implementations are organized in two different service folders and each one has two different implementation folders that contain the two implementations of the same service. This helps organize the code for KOs with multiple services and multiple implementations.

KO is structured as

- KO folder
  - service 1 folder  
      - implementation 1 folder of service 1
        - implementation files and folders            
        - deployment file      
      - implementation 2 folder of service 1
        - implementation files and folders            
        - deployment file
      - service specification
  - service 2 folder  
      - implementation 1 folder of service 2
        - implementation files and folders            
        - deployment file
      - implementation 2 folder of service 2
        - implementation files and folders            
        - deployment file
      - service specification
  - metadata

Service section of the metadata is structured as follows. Since these are two different services, each one has its own service specification file. Also since each service has two different implementations there are two implementation folders in each service folder.  "hasServiceSpecification":"bmi-activator-service/service.yaml" indicates that the service file of first service is located at ./bmi-activator-service/ and is called service.yaml. "hasServiceSpecification":"bmi-cli-service/help.txt" indicates that the service file of second service is located at ./bmi-cli-service/ and is called help.txt.

"@id": "bmi-activator-service/python" indicates that the python implementation of first service is located at ./bmi-activator-service/python/ and "@id": "bmi-activator-service/deno" indicates that the JavaScript implementation of first service is located at ./bmi-activator-service/deno/.  "@id": "bmi-cli-service/basic-cli" indicates that the first implementation of the second service is located at ./bmi-cli-service/basic-cli/ and "@id": "bmi-cli-service/batch-cli" indicates that the second implementation of the second service is located at ./bmi-cli-service/batch-cli/.

    ```
    "koio:hasService":[      
      {
        "@type":"API",
        "hasServiceSpecification":"bmi-activator-service/service.yaml",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "bmi-activator-service/python",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "python"            
            ]
          },
          {
            "@id": "bmi-activator-service/deno",
            "@type":[
              "https://kgrid.org/specs/activationSpec.html#object",
              "javascript"            
            ]
          }
        ]
  
      },
      {
        "@type":"cli",
        "hasServiceSpecification":"bmi-cli-service/help.txt",
        "dependsOn":"bmiFunction",
        "implementedBy" : [
          {
            "@id": "bmi-cli-service/basic-cli",
            "@type":"cli"
          },
          {
            "@id": "bmi-cli-service/batch-cli",
            "@type":"cli"
          }
        ]
  
      }
    ]   
    ```


