import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from 'next/image';
import s1 from '../public/s1_welcome.jpeg'
import s2 from '../public/s2_akshar.jpg'
import s3 from '../public/s3_quality.jpeg'
import s4 from '../public/s4_fast.jpeg'

const Slideshow = () => {
  //Array of Images
  // const images = [

  //   "/pic/WhatsApp Image truck1.jpeg",
  //   "/pic/WhatsApp Image truck2.jpeg",
  //   "/pic/WhatsApp Image truck3.jpeg",

  // ];
  const content = [
    {
      title: "AKSHAR INTERNATIONAL",
      description: "Welcome to world of import export",
      image: s1
    },
    {
      title: "AKSHAR INTERNATIONAL",
      description: "Welcome to Aksharinternational",
      image: s2
    },
    {
      title: "AKSHAR INTERNATIONAL",
      description: "We provide premium quality products",
      image: s3
    },
    {
      title: "AKSHAR INTERNATIONAL",
      description: "We provide reliable and fast delivery",
      image: s4
    },
  ];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div   style={{ width: "30px", marginRight: "-30px", cursor: "pointer", }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
        {/* <p>edfedf</p> */}
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };
  return (
    <div className="m-6" id="home">
      <Zoom {...zoomInProperties}>
        {content.map((each, index) => (
          <div key={index} className=" flex items-center justify-center lg:mt-14">
            <Image width={1400} height={1400} className="lg:w-10/12 lg:h-[500px] opacity-60 w-full h-screen object-cover bg-top rounded-lg shadow-xl" src={each.image} alt="slider images" loading="lazy"/>
            <p className="absolute md:text-7xl text-4xl ml-4 text-white">{each.title}</p>
            <p className="absolute mt-44 md:text-3xl text-xl ml-4 text-white">{each.description}</p>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;