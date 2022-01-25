import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../components/About';
import Listings from '../components/Listings';
import Contact from '../components/Contact';
const Layout = () => {
    return <Container fluid className='gx-0 overflow-hidden'>
        <Navigation logoOnly={false} />
        <Header />
        <About />
        <Listings />
        <Contact />
        <Navigation logoOnly={false} logo={false} />
    </Container>;
};

export default Layout;
