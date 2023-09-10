import React from 'react';
import Container from './Container';
import Footer from './Footer';
import Information from './Information';
import NavBar from './Navbar';
import Carousel from './Slideshow';
import Test from './Test';
import Choose from './Choose';
import StickyNavbar from './StickyNavbar';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Carousel />
        <div className="relative min-h-screen">
            <Test />
            <Container/>
            <Choose/>
            <Information />
            <StickyNavbar />
        </div>
            <Footer />
        </>
    );
};

export default Layout;