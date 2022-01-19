import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
const Navigation = () => {
    return <Navbar bg="dark" variant="dark" expand={!false}>
        <Container>
            <Navbar.Brand href="/">Wynajem cystern</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
};

export default Navigation;
