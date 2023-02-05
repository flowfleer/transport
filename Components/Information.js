import React from 'react';
import Image from 'next/image'
import meet from "/public//business-team-discussing-ideas-startup_74855-4380-removebg-preview.png";
import msg from "/public/new-message-concept-landing-page_52683-26980-removebg-preview.png";

const Information = () => {
    return (
        <section class="text-gray-600 body-font m-14 mx-auto">
            <div class="container rounded-2xl mx-auto w-80 lg:w-3/4 flex px-5 py-8 bg-[#CAE4FF] md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-1/4 md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image class="object-cover object-center rounded" alt="hero" src={meet} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:justify-center md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">WHO WE ARE</h1>
                    <p class="mb-8 text-black">We are a leading business in the field of import and export, based in India. Our motto is to connect with lives of people by providing products of their need to enhance their lifestyle and creating our globe in structure of one big family in its true sense.We also export other products of any category, it will be a pleasure if you contact us!</p>
                </div>
            </div>
             <div class="lg:mt-6 mt-6 container rounded-2xl w-80 mx-auto lg:w-3/4 flex px-5 py-15 bg-[#CAE4FF] md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-1/4 md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image class="object-cover object-center rounded" alt="hero" src={msg} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:justify-center md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MESSAGE FOR YOU</h1>
                    <p class="mb-8 text-black">We are a leading business in the field of import and export, based in India. Our motto is to connect with lives of people by providing products of their need to enhance their lifestyle and creating our globe in structure of one big family in its true sense.We also export other products of any category, it will be a pleasure if you contact us!</p>
                </div>
            </div>
    
        </section>

    );
};

export default Information;