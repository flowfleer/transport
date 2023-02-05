import React from 'react';
import TestBox from './TestBox';
import truck from '../public/aron-yigin-sNY6B9NsPP8-unsplash.jpg';
import product from "../public/christopher-paul-high-O8dcG8oniJU-unsplash.jpg";

const data = [
    {
        title: "Tomato",
        desc: "An App in which user can login and then share thoughts.",
        img: product,
        link: "https://firebase-twitt-post.vercel.app/auth/Login",
    },

    {
        title: "Tomato",
        desc: "Dhinga Masti is the app where kids play various game",
        img: product,
        link: "https://dhinga-masti.netlify.app/",
    },
    {
        title: "Tomato",
        desc: "An FullStack dashboard where admin have database and allow user to login.",
        img: product,
        link: "https://fullstack-dashboard.vercel.app/login",
    },
    {
        title: "Tomato",
        desc: "Black codes is the Website where various javascript projects ideas are there and codes are also available",
        img: product,
        link: "https://blackcodes.ml/",
    },


    {
        title: "Tomato",
        desc: "google clone",
        img: product,
        link: "https://rupen109.github.io/googleClone/",
    },

    {
        title: "Tomato",
        desc: "quiz app for in javascript",
        img: product,
        link: "https://rupen109.github.io/quizapp/",
    },

];

const Test = () => {
    return (
        <div>
            {/* <Container> */}
            <div className='flex flex-col items-center justify-center'>
            <h1 class="sm:text-5xl text-center text-2xl font-medium title-font text-primary">Products</h1>
            <div className="w-20 h-1 bg-cyan-400 rounded mt-2"></div>
            </div>
                <div className="md:flex justify-center  md:flex-wrap md:-ml-12 ">
                    {data.map((data, index) => (
                        <TestBox title={data.title} key={index} desc={data.desc} img={data.img} link={data.link} />
                    ))}
                </div>
            {/* </Container> */}
        </div>
    );
};

export default Test;