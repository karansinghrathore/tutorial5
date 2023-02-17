import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import './Signup.css';
import { useNavigate } from "react-router-dom";

function Signup() {

    const [errors, setErrors] = useState({});
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();
    
    const register =(e) =>{
        e.preventDefault();
        validateDetails();
        if(Object.keys(errors).length > 0)
        {
            navigate('/profile', { state: { user: userDetails} });
        }
    }

    const validateDetails = ()=>{

        const err = {};

        // validating first name
        if(!userDetails.firstName || !userDetails.firstName.match("[A-Za-z]+$"))
        {
            err.firstName = "Please provide a valid first name with only characters in it.";
        }

        // validating last name
        if(!userDetails.lastName || !userDetails.lastName.match("[A-Za-z]+$"))
        {
            err.lastName = "Please provide a valid last name with only characters in it.";
        }

        // validating email
        if(!userDetails.email || !userDetails.email.match("[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,4}$"))
        {
            err.email = "Please provide a valid email.";
        }

        // validating password
        if(!userDetails.password || !( userDetails.password.length>=8 && userDetails.password.match("[A-Za-z]+") 
            && userDetails.password.match("[0-9]+") && userDetails.password.match("[@!#]+")))
        {
            err.password = "Require atleast 8 length with atleast one alphabet, one digit and one special character(@,!,#)";
        }

        // validating confirm password
        if(!userDetails.confirmPassword || (userDetails.confirmPassword !== userDetails.password))
        {
            err.confirmPassword = "Doesn't match with password";
        }
        
        // setting the errors
        setErrors(err);
    }

    const setValue = (field, val)=>{

        const user = {
            ...userDetails, [field]:val
        };

        setUserDetails({...user});
    }

    return ( <>
        
        <Row>
            <Col></Col>

            <Col className='registrationForm'>
                <h2 className='registrationFormLabel'>
                    Registration form
                </h2>
                <Form onSubmit={register}>

                    <Row className='mb-3'>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First name" isInvalid={errors.firstName}
                             onChange={ e => setValue('firstName', e.target.value) } />
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName} 
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last name" isInvalid={errors.lastName}
                            onChange={ e => setValue('lastName', e.target.value) } />
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName} 
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Email" isInvalid={errors.email}
                                 onChange={ e => setValue('email', e.target.value) } />
                            <Form.Control.Feedback type="invalid">
                                {errors.email} 
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" isInvalid={errors.password} 
                                onChange={ e => setValue('password', e.target.value) }
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password} 
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" isInvalid={errors.confirmPassword} 
                              onChange={ e => setValue('confirmPassword', e.target.value) }/>
                            <Form.Control.Feedback type="invalid">
                                {errors.confirmPassword} 
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Button className='mb-6 submitButton' type="submit">Submit</Button>

                </Form>
                
            </Col>
            <Col></Col>

        </Row>

        

     </>)}

export default Signup;