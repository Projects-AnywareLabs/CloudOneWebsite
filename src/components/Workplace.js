import React from 'react';
import blogsdrone from "../assets/blogsdrone.svg";
import blogsicon1 from "../assets/blogsicon1.svg"

const Workplace = () => {
  return (
    <div >
        <div className="relative w-full mx-auto bg-gradient-to-b from-[#92C83E8C] to-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 gap-5 items-end shadow-lg">

        <div className="flex justify-end mt-5 md:hidden block pr-5">
        <img
          src={blogsdrone}
          alt="drone"
          className="w-full object-cover"
        />
      </div>


      {/* Left Section - Text */}
      <div className="flex-1 w-full lg:w-[70%] xl2:w-[80%] bg-[#FFFFFF] p-5 xl2:p-8 2xl:p-10 flex flex-col gap-3 2xl:gap-5 rounded-[18px] border border-[#E8E8EA] relative bottom-[3rem] xl2:bottom-[5rem] lg:left-20 md:left-5">
        <h2 className="text-2xl font-[600] text-[25px] xl2:text-[40px] 2xl:text-[50px] text-[#181A2A] leading-tight">
        The Impact of Technology on the Workplace: How Technology is Changing
        </h2>
        <div className="flex flex-row gap-5 items-center mt-3 text-gray-600 text-sm">
          <img src={blogsicon1} alt="logo" className="w-10 h-10 xl2:w-12 xl2:h-12" />
          <span className="ml-2 font-medium">CloudOne</span>
          <span className="ml-4">August 20, 2022</span>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-end mt-5 md:block hidden">
        <img
          src={blogsdrone}
          alt="drone"
          className="w-full object-cover"
        />
      </div>
    </div>
    </div>
  )
}

export default Workplace