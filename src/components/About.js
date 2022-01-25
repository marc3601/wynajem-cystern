import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return <Container className='mt-4 mb-4'>
        <Row>
            <Col md={6} sm={12} className='mb-2'>
                <h2 className='text-center mb-3'>Nasza oferta</h2>
                <p>Naszą firmę tworzy młoda kadra pracownicza z ogromnym zaangażowaniem, profesjonalizmem w tej wąskiej dziedzinie, jaką jest transport w cysternach spożywczych. Nowoczesna i ekologiczna flota, bogato wyposażone cysterny w pompy i ogrzewanie. Doskonale izolowane pozwalają na wysoką jakość usług i pełne zadowolenie klienta.
                </p>
                <li>Webasto</li>
                <li>Pompa elektryczna</li>
            </Col>
            <Col md={6} sm={12} className='mb-2'>
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
