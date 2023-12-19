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

## Service Testing
Most knowledge object services have associated test files. Most of these files follow a common pattern, being indicated by test_{specific}.{file}. Most of these files are either deno (written in typescript) or python files and can be run by ```deno test {test_file}``` or ```pytest {test_file}``` respectively. For additional information specific to a service, refer to the relavant KO readme file.

## Use CLI services
There are a variety of knowledge object within this repository which contain command line interfaces that implement the underlying knowledge. These services are mostly denoted by the 'cli' service name but also can be found as a 'batch_service'.  In general, these services can be launch by typing the appropiate interpretor(deno run or python3) and the target file. Each implementations of these services could have a unique way of activation, so please refer to the service's readme and help menu for addition information. Here is an example for bmi-calc-ko/cli:
```
deno run cli.ts --help
```
## Use KOs with stand-alone web service
Some knowledge objects also contain services which are web services that can be launched independently of an activator. We can find an example of this type of service in bmi-calc-ko/web_service. These services can be configured very unqiuely, so please refer to the specific services for more details. 

## Other native ways of using KOs
  - using python command (with pip install . or poetry install)
  - using uvicorn api:app
  - add test

## Knowledge Service Table
| KO          | Purpose      | Expirimental | Python Activator | Javascript Activator | Command Line Interface | Batch Processing Interface | Standalone Web Service | Shared Knowledge | KO 2.0 |
| ----------- | ------------ | ------------ | ---------------- | -------------------- | ---------------------- | -------------------------- | ---------------------- | ---------------- | ------ |
| bmi-calc-ko | All services | ✅            | ✅                | ✅                    | ✅                      | ✅                          | ✅                      | ✅                | ✅      |
## Knowledge objects structural details
The following Knowledge Objects (KOs) showcase diverse structures, to demonstrate the flexibility of activators. Implementation of services may be placed in the root of Knowledge Objects (KOs) or organized within service folders, each of which may further contain implementation folders. This allows for a spectrum of complexity, from simplest KO, when there is only one service and one implementation, to more complicated cases with multiple services and potentially multiple implementations of the same service.

## bmi-ko naming scheme
For specific KOs in this list that showcase structural variations, naming schema represents the structure of KO and how services and their implementations could be placed inside a KO folder.

KO names that has the following combination bmi-ko.{Services}.{Implementations}.{Depth} represent 
- Services: number of services
- Implementations: number of implementations per service.
- Depth: having an implementation in the base of the ko is 0. Having the implementaiton in a folder is 1. Having the implementation within a folder, within a service folder is 2. 