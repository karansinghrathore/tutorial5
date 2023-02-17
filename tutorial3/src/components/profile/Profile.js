import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from "react-router-dom";
import './Profile.css';

function Profile() {

    const location = useLocation();

    return (<>
         <Row>
            <Col></Col>
            <Col className='profileDetailsColumn'>
                <Row><h2 className='profileDetailsLabel'>
                    Profile
                </h2></Row>
                <Row>
                    <Col>First Name:</Col>
                    <Col>{location.state.user.firstName}</Col>
                </Row>
                <Row>
                    <Col>Last Name:</Col>
                    <Col>{location.state.user.lastName}</Col>
                </Row>
                <Row>
                    <Col>Email:</Col>
                    <Col>{location.state.user.email}</Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    </>);
}

export default Profile;