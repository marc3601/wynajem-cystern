import React from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
const Details = () => {
    return <Container className='mt-5 mb-5'>
        <Row>
            <Col xs={12} md={6}>
                <Row>
                    <Col className='p-2'>
                        <Link to="/detailedlisting/gallery">
                            <StaticImage
                                src="../images/squere.jpg"
                                alt="cysterna"
                                width={900}
                            />
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className='p-2'>
                        <Link to="/detailedlisting/gallery">
                            <StaticImage
                                src="../images/squere.jpg"
                                alt="cysterna"
                                width={500}
                            />
                        </Link>
                    </Col>
                    <Col className='p-2'>
                        <Link to="/detailedlisting/gallery">
                            <StaticImage
                                src="../images/squere.jpg"
                                alt="cysterna"
                                width={500}
                            />
                        </Link>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} md={6}>
                <h2 className='display-6 lead text-dark pb-3 pt-3'>Cysterna spożywcza</h2>
                <Button className='mb-3' variant='danger'>1200 €*</Button>
                <p className='mb-3'>*Cena za miesiąc</p>
                <ListGroup as='ol'>
                    <ListGroup.Item variant="info">Dane techniczne</ListGroup.Item>
                    <ListGroup.Item as="li">Webasto</ListGroup.Item>
                    <ListGroup.Item as="li">Pompa elektryczna</ListGroup.Item>
                    <ListGroup.Item as="li">Webasto</ListGroup.Item>
                    <ListGroup.Item as="li">Pompa elektryczna</ListGroup.Item>
                    <ListGroup.Item as="li">Pompa hydrauliczna</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </Container>
};

export default Details;
