import { useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import React from "react";

function Carasoul({ children }) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  return (
    <div className="w-full h-full overflow-hidden flex flex-col justify-center items-center">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          className="bg-cloudone-gradient-four text-white p-2 rounded-full"
        >
          <BiLeftArrowCircle size={24} />
        </button>
        <button
          onClick={next}
          className="bg-cloudone-gradient-four text-white p-2 rounded-full"
        >
          <BiRightArrowCircle size={24} />
        </button>
      </div>
    </div>
  );
}

export default Carasoul;