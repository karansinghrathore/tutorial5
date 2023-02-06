import React, { useState } from 'react'
import { Form, Modal, Row, Col } from 'react-bootstrap';

function StaffAdd(props) {

    const [staffDetails, setStaffDetails] = useState({});
    const [ errors, setErrors ] = useState({});

    const setDetails = (field, val)=>{

        setStaffDetails({
            ...staffDetails, [field]:val
        })
        
        if(!!errors[field])
        {
            setErrors({...errors, [field]:null});
        }

    }

    const validateStaffDetails = () => {

        const currErrors = {};
        // checking for naming errors;
        if(!staffDetails.name  || staffDetails.name.trim() ==='')
            currErrors.name = "Please provide a name";

        if(!staffDetails.type ||  staffDetails.type.trim() ==='')
            currErrors.type = "Please select staff type";

        if( !staffDetails.contact  || staffDetails.contact.trim() ==='' || 
            staffDetails.contact.trim().length !== 10 || !staffDetails.contact.trim().match("[0-9]{10}"))
            currErrors.contact = "Please provide a valid 10 digit contact number";

        if( !staffDetails.emergencyContact  || staffDetails.emergencyContact.trim() ==='' || 
            staffDetails.emergencyContact.trim().length !== 10 || !staffDetails.emergencyContact.trim().match("[0-9]{10}"))
            currErrors.emergencyContact = "Please provide a valid 10 digit emergency contact number";
            

        if(!staffDetails.bloodGroup ||  staffDetails.bloodGroup.trim() ==='')
            currErrors.bloodGroup = "Please select a blood group type";
    
        return currErrors;
    }

    const onCreateStaffSubmit = (event) => {
        event.preventDefault();
        const currErrors = validateStaffDetails();
        setErrors(currErrors);

        if(Object.keys(currErrors).length === 0)
        {
            props.onSave(staffDetails);
        }

      };

      const onCancelButtonClicked = () => {
        setErrors({});
        setStaffDetails({});
        props.onCancel();
      };

    return (
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
    );
  }

  export default StaffAdd;