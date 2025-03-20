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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg 2xl:pl-[10rem]">
      <h3 className="text-sm text-gray-500">Counter Section</h3>
      <h1 className="text-[50px] 2xl:text-[57px] font-[700] mt-2">
        Limited-Time <span className="text-green-500">Offer!</span>
      </h1>
      <p className="text-[#1D313C] mt-2 font-[400] text-[16px]">
        Get 'The Guide' now and enjoy a special one-month free access to our
        upcoming AI-scoring platform with over 5000 test questions. Act fast –
        this offer expires in:
      </p>

      {/* Countdown Timer */}
      <div className="flex justify-start space-x-6 mt-6">
        <div className="text-center">
          <span className="text-green-500 text-3xl font-bold">00</span>
          <p className="text-gray-500">Days</p>
        </div>
        <div className="text-center">
          <span className="text-green-500 text-3xl font-bold">03</span>
          <p className="text-gray-500">Hour</p>
        </div>
        <div className="text-center">
          <span className="text-green-500 text-3xl font-bold">21</span>
          <p className="text-gray-500">Minute</p>
        </div>
        <div className="text-center">
          <span className="text-black text-3xl font-bold">56</span>
          <p className="text-gray-500">Second</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="font-[600] text-[32px] text-[#1D2026]">Description</h2>
        <p className="text-[#4E5566] font-[400] mt-2 text-[18px] xl2:text-[20px] 2xl:text-[24px] leading-[45px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
