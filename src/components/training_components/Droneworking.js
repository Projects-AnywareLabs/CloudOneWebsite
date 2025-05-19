import React from "react";

const Droneworking = () => {
  return (
    <section className="bg-white py-10 px-6 2xl:px-20 grid grid-cols-1 xl:grid-cols-2 gap-2 items-center mb-10" style={{ backgroundImage: "url('/bg.png')" }}>
      {/* Left Images */}
      <div className="relative lg:static xl:relative flex justify-start items-start gap-10 xl:gap-0">
        <img
          src="/students1.png"
          alt="Drone Workshop"
          className="rounded-xl w-[20rem] sm:w-[30rem] md:w-[35rem] lg:w-[30rem] xl2:w-[35rem] h-auto object-cover shadow-lg"
        />
        <img
          src="/students2.png"
          alt="Drone Training"
          className="absolute lg:static xl:absolute top-[10rem] sm:top-[15rem] md:top-[17rem] lg:top-0 xl:top-[15rem] xl2:top-[17rem] left-[10rem] sm:left-[19rem] md:left-[22rem] lg:left-[18rem] xl2:left-[20rem] 3xl:left-[24rem] rounded-xl w-[12rem] sm:w-[18rem] md:w-[20rem] lg:w-[30rem] xl:w-[18rem] xl2:w-[20rem] 3xl:w-[22rem] h-auto object-cover shadow-xl"
        />
      </div>

      {/* Right Content */}
      <div className="mt-20 lg:mt-0">
        <h2 className="text-[50px] sm:text-[90px] lg:text-[80px] xl2:text-[95px] 3xl:text-[120px] font-[600] font-inter leading-tight">
          Join the <span className="text-green-500">CloudOne AI</span> Drone Bootcamp
        </h2>
        <p className="text-[#6B6B6B] mt-6 font-inter font-[500] text-[14px] sm:text-[18px] 3xl:text-[20px] text-start">
        Looking to attend a drone bootcamp or organize a drone workshop for your school, college, or tech event?
        </p>
        <p className="text-[#6B6B6B] mt-4 font-inter font-[500] text-[14px] sm:text-[18px] 3xl:text-[20px] text-start">
        CloudOne AI Academy offers hands-on training programs designed to introduce participants to the world of drones — including drone building, flying, and understanding their real-world applications.
        </p>
        <p className="text-[#6B6B6B] mt-4 font-inter font-[500] text-[14px] sm:text-[18px] 3xl:text-[20px] text-start">
        Whether you're a student exploring career options, an educator aiming to introduce practical tech learning, or simply someone curious about how drones work and how they're used in real-world applications — our drone training sessions are tailored to your needs.
        </p>
        <button className="mt-6 px-8 py-3 bg-[#1D313C] text-white rounded-lg font-inter font-[600] hover:bg-gray-700 transition hidden lg:block">
          Enroll Now
        </button>
        <div className="flex flex-col items-start lg:hidden">
  <button className="mt-6 px-8 py-3 bg-[#1D313C] text-white rounded-lg font-inter font-[600] hover:bg-gray-700 transition">
    Enroll Now
  </button>
</div>
      </div>
    </section>
  );
};

export default Droneworking;
