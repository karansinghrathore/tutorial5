<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 

# Lab / Assignment - 1

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 05 FEB 2023
* *Last Modification Date*: 06 FEB 2023
* *Hosted URL*: https://resplendent-pony-4ee387.netlify.app/
* *Git URL*: https://git.cs.dal.ca/krathore/csci5709/-/tree/assignment1

## Authors

Karan Rathore kr202401@dal.ca

## Getting Started

**[Optional]** If needing to provide the marker with a copy of the project that should run on their local machine for development, testing and/or marking purposes. Please include the following sections.

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

You will need to install any web browser (Chrome, Firefox etc).  
You will also need to install nodejs.


### Installing

A step by step series of steps that tell you how to get a development env running:

1. Clone GIT repo

a. Firstly clone the GIT repository to your local machine.
b. Take the code of assignment1 branch.

2. Install nodejs

a. Install nodejs from  https://nodejs.org/en/.

3. Run application.

a.  Go to the directory  of app where package.json lies.
b.  Run command "npm install". It will install dependencies. It will build node_modules folder.
c.  Then run command "npm start". It will run on localhost and you would be able to see staff management page in web browser.

4. Production ready build.

a.  Run command "npm run build". It will create a build folder.

## Deployment

For deployment, it was deployed on netlify. Same steps were followed as they were in tutorial 2.

## Built With

[React] (https://reactjs.org/) - The web framework.
[Bootstrap] (https://react-bootstrap.github.io/) - npm package for adding bootsrap library for reactjs

## Sources Used

Official documentation of React at https://reactjs.org/docs/getting-started.html has been used for learning purpose.
Official documentation of Bootstrap with React at https://react-bootstrap.github.io/getting-started/introduction/ has been used for learning prupose.

### StaffAdd.js

*Lines 69 - 156*

```
<Modal {...props} size="lg" centered >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add staff
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={onCreateStaffSubmit}>
                
                {/* for name    */}
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Name</Form.Label>
                        <Form.Control  type="text" placeholder="Enter staff member's name" 
                        isInvalid={ !!errors.name } onChange={ e => setDetails('name', e.target.value) }/>
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* staff type */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="8">
                        <Form.Label>Type</Form.Label>
                        <Form.Control  as="select" type="select" size="sm"
                        isInvalid={ !!errors.type } onChange={ e => setDetails('type', e.target.value) }>
                            <option value="">Please select staff type</option>
                            <option value="Chef">Chef</option>
                            <option value="Manager">Manager</option>
                            <option value="Waiter">Waiter</option>
                            <option value="Other">Other</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{errors.type}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* contact number of staff */}
                <Row className="mb-3">
                     <Form.Group as={Col} md="8">
                        <Form.Label>Contact number</Form.Label>
                        <Form.Control type="text"  maxLength={10} placeholder="Enter staff member's contact number"
                            isInvalid={ !!errors.contact } onChange={ e => setDetails('contact', e.target.value) }
                        />
                        <Form.Control.Feedback type="invalid">{errors.contact}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* emergency contact number for staff */}
                <Row className="mb-3">
                     <Form.Group as={Col} md="8">
                        <Form.Label>Emergency Contact number</Form.Label>
                        <Form.Control type="text"  maxLength={10} placeholder="Enter emergency contact number"
                            isInvalid={ !!errors.emergencyContact } onChange={ e => setDetails('emergencyContact', e.target.value) }
                        />
                        <Form.Control.Feedback type="invalid">{errors.emergencyContact}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* blood group */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="8">
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Control  as="select" type="select" size="sm" 
                        isInvalid={ !!errors.bloodGroup } onChange={ e => setDetails('bloodGroup', e.target.value) }>
                            <option value="">Please select blood group</option>
                            <option value="A-">A-</option>
                            <option value="A+">A+</option>
                            <option value="B-">B-</option>
                            <option value="B+">B+</option>
                            <option value="O-">O-</option>
                            <option value="O+">O+</option>
                            <option value="AB-">AB-</option>
                            <option value="AB+">AB+</option>
                            <option value="Not available">Not available</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{errors.bloodGroup}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <button class="btn btn-danger" onClick={()=> onCancelButtonClicked()}>Cancel</button>
                    <button class="btn btn-success createStaffSubmitButton" type="submit">Submit</button>
                </div>
            </Form>


        </Modal.Body>
        
      </Modal>


```

The code above was created by adapting the code in [Boostrap React offical documentation] (https://react-bootstrap.github.io/components/modal/ ) as shown below:

```
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

```

- <!---How---> The code in [Boostrap React offical documentation] (https://react-bootstrap.github.io/components/modal/ ) was implemented by official contributors to react bootstrap component library.
- <!---Why---> [Boostrap React offical documentation] (https://react-bootstrap.github.io/components/modal/ )'s Code was used because I wanted to use center vertical modal. 
- <!---How---> [Boostrap React offical documentation] (https://react-bootstrap.github.io/components/modal/ )'s Code was modified by me and added form in it to create a staff form. 


### StaffListFilter.js

*Lines 27-45*

```
<Row>
    <Col xs={4}>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></InputGroup.Text>
            <Form.Control placeholder="Enter name of staff member" onChange={(e) => setKeywordFilter(e.target.value)}/>
        </InputGroup>
    </Col>
    <Col xs={4}>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Staff Type</InputGroup.Text>
            <Form.Select onChange={(e) => setStaffTypeFilter(e.target.value)}>
                <option>All</option>
                <option value="Chef">Chef</option>
                <option value="Waiter">Waiter</option>
                <option value="Manager">Manager</option>
            </Form.Select>
        </InputGroup>
    </Col>
 </Row>

```

The code above was created by adapting the code in [Boostrap React offical documentation](https://react-bootstrap.netlify.app/forms/input-group/#rb-docs-content) as shown below:

```
<InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
</InputGroup>

```

- <!---How---> The code in [Boostrap React offical documentation](https://react-bootstrap.netlify.app/forms/input-group/  was implemented by official contributors to react bootstrap component library.
- <!---Why---> [Boostrap React offical documentation](https://react-bootstrap.netlify.app/forms/input-group/'s Code was used I wanted to put the tag of the filter just aside to the search text bar and same for the category filter as well. 
- <!---How---> Boostrap React offical documentation](https://react-bootstrap.netlify.app/forms/input-group/'s Code was modified by me to change this to select type of filter as well as input text filter horizontally to each other, with labels as well beside them in the same row.
