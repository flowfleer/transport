import React from 'react';
import Image from 'next/image';
import Popup from 'reactjs-popup'; 

const TestBox = ({ title, desc, img, readMore }) => {
    // const idGen = () =>{
    //     let id=-1;
    //     return id++;
    // }
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container py-12 mx-1 ">
                    <div className=" md:-m-7 -m-0 ">
                        <div className=" md:w-[25rem] md:h-[31rem] w-80 md:shadow-none md:m-0 m-auto md:ml-20">
                            <div className=" hover:bg-gray-900 h-full p-4 backdrop-blur-2xl border border-gray-500 border-opacity-60 rounded-lg">
                                <Image className="lg:h-52 md:h-36 md:w-full w-full rounded-xl object-cover object-center" src={img} alt="product image" loading="lazy"/>
                                <div className="p-6">
                                    <h1 className="title-font md:text-2xl text-xl font-medium text-white mb-1">{title}</h1>
                                    <div className="w-20 h-1 bg-cyan-400 rounded mt-2"></div>
                                    <p className="leading-relaxed md:text-lg lg:mt-4 mb-3 text-white">{desc}</p>
                                    <Popup trigger={<button className='text-primary' /*aria-describedby={`popup-${idGen}`}*/> Read More </button>} modal nested>{
                                        close => (
                                                <div className= "fixed top-0 left-0 w-full h-screen bg-gray-900 opacity-90">
                                                    <div className='text-white relative w-[50%] h-fit mx-auto top-[10%] bg-gray-900 text-sm md:text-base xl:text-lg'>
                                                        {readMore}
                                                        <div></div>
                                                        <button className='text-primary-dark pt-10' onClick={() => close()}>
                                                            Close Description
                                                        </button>
                                                    </div>
                                                </div>          
                                            )
                                        }
                                    </Popup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestBox;