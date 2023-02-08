import React from "react";

const Container = () => {
  return (
    <>
      <div className="relative ml-[4px] h-max">
        <img
          src="con-bg-1.jpg"
          alt="slider-image"
          className="w-full opacity-[0.4]"
        />
        <p className="text-white absolute top-2 text-center w-full  text-2xl xl:text-3xl">What We Do</p>
        <div className="absolute text-white flex flex-col top-8 mx-5 text-base mt-2">
          <div className="xl:flex mt-2">
            <div className="flex justify-center items-center">       
                <img src="export-bg.png" alt="export" className="w-[35%] "/>
            </div>
            <div>
              <p className="xl:text-2xl text-center text-xl text-primary-dark">Export</p>
              <div className="xl:text-xl text-center">
                We are Exporting best quality product around the world, You need
                best product on time you are at right place Export import
              </div>
            </div>
          </div>
          <div className="xl:flex mt-2">
            <div className="flex justify-center items-center">
                <img src="import-bg.png" alt="import" className="w-[35%]"/>
            </div>
            <div>
              <p className="xl:text-2xl text-center text-xl">Import</p>
              <div className="xl:text-xl text-center">
                We help foreign company to introduce his best quality product in
                India and help them to find local partners in India
              </div>
            </div>
          </div>
          <div className=" xl:flex mt-2">
            <div className="flex justify-center items-center">
                <img src="agent-bg.png" alt="agent" className="w-[35%]"/>
            </div>
            <div>
              <p className="xl:text-2xl text-center text-xl">Sourcing Agent</p>
              <div className="xl:text-xl text-center">
                We are working as local partner of our foreign client to source
                best quality product from India as per client requirement and
                Specification
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
