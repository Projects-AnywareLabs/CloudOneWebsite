import DroneTopView from '../assets/DroneTopView.png'
import Laptop from '../assets/laptop.jpg'
import { IoStar } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import { CiLock, CiWallet, CiShare1 } from "react-icons/ci";
import { PiReceiptLight } from "react-icons/pi";
import Container from './Container'
import { FiDatabase } from "react-icons/fi";
import { ACCORDIAN_ITEMS } from './constants';
import Testinonials from './Testinonials'
import Advisors from "../assets/advisors.png";
import Heads from "../assets/heads.png"

function About() {
    return (
        <>
            <div className='h-fit bg-gradient-to-b from-cloudone-gradient-four/55 to-cloudone-gradient-four/0'>
                <Container className="p-16 text-cloudone-blue lg:flex md:gap-8">
                    <div className='shadow-xl rounded-xl overflow-hidden h-fit max-w-fit '>
                        <div className='bg-cloudone-blue text-white font-extrabold text-2xl md:text-3xl p-8 relative'>
                            <h1 className='mr-8'>Where AI Meets Robotics Excellence</h1>
                            <div className='text-6xl rotate-90 absolute text-amber-300 bottom-[16px] right-[24px]'><IoStar /></div>
                        </div>
                        <div className='p-8 md:text-lg'>
                            <p>Our approach ensures that each system is both intelligent and highly capable, setting new standards in the industry.</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='text-6xl uppercase font-black text-cloudone-blue text-center py-8'>Cloudone AI Robotics Lab</h1>
                        <p className='text-center leading-relaxed'>At CloudOne, we see drones not just as flying machines but as catalysts for transformation. With a firm commitment to innovation and a vision for the future, we are redefining the possibilities of what drones can accomplish in today’s rapidly evolving world.</p>
                        <button className='shadow-2xl my-8 py-4 px-8 bg-[#20343c] font-bold rounded-lg text-gray-100 block mx-auto '>Get A Quote</button>
                    </div>
                    <div className='hidden w-full my-auto lg:block'>
                        <img className='w-full rotate-12' src={DroneTopView}></img>
                    </div>
                </Container>
            </div>
            <div>
                <Container>
                    <h1 className='text-5xl md:text-6xl text-center font-bold text-cloudone-blue'><span className='text-cloudone-gradient-four'>The Process</span> Of Your Vision</h1>
                    <p className='leading-relaxed text-center text-cloudone-blue'>Innovation meets necessity with our cutting-edge drone solutions, addressing critical delivery and the surveillance needs with precision and efficiency.</p>
                    <div className='mx-auto w-[80%] grid gap-8 lg:gap-16 lg:grid-cols-3 mt-8'>
                        <div className='flex flex-col justify-between bg-cloudone-blue rounded-lg p-8 shadow-xl md:col-span-2'>
                            <h1 className='text-white font-bold text-4xl md:text-5xl text-center md:text-left'>AI software for drone that handles all your needs.</h1>
                            <button className='w-fit uppercase px-8 py-4 mx-auto md:mx-0 mt-4 rounded-full flex items-center bg-cloudone-gradient-four text-nowrap'>Get call from us <BiRightArrowAlt className='ml-2 rotate-[-45deg] text-2xl' /></button>
                        </div>
                        <div className='jakarta-plus bg-white rounded-lg p-8 shadow-xl text-cloudone-blue'>
                            <div className='text-8xl '><CiLock /></div>
                            <h1 className='font-bold text-lg pt-4'>Security</h1>
                            <p className='leading-relaxed pt-4'>Our drone security solutions offer robust protection against potential threats, ensuring safe operations in various environments. Advanced protocols and real-time monitoring keep your fleet secure and resilient.</p>
                        </div>
                        <div className='jakarta-plus bg-white rounded-lg p-8 shadow-xl text-cloudone-blue'>
                            <div className='text-8xl'><CiWallet /></div>
                            <h1 className='font-bold text-lg pt-4'>Global Compliance and Customization</h1>
                            <p className='leading-relaxed pt-4'>We ensure global compliance by thoroughly researching and adhering to drone regulations in every country. Our drones are custom-designed to meet these diverse legal requirements, ensuring seamless operation across different regions.</p>
                        </div>
                        <div className='jakarta-plus bg-white rounded-lg p-8 shadow-xl text-cloudone-blue'>
                            <div className='text-8xl '><CiShare1 /></div>
                            <h1 className='font-bold text-lg pt-4'>Scalable</h1>
                            <p className='leading-relaxed pt-4'>Our solutions are designed to scale seamlessly with your needs, accommodating fleet expansions and evolving requirements effortlessly. This flexibility ensures that security and performance remain optimal as your operations grow</p>
                        </div>
                        <div className='jakarta-plus bg-white rounded-lg p-8 shadow-xl text-cloudone-blue'>
                            <div className='text-8xl '><PiReceiptLight /></div>
                            <h1 className='font-bold text-lg pt-4'>Complete visibility</h1>
                            <p className='leading-relaxed pt-4'>Gain complete visibility with our comprehensive oversight systems, providing real-time insights into drone operations and security. This enables proactive management and swift response to any issues or threats.</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <Container className='pt-16'>
                    <div className='flex flex-col md:flex-row '>
                        <div>
                            <h1 className='text-5xl md:text-6xl text-center md:text-left  font-bold text-cloudone-blue'><span className='text-cloudone-gradient-four'>Meet Our </span> Cloudone Team</h1>
                            <p className='leading-relaxed text-center md:text-left text-cloudone-blue pt-8'>Discover the dedicated professionals behind our innovative drone solutions, each bringing expertise and passion to drive excellence in every aspect of our technology.</p>
                        </div>
                        <button className='w-fit text-nowrap h-fit uppercase px-8 py-4 mx-auto md:mx-0 mt-8 rounded-full flex items-center bg-cloudone-gradient-four'>Contact Us<BiRightArrowAlt className='ml-2 rotate-[-45deg] text-2xl' /></button>
                    </div>
                    <div className='lg:flex gap-8 pt-16'>
                        <div className='pt-8'>
                            {/* <h1 className='text-6xl font-bold text-cloudone-blue jakarta-plus'>Our Advisors</h1> */}
                            {/* <p className='jakarta-plus pt-4'>At Cloud One, we see drones not just as flying machines but as catalyst for transformation.</p> */}
                            {/* <div className='flex gap-4'>
                                <div className='flex flex-col justify-center py-8 w-max-[300px] mx-auto '>
                                    <span className='w-[48px] h-[48px] text-[32px] flex-shrink-0 text-cloudone-blue bg-cloudone-gradient-four flex justify-center items-center rounded-lg'><FiDatabase /></span>
                                    <h1 className='font-bold text-cloudone-blue py-4 jakarta-plus'>Subtopic 1</h1>
                                    <p className='leading-relaxed jakarta-plus'>At Cloud One, we see drones not just as flying machines but as catalyst for transformation.</p>
                                </div>  <div className='flex flex-col justify-center  py-8 w-max-[300px] mx-auto '>
                                    <span className='w-[48px] h-[48px] text-[32px] flex-shrink-0 text-cloudone-blue bg-cloudone-gradient-four flex justify-center  items-center rounded-lg'><FiDatabase /></span>
                                    <h1 className='font-bold text-cloudone-blue py-4 jakarta-plus'>Subtopic 1</h1>
                                    <p className=' leading-relaxed jakarta-plus'>At Cloud One, we see drones not just as flying machines but as catalyst for transformation.</p>
                                </div>
                            </div> */}
                        </div>
                        <div className='my-auto'>
                            <img className='w-full' src={Advisors} />
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row-reverse gap-8 pt-16'>
                        <div className='pt-8'>
                            {/* <h1 className='text-6xl font-bold text-cloudone-blue jakarta-plus'>Feature 2</h1>
                            <p className='jakarta-plus pt-4'>At Cloud One, we see drones not just as flying machines but as catalyst for transformation.</p>
                            <div className='flex gap-4'>
                                <div className='flex flex-col justify-center py-8 w-max-[300px] mx-auto '>
                                    <span className='w-[48px] h-[48px] text-[32px] flex-shrink-0 text-cloudone-blue bg-cloudone-gradient-four flex justify-center items-center rounded-lg'><FiDatabase /></span>
                                    <h1 className='font-bold text-cloudone-blue py-4 jakarta-plus'>Subtopic 1</h1>
                                    <p className='leading-relaxed jakarta-plus'>At Cloud One, we see drones not just as flying machines but as catalyst for transformation.</p>
                                </div>  <div className='flex flex-col justify-center  py-8 w-max-[300px] mx-auto '>
                                    <span className='w-[48px] h-[48px] text-[32px] flex-shrink-0 text-cloudone-blue bg-cloudone-gradient-four flex justify-center  items-center rounded-lg'><FiDatabase /></span>
                                    <h1 className='font-bold text-cloudone-blue py-4 jakarta-plus'>Subtopic 1</h1>
                                    <p className=' leading-relaxed jakarta-plus'>At Cloud One, we see drones not just as flying machines but as catalyst for transformation.</p>
                                </div>
                            </div> */}
                        </div>
                        <div className='my-auto'>
                            <img className='w-full' src={Heads} />
                        </div>
                    </div>
                </Container>
                <div className='py-16'>
                    <Container>
                        <h1 className='uppercase p-8 rounded-lg bg-cloudone-blue text-4xl font-medium text-gray-100'>Frequently Asked Questions</h1>
                        <div className='lg:flex lg:gap-8'>
                            <div className='pt-8 lg:w-[50%]'>
                                {
                                    ACCORDIAN_ITEMS.map((item) => (
                                        <Accordian question={item.question} answer={item.answer} />
                                    ))
                                }
                            </div>
                            <ContactForm className='lg:w-[50%]' />
                        </div>
                    </Container>          
                </div>
                <Testinonials />
            </div>
        </>
    )
}

const Accordian = ({ question, answer }) =>
(
    <details className='bg-cloudone-blue text-gray-200 p-8 rounded-xl mt-4'>
        <summary className='cursor-pointer'>{question}</summary>
        <p className='pt-4 border-t-[1px] mt-4 border-black/20'>{answer}</p>
    </details>
)
const ContactForm = ({ className }) => {
    const submitForm = (e) => {
        e.preventDefault();
        console.log("yo");
    };

    return (<div className={`p-8 h-fit flex-shrink-0 bg-cloudone-blue rounded-xl mt-8 text-gray-200 ${className === undefined ? '' : className}`}>
        <p className='uppercase'>Ask your question</p>
        <div className='pt-4 border-t-[1px] mt-4 border-black/20'>
            <form id="contact" >
                <fieldset className='mt-4'>
                    <label className='uppercase block mb-2'>Name</label>
                    <input className='w-full p-4 rounded-lg text-cloudone-blue' placeholder="Enter your name" type="text" tabindex="1" required autofocus />
                </fieldset>
                <fieldset className='mt-4'>
                    <label className='uppercase block mb-2 '>Email</label>
                    <input className='w-full p-4 rounded-lg text-cloudone-blue' placeholder="Enter your email" type="email" tabindex="2" required />
                </fieldset >
                <fieldset className='mt-4'>
                    <label className='uppercase block mb-2'>Your question</label>
                    <textarea className='w-full p-4 rounded-lg text-cloudone-blue' rows='4' placeholder="Enter your question here ...." tabindex="5" required ></textarea>
                </fieldset>
                <fieldset className='mt-4'>
                    <button className='w-full p-4 mt-2 text-lg font-bold text-[#20343c] bg-yellow-500  rounded-xl' type="submit" onClick={submitForm}>Send</button>
                </fieldset>
            </form>
        </div>
    </div>)
}
export default About
