import React from "react";
const Container = () => {
  return (
    <>
      <div className="ml-[2px] sm:ml-0 bg-[url('./../public/con-bg-3.jpeg')] bg-fixed bg-center bg-cover relative isolate after:content-[''] after:absolute after:bg-black after:inset-0 after:-z-[1] after:opacity-60" >
        <h1 className="text-primary text-center w-full font-medium  text-2xl sm:text-5xl py-5 xl:py-8">What We Do</h1>
        <div className=" text-white flex flex-col mx-5 mt-2 md:grid md:grid-cols-2 md:gap-y-5 md:mt-5 lg:gap-y-7 xl:gap-y-8">
          <div className="xl:flex mt-2 md:flex">
            <div className="flex justify-center items-center">       
                <img src="export-bg.png" alt="export" className="w-[35%] md:w-4/5"/>
            </div>
            <div>
              <p className="xl:text-2xl text-center text-xl text-primary font-medium">Export</p>
              <div className="xl:text-xl text-center">
                We are Exporting best quality product around the world, You need
                best product on time you are at right place Export import
              </div>
            </div>
          </div>
          <div className="xl:flex mt-2 md:flex">
            <div className="flex justify-center items-center">
                <img src="import-bg.png" alt="import" className="w-[35%] md:w-4/5"/>
            </div>
            <div>
              <p className="xl:text-2xl text-center text-xl text-primary font-medium">Import</p>
              <div className="xl:text-xl text-center">
                We help foreign company to introduce his best quality product in
                India and help them to find local partners in India
              </div>
            </div>
          </div>
          <div className=" mt-2 md:flex md:col-span-2 ">
            {/* <div className="flex justify-center items-center md:justify-start"> */}
                <img src="agent-bg.png" alt="agent" className="w-[35%] md:w-[20%] mx-auto xl:w-[15%]"/>
            {/* </div> */}
            <div className="md:p-5 lg:p-10">
              <p className="xl:text-2xl text-center md:text-start  text-xl text-primary font-medium">Sourcing Agent</p>
              <div className="xl:text-xl text-center md:text-start">
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
