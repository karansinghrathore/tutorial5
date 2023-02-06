import React, { useState } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faTrash, faEdit, faCheck, faRemove, faRefresh } from '@fortawesome/free-solid-svg-icons';
import './styles/Staff.css';


function StaffActionBar({selectedMember, onAction}) {

    const [activeKey, setActiveKey] =  useState(""); 

    const actionHandler = (actionId)=>{
        setActiveKey("");
        onAction(actionId);
    }

    return ( 
    
    <Navbar bg="light" variant="light">
        <Container fluid>
            <Nav className="me-auto" activeKey={activeKey} onSelect={(actionId) => actionHandler(`${actionId}`)}>
                <Nav.Link eventKey="addStaff"><FontAwesomeIcon icon={faAdd}/> Add Staff</Nav.Link>

                {
                    selectedMember ? 
                        <Nav.Link eventKey="updateStaff" ><FontAwesomeIcon icon={faEdit}/> Update</Nav.Link> 
                        : <Nav.Link eventKey="updateStaff" disabled><FontAwesomeIcon icon={faEdit}/> Update</Nav.Link>
                }

                {
                    selectedMember ? 
                        <Nav.Link eventKey="deleteStaff"><FontAwesomeIcon icon={faTrash} /> Delete</Nav.Link> 
                        : <Nav.Link eventKey="deleteStaff" disabled><FontAwesomeIcon icon={faTrash} /> Delete</Nav.Link>
                }

                {
                    selectedMember ? 
                        selectedMember.isPresent  ? <><Nav.Link eventKey="presentStaff" disabled><FontAwesomeIcon icon={faCheck} /> Present</Nav.Link> 
                            <Nav.Link eventKey="absentStaff" ><FontAwesomeIcon icon={faRemove} /> Absent</Nav.Link></>
                            :  
                            <><Nav.Link eventKey="presentStaff" ><FontAwesomeIcon icon={faCheck} /> Present</Nav.Link> 
                            <Nav.Link eventKey="absentStaff" disabled><FontAwesomeIcon icon={faRemove} /> Absent</Nav.Link> </>
                            : 
                            <><Nav.Link eventKey="presentStaff" disabled><FontAwesomeIcon icon={faCheck} /> Present</Nav.Link> 
                            <Nav.Link eventKey="absentStaff" disabled><FontAwesomeIcon icon={faRemove} /> Absent</Nav.Link> </>
                }

                <Nav.Link eventKey="refreshStaff"><FontAwesomeIcon icon={faRefresh} /> Refresh</Nav.Link>
            </Nav>
        </Container>
    </Navbar>);

}


export default StaffActionBar;