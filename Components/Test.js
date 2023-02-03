import React from 'react';
import TestBox from './TestBox';
import truck from '../public/aron-yigin-sNY6B9NsPP8-unsplash.jpg';
import product from "../public/christopher-paul-high-O8dcG8oniJU-unsplash.jpg";

const data = [
    {
        name: "vegetable",
        img: product,
    },
    {
        name: "vegetable",
        img: product,
    },
    {
        name: "vegetable",
        img: product,
    },
    {
        name: "vegetable",
        img: product,
    }
]

const Test = () => {
    return (
        <div>
            <section class="text-gray-600 body-font px-5 py-2 mx-auto">
                <div className="container px-5 flex mx-auto">
                    <div className="flex flex-wrap mx-auto -mb-10 text-center">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="sm:text-3xl text-2xl -mb-16 font-medium title-font text-primary-dark">Products</h1>
                        </div>
                        {
                            data.map((data, index) => (
                                <TestBox key={index} name={data.name} img={data.img} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Test;