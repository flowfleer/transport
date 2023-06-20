import React from 'react';
import Image from 'next/image';
import meet from "/public//business-team-discussing-ideas-startup_74855-4380-removebg-preview.png";
import msg from "/public/new-message-concept-landing-page_52683-26980-removebg-preview.png";

const Information = () => {
    return (
        <section id="about" className="text-gray-600 body-font p-6 mt-7">
            <div className="container rounded-2xl mx-auto  lg:w-3/4 flex px-5 py-8 bg-[#CAE4FF] md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-1/4 md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image className="object-cover object-center rounded" alt="hero" src={meet} loading="lazy"/>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:justify-center md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ABOUT US</h1>
                    <p className="mb-8 text-black">
                        Welcome to Akshar International. Thank you for your interest in our Company.
                        Akshar International able to create its own goodwill and a name for itself. We are primarily exporters of all fresh fruits and vegetables, Indian spices, Ready to eat, Dehydrated vegetables, Eco friendly product, Premix tea, Peanut and pulses, Handicraft product, Frozen food, Wheat flour. The products are of elegance, style and superior quality. We have a well-established global clientele.
                        The company understands the importance of Quality and Timely Delivery of merchandise in this competitive and challenging International Business scenario.</p>
                </div>
            </div>
             <div className="lg:mt-6 mt-6 container rounded-2xl  mx-auto lg:w-3/4 flex px-5 py-15 bg-[#CAE4FF] md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-1/4 md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image className="object-cover object-center rounded" alt="hero" src={msg} loading="lazy"/>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:justify-center md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MESSAGE FOR YOU</h1>
                    <p className="mb-8 text-black">Thank you for visiting and connecting with us. We assure you of the best quality products and services, and you will be glad to do business with us.

                        We are grateful for connecting communities by exporting commodities and building relationships with other nations.
                        Come, lets shake hands and make this world a global village!</p>
                </div>
            </div>
    
        </section>

    );
};

export default Information;