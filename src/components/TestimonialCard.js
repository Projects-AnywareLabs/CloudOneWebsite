import React from 'react'
import { BiSolidStar } from "react-icons/bi";

function TestimonialCard({ reviewDetails , index , size}) {
  return (
    <div style={{animationDelay:`${30 / size * (size - (index+1)) * -1}s` }} 
    className={`w-[500px] h-[406px] marquee-item drop-shadow-lg flex-shrink-0 bg-white rounded-md absolute jakarta-plus flex` }>
      <div className='p-8 flex flex-col justify-between'>
        <div className='text-black flex'>
          {
             Array.from(Array(reviewDetails.star).keys()).map((x) => (
              <ReviewStar  key={x}/>
             ))
          }
        </div>
        <p className='my-16 text-[24px] line-clamp-4'>“{reviewDetails.review}”</p>
        <div className='flex mt-auto'>
          <div className='rounded-full h-[42px] w-[42px] mr-4'><img src={reviewDetails.image}></img></div>
          <div>
            <div className='font-extrabold text-cloudone-blue'>{reviewDetails.name}</div>
            <div>{reviewDetails.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ReviewStar = () => {
  return (<span className='text-amber-500 text-[22px]'><BiSolidStar /></span>)
}
export default TestimonialCard
