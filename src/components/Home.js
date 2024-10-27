import React, { useRef, useState } from 'react'
import Container from './Container'
import AirplaneLuggage from '../assets/AirplaneLuggage.png'
import VideoSource from "../assets/3255275-uhd_3840_2160_25fps.mp4"
import DGIDrone from '../assets/Drone pngs/Drone5.png'
import Testinonials from './Testinonials'
import CarasoulCard from './CarasoulCard'
import Carasoul from './Carasoul'
import { FaPlay, FaPause } from "react-icons/fa";


import { CARASOUL, FEATURES } from './constants'
import ProductsCarasoul from './ProductsCarasoul'

function Home() {
    return (
        <>
            <div className=''>
                <div className='md:flex md:container'>
                    <div className='pt-20 container md:mr-8 md:w-2/4'>
                        <h1 className='font-extrabold text-5xl text-center md:text-left text-[#20343c]'>We blend AI and innovation to redefine drone capabilities</h1>
                        <p className='leading-loose py-8 text-center md:text-left text-[#20343c]'>At Cloud One, we see drones not just as flying machine but as catalyst for transformation. With a firm commitment to innnovation and a vision for the future, we are redefining the possibilities of what drones can accomplish in today's rapidly evolving world.</p>
                        <button className=' shadow-2xl py-4 px-8 bg-[#20343c] font-bold rounded-lg text-gray-100 block mx-auto md:mx-0'>Get A Quote</button>
                    </div>
                    <Carasoul>
                        {CARASOUL.map((item) => (<CarasoulCard content={item} size={CARASOUL.length} />))}
                    </Carasoul>
                </div>
            </div>
            <div className='h-full'>
                <div className="text-center py-16">
                    <h1 className=' container text-cloudone-blue text-5xl font-bold leading-snug'>What’s Possible With Our Drones <p>Delivery. Defense. Surveillance. Mapping.</p></h1>
                    <p className='  containertext-cloudone-blue py-8 font-medium'></p>
                    <div className='container grid-co lg:grid'>
                        <div className='drone pb-0 md:pb-0' ><img src={DGIDrone} className="block w-full h-auto"/></div>
                        {
                            FEATURES.map((feature, i) => {
                                var ga = "";
                                switch (i) {
                                    case 0: ga = "ecs"
                                        break;
                                    case 1: ga = "vpc"
                                        break;
                                    case 2: ga = "cdt"
                                        break;
                                    case 3: ga = "ao"
                                        break;
                                }
                                return <div style={{ gridArea: `${ga}` }} className='flex flex-col justify-center items-center py-4 w-max-[300px] mx-auto'>
                                    <span className='w-[48px] h-[48px] text-[32px] flex-shrink-0 text-cloudone-blue bg-cloudone-gradient-four flex justify-center  items-center rounded-lg'>{feature.icon}</span>
                                    <h1 className='font-semibold text-cloudone-blue py-4'>{feature.main}</h1>
                                    <p className='font-light leading-relaxed'>{feature.subtext}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='bg-[#92C83E]'>
                <Container className='py-8 md:flex md:justify-between'>
                    <div className='md:w-2/4'>
                        <p className='py-4 px-8 w-min text-nowrap bg-[#20343c] text-gray-100 rounded-full mx-auto md:mx-0'>Drones built for your business</p>
                        <h1 className='text-5xl text-gray-100 font-bold text-center md:text-left py-4' >We Fly so that you can Work 10x Faster</h1>
                        <p className='text-gray-100 font-light text-justify leading-relaxed my-auto'>Advanced drones, designed for rapid deployment and efficient performance, drastically reducing operational time and increasing productivity in various applications.</p>
                    </div>
                    <div className='md:w-1/3 py-8 my-auto'><img src={AirplaneLuggage} alt='' /></div>
                </Container>
            </div>
            <div>
                <Container className="py-16 relative">
                    <div className=''>
                        <div className='md:w-3/4'>
                            <h1 className='text-center font-bold text-4xl md:text-left text-cloudone-blue'>We at Cloudone work as a team to deliver for YOU.</h1>
                            <p className='text-cloudone-blue py-4'>Our Team focuses on extensive R&D to deliver best industrial grade tech infused Drones</p>
                        </div>
                        <button className='sm:block md:absolute mx-auto md:top-0 md:right-0 md:my-16 py-4 px-8 border-cloudone-gradient-four border-4 rounded-lg'>Learn More</button>
                    </div>
                    <VideoPlayer />
                </Container>
            </div>
            <div>
                <ProductsCarasoul />
            </div>
            <div className="bg-cover bg-center bg-drone-mountain ">
                <div className="bg-gradient-to-r from-cloudone-gradient-four/45 to-cloudone-gradient-three/45 h-full">
                    <Container className='py-16 text-center leading-relaxed'>
                        <h1 className='text-gray-100 font-bold text-4xl md:text-5xl leading-relaxed'>Environmentally Friendly Operations</h1>
                        <p className='text-gray-100 leading-loose py-8'>As a company, we are committed to advancing environmentally friendly practices in our drones. We focus on reducing environmental impact while supporting critical operations like medical evacuations and supply delivery. Our dedication to sustainability drives our innovation and development.</p>
                        <button className='px-8 py-4 text-gray-100 bg-cloudone-gradient-four rounded-full'>Contact Us</button>
                    </Container>
                </div>
            </div>

            <Testinonials />
        </>
    )
}


const VideoPlayer = () =>{

    const videoRef = useRef(null)
    const [isPlaying, setPlaying] = useState(false)

    const playPause = () => {
        if(isPlaying){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            setPlaying(true)
            videoRef.current.play()
        }
    }
    return ( <div className='w-full relative py-8 '>
    <video ref={videoRef} onClick={playPause} className='w-full h-full border-[16px] cursor-pointer rounded-3xl border-cloudone-gradient-four' src={VideoSource} muted loop></video>
    <button style={{translate: "-50% -50%", opacity:`${isPlaying ? '0': '100%'}`}} className='hidden md:flex absolute top-1/2 left-1/2 w-[100px] border-8 rounded-full h-[100px] bg-cloudone-gradient-four justify-center items-center text-4xl' 
    onClick={playPause} > {isPlaying ? <FaPause /> : <FaPlay className='ml-2'/>  }</button>
    
</div>)
}
 
export default Home
