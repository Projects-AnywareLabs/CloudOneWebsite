import React from "react";

const WhatYouWillLearn = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 p-6 bg-white lg:px-[2rem] xl:px-[4rem] xl2:px-[8rem] 3xl:px-[12rem]">
      {/* Left Side - Images */}
      <div className="grid gap-4">
        <img
          src="/learn1.png"
          alt="Drone Session 1"
          className="rounded-lg w-full h-auto object-cover"
        />
        <img
          src="/learn2.png"
          alt="Drone Session 2"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="h-full p-6 bg-green-50 rounded-xl px-4 sm:px-10">
        <h2 className="text-[30px] sm:text-[50px] lg:text-[40px] xl:text-[45px] 2xl:text-[55px] font-[600] font-inter text-[#1D313C] mb-1">What You’ll Learn</h2>
        <p className="font-[600] font-inter text-[#4E5566] text-[16px] xl:text-[18px] 2xl:text-[20px]">Bootcamp Highlights</p>

        
        <ul className="h-full text-gray-800 flex flex-col gap-6 xl:gap-8 2xl:gap-[3rem] mt-10">
          {[
            "Drone Fundamentals: Components & Flight Principles",
            "Safety Protocols & Drone Regulations in India",
            "Step-by-step Drone Assembly",
            "Hands-on flying sessions",
            "Mission Planning & Autonomous Navigation",
            "Overview of industry applications and use cases",
            "Career paths and opportunities in drone technology",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <img src="/check_circle.svg" alt="check" className="size-5 mt-2"/>
              <span className="font-inter font-[600] text-[18px] sm:text-[20px] lg:text-[16px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[24px] text-[#4E5566]">{item}</span>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
