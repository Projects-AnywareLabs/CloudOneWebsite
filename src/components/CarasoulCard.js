
import React from 'react'

function CarasoulCard({ content, size }) {
    return (
        <div className='w-full flex-shrink-0'>
            <div className='w-full bg-gradient-to-r from-cloudone-gradient-four/45 to-cloudone-gradient-four/25 flex justify-center items-center'><img src={content.image} style={{ width: "600px", height: "600px" }} /></div>
            <div className='bg-cloudone-gradient-four py-2 px-4'>
                <p className='jakarta-plus font-semibold text-cloudone-blue py-4'>{content.mainTitle}</p>
                <p className='jakarta-plus font-semibold text-white'>{content.subtext}</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CarasoulCard
