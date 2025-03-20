import React from 'react'

const Courselearning = () => {
  return (
    <div className='2xl:px-10 xl2:px-0 xl:px-5'>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-[28px] xl2:text-[32px] font-[600] mb-4 text-[#1D2026]">What you will learn in this course</h2>

      {/* Learning Points */}
      <ul className="space-y-4">
        {Array(3).fill(0).map((_, index) => (
          <li key={index} className="flex items-start space-x-3">
            {/* Green Check Icon */}
            <img src="/CheckCircle.svg" className="text-green-500 mt-1" size={20} alt="check"/>
            {/* Text Content */}
            <p className="font-[400] text-[18px] xl2:text-[20px] 2xl:text-[26px] text-[#4E5566]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
              has been the industry's standard dummy text ever since the 1500s.
            </p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Courselearning