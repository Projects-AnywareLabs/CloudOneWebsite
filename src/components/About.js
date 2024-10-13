
import DroneTopView from '../assets/DroneTopView.png'

import { IoStar } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import { CiLock, CiWallet, CiShare1 } from "react-icons/ci";
import { PiReceiptLight } from "react-icons/pi";
import Container from './Container'

import { ACCORDIAN_ITEMS } from './constants';
import Testinonials from './Testinonials'


import AllMembersArrowImg from "../assets/all_members_button.png";
import TeamMember1Img from "../assets/team_member1.png";
import TeamMember2Img from "../assets/team_member2.png";
import TeamMember3Img from "../assets/team_member3.png";
import TeamMember4Img from "../assets/team_member4.png";
import TeamMember5Img from "../assets/team_member5.png";
import TeamMember6Img from "../assets/team_member6.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/Linkedin.png";
import Galaxia_Branding from "../assets/galaxia_branding.png";
import John_Mayer_Nyc from "../assets/john_mayer_nyc.png"
import Nayzak_Patterns from "../assets/nayzak_patterns.png"
import Crave_Chips from "../assets/crave_chips.png"


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
                    {/* <div className='flex flex-col md:flex-row '>
                        <div>
                            <h1 className='text-5xl md:text-6xl text-center md:text-left  font-bold text-cloudone-blue'><span className='text-cloudone-gradient-four'>Meet Our </span> Cloudone Team</h1>
                            <p className='leading-relaxed text-center md:text-left text-cloudone-blue pt-8'>Discover the dedicated professionals behind our innovative drone solutions, each bringing expertise and passion to drive excellence in every aspect of our technology.</p>
                        </div>
                        <button className='w-fit text-nowrap h-fit uppercase px-8 py-4 mx-auto md:mx-0 mt-8 rounded-full flex items-center bg-cloudone-gradient-four'>Contact Us<BiRightArrowAlt className='ml-2 rotate-[-45deg] text-2xl' /></button>
                    </div>
                    <div className='lg:flex gap-8 pt-16'>
                        <div className='pt-8'>
                            <h1 className='text-6xl font-bold text-cloudone-blue jakarta-plus'>Our Advisors</h1>
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
                            </div>
                        </div>
                        <div className='my-auto'>
                            <img className='w-full' src={Advisors} />
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row-reverse gap-8 pt-16'>
                        <div className='pt-8'>
                            <h1 className='text-6xl font-bold text-cloudone-blue jakarta-plus'>Feature 2</h1>
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
                            </div>
                        </div>
                        <div className='my-auto'>
                            <img className='w-full' src={Heads} />
                        </div>
                    </div> */}
                   {/* <h1 className='uppercase p-8 rounded-lg bg-cloudone-blue text-4xl font-medium text-gray-100'>Frequently Asked Questions</h1> */}

                   <div className="space-y-6">
                       <div className="w-full h-auto rounded-[15px] flex flex-col lg:flex-row justify-between items-center bg-[#CAEF45] p-4 md:p-[48px]">
                          <p className="font-roboto font-semibold text-[24px] md:text-[31px] leading-[40px] md:leading-[54px] uppercase text-center lg:text-left">Meet the brilliant minds behind<span className="font-bold text-[40px] md:text-[60px] leading-[50px] md:leading-[70px]"> CLOUDONE</span>
                         </p>

                         {/* This div will stay in its original position for large screens (lg) and above  */}
                         <div className="hidden lg:flex w-[208px] h-[66px] justify-between items-center">
                           <p className="font-roboto-mono font-medium text-[16px] md:text-[19px] text-[#1D313C]">ALL Members</p>
                           <img src={AllMembersArrowImg} alt="All Members" className="w-[50px] md:w-[66px] h-[50px] md:h-[66px] rounded-full" />
                         </div>
                       </div>

                       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                          <div className="w-full h-[644px] bg-[#1D313C] bg-[linear-gradient(to_bottom,_#1D313C_40%,_#1A1A1A_40%)] rounded-[15px] flex flex-col justify-around items-center py-4 px-6">
                          <div className="flex flex-col items-center gap-[3.9px]">
                            <p className="font-roboto font-medium text-[23px] text-[#F9EFEC]">Indian Institue of Space Science  & technology</p>
                            {/* <p className="font-roboto font-normal text-[17px] text-[#B3B3B2]">Co-Founder & CEO</p> */}
                         </div>
                         <div className="w-full h-auto max-w-[395px]">
                           <img src={TeamMember1Img} alt="team_member_1" className="w-full h-auto"/>
                         </div>
                          <div className='h-[50px] w-full flex justify-center items-center space-x-[9px]'>
                             <img src={Facebook} alt="facebook"/>
                             <img src={Twitter} alt="twitter"/>
                             <img src={Linkedin} alt="linkedin"/>
                          </div>
                         </div>
                         <div className="w-full h-[644px] bg-[#1D313C] bg-[linear-gradient(to_bottom,_#1D313C_40%,_#1A1A1A_40%)] rounded-[15px] flex flex-col justify-around items-center py-4 px-6">
                          <div className="flex flex-col items-center gap-[3.9px]">
                            <p className="font-roboto font-medium text-[23px] text-[#F9EFEC]">Dr. Aravind Vaidyanathan</p>
                            <p className="font-roboto font-normal text-[17px] text-[#B3B3B2]">Professor, IIST </p>
                            <p className="font-roboto font-normal text-[17px] text-[#B3B3B2]">Expert in System Engineering & Propulsion </p>

                         </div>
                         <div className="w-full h-auto max-w-[395px]">
                            <img src={TeamMember2Img} alt="team_member_1" className="w-full h-auto"/>
                          </div>
                          <div className='h-[50px] w-full flex justify-center items-center space-x-[9px]'>
                             <img src={Facebook} alt="facebook"/>
                             <img src={Twitter} alt="twitter"/>
                             <img src={Linkedin} alt="linkedin"/>
                          </div>
                         </div>
                         <div className="w-full h-[644px] bg-[#1D313C] bg-[linear-gradient(to_bottom,_#1D313C_40%,_#1A1A1A_40%)] rounded-[15px] flex flex-col justify-around items-center py-4 px-6">
                          <div className="flex flex-col items-center gap-[3.9px]">
                            <p className="font-roboto font-medium text-[23px] text-[#F9EFEC]">Dr. Priyadarshnam Hari</p>
                            <p className="font-roboto font-normal text-[17px] text-[#B3B3B2]">Professor, IIST</p>
                            <p className="font-roboto font-normal text-[17px] text-[#B3B3B2]">Expert in Avionics architecture and space system</p>

                         </div>
                         
                         <div className="w-full h-auto max-w-[395px]">
                            <img src={TeamMember3Img} alt="team_member_1" className="w-full h-auto"/>
                         </div>
                          <div className='h-[50px] w-full flex justify-center items-center space-x-[9px]'>
                             <img src={Facebook} alt="facebook"/>
                             <img src={Twitter} alt="twitter"/>
                             <img src={Linkedin} alt="linkedin"/>
                          </div>
                         </div>
                         
                         <div className="w-full h-[644px] bg-[#1D313C] bg-[linear-gradient(to_bottom,_#1D313C_40%,_#1A1A1A_40%)] rounded-[15px] flex flex-col justify-around items-center py-4 px-6">
                          <div className="flex flex-col items-center gap-[3.9px]">
                            <p className="font-roboto font-medium text-[23px] text-[#F9EFEC]">Silverster Antony</p>
                            <p className="font-roboto font-normal text-[17px] text-[#B3B3B2]">Founder & CEO</p>
                         </div>
                         <div className="w-full h-auto max-w-[395px]">
                            <img src={TeamMember4Img} alt="team_member_1" className="w-full h-auto"/>
                         </div>
                          <div className='h-[50px] w-full flex justify-center items-center space-x-[9px]'>
                             <img src={Facebook} alt="facebook"/>
                             <img src={Twitter} alt="twitter"/>
                             <img src={Linkedin} alt="linkedin"/>
                          </div>
                         </div>
                         <div className="w-full h-[644px] bg-[#1D313C] bg-[linear-gradient(to_bottom,_#1D313C_40%,_#1A1A1A_40%)] rounded-[15px] flex flex-col justify-around items-center py-4 px-6">
                          <div className="flex flex-col items-center gap-[3.9px]">
                            <p className="font-roboto font-medium text-[23px] text-[#F9EFEC]">Tarun Kumar Jhabakh</p>
                            <p className="font-roboto font-normal text-[17px] text-[#B3B3B2]">Founder & Investor</p>
                         </div>
                         <div className="w-full h-auto max-w-[395px]">
                            <img src={TeamMember5Img} alt="team_member_1" className="w-full h-auto"/>
                         </div>
                          <div className='h-[50px] w-full flex justify-center items-center space-x-[9px]'>
                             <img src={Facebook} alt="facebook"/>
                             <img src={Twitter} alt="twitter"/>
                             <img src={Linkedin} alt="linkedin"/>
                          </div>
                         </div>
                         <div className="w-full h-[644px] bg-[#1D313C] bg-[linear-gradient(to_bottom,_#1D313C_40%,_#1A1A1A_40%)] rounded-[15px] flex flex-col justify-around items-center py-4 px-6">
                          <div className="flex flex-col items-center gap-[3.9px]">
                            <p className="font-roboto font-medium text-[23px] text-[#F9EFEC]">Robert Maria Joseph Francis</p>
                            <p className="font-roboto font-normal text-[17px] text-[#B3B3B2]">Founder & Investor</p>
                         </div>
                         <div className="w-full h-auto max-w-[395px]">
                            <img src={TeamMember6Img} alt="team_member_1" className="w-full h-auto"/>
                        </div>
                          <div className='h-[50px] w-full flex justify-center items-center space-x-[9px]'>
                             <img src={Facebook} alt="facebook"/>
                             <img src={Twitter} alt="twitter"/>
                             <img src={Linkedin} alt="linkedin"/>
                          </div>
                         </div>
                      </div>


                     {/* <!-- Move this div below for screens below lg (below 1024px) --> */}
                     <div className="lg:hidden w-[208px] h-[66px] flex justify-between items-center mt-4 mb-4 mx-auto p-[10px] bg-[#CAEF45] rounded-[10px]">
                       <p className="font-roboto-mono font-medium text-[16px] text-[#1D313C]">ALL Members</p>
                       <img src={AllMembersArrowImg} alt="All Members" className="w-[50px] md:w-[55px] h-[50px] md:h-[55px] rounded-full" />
                     </div>

                   </div>

                </Container>

                <div className='pt-16'>
                  <Container className='pt-16'>
                     <div className="w-full lg:w-1/2 mx-auto py-8">
                        <h1 className='text-5xl md:text-6xl text-center font-bold font-inter text-cloudone-blue pb-[10px]'><span className='text-cloudone-gradient-four'>See</span> Your Vision</h1>
                        <p className='leading-relaxed text-center text-cloudone-blue'>Innovation meets necessity with our cutting-edge drone solutions, addressing critical delivery and surveillance needs with precision and efficiency.</p>
                     </div>

                     <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-stretch">
                          
                        <div className="h-[627px] lg:col-span-2 lg:justify-self-stretch rounded-[24px] border-[2px] border-[#282828] flex flex-col">
                            <div className="flex-grow rounded-t-[24px] overflow-hidden">
                                <img src={Galaxia_Branding} alt="Galaxia Branding" className="w-full h-full object-fill block"  />
                            </div>
                            <div className="h-[68px] bg-[#1D313C] flex items-center justify-center rounded-b-[18px]">
                                {/* <p>CloudOne Lab</p> */}
                            </div>
                        </div>
                        <div className="h-[627px] lg:col-span-1 lg:justify-self-stretch rounded-[24px] border-[2px] border-[#282828] flex flex-col">
                            <div className="flex-grow rounded-t-[24px] overflow-hidden">
                                <img src={John_Mayer_Nyc}  alt="John Mayer Nyc" className="w-full h-full object-fill block" />
                            </div>
                            <div className="h-[68px] bg-[#1D313C] flex items-center justify-center rounded-b-[18px]">
                                {/* <p>John Mayer NYC</p> */}
                            </div>
                        </div>

                       
                        <div className="h-[627px] lg:col-span-1 lg:justify-self-stretch rounded-[24px] border-[2px] border-[#282828] flex flex-col">
                            <div className="flex-grow rounded-t-[24px] overflow-hidden">
                                <img src={Nayzak_Patterns} alt="Nayzak Patterns" className="w-full h-full object-fill block" />
                            </div>
                            <div className="h-[68px] bg-[#1D313C] flex items-center justify-center rounded-b-[18px]">
                                {/* <p>Nayzak Patterns</p> */}
                            </div>
                        </div>
                        <div className="h-[627px] lg:col-span-2 lg:justify-self-stretch rounded-[24px] border-[2px] border-[#282828] flex flex-col">
                            <div className="flex-grow rounded-t-[24px] overflow-hidden">
                               <img src={Crave_Chips} alt="Crave Chips" className="w-full h-full object-fill block" />
                            </div>
                            <div className="h-[68px] bg-[#1D313C] flex items-center justify-center rounded-b-[18px]">
                               {/* <p>Crave Chips</p> */}
                            </div>
                        </div>
                      </div>



                   </Container>
                </div>

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