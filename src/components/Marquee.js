import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "./constants";
// import Container from './Container'

function Marquee() {
  return (
    <div>
      <div className="marquee-wrapper h-[470px] bg-gradient-to-r from-cloudone-gradient-four/45 to-cloudone-gradient-three/45 p-8 relative container overflow-hidden">
        <div className="flex gap-4 relative">
          {TESTIMONIALS.map((review, i) => (
            <TestimonialCard
              reviewDetails={review}
              index={i}
              size={TESTIMONIALS.length}
            >
              name={review.name}
            </TestimonialCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
