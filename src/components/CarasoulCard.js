import React from "react";

function CarasoulCard({ content, size }) {
  return (
    <div className="flex-shrink-0 w-full">
      <div className="flex items-center justify-center w-full bg-gradient-to-r from-cloudone-gradient-four/45 to-cloudone-gradient-four/25">
        <img
          src={content.image}
          alt="content-image"
          style={{ width: "600px", height: "600px" }}
        />
      </div>
      <div className="px-4 py-2 bg-cloudone-gradient-four">
        <p className="py-4 font-semibold jakarta-plus text-cloudone-blue">
          {content.mainTitle}
        </p>
        <p className="font-semibold text-white jakarta-plus">
          {content.subtext}
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default CarasoulCard;
