import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {

    return (
        <Container fluid className='position-relative'>
            <StaticImage
                src='../images/main_image.jpg'
                placeholder='blurred'
                layout='fullWidth'
                alt='wynajem cystern'
            >
            </StaticImage >
            <Container fluid className='position-absolute top-0 start-0 end-0 bottom-0 bg-dark opacity-50' />
            <Container fluid className='position-absolute top-0 start-0 end-0 bottom-0' >
                <Container className='mt-5 pt-5'>
                    <h1 className='display-3 lead text-light fw-bold pb-4'>Wynajem cystern</h1>
                    <Button variant='danger'>Zobacz ofertę</Button>
                </Container>

            </Container>
        </Container>

    );
};

export default Header;
