import React from 'react';
import { Container } from 'react-bootstrap';
import Details from '../components/Details';
import Navigation from '../components/Navigation';

const ListingLayout = () => {
    return <Container fluid className='gx-0 overflow-hidden mh-100'>
        <Navigation logoOnly={true} />
        <Details />
    </Container>;
};

export default ListingLayout;
