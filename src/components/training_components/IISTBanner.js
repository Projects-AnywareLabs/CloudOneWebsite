import React from "react";

const IISTBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 md:p-6 space-y-4 mb-5 mt-4">
      {/* Top Banner */}
      <div className="md:rounded-xl flex flex-col items-center md:flex-row justify-between w-full max-w-full md:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
        <img src="/IISTbanner.png" alt="IIST"/>
      </div>

      {/* Supporting Text */}
      <div className="text-center max-w-3xl px-2 sm:px-0">
        <p className="text-[#4E5566] font-inter font-[400]">
          CloudOne AI is proudly incubated at the{" "}
          <p className="font-[700]">
            Indian Institute of Space Science and Technology (IIST), <span className="font-[400]">Trivandrum</span>
          </p>,
        </p>
        <p className="text-gray-600 mt-2">
          Our programs reflect the same commitment to quality, innovation, and hands-on learning —
          helping students and enthusiasts build a strong foundation in drone technology with
          guidance rooted in real research and industry relevance.
        </p>
      </div>
    </div>
  );
};

export default IISTBanner;
