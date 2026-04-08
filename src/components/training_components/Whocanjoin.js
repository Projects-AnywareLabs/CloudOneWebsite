import React from "react";

const joinOptions = [
  { icon: <img alt="" src="/school.svg" className="size-10"/>, label: "School & College Students" },
  { icon: <img alt=""src="/teacher.svg" className="size-10"/>, label: "Educators looking for tech-driven workshops" },
  { icon: <img alt="" src="/drone.svg" className="size-10"/>, label: "Drone Enthusiasts" },
  { icon: <img alt="" src="/techclub.svg" className="size-10"/>, label: "Tech Clubs & Communities" },
  { icon: <img alt="" src="/engineer.svg" className="size-10"/>, label: "Early-Career Engineers exploring drone technology" },
];

const WhoCanJoin = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-10 p-8 lg:p-16 lg:px-[2rem] xl:px-[6rem] xl2:px-[8rem] 3xl:px-[12rem] bg-[#F5F5F5] mb-20">
      {/* RIGHT: Image */}
      <div className="flex-1 w-full h-full lg:hidden block">
        <img
          src="/join.png"
          alt="Who Can Join"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* LEFT: Text and Join Options */}
      <div className="flex-1 w-full h-full">
        <div className="h-full grid grid-rows-[auto_1fr]">
          {/* Title and Subtitle */}
          <div>
            <h2 className="text-[40px] 2xl:text-[50px] font-[700] font-inter text-[#1D313C] mb-2">
              Who Can Join?
            </h2>
            <p className="text-[#4E5566] mb-6 font-inter font-[600] text-[20px] 2xl:text-[25px]">
              Our drone bootcamps are open to–
            </p>
          </div>

          {/* Join Options */}
          <div className="grid grid-rows-5 gap-4">
            {joinOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#1D313C] text-white px-4 py-4 sm:py-6 lg:py-5 xl:py-6 2xl:py-8 rounded-lg shadow-md"
              >
                {option.icon}
                <span className="font-inter font-[400] text-[18px] lg:text-[16px] xl:text-[18px] xl2:text-[20px] 2xl:text-[22px] 3xl:text-[26px] text-[#FFFFFF]">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Image */}
      <div className="flex-1 w-full h-full lg:block hidden">
        <img
          src="/join.png"
          alt="Who Can Join"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default WhoCanJoin;
