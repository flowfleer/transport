import React from "react";
import relation from "/public/handshake.png";
import experience from "/public/group.png";
import quality from "/public/high-quality.png";
import time from "/public/time-left.png";
import discount from "/public/discount.png";
import rating from "/public/rating.png";
import Image from "next/image";

const Choose = () => {
  return (
    <>
      <h1 className="sm:text-5xl text-center text-2xl font-medium text-primary m-5 sm:m-6 lg:m-7">Why You Choose Us</h1>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-9/12 mx-auto">
          <div className="bg-[#CAE4FF] rounded-2xl">
            <Image alt="relation" src={relation} className="w-6/12 mx-auto p-2" loading="lazy"/>
            <p className="text-black text-center font-bold xl:text-xl">Good Relation</p>
          </div>
        </div>
        <div className="w-9/12 mx-auto mt-5 sm:mt-0">
          <div className="bg-[#CAE4FF] rounded-2xl">
            <Image alt="relation" src={experience} className="w-6/12 mx-auto p-2" loading="lazy"/>
            <p className="text-black text-center font-bold xl:text-xl">Experienced</p>
          </div>
        </div>
        <div className="w-9/12 mx-auto mt-5 lg:mt-0">
          <div className="bg-[#CAE4FF] rounded-2xl">
            <Image alt="relation" src={quality} className="w-6/12 mx-auto p-2" loading="lazy"/>
            <p className="text-black text-center font-bold xl:text-xl">High Quality</p>
          </div>
        </div>
        <div className="w-9/12 mx-auto mt-5">
          <div className="bg-[#CAE4FF] rounded-2xl">
            <Image alt="relation" src={time} className="w-6/12 mx-auto p-2" loading="lazy"/>
            <p className="text-black text-center font-bold xl:text-xl">On Time</p>
          </div>
        </div>
        <div className="w-9/12 mx-auto mt-5">
          <div className="bg-[#CAE4FF] rounded-2xl">
            <Image alt="relation" src={discount} className="w-6/12 mx-auto p-2" loading="lazy"/>
            <p className="text-black text-center font-bold xl:text-xl">Discount</p>
          </div>
        </div>
        <div className="w-9/12 mx-auto mt-5">
          <div className="bg-[#CAE4FF] rounded-2xl">
            <Image alt="relation" src={rating} className="w-6/12 mx-auto p-2" loading="lazy"/>
            <p className="text-black text-center font-bold xl:text-xl">Satisfaction</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
