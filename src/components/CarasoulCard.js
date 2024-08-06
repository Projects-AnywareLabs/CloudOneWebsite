
import React from 'react'

function CarasoulCard({ content, size }) {
    return (
        <div className='w-full flex-shrink-0'>
            <div className='w-full bg-gradient-to-r from-cloudone-gradient-four/45 to-cloudone-gradient-four/25'><img src={content.image} /></div>
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
