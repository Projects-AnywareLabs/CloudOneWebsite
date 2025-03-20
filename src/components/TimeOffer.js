import React from 'react'
import RequestForm from './RequestForm'
import CountdownTimer from './CountdownTimer'
import Courselearning from './Courselearning'
import CourseRequirements from './CourseReq'

const TimeOffer = () => {
  return (
    <div className='px-10 2xl:px-0'>
    <div className='flex flex-col xl:flex-row py-12'>
        <div className='xl:w-[60%] w-[100%]'>
           <CountdownTimer/>
        </div>
        <div className='xl:w-[40%] w-[100%]'>
            <RequestForm/>
        </div>
    </div>
    <div className='xl:w-[60%] pl-[-5px] 2xl:pl-[6rem] w-[100%]'>
        <Courselearning/>
    </div>
    <div className='xl:w-[60%]  2xl:pl-[8rem] w-[100%]'>
        <CourseRequirements/>
    </div>
    </div>
  )
}

export default TimeOffer