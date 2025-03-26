import React from "react";

const CourseRequirements = () => {
  const requirements = [
    "Basic introduction to drone technology.",
    "In-depth understanding of drone components and flight mechanics.",
    "Basics of drone assembly and programming. ",
    "Training for DGCA Remote Pilot Certification in India.",
  ];

  return (
    <div className="p-4 pt-16 pb-[5rem]">
      {/* Heading */}
      <h2 className="text-[28px] xl2:text-[32px] font-[600] mb-3 text-[#1D2026]">Course requirements</h2>

      {/* Requirements List */}
      <ul className="list-disc list-inside space-y-2 text-[#4E5566] font-[400] text-[16px] xl2:text-[18px] 2xl:text-[24px]">
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseRequirements;