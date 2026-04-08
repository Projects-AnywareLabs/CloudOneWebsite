import React from "react";
import DroneModelViewer from "./DroneModelViewer";

function CarasoulCard({ content }) { 
  return (
    <div className="flex-shrink-0 w-full h-full flex flex-col">
    <div className="flex-grow flex items-center justify-center w-full h-full overflow-hidden relative">
      <div className="w-full h-full">
        <DroneModelViewer modelUrl={content.modelUrl} />
      </div>
    </div>
    <div className="px-4 py-2 bg-cloudone-gradient-four text-center">
      <p className="py-4 font-semibold jakarta-plus text-cloudone-blue text-sm">
        {content.mainTitle}
      </p>
      <p className="font-semibold text-white jakarta-plus text-sm">
        {content.subtext}
      </p>
    </div>
  </div>
  
  );
}

export default CarasoulCard;