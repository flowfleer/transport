import React from 'react';
import Container from './Container';
import Footer from './Footer';
import Information from './Information';
import NavBar from './Navbar';
import Carousel from './Slideshow';
import Test from './Test';
import Choose from './Choose';
import Head from 'next/head';

const Layout = () => {
    return (
        <>
            <Head>
                <meta
                   name='export-import-service-provider-all-india'
                    content='We are Exporting best quality product around the world, You need best product on time you are at right place Export import' 
                />
                <meta
                    name='best-service-provider-all-india'
                    content='We help foreign company to introduce his best quality product in India and help them to find local partners in India'
                />
                <meta
                    name='About-Us'
                    content="Akshar International able to create its own goodwill and a name for itself. We are primarily exporters of all fresh fruits and vegetables, Indian spices, Ready to eat, Dehydrated vegetables, Eco friendly product, Premix tea, Peanut and pulses, Handicraft product, Frozen food, Wheat flour." 
                />
                {/* open graph data */}
                <meta property="og:title" content="AksharInternational - Import Export Service Provider" />
                <meta
                    name="keywords"
                    content="akshar international,akshar international import export service,import,export,import service,export service,
          "
                />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="15 days" />
                <meta name="author" content="Jaimin" />

            </Head>
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