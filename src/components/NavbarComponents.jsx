import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavbarComponents extends React.Component {
    render() { 
        return (
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home"><strong>QTemu</strong></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Create Meetup</Nav.Link>
                    <Nav.Link href="#features">Explore</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        );
    }
}
 
export default NavbarComponents;