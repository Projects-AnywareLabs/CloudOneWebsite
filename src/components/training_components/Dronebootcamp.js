import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Install react-icons if not already

const features = [
  {
    title: "Practical Sessions",
    description: "Learn to assemble, program, and operate drones with guidance from experienced instructors.",
  },
  {
    title: "Structured Curriculum",
    description: "Each session is designed to provide a strong foundation in drone components, safety, and basic flight control.",
  },
  {
    title: "No Prior Experience Needed",
    description: "Our bootcamps start with the basics and gradually progress into more technical topics, making them ideal for both newcomers and curious learners.",
  },
  {
    title: "Awareness of Real Applications",
    description: "Understand how drones are used in sectors like agriculture, delivery, surveillance, and environmental monitoring.",
  },
  {
    title: "Get Certified",
    description: "Receive a CloudOne AI Academy Certificate after completing the workshop.",
  },
  {
    title: "Career Insights",
    description: "Explore careers in drone tech, aerospace, robotics, and more.",
  },
];

const Dronebootcamp = () => {
  return (
    <section className="bg-[#F0FBF7] py-12 px-4 md:px-10 lg:px-20 xl:px-[10rem] 2xl:px-[14rem]">
      <h2 className="text-[30px] sm:text-[50px] lg:text-[60px] xl:text-[70px] font-[700] font-inter text-center text-[#1D313C] mb-10 leading-tight">
        Why Choose CloudOne AI Drone Bootcamp?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-0 sm:px-20 px-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <img src="/check_circle.svg" alt="check_circle" className="size-5 mt-2 lg:mt-0"/>
            <p className="text-[#4E5566] font-inter text-[18px] xl:text-[20px] 2xl:text-[22px]">
              <span className="font-[700] text-[#0F172A]">{feature.title}:</span> <span className="font-[400]">{feature.description}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dronebootcamp;
