// import HeroDrone1 from "../assets/Drone pngs/Drone.png";
// import HeroDrone2 from "../assets/Drone pngs/Drone3.png";
// import HeroDrone3 from "../assets/Drone pngs/Dronev1.png";
import { MdLockReset } from "react-icons/md";
import { SiPayloadcms } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiRobot3Fill } from "react-icons/ri";
import Nimbus from "../assets/nimbus.png";
import NimbusEvtol from "../assets/nimbus-evtol-noveo.png";
import GroundStation from "../assets/groundstation.png";
import Cirrus from "../assets/cirrus-cx.png";
import AnywareLabs from "../assets/AnywareLabs.png";
import HapsDroneImage from "../assets/haps-drone.png";
const HapsDroneModel = "/drone-models/solar-drone.fbx";

export const SOCIAL_LINKS = {
  FACEBOOK: "https://www.facebook.com",
  INSTAGRAM: "https://www.instagram.com",
  X: "https://www.x.com",
};

export const ROUTES = [
  // {
  //     NAME:"Home",
  //     TO:"/"
  // },
  {
    NAME: "About Us",
    TO: "/about",
  },
  {
    NAME: "Products",
    TO: "/details",
    CHILDREN: [
      { NAME: "UAV Drone", TO: "/uav" },
      { NAME: "HAPS Drone", TO: "/haps" },
    ],
  },

  // {
  //     NAME:"Services",
  //     TO:"/services",
  //     DROPDOWN: [
  //         {
  //             NAME: "Drones as Service",
  //             TO: "/services/drones-as-service"
  //         },
  //         {
  //             NAME: "Others",
  //             TO: "/services/others"
  //         }
  //     ]
  // },
  {
    NAME: "Academics",
    TO: "/academics",
  },

  // {
  //     NAME:"AI Solutions",
  //     TO: "https://neurifytech.ai/",
  //     EXTERNAL: true
  // },

  {
    NAME: "Blogs",
    TO: "/blogs",
  },
];

export const CUSTOMERS_SATISFIED = "2,157";

export const TESTIMONIALS = [
  {
    name: "Leslie Alexander",
    role: "Orgware Technologies",
    star: 5,
    review:
      "Swarm Technologies based solutions were accurate and user-friendly system",
    image: AnywareLabs,
  },
  {
    name: "Jacob Jones",
    role: "AnywareLabs",
    star: 5,
    review: "Best survilance algorithm provided by cloudone",
  },
];

export const CARASOUL = [
  {
    mainTitle: "We believe that progress only happens when",
    subtext:
      "Constantly pushing the boundaries of what's possible with drones.",
    modelUrl: HapsDroneModel,
  },
];

export const FEATURES = [
  {
    main: "Persistent Surveillance and Monitoring",
    subtext:
      "HAPS can provide continuous aerial surveillance, monitoring large areas for days, weeks, or even months. This is useful for border security, disaster management, and environmental monitoring. ",
    icon: <MdLockReset />,
  },
  {
    main: "Telecommunication and Internet Services:",
    subtext:
      "HAPS can act as floating cell towers or communication relays, providing internet and mobile coverage to remote or underserved areas, acting as a substitute or backup to satellites.",
    icon: <SiPayloadcms />,
  },
  {
    main: "Remote Sensing",
    subtext:
      "Equipped with high-resolution cameras or sensors, HAPS can collect real-time data for agriculture, forestry, climate studies, and mapping, with greater flexibility and lower cost than satellites.",
    icon: <RiLockPasswordFill />,
  },
  {
    main: "Military and Strategic",
    subtext:
      "HAPS platforms can support military operations by offering ISR (Intelligence, Surveillance, and Reconnaissance), secure communication relays, and even electronic warfare capabilities in contested areas.",
    icon: <RiRobot3Fill />,
  },
];

export const PRODUCTS = [
  {
    name: "Haps",
    description:
      "Our UAV system provides a unique architecture to host versatile payload carrying and delivery mission culpability.​ Prima facie features of the drone are:​      ",
    features: [
      {
        title: "STRATO GLIDER ARCHITECTURE",
        description:
          "High AR glider base design capable of high-altitude flightallowing wide swath capture​        ",
      },
      {
        title: "DRONE CORE OUTLAY",
        description:
          "Indegionusly developed flight-core and comms networksystem with integrated end-to-end software drive​",
      },
      {
        title: "COMPOSITE EFFECTIVENESS",
        description:
          "Manufacturing and assembly process undertake 3D printing and winding technique",
      },
      {
        title: "MODULAR SYSTEM ARCHITECTURE",
        description:
          "Designed with a modular structure that supports diverse payload configurations, enabling a broad range of mission applications across different industries.",
      },
    ],
    image: HapsDroneImage,
  },
  {
    name: "Nimbus-X",
    description:
      "Our UAV system provides a unique architecture to host versatile payload carrying and delivery mission culpability.​ Prima facie features of the drone are:​      ",
    features: [
      {
        title: "Autonomous Payload Delivery",
        description:
          "Autonomous mission planning and payload delivery capability allowing for quick operational and logistics support​        ",
      },
      {
        title: "Swappable Motor-Arms ",
        description:
          "Swappable motor-arms with single and coaxial motor fittings allowing larger flight, range, and payload envelope​        ",
      },
      {
        title: "Lightweight and Compact Design  ",
        description:
          "Polycarbonate and aluminum material for lighter and compact quadcopter footprint",
      },
      {
        title: "Mission Flight ",
        description:
          "Pre-planned Path Follow and Delivery​ Multi-Drop and Release Capacity​ Emergency Safety Cover and Recover Capability​",
      },
    ],
    image: Nimbus,
  },
  {
    name: "Cirrus-CX",
    description:
      "Our CIRRUS surveillance drone provides a unique architecture to host versatile observation and detection payload in compact modular system making it capable of undertaking varied capacity missions. Prima facie features of the drone are:",
    features: [
      {
        title: "Versatile Observation Payload ",
        description:
          "Swappable observation payload which allows for versatile mission capability",
      },
      {
        title: "Coaxial Drone Architecture",
        description:
          "Coaxial drone architecture which allows for high degree of portability and versatility in terms of mission operation control​",
      },
      {
        title: "Advanced Mission Planning and Communication",
        description:
          "Unique flight mission planner and communication setup ensuring comprehensive situational awareness",
      },
      {
        title: "Swarm Operation",
        description:
          "Swarm operation enables multiple drones to work in coordination, performing complex tasks efficiently. Ideal for large-scale inspections and disaster response, it leverages real-time communication and data sharing",
      },
    ],
    image: Cirrus,
  },
  {
    name: "Nimbus eVTOL Noveo",
    description:
      "Our Nimbus eVTOL Noveo is ideal for rapid transport and logistics support, using a high-density polymer battery for efficient energy use. Its extended endurance and range suit critical tasks like medical evacuations and remote supply delivery. With substantial payload capacity, it serves well in emergency response and urban mobility.",
    features: [
      {
        title: "Transitional Propulsion​",
        description:
          "Single unit transitional propulsion system which is capable of undergoing hover and horizontal flight operation​        ",
      },
      {
        title: "Energy Architecture​",
        description:
          "Robust and redundant drive system which allows for energy storage swap between high density polymer battery and fuel cell system",
      },
      {
        title: "Lightweight Structure​​",
        description:
          "Advanced manufacturing, FDM and composite based build allows for overall lighter aircraft frame contributing to higher payload metric",
      },
      {
        title: "COTS Flight System​        ",
        description:
          "Flight avionics is taken COTS for ease of certification, easier integration and development of the eVTOL         ",
      },
    ],
    image: NimbusEvtol,
  },
  {
    name: "Cirrus Mobile Ground Station",
    description:
      "Mobile Ground Station in S/X/Ka Band for transmitting and receiving data from satellites.",
    features: [
      {
        title: "Multi-Integrable System",
        description:
          "COTS avionics are used for operational setup of mobile ground station for ease of market entry        ",
      },
      {
        title: "In-situ Power & Storage",
        description:
          "Power drive system and data collocation unit for robust and versatile operations",
      },
      {
        title: "Modular System",
        description:
          "Novel designed chip architecture allows for duplex correlay setup with individual work-station.",
      },
      {
        title: "Versatile System        ",
        description:
          "The transmission system and cover module are developed and fabricated using aluminum alloy allowing for robust development under different climatic conditions",
      },
    ],
    image: GroundStation,
  },
];

export const ACCORDIAN_ITEMS = [
  {
    question: "What types of drones do you offer?",
    answer:
      "We offer a range of drones, including consumer, commercial, and industrial models. Our drones are designed for various applications such as aerial photography, inspection, surveying, and delivery.",
  },
  {
    question: "Are your drones compliant with international regulations?",
    answer:
      "Yes, we ensure that all our drones are designed to meet regulatory requirements in different countries. We conduct thorough research to adhere to local laws and standards, ensuring seamless operation globally.",
  },
  {
    question: "What kind of support and maintenance services do you provide?",
    answer:
      "We offer comprehensive support and maintenance services, including troubleshooting, repairs, and regular updates. Our team is available to assist with any issues and ensure your drones operate efficiently.",
  },
  {
    question: "How long is the battery life of your drones?",
    answer:
      "Battery life varies depending on the model and usage. Typically, our drones offer endurance ranging from 30 to 75 minutes per flight. For specific details, please refer to the product specifications.",
  },
  {
    question: "Can your drones be customized for specific applications?",
    answer:
      "Yes, we provide customization options to tailor drones for specific applications and requirements. Whether it's for enhanced payload capacity, specialized sensors, or unique operational features, we can modify our drones to fit your needs.",
  },
  {
    question: "What are the key features of your drones?",
    answer:
      "Our drones come equipped with advanced features such as high-resolution cameras, autonomous flight capabilities, real-time data transmission, and scalable security solutions. Each model has unique features tailored to different use cases.",
  },
];
