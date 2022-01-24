import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../components/About';
const Layout = () => {
    return <Container fluid className='gx-0 overflow-hidden'>
        <Navigation />
        <Header />
        <About />
    </Container>;
};

export default Layout;
