import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "One of the best bootcamps I've attended. I got to fly a drone and even understood how it was built!",
    author: "— XI Class, Student,",
    school: "The Study L'école Internationale, Puducherry",
  },
  {
    text: "Today's session was so interactive and I loved it very much. I want CloudOne to come back to my school for more such workshops!",
    author: "— VI Class, Student,",
    school: "The Study L'école Internationale, Puducherry",
  },
  {
    text: "The drone workshop was very interesting and all the representatives were very interactive. I wish we have these sessions on a regular basis, like every week as a club activity!",
    author: "— IX Class, Student,",
    school: "The Study L'école Internationale, Puducherry",
  },
  {
    text: "It was fun flying the drone. The explanations were easy to understand!",
    author: "— VIII Class, Student,",
    school: "The Study L'école Internationale, Puducherry",
  },
  {
    text: "We built and flew our own drone! It was an amazing experience.",
    author: "— VII Class, Student,",
    school: "The Study L'école Internationale, Puducherry",
  },
  {
    text: "I learned a lot about drone technology and had fun too!",
    author: "— X Class, Student,",
    school: "The Study L'école Internationale, Puducherry",
  },
];

const TestimonialCarousel = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const itemWidth = 100 / visibleCount;

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width >= 1280) setVisibleCount(3);        // xl
    else if (width >= 1024) setVisibleCount(2);   // lg
    else setVisibleCount(1);                      // below lg
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const prevSlide = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Auto-play with pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (currentIndex < testimonials.length - visibleCount) {
       
      } else {
        setCurrentIndex(0); // restart from beginning
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, visibleCount, isHovered]);

  return (
    <div className='mb-[10rem]'>
      <div className='text-center mb-10'>
        <p className='font-sans font-[700] text-[58px] text-[#18181B]'>Testimonials</p>
        <p className='font-sans font-[500] text-[20px] text-[#52525B] px-4'>2,157 people have said how good cloudone is</p>
      </div>
      <div className="h-full bg-gradient-to-r from-green-100 via-white to-slate-200">
        <div className="py-10 px-4 md:px-12 lg:px-20 relative">
          <div className="max-w-7xl 3xl:max-w-8xl mx-auto">
            <div 
              className="relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                ref={carouselRef}
                className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
                style={{
                  width: `${(testimonials.length * 100) / visibleCount}%`,
                  transform: `translateX(-${currentIndex * itemWidth}%)`,
                }}
              >
                {testimonials.map((testimonial, i) => (
                  <div
                    key={i}
                    className="px-4"
                    style={{ width: `${itemWidth}%` }}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <p className="text-gray-800 mb-6 text-lg flex-grow">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-black">{testimonial.author}</p>
                        <p className="text-gray-600 text-sm">{testimonial.school}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:ml-0 bg-white p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>

              <button 
                
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:mr-0 bg-white p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity z-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8">
              {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 mx-1 rounded-full transition-all ${
                    i === currentIndex ? 'bg-green-500 w-4' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
