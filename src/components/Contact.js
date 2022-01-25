import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
const Contact = () => {
    return <Container id="contact" className='mt-5 mb-5'>
        <h1 className='text-center mb-5 text-secondary fw-bold'>Kontakt</h1>
        <Row>
            <Col md={8} xs={10} className='mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Podaj email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Wiadomość</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder='Napisz wiadomość' />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Wyślij
                    </Button>
                </Form>

            </Col>
        </Row>

    </Container>
};

export default Contact;
