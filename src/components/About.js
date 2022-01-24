import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return <Container className='mt-4'>
        <Row>
            <Col md={6} sm={12}>
                <h2 className='text-center mb-3'>Nasza oferta</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book.
                </p>
                <li>Webasto</li>
                <li>Webasto</li>
                <li>Webasto</li>
                <li>Webasto</li>
                <li>Webasto</li>
                <li>Webasto</li>
                <li>Webasto</li>
                <li>Webasto</li>
                <li>Webasto</li>
            </Col>
            <Col className='pt-5' md={6} sm={12}>
                <Container className='text-center'>
                    <StaticImage
                        src="../images/nr2.jpg"
                        alt="cysterna"
                    />
                </Container>

            </Col>
        </Row>

    </Container>

        ;
};

export default About;
