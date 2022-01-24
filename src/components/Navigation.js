import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
const Navigation = () => {
    return <Navbar bg="dark" variant="dark" expand={!false}>
        <Container>
            <Navbar.Brand href="/">Wynajem cystern</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Oferta</Nav.Link>
                <Nav.Link href="#features">Kontakt</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
};

export default Navigation;
