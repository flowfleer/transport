import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from 'next/image'

const Slideshow = () => {
  //Array of Images
  const images = [

    "/robson-hatsukami-morgan-NKr0qBAkU4s-unsplash.jpg",
    "/william-william-NndKt2kF1L4-unsplash.jpg",
    // "/aron-yigin-sNY6B9NsPP8-unsplash.jpg",
    "/christopher-paul-high-O8dcG8oniJU-unsplash.jpg",
  ];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div className=""  style={{ width: "30px", marginRight: "-30px", cursor: "pointer", }}>
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
    <div className="m-6">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className=" flex items-center justify-center w-full h-full">
            <Image width={1400} height={1400} className="md:w-10/12 md:h-[600px] object-cover bg-top rounded-lg shadow-xl" src={each}/>
          <p className="fixed md:text-7xl font-extrabold">ADVAITH INTERNATIONAL</p>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;