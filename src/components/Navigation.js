import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
const Navigation = ({ logo = true, logoOnly = true }) => {
    return <Navbar bg="dark" variant="dark" expand={!false}>
        <Container>
            {logo && <Navbar.Brand href="/">Wynajem cystern</Navbar.Brand>}
            {!logoOnly && <Nav className="me-auto">
                <Nav.Link href="#listings">Oferta</Nav.Link>
                <Nav.Link href="#contact">Kontakt</Nav.Link>
            </Nav>}
        </Container>
    </Navbar>
};

export default Navigation;
