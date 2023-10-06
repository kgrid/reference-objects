# reference-objects
These objects are Kgrid knowledge object made for the purpose of verifying new activator implementations and assisting the development of new KOs.
## Install the `reference-objects`
The reference-objects repository stores a collectection of knoledge objects that can be run simultanesuously within any specification compliant activator. To install the repository, clone it into your collection path directory.

Knowledge objects need to be activated by their cooresponding activator. Currently, reference object implementations have been created for the python-activator(https://github.com/kgrid/python-activator). Please follow the instructions that the page to install and run the colleciton.

## Accesing Knowledge objects
Currently, we do not have automated testing functionalities for knowledge objects. However, you can run the example collection by providing the appropriate manifest file to the given activator.

#### Test the loaded knowledge objects
Use http://127.0.0.1:8000/kos to get the list of knowledge objects and their status. You can see endpoints of each knowledge object under hasDeploymentSpecification field of metadata.

#### Test the loaded endpoints of knowledge objects
Use http://127.0.0.1:8000/endpoints to get the endpoints and their status. Each endpoint is accssible via an http POST reqest (e.g.using postman) to http://127.0.0.1:8000/endpoints/{id}  with a json body.


## Developing Reference Knowledge objects
Add and edit existing knowledge objects by changing their implementation within the respository. All changed KOs will need to be rezipped and moved into the manifest directory for proper deployment.
## Notes

### Known issues
Note: Multiartifact packages should not have a dot in their name as it causes issues for python domain names. Packages can have any name on their folder. If you are providing unzipped packages please rename your packages like the following example: from  python-multiartifact-v1.0 to python-multiartifact-v1-0.