import React from "react";

const RequestForm = () => {
  return (
    <div className="max-w-lg md:max-w-xl bg-white shadow-lg rounded-[21px] p-6 md:p-8 mx-auto border-[7px] border-[#1D313C]">
      {/* Header Section */}
      <h2 className="text-xl md:text-[42px] font-[700] text-[#1D313C] mb-7">Request More Info</h2>
      <p className="text-gray-600 text-sm md:text-base mt-2">
        Explore specialized Courses, DGCA Certified Training, and Interactive Workshops. 
        Begin Your Drone Mastery Adventure!
      </p>

      {/* Form Section */}
      <form className="mt-6 space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">FULL NAME*</label>
          <input type="text" placeholder="Enter your name" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#EEEEEE]" />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">YOUR PHONE NUMBER*</label>
          <input type="text" placeholder="Enter your phone number" 
            className="w-full p-3 bg-[#EEEEEE] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">EMAIL ADDRESS*</label>
          <input type="email" placeholder="Enter your email" 
            className="w-full p-3 bg-[#EEEEEE] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>

        {/* Dual Email Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">EMAIL ADDRESS*</label>
            <input type="email" placeholder="Enter your email" 
              className="w-full p-3 bg-[#EEEEEE] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">EMAIL ADDRESS*</label>
            <input type="email" placeholder="Enter your email" 
              className="w-full p-3 bg-[#EEEEEE] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
        </div>

        {/* Question Box */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">EMAIL ADDRESS*</label>
          <textarea placeholder="Enter Your Question Here ....."
            className="w-full p-3 bg-[#EEEEEE] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-24 resize-none"></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" 
          className="w-full bg-[#92C83E] hover:bg-green-600 text-[#1D313C] font-bold py-3 rounded-md mt-4">
          Submit form
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
