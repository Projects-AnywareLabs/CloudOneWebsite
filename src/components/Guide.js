import React from 'react';

const stats = [
    { value: "40+", label: "Book Purchased" },
    { value: "80+", label: "Test given" },
    { value: "71+", label: "Number of Training" },
  ];

const Guide = () => {
  return (
    <div className='pb-[7rem]'>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between px-5 sm:px-10 xl:px-12 pt-10 lg:pt-0">
      
      {/* Left Section */}
      <div className="lg:w-full text-center lg:text-left">
        <p className="text-gray-600 mb-2 text-[12px] xl:text-sm">Lorem ipsum dolor sit</p>
        
        {/* Star Ratings */}
        <div className="flex items-center justify-center lg:justify-start space-x-2 text-yellow-500 mb-3">
          {'⭐'.repeat(5)}
          <span className="text-gray-600 text-[12px] xl:text-sm">4.8 (451,444 Ratings)</span>
        </div>

        {/* Title */}
        <h1 className="text-[30px] xl:text-[40px] xl2:text-[50px] 2xl:text-[55px] font-[600] leading-tight lg:pr-5">
          Master the DET with Our <span className="text-green-600">Comprehensive Guide!</span>
        </h1>

        {/* Description */}
        <p className="text-[#6B6B6B] mt-4 font-[400] xl2:text-[18px] 2xl:text-[24px]">
          Unlock success in the Duolingo English Test with "The Guide" – your roadmap to acing every question type. Expertly curated content, realistic examples, and invaluable tips await you.
        </p>

        {/* Buttons */}
        <div className="pt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="bg-[#1D313C] text-white px-8 text-[14px] md:px-10 md:text-[16px] lg:px-6 xl:px-10 py-3 rounded-lg lg:text-[14px] xl2:text-[16px] 2xl:text-[18px] font-[600]">
            Download The Guide Now
          </button>
          <button className="border border-[#E6E6E6] px-8 text-[14px] md:px-10 md:text-[16px] lg:px-6 xl:px-10 py-3 rounded-lg lg:text-[14px] xl2:text-[16px] 2xl:text-[18px] font-[600] text-[#6B6B6B]">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section - Image & Badges */}
      <div className="mt-10 lg:mt-0 flex justify-center">
        
        {/* Main Image */}
        <img src="/courses_poster.svg" alt="poster" />

        
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 justify-between items-center w-full max-w-[80%] mx-auto mt-[-35px] hidden md:flex">

      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex flex-col items-center text-center flex-1 bg-white px-[20px]  ${
            index !== stats.length - 1 ? "border-r border-gray-300" : ""
          }`}
        >
          <span className="text-[#92C83E] text-[76px] font-[600]">{stat.value}</span>
          <span className="text-[#6B6B6B] text-[18px] font-[400]">{stat.label}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Guide;
