import React from 'react';
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
            <Information />
            {/* <Info /> */}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;