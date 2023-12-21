# Reference Knowledge Objects (KOs)
These objects are KGrid 2 reference knowledge objects made for the purpose of 
- verifying new activator implementations 
- assisting the development of new KOs
- showcasing other services like cli, web service, activator
- demonstrating and including supporting material to different ways of trying out the knowledge and services

Each KO may have different types of services implemented that could be used to utilize knowledge. These services include API (activated using activators), CLI and Stand-alone Web Services. This document shows how each one of these services could be used to utilize knowledge.

The knowledge and the service implemented in a KO could also be applied using Native ways of accessing and executing code artifacts and packages. This document also shows those other native ways of using KOs.

## Activate API services in activators
A collection of knowledge objects, that have API services implemented, could be run (activated) simultaneously within any specification compliant activator. To activate the repository, clone it into your collection path directory.

Knowledge objects need to be activated by their corresponding activator. Currently, reference object implementations have been created for the [Python](https://github.com/kgrid/python-activator) and [JavaScript](https://github.com/kgrid/javascript-activator) activators. A [Local Manifest file](https://github.com/kgrid/reference-objects/blob/main/local_manifest.json) is provided in this repository to help loading these KOs from a cloned location. Please follow the instructions on these pages to install and run the activators. Simple steps to activated KOs in this repository include:

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

You can also try out our deployed [Python](https://python-activator-06fae3ea8e83.herokuapp.com/docs) and [JavaScript](https://javascript-activator-3a6e3a45c6f0.herokuapp.com/docs) activators.

Once activator is running with these KOs on the server you can
- access documentation and list of activator endpoints at /docs
- access the list of KOs and check their activation status at /kos 
- access the list of activated endpoints at /endpoints
- try out each activated KO's endpoints in openapi and swagger editor using the documentation link provided at /kos (if the KO has a service specification file)
- access activated endpoints via an http Post requests to /endpoints/{ko id}/{endpoint id} with a Json body to run the function behind the endpoint.

## Service Testing
Most knowledge object services have associated test files. Most of these files follow a common pattern, being indicated by test_{specific}.{file}. Most of these files are either deno (written in typescript) or Python files and can be run by ```deno test {test_file}``` or ```pytest {test_file}``` respectively. For additional information specific to a service, refer to the relevant KO readme file.

## Use CLI services
There are a variety of knowledge object within this repository which contain command line interfaces that implement the underlying knowledge. These services are mostly denoted by the 'cli' service name but also can be found as a 'batch_service'.  In general, these services can be launch by typing the appropiate interpretor(deno run or python3) and the target file. Each implementations of these services could have a unique way of activation, so please refer to the service's readme and help menu for addition information. Here is an example for bmi-calc-ko/cli:
```
deno run cli.ts --help
```
## Use KOs with stand-alone web service
Some knowledge objects also contain services which are web services that can be launched independently of an activator. We can find an example of this type of service in bmi-calc-ko/web_service. These services can be configured very unquely, so please refer to the specific services for more details. 

## Other native ways of using KOs
Other than using the services implemented in a KO, the knowledge and services embedded in a KO could be accessed and used in native ways. 

### Add and run tests
Tests are considered a native way of verification of correctness and also documentation and code examples. They could be added to each KO, using different programming techniques, to test KO's knowledge and its services.

#### Python 
For Python KOs, we use [pytest](https://docs.pytest.org/en/7.1.x/contents.html). Examples of pytest are added to the KO at [/bmi-calc-ko (id: BMICalculator)](https://github.com/kgrid/reference-objects/tree/main/bmi-calc-ko/API_service_py/implementation_a/tests) to test the knowledge and service. To run the tests, if tests are added based on the pytest standards, you can simply follow the following simple steps:
1. Navigate to the root of KO
2. Run pytest command
    ```
    pytest
    ```

You will see the result of the tests. To see the detail on what those tests are or to add more tests, you should look at the content of the test_{topic}.py files.

#### JavaScript
We implemented JavaScript KOs using Deno so, we use [testing in Deno](https://docs.deno.com/runtime/manual/basics/testing/) to test the knowledge and service. Examples of Deno tests are added to the KO at [/bmi-calc-ko (id: BMICalculator)](https://github.com/kgrid/reference-objects/tree/main/bmi-calc-ko/API_service_js/tests) to test the knowledge and service. To run the tests, if tests are added based on the Deno testing standards, you can simply follow the following simple steps:
1. Navigate to the root of KO
2. Run Deno test command and provide the required [Deno permissions](https://docs.deno.com/runtime/manual/basics/permissions) for your test
    ```
    deno test --allow-read --allow-write
    ```

You will see the result of the tests. To see the detail on what those tests are or to add more tests, you should look at the content of the {topic}_test.ts files.

### Import and use knowledge or service functions in programming interactive environment/mode
Programming Interactive Environment/Mode is a command line shell which gives immediate feedback for each statement, while running previously fed statements in active memory. 
In a programming interactive environment/mode you can import packages and modules and use their functions.

#### Python
For a KO that has the knowledge and service implemented as a Python package, the package could be installed (using "pip install or poetry install) in the workspace and then the knowledge and service could be used with Python interactive mode. Here are the steps to install it from code and use it:

1. Navigate to the folder that contains the package.
2. Install the package

    ```bash
    pip install .
    ```
    or

    ```bash
    poetry install # for Python packages created using poetry 
    ``` 
3. Run Python interactive mode through command line
    ```bash
    python
    # some distributions of Linux use python3
    ```

4. Import the package and module and call the function. For example for the get_bmi_category function implemented in bmi module of python_bmi_web_service package in API_service_py service of [bmi-calc-ko](https://github.com/kgrid/reference-objects/tree/main/bmi-calc-ko) (id: BMICalculator) KO use the following to test the knowledge: 
    ```bash
    >>> from  python_bmi_web_service.bmi_knowledge import calculate_bmi_knowledge,get_bmi_category_knowledge
    >>> get_bmi_category_knowledge({"bmi":20})
    'Normal weight'  # <- output
    ```

    and the following to test the service: 
    ```bash
    >>> from  python_bmi_web_service.bmi_service import calculate_bmi,get_bmi_category
    >>> get_bmi_category({"bmi":20})
    'Normal weight'  # <- output
    ```

If you run Python interactive mode when the working directory is the same as the directory which contains the package, you can skip the package installation step.


#### JavaScript
For a KO that has the knowledge and service implemented using as TypeScript or JavaScript module using deno, the modules could be imported using Deno REPL which provides an interactive environment to explore the language/runtime without writing a program. Here are the steps to run the deno interactive environment and import modules that implement knowledge or service and use their functions:

1. [Install deno](https://docs.deno.com/runtime/manual/getting_started/installation) in your workspace if you have not doen already.
2. Navigate to the folder than contains the .ts or .js module.
3. Run deno interactive mode through command line 
    ```bash
    deno repl
    ```
4. Import the module and call the function. For example for the bmi_category function implemented in http_service.ts module in API_service_js service of [bmi-calc-ko](https://github.com/kgrid/reference-objects/tree/main/bmi-calc-ko) (id: BMICalculator) KO use the following to test the service function bmi_category: 
    ```bash
    > import {bmi_category} from  "./http_service.ts"
    > bmi_category({"weight":56,"height":1.8,"unit_system":"metric"})
    17.28395061728395   # <- output
    "Underweight"       # <- output
    ```

    and to test the knowledge functions in bmi_calculator.ts in knowledge folder, from the same working directory use: 
    ```bash
    > import {calculate_bmi,get_bmi_category} from  "../knowledge/bmi_calculator.ts"
    > calculate_bmi(1.8,56,true)
    17.28395061728395   # <- output
    > get_bmi_category(17.2)
    "Underweight"       # <- output
    ```

### Import and run knowledge or service functions as web APIs in programming interactive environment/mode
In a programming interactive environment/mode you can also create web APIs and host them on a local web server.

#### Python
This step by step example shows how you can import python implementation of the knowledge function from the KO at /bmi-calc-ko (id: BMICalculator), create a web API using FastAPI, host it in uvicorn as a local web server and then access and run it:

1. Navigate to the folder that contains the package.
2. Run Python interactive mode through command line 
    ```bash
    python
    # some distributions of Linux use python3
    ```

3. Import the function form knowledge package and module  
    ```bash
    >>> from  python_bmi_web_service.bmi_knowledge import get_bmi_category_knowledge
    ```
4. Create a web API
    ```
    >>> from fastapi import Body, FastAPI
    >>> app=FastAPI()
    >>> @app.post("/")
    ... async def execute_endpoint( data: dict = Body(...)):
    ...     return get_bmi_category_knowledge(data)
    ... 
    ```
5. Host the API in a local web server   

    ```
    >>> import uvicorn
    >>> uvicorn.run(app, host="127.0.0.1", port=8000)
    INFO:     Started server process [16074]
    INFO:     Waiting for application startup.
    INFO:     Application startup complete.
    INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
    ```
6. To test the API now you can either send a POST request to http://127.0.0.1:8000 with a request body like {"bmi":20} or you can access http://127.0.0.1:8000/docs in your browser to use the FastAPI- Swagger UI. 
  

#### JavaScript
This step by step example shows how you can import JavaScript implementation of the service function from the KO at /bmi-calc-ko (id: BMICalculator), create a web API using deno's oak middleware, host it in a local web server and then access and run it:
1. [Install deno](https://docs.deno.com/runtime/manual/getting_started/installation) in your workspace, if you have not doen it already.
2. Navigate to the folder than contains the .ts or .js module.
3. Run deno interactive mode through command line 
    ```bash
    deno repl
    ```
4. Import the function form the module:
    ```bash
    > import {bmi_category} from  "./http_service.ts"
    ```
5. Create a web API.
    ```
    import { Application, Router } from "https://deno.land/x/oak/mod.ts";

    const app = new Application();
    const router = new Router();

    router.post("/", async (context) => {
        const input = await context.request.body().value;
        const result = bmi_category(input);
        context.response.body = { result };
    });
    ```
6. Host the API in a local web server   
    ```
    app.use(router.routes());
    app.use(router.allowedMethods());
    const port = 8000;
    await app.listen({port});
    ```

7.  Now you can send a POST request to http://127.0.0.1:8000 with a request body like 
    ```bash
    {
        "height":1.8,
        "weight":56,
        "unit_system":"metric"
    }
    ```
 
  

## Inter-KO calling
The Ko at /ko-interconn (id: ko-interconn) is an example for inter-KO calling. This KO does not implement the knowledge itself, but it contains a service (python-service) with Python implementation that uses inter-KO calling to execute the knowledge implemented in the KO at /bmi-calc-ko (id: BMICalculator). 

When using this KO by itself the python_bmi_web_service of bmi-calc-ko KO ( id:BMICalculator) needs to be manually installed using 'pip install' in the workspace. Once it is installed, then the import command in the implementation of the service would work. You can run "pytest" in the implementation folder (/ko-interconn/python-service) to test if the service works. 

When using this KO with the Python activator, the bmi-calc-ko KO ( id:BMICalculator) needs to be activated too, for this KO to work. The order in which KOs are listed on the manifest and installed is important. The KO which is dependent on another one must be installed later. When the Python activator installs KOs as part of the activation process, packages within the KOs will be installed automatically in the system's temp location. This enables inter-ko calling between KOs that are activated using the activator.

## Knowledge Service Table
| KO          | Purpose      | Experimental | Python Activator | JavaScript Activator | Command Line Interface | Batch Processing Interface | Standalone Web Service | Shared Knowledge | KO 2.0 |
| ----------- | ------------ | ------------ | ---------------- | -------------------- | ---------------------- | -------------------------- | ---------------------- | ---------------- | ------ |
| bmi-calc-ko | All services | ✅            | ✅                | ✅                    | ✅                      | ✅                          | ✅                      | ✅                | ✅      |
## Knowledge objects structural details
The following Knowledge Objects (KOs) showcase diverse structures, to demonstrate the flexibility of activators. Implementation of services may be placed in the root of Knowledge Objects (KOs) or organized within service folders, each of which may further contain implementation folders. This allows for a spectrum of complexity, from simplest KO, when there is only one service and one implementation, to more complicated cases with multiple services and potentially multiple implementations of the same service.

## bmi-ko naming scheme
For specific KOs in this list that showcase structural variations, naming schema represents the structure of KO and how services and their implementations could be placed inside a KO folder.

KO names that has the following combination bmi-ko.{Services}.{Implementations}.{Depth} represent 
- Services: number of services
- Implementations: number of implementations per service.
- Depth: having an implementation in the base of the ko is 0. Having the implementation in a folder is 1. Having the implementation within a folder, within a service folder is 2. 