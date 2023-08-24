import React from 'react';
import Container from './Container';
import Footer from './Footer';
import Information from './Information';
import NavBar from './Navbar';
import Carousel from './Slideshow';
import Test from './Test';
import Choose from './Choose';

const Layout = () => {
    return (
        <>
        <div>
            <NavBar />
            <Carousel />
            <Test />
            <Container/>
            <Choose/>
            <Information />
            <Footer />           
        </div>
        </>
    );
};

export default Layout;