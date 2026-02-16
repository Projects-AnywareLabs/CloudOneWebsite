import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
    const now = new Date().getTime();
    const timeLeft = targetTime - now;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
console.log(timeLeft)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  },);

  return (
    <div className="bg-white p-6 rounded-lg 2xl:pl-[10rem] md:mt-0 mt-[-6rem]">
      {/* <h3 className="text-sm text-gray-500">Counter Section</h3> */}
      <h1 className="text-[40px] md:text-[50px] 2xl:text-[57px] font-[700] mt-2">
        Limited-Time <span className="text-green-500">Offer!</span>
      </h1>
      <p className="text-[#1D313C] mt-2 font-[400] text-[16px]">
        Book our hands-on workshop today! Become a certified Drone Pilot!
      </p>

      {/* Countdown Timer */}
      {/* <div className="flex justify-start space-x-6 mt-6">
        <div className="text-center">
          <span className="text-green-500 text-3xl font-bold">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <p className="text-gray-500">Days</p>
        </div>
        <div className="text-center">
          <span className="text-green-500 text-3xl font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <p className="text-gray-500">Hours</p>
        </div>
        <div className="text-center">
          <span className="text-green-500 text-3xl font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <p className="text-gray-500">Minutes</p>
        </div>
        <div className="text-center">
          <span className="text-black text-3xl font-bold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <p className="text-gray-500">Seconds</p>
        </div>
      </div> */}

      {/* Description */}
      <div className="mt-6">
        <h2 className="font-[600] text-[32px] text-[#1D2026]">Description</h2>
        <p className="text-[#4E5566] font-[400] mt-2 text-[14px] md:text-[18px] xl2:text-[20px] 2xl:text-[24px] leading-[25px] md:leading-[45px]">
          At CloudOne AI, we empower individuals and businesses with comprehensive drone training programs. Whether you're a beginner or an experienced professional, our workshops provide hands-on learning, technical expertise, and industry insights to help you master drone technology.
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;