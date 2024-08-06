// import Container from './Container'
// import { PRODUCTS } from './constants'
// import DeliveryDrone from '../assets/DeliveryDrone.png'

// function ProductsCarasoul() {
//     return (
//         <div className='py-8'>
//             <Container>
//                 <div className="flex gap-2 relative p-2 border-2 rounded-2xl overflow-hidden justify-center md:mx-auto">
//                     {/* <div className="bg-cloudone-gradient-one/25 px-4 py-2 absolute"></div> */}
//                     <button className="px-4 py-2 bg-cloudone-gradient-one/25 rounded-md flex-shrink-0 ">Nimbus-S</button>
//                     <button className="px-4 py-2 bg-cloudone-gradient-one/25 rounded-md flex-shrink-0 ">Cirrus-CX</button>
//                     <button className="px-4 py-2 bg-cloudone-gradient-one/25 rounded-md flex-shrink-0 ">Nimbus eVTOL Noveo</button>
//                     <button className="px-4 py-2 bg-cloudone-gradient-one/25 rounded-md flex-shrink-0 ">Cirrus Mobile Ground Station</button>
//                     {/* <button className="px-4 py-2 bg-cloudone-gradient-one/25 rounded-md flex-shrink-0 ">Marketing Drone</button> */}
//                 </div>
//                 <div className="pt-8">
//                     <div className="flex gap-8">
//                         <div>
//                         <div>
//                             <p className="uppercase pb-8">Product</p>
//                             <h1 className="text-4xl font-bold pb-4">We offer a wide range of services, including delivery, surveillance, mapping, and surveying.</h1>
//                             <p>We offer a wide range of services, including delivery, surveillance, mapping, and surveying.</p>
//                         </div>
//                         <div className='md:hidden w-full py-8'>
//                             <img className='w-full' src={DeliveryDrone} />
//                         </div>
//                         <div className="grid grid-cols-2 py-8 gap-8">
//                             {
//                                PRODUCTS[1].features.map((feature) => (<div><h1 className="font-bold text-cloudone-blue">{feature.title}</h1><p className="text-gray-800/80 py-2">{feature.descriptions}</p></div>))
//                             }
//                         </div>
//                         </div>
//                         <div className='w-full hidden md:block max-w-[40%] my-auto'>
//                             <img className='w-full' src={DeliveryDrone} />
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default ProductsCarasoul


import React, { useState } from 'react';
import Container from './Container';
import { PRODUCTS } from './constants';
import DeliveryDrone from '../assets/DeliveryDrone.png';

function ProductsCarasoul() {
    const [activeTab, setActiveTab] = useState('Nimbus-S');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const getButtonStyle = (tabName) => {
        return activeTab === tabName
            ? 'px-4 py-2 bg-[#92C83E] text-white rounded-md flex-shrink-0'
            : 'px-4 py-2  rounded-md flex-shrink-0';
    };

    const renderContent = () => {
        const product = PRODUCTS.find(product => product.name === activeTab);
        if (!product) return null;

        return (
            <>
                <div>
                    <p className="uppercase pb-8">Product</p>
                    <h1 className="text-4xl font-bold pb-4">{product.name}</h1>
                    <p>{product.description}</p>
                </div>
                <div className='md:hidden w-full py-8'>
                    <img className='w-full' src={product.image} />
                </div>
                <div className="grid grid-cols-2 py-8 gap-8">
                    {
                        product.features.map((feature, index) => (
                            <div key={index}>
                                <h1 className="font-bold text-cloudone-blue">{feature.title}</h1>
                                <p className="text-gray-800/80 py-2">{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </>
        );
    };

    return (
        <div className='py-8'>
            <Container>
                <div className="flex gap-2 relative p-2 border-2 rounded-2xl overflow-hidden justify-center md:mx-auto">
                    {['Nimbus-S', 'Cirrus-CX', 'Nimbus eVTOL Noveo', 'Cirrus Mobile Ground Station'].map(tab => (
                        <button
                            key={tab}
                            className={getButtonStyle(tab)}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="pt-8">
                    <div className="flex gap-8">
                        <div>
                            {renderContent()}
                        </div>
                        <div className='w-full hidden md:block max-w-[40%] my-auto'>
                            <img className='w-full' src={PRODUCTS.find(product => product.name === activeTab).image} alt={activeTab} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ProductsCarasoul;

