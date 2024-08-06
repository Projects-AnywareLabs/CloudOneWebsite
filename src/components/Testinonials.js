import React from 'react'
import Marquee from './Marquee'
import { CUSTOMERS_SATISFIED } from './constants'
function Testinonials() {
  return (
    <div className=' pt-20 pb-28'>
      <p className='text-center  jakarta-plus'>{CUSTOMERS_SATISFIED} people have said how good cloudone is</p>
      <h1 className='container jakarta-plus text-4xl font-bold text-cloudone-blue text-center pt-4 pb-8'>Our happy clients say about us</h1>
      <Marquee />
    </div>
  )
}

export default Testinonials
