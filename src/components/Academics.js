import React from 'react'
import Droneworking from './training_components/Droneworking'
import Dronebootcamp from './training_components/Dronebootcamp'
import WhoCanJoin from './training_components/Whocanjoin'
import WhatYouWillLearn from './training_components/Whatyoulearn'
import IISTBanner from './training_components/IISTBanner'
import HostDroneWorkshop from './training_components/Hostdroneworkshop'
import TestimonialCarousel from './training_components/Testimonials'

const Academics = () => {
  return (
    <div>
        <Droneworking/>
        <Dronebootcamp/>
        <WhoCanJoin/>
        <WhatYouWillLearn/>
        <IISTBanner/>
        <HostDroneWorkshop/>
        <TestimonialCarousel/>
    </div>
  )
}

export default Academics;