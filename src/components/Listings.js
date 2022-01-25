import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
const items = [1, 2, 3, 4, 5, 6, 7, 8]
const Listings = () => {
    return (
        <Container id="listings" className='mt-4 mb-4'>
            <h1 className='text-center mb-5 text-secondary fw-bold'>Dostępne cysterny</h1>
            <Row xs={1} md={3} className="g-4">
                {items.map((id) => (
                    < Col key={`${id} + ab`} >
                        <Card>
                            <StaticImage
                                src="../images/squere.jpg"
                                alt="cysterna"
                                width={400}
                            />

                            <Card.Body>
                                <Card.Title>Cysterna </Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link to="/detailedlisting"><Button variant="danger">Szczegóły</Button></Link>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    )
};

export default Listings;
