import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function OwnerNavBar({ activeTab }) {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>FooDoo</Navbar.Brand>
                <Nav className="me-auto" activeKey={activeTab}>
                    <Nav.Link eventKey="orders" href="/staff">Orders</Nav.Link>
                    <Nav.Link eventKey="menu" href="/staff">Menu</Nav.Link>
                    <Nav.Link eventKey="staff" href="/staff">Staff</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey="logout" href="/staff">Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );

}

export default OwnerNavBar;