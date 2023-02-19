import React from 'react';
import TestBox from './TestBox';
import fv from '../public/fruits&vegetable.jpg';
import sp from "../public/indianSpices.jpg";
import dvf from "../public/Dehydrated Fruits and Vegetables.jpg";
import eat from "../public/Ready.jpg";
import eco from "../public/eco-friendly.jpg";
import mix from "../public/premix-tea.jpeg";
import grocery from "../public/grocery.jpg";
import wheat from "../public/wheat.jpg";

const data = [
    {
        title: "Fruits and vegetables",
        desc: "We are offering fresh, hygienic, and quality fruits and vegetables. India is popularly known as 'the fruit basket of the world.' We trade significantly in fruits and vegetables such as pomegranates, grapes, mangoes,coconuts, green chilli, carrots, drumsticks, green peas, lemon, okra, red onions, tomatoes, and so on. People who eat more fruits and vegetables as part of an overall healthy diet are likely to have a reduced risk of some chronic diseases.",
        img: fv,
        link: "https://firebase-twitt-post.vercel.app/auth/Login",
    },

    {
        title: "Indian spices",
        desc: "Dhinga Masti is the app where kids play various game",
        img: sp,
        link: "https://dhinga-masti.netlify.app/",
    },
    {
        title: "Ready to eat",
        desc: "An FullStack dashboard where admin have database and allow user to login.",
        img: eat,
        link: "https://fullstack-dashboard.vercel.app/login",
    },
    {
        title: "Dehydrated vegetables",
        desc: "Black codes is the Website where various javascript projects ideas are there and codes are also available",
        img: dvf,
        link: "https://blackcodes.ml/",
    },


    {
        title: "Eco friendly products",
        desc: "google clone",
        img: eco,
        link: "https://rupen109.github.io/googleClone/",
    },

    {
        title: "Premix tea",
        desc: "quiz app for in javascript",
        img: mix,
        link: "https://rupen109.github.io/quizapp/",
    },
    {
        title: "Grocery",
        desc: "quiz app for in javascript",
        img: grocery,
        link: "https://rupen109.github.io/quizapp/",
    },
    {
        title: "Wheat Grain and Flours",
        desc: "quiz app for in javascript",
        img: wheat,
        link: "https://rupen109.github.io/quizapp/",
    },

];

const Test = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
            <h1 className="sm:text-5xl text-center text-2xl font-medium title-font text-primary">Products</h1>
            <div className="w-20 h-1 bg-cyan-400 rounded mt-2"></div>
            </div>
                <div className="md:flex justify-center  md:flex-wrap md:-ml-12 ">
                    {data.map((data, index) => (
                        <TestBox title={data.title} key={index} desc={data.desc} img={data.img} link={data.link} />
                    ))}
                </div>
        </div>
    );
};

export default Test;