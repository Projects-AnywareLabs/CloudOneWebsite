import DroneTopView from "../assets/Drone pngs/Dronev1.png";

import { IoStar } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import { CiLock, CiWallet, CiShare1 } from "react-icons/ci";
import { PiReceiptLight } from "react-icons/pi";
import Container from "./Container";

import { ACCORDIAN_ITEMS } from "./constants";
import Testinonials from "./Testinonials";
import { useForm, ValidationError } from '@formspree/react';
// import AllMembersArrowImg from "../assets/all_members_button.png";

// import TeamMember2Img from "../assets/team_member2.png";
// import TeamMember3Img from "../assets/team_member3.png";
// import TeamMember4Img from "../assets/team_member4.png";
// import TeamMember5Img from "../assets/team_member5.png";
// import TeamMember7Img from "../assets/team_member7.jpg";
// import TeamMember8Img from "../assets/team_member8.jpg";
// import TeamMember9Img from "../assets/team_member9.jpg";
// import Rifin from "../assets/rifin.jpeg"
// import TeamMember10Img from "../assets/team_member10.jpg";
// import riffin_passport from "../assets/riffin_passport.jpeg"
// import riffin_passport from "/riffin_passport.jpeg"
// import TeamMember6Img from "../assets/team_member6.png";
// import Facebook from "../assets/facebook.png";
// import Twitter from "../assets/twitter.png";
// import Linkedin from "../assets/Linkedin.png";
// import Galaxia_Branding from "../assets/galaxia_branding.png";
// import John_Mayer_Nyc from "../assets/john_mayer_nyc.png";
// import Nayzak_Patterns from "../assets/nayzak_patterns.png";
// import Crave_Chips from "../assets/crave_chips.png";

import StarBorder from "../../src/components/StarBorder"
import Teams from "./Teams";

function About() {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <>
      <div className="h-fit bg-gradient-to-b from-cloudone-gradient-four/55 to-cloudone-gradient-four/0">
        <Container className="p-16 text-cloudone-blue lg:flex md:gap-8">
          <div className="overflow-hidden shadow-xl rounded-xl h-fit max-w-fit ">
            <div className="relative p-8 text-2xl font-extrabold text-white bg-cloudone-blue md:text-3xl">
              <h1 className="mr-8">Where AI Meets Robotics Excellence</h1>
              <div className="text-6xl rotate-90 absolute text-amber-300 bottom-[16px] right-[24px]">
                <IoStar />
              </div>
            </div>
            <div className="p-8 md:text-lg">
              <p>
                Our approach ensures that each system is both intelligent and
                highly capable, setting new standards in the industry.
              </p>
            </div>
          </div>
          <div>
            <h1 className="py-8 text-6xl font-black text-center uppercase text-cloudone-blue">
              Cloudone AI Robotics Lab
            </h1>
            <p className="leading-relaxed text-center">
              At CloudOne, we see drones not just as flying machines but as
              catalysts for transformation. With a firm commitment to innovation
              and a vision for the future, we are redefining the possibilities
              of what drones can accomplish in today’s rapidly evolving world.
            </p>
            <StarBorder onClick={scrollToFooter} className="shadow-2xl my-8 py-4 px-8 bg-[#20343c] font-bold rounded-lg text-gray-100 block mx-auto ">
              Get A Quote
            </StarBorder>
          </div>
          <div className="hidden w-full my-auto lg:block">
            <img
              className="w-full rotate-12"
              src={DroneTopView}
              alt="DroneTopView"
            ></img>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <h1 className="text-5xl font-bold text-center md:text-6xl text-cloudone-blue">
            <span className="text-cloudone-gradient-four">The Process</span> Of
            Your Vision
          </h1>
          <p className="leading-relaxed text-center text-cloudone-blue">
            Innovation meets necessity with our cutting-edge drone solutions,
            addressing critical delivery and the surveillance needs with
            precision and efficiency.
          </p>
          <div className="mx-auto w-[80%] grid gap-8 lg:gap-16 lg:grid-cols-3 mt-8">
            <div className="flex flex-col justify-between p-8 rounded-lg shadow-xl bg-cloudone-blue md:col-span-2">
              <h1 className="text-4xl font-bold text-center text-white md:text-5xl md:text-left">
                AI software for drone that handles all your needs.
              </h1>
              <button  onClick={scrollToFooter} className="flex items-center px-8 py-4 mx-auto mt-4 uppercase rounded-full w-fit md:mx-0 bg-cloudone-gradient-four text-nowrap">
                Get call from us{" "}
                <BiRightArrowAlt className="ml-2 rotate-[-45deg] text-2xl" />
              </button>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-xl jakarta-plus text-cloudone-blue">
              <div className="text-8xl ">
                <CiLock />
              </div>
              <h1 className="pt-4 text-lg font-bold">Security</h1>
              <p className="pt-4 leading-relaxed">
                Our drone security solutions offer robust protection against
                potential threats, ensuring safe operations in various
                environments. Advanced protocols and real-time monitoring keep
                your fleet secure and resilient.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-xl jakarta-plus text-cloudone-blue">
              <div className="text-8xl">
                <CiWallet />
              </div>
              <h1 className="pt-4 text-lg font-bold">
                Global Compliance and Customization
              </h1>
              <p className="pt-4 leading-relaxed">
                We ensure global compliance by thoroughly researching and
                adhering to drone regulations in every country. Our drones are
                custom-designed to meet these diverse legal requirements,
                ensuring seamless operation across different regions.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-xl jakarta-plus text-cloudone-blue">
              <div className="text-8xl ">
                <CiShare1 />
              </div>
              <h1 className="pt-4 text-lg font-bold">Scalable</h1>
              <p className="pt-4 leading-relaxed">
                Our solutions are designed to scale seamlessly with your needs,
                accommodating fleet expansions and evolving requirements
                effortlessly. This flexibility ensures that security and
                performance remain optimal as your operations grow
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-xl jakarta-plus text-cloudone-blue">
              <div className="text-8xl ">
                <PiReceiptLight />
              </div>
              <h1 className="pt-4 text-lg font-bold">Complete visibility</h1>
              <p className="pt-4 leading-relaxed">
                Gain complete visibility with our comprehensive oversight
                systems, providing real-time insights into drone operations and
                security. This enables proactive management and swift response
                to any issues or threats.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container className="pt-16">
          <Teams/>
        </Container>

        <div className="pt-16"></div>

        <div className="py-16">
          <Container>
            <h1 className="p-8 text-4xl font-medium text-gray-100 uppercase rounded-lg bg-cloudone-blue">
              Frequently Asked Questions
            </h1>
            <div className="lg:flex lg:gap-8">
              <div className="pt-8 lg:w-[50%]">
                {ACCORDIAN_ITEMS.map((item) => (
                  <Accordian question={item.question} answer={item.answer} />
                ))}
              </div>
              <ContactForm className="lg:w-[50%]" />
            </div>
          </Container>
        </div>
        <Testinonials />
      </div>
    </>
  );
}

const Accordian = ({ question, answer }) => (
  <details className="p-8 mt-4 text-gray-200 bg-cloudone-blue rounded-xl">
    <summary className="cursor-pointer">{question}</summary>
    <p className="pt-4 border-t-[1px] mt-4 border-black/20">{answer}</p>
  </details>
);
const ContactForm = ({ className }) => {
//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log("yo");
//   };

const [state, handleSubmit] = useForm("mwpkrqqq");
if (state.succeeded) {
  return (
      <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 border border-green-300" role="alert">
          <strong>Success!</strong> We will get in touch with you shortly!
      </div>
  );
}

  return (
    <div
      className={`p-8 h-fit flex-shrink-0 bg-cloudone-blue rounded-xl mt-8 text-gray-200 ${
        className === undefined ? "" : className
      }`}
    >
      <p className="uppercase">Ask your question</p>
      <div className="pt-4 border-t-[1px] mt-4 border-black/20">
        <form onSubmit={handleSubmit} id="contact">
          <fieldset className="mt-4">
            <label className="block mb-2 uppercase">Name</label>
            <input
              id="name"
              className="w-full p-4 rounded-lg text-cloudone-blue"
              placeholder="Enter your name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
               <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
        />
          </fieldset>
          <fieldset className="mt-4">
            <label className="block mb-2 uppercase ">Email</label>
            <input
              id="email"
              className="w-full p-4 rounded-lg text-cloudone-blue"
              placeholder="Enter your email"
              type="email"
              tabindex="2"
              required
            />
             <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </fieldset>
          <fieldset className="mt-4">
            <label className="block mb-2 uppercase">Your question</label>
            <textarea
              className="w-full p-4 rounded-lg text-cloudone-blue"
              rows="4"
              placeholder="Enter your question here ...."
              tabindex="5"
              required
            ></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </fieldset>
          <fieldset className="mt-4">
            <button
              className="w-full p-4 mt-2 text-lg font-bold text-[#20343c] bg-yellow-500  rounded-xl"
              type="submit"
              disabled={state.submitting}
            >
              Send
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default About;