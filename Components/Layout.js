import React from 'react';
import Container from './Container';
import Footer from './Footer';
import Info from './Info';
import Information from './Information';
import NavBar from './Navbar';
import Carousel from './Slideshow';
import Test from './Test';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Carousel />
            <Test />
            <Container/>
            <Information />
            <Footer/>
        </div>
    );
};

export default Layout;