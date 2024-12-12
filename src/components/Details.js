import React from "react";

import DroneOverview from "../assets/DroneOverview.png";
import DroneOverviewMobile from "../assets/DroneOverviewMobile.png";
import ProductIcon from "../assets/productIcon.png";

import DGIDrone from "../assets/Drone pngs/Drone4.png";
const overviewCardsData = [
  {
    img: ProductIcon,
    title: "Autonomous Operations",
    desc: "Autonomous mission planning and payload delivery capability allowing for quick operational and logistics support",
  },
  {
    img: ProductIcon,
    title: "Enhanced Flight Efficiency",
    desc: "Foldable motor-arms with single and coaxial motor fittings allowing larger flight, range and payload envelope",
  },
  {
    img: ProductIcon,
    title: "Lightweight Durability",
    desc: "CarbonFibre and aluminum material for lighter and compact quadcopter footprint",
  },
];

const scrollToFooter = () => {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};
const specification = [
  {
    title: "Powertrain",
    spec: "Lithium Polymer (LiPo)",
  },
  {
    title: "Drive Motor",
    spec: "T-Motor ",
  },
  {
    title: "Maximum Altitude",
    spec: "5000 m (~16,500 ft)",
  },
  {
    title: "Maximum Speed",
    spec: "30 m/s (108 kmph)",
  },
  {
    title: "Endurance",
    spec: "40 minutes (Full Payload Capacity with 80% throttle conditioning)",
  },
];

const features = [
  { design: "Propeller", detail: "Carbon fiber propellors" },
  { design: "Airframe Configuration", detail: "Quadcopter" },
  { design: "Airframe Design :", detail: "Foldable Frame design" },
  { design: "Body Material :", detail: "Carbon Composite" },
];

const Details = () => {
  return (
    <div className=" py-4 sm:w-[80%]  mx-auto">
      <div className="flex flex-col items-center justify-center gap-2 text-center ">
        <div className="px-4 text-[44px] font-bold leading-tight ">
          UAV Delivery Drone: Abstract Overview
        </div>
        <p className="px-4 text-lg text-[#4B5162]/80 ">
          Autonomous mission planning and payload delivery capability allowing
          for quick operational and logistics support
        </p>
        <div className="hidden sm:flex ">
          <img src={DroneOverview} alt="drone-image" className="w-full" />
        </div>
        <div className="relative sm:hidden">
          <img
            src={DroneOverviewMobile}
            alt="drone-image"
            className="w-full bg-[#E3F1CE]"
          />
          <div className="bg-[#E3F1CE]  absolute w-full -z-10 top-40 h-20 "></div>
          <div className="flex flex-col gap-2 px-4">
            {features.map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#4B5162] px-4 py-4 rounded-md text-base text-left text-white "
                >
                  {data.design} <br />
                  <span className="font-bold text-[#92C83E]">
                    {data.detail}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-4 py-4 text-center">
        <div className="py-6 space-y-2 ">
          <h2 className="text-[44px] font-semibold leading-tight">
            PRODUCT OVERVIEW
          </h2>
          <p className="text-lg  px-6 text-[#4B5162]/80  xl:w-[60%] mx-auto">
            Our UAV system provides a unique architecture to host versatile
            payload carrying and delivery mission culpability.Prima facie
            features of the drone are:
          </p>
          <button onClick={scrollToFooter} className="px-6 py-3 bg-[#92C83E] font-medium  text-white rounded-2xl ">
            Get a demo
          </button>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          {overviewCardsData.map((data) => {
            return (
              <div
                key={data}
                className="px-4 py-3 hover:shadow-productOverViewCard  border border-white hover:border-[#92C83E] flex flex-col gap-3 rounded-2xl basis-1/3 "
              >
                <div className="flex items-center justify-start gap-4">
                  <img src={data.img} alt="card-image" className="w-6 h-6" />
                  <h2 className=" text-[#1C1F25] font-semibold text-lg">
                    {data.title}
                  </h2>
                </div>
                <p className="text-base  text-left text-[#4B5162]/80 ">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 px-4 py-12 sm:grid-cols-2">
        <div className="hidden sm:block">
          <img src={DGIDrone} alt="" className="w-[800px]   h-full " />
        </div>
        <div className="space-y-6">
          <p className="border-[#00000029] bg-[#F5F5F5] w-fit border shadow-combined rounded-md  uppercase py-2 px-4 font-semibold">
            How it works
          </p>
          <div className="flex flex-col gap-6">
            <h1 className="text-[44px] font-bold sm:leading-tight">
              PLATFORM SPECIFICATIONS HARDWARE & PERFORMANCE
            </h1>
            <p className="w-[60%]">
              Connect your stores and let us manage your sales tax compliance
              from start to
            </p>

            <div className="sm:hidden ">
              <img src={DGIDrone} alt="" className="w-[800px]   h-full " />
            </div>
            <div
              type="I"
              className="flex flex-col h-full gap-4 px-4 list-decimal list-inside"
            >
              {specification.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="border relative list-none border-[#00000014] rounded-md px-2 py-4"
                  >
                    <div
                      type="I"
                      className="absolute   w-6 h-6 flex items-center justify-center text-sm font-bold text-white bg-[#92C83E]  -left-3 top-4"
                    >
                      {index + 1}
                    </div>
                    <div className="pl-6 ">
                      <div className="text-xl font-bold">{data.title}</div>
                      <p className="text-sm  text-[#4B5162]/80">{data.spec}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
