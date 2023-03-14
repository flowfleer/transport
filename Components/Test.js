import React from 'react';
import TestBox from './TestBox';
import fv from '../public/fruits&vegetable.jpg';
import sp from "../public/indianSpices.jpeg";
import dvf from "../public/Dehydrated Fruits and Vegetables.jpeg";
import eat from "../public/Ready.jpeg";
import eco from "../public/eco-friendly.jpg";
import mix from "../public/premix-tea.jpeg";
import grocery from "../public/grocery.jpg";
import wheat from "../public/wheat.jpeg";


const data = [
    {
        title: "Fruits and vegetables",
        desc: `We offer fresh, hygienic, and high-quality fruits and vegetables....`,
        img: fv,
        readMore: `We offer fresh, hygienic, and high-quality fruits and vegetables. 
        India is widely known as "the fruit basket of the world.
        We trade significantly in fruits and vegetables such as pomegranates, grapes, mangoes, coconuts, green chilies, carrots, drumsticks, green peas, lemons, okra, red onions, tomatoes, and more. 
        People who eat more fruits and vegetables as part of an overall healthy diet are likely to have a reduced risk of some chronic diseases.`,
    },

    {
        title: "Indian spices",
        desc: "Spices are one of the most important ingredients in dishes....",
        img: sp,
        readMore: `Spices are one of the most important ingredients in dishes.
        Indian spices are popular across the world for their unique flavor, aroma, and beautiful texture. 
        Spices such as cumin seeds, turmeric, coriander, star anise, cinnamon, cloves, dry red chili, green cardamom, peppercorns, asafoetida, mustard seeds, bay leaves, and many more are widely used in Indian cuisine. 
        Spices come with notable nutritional value and provide major health benefits. 
        India has been a frontrunner in the race for spice exports. The country leads in production, and its exports of different spices and products have shown an increasing trend in recent years.`,
    },
    {
        title: "Ready to eat",
        desc: `"Ready-to-eat" is a delicious product that can be prepared in a very short time without the hassle of cooking....`,
        img: eat,
        readMore: `"Ready-to-eat" is a delicious product that can be prepared in a very short time without the hassle of cooking, and without compromising on health.
        We supply the finest quality "Ready-to-Eat" food products, including Khaman dhokla, masala khichdi, Gujarati dal bhat, mixed vegetables, pav bhaji, paneer butter masala, and Amritsari chhole, according to client requirements.`,
    },
    {
        title: "Dehydrated vegetables",
        desc: "Dehydrated Vegetables are vegetables from which the moisture content has been removed....",
        img: dvf,
        readMore: `"Dehydrated Vegetables are vegetables from which the moisture content has been removed. The water content is removed from these vegetables by special drying methods. Sun drying is one of the oldest methods used for dehydration. Dehydrated Vegetables are used in instant noodles, soups, snacks, fast food, and other such products. These vegetables retain most of their nutritional content in the dehydrated state. Therefore, dehydrated vegetables from India are now exported all around the globe."`,
    },


    {
        title: "Eco friendly products",
        desc: "Choose eco-friendly products and make a positive impact on the environment....",
        img: eco,
        readMore: `"Choose eco-friendly products and make a positive impact on the environment while enjoying high-quality and sustainable solutions for your everyday needs.
        We supply the finest quality eco-friendly products, such as bamboo products, areca leaf products, sal leaf products, clay products, banana leaf plates, jute bags, and other similar items."`,
    },

    {
        title: "Premix tea",
        desc: "Premix tea is a quick and easy solution for making tea....",
        img: mix,
        readMore: `"Premix tea is a quick and easy solution for making tea. It contains a pre-mixed blend of tea, milk powder, and sugar, which can be instantly prepared by adding hot water. We supply the finest quality premix tea such as Masala Tea, Elaichi Tea, Ginger Tea, Jaggery Tea, Coffee, Flavored Tea, and others."`,
    },
    {
        title: "Grocery",
        desc: "Akshar International is a world-class grocery exporter in India....",
        img: grocery,
        readMore: `"Akshar International is a world-class grocery exporter in India. We have been exporting top-quality products for our customers. 
        Our best quality products have helped us gain a reputation as one of the top grocery exporters in India. Our customers continuously demand and expect a lot from us, and we never let them down. 
        We understand how much people love and value food, and that's why we offer a wide range of grocery products, including wheat flour, dal/lentils & legumes, coffee and tea, sugar, all spices, pasta, noodles, breakfast and snacks, sauces/masala, cooking oil, dairy, and many more. With our extensive portfolio of products, you can find many items in one place."`,
    },
    {
        title: "Wheat Grain and Flours",
        desc: `We deal with:
        1)Wheat Grain
        2)Wheat flour
        3)Maida flour....`,
        img: wheat,
        readMore: `We deal with:        
        Wheat grain: Wheat grain has three parts: endosperm (mostly starch and protein), bran (fiber, vitamins, minerals), and germ (healthy fats, vitamins, minerals). Whole grain wheat products that include all three parts are nutritionally rich and beneficial for overall health.        
        Wheat flour: The flour obtained by milling the wheat grain, which can be further refined to produce different types of flour such as All-Purpose Flour, Bread Flour, Cake Flour, etc.        
        Maida flour: Maida is a type of wheat flour that is highly refined and bleached, commonly used in Indian cuisine for making bread, pastries, and other baked goods.`,
    },

];

const Test = () => {

    return (
        <div>
            <div id="products" className='flex flex-col items-center justify-center'>
                <h1 className="sm:text-5xl text-center text-2xl font-medium title-font text-primary">Products</h1>
                <div className="w-20 h-1 bg-cyan-400 rounded mt-2"></div>
            </div>
            <div className="md:flex justify-center  md:flex-wrap md:-ml-12 ">
                {data.map((data, index) => (
                    <TestBox title={data.title} key={index} desc={data.desc} img={data.img} readMore={data.readMore} />
                ))}
            </div>
        </div>
    );
};

export default Test;