import React from "react";
// import  IISTImg from "../assets/Team-Member-Photo/team_member1.png";
import DrAravindImg from "../assets/Team-Member-Photo/team_member2.png";
import DrPriyadarshnamImg from "../assets/Team-Member-Photo/team_member3.png";
import SilvasterImg from "../assets/Team-Member-Photo/team_member4.png";
// import TarunKumarImg from "../assets/Team-Member-Photo/team_member5.png";
// import RoberMariaImg from "../assets/Team-Member-Photo/team_member6.png";
import RitikaJhagtaImg from "../assets/Team-Member-Photo/team_member7.jpg";
import VivinSilvaImg from "../assets/Team-Member-Photo/team_member8.jpg";
// import MemberImg from "../assets/Team-Member-Photo/team_member9.png";
// import SanjayKumarImg from "../assets/Team-Member-Photo/team_member10.jpg";
import RifinSilvaImg from "../assets/Team-Member-Photo/team_member11.jpeg";
import Linkedin from "../assets/Linkedin.png";
import AllMembersArrowImg from "../assets/all_members_button.png";


const teamData = {
  chiefPatrons: [
    // {
    //   name: "Robert Maria",
    //   role: "Founder Investor",
    //   description:
    //     "Experienced CEO and Managing Director with 24 years of practice\n Currently managing product development and IT companies spanning across Asia & Europe",
    //   image: RoberMariaImg,
    //   linkedin: null,
    // },
    // {
    //   name: "Joseph Francis",
    //   role: "Founder Investor",
    //   description:
    //     " Seasoned executive in overseeing finance strategy and operations\n Experience in operational setup of manufacturing entities of overseas companies in India",
    //   image: TeamMemberJosephFrancisImg,
    //   linkedin: null,
    // },
    {
      name: "Silvaster Antony",
      role: "Founder Investor",
      description:
        "30+ years of experience in building international business & management\n Currently CEO of ORGware Technologies and managing business across 10+ countries",
      image: SilvasterImg,
      linkedin: null,
    },
  ],
  patrons: [
    {
      name: "Vivin Silva",
      role: "Director",
      image: VivinSilvaImg,
      linkedin: "https://www.linkedin.com/in/vivin-silva",
    },
    {
      name: "Rifin Silva",
      role: "Director",
      image: RifinSilvaImg,
      linkedin: "https://www.linkedin.com/in/rifin-silva-2685591b9",
    },
  ],
  team: [
    {
      name: "Ritika Jhagta",
      role: "Chief Engineer (Jr.) & Operational Head",
      image: RitikaJhagtaImg,
      linkedin: "https://www.linkedin.com/in/ritika-jhagta-a653a4128",
    },
    // {
    //   name: "Kislay Tripathi",
    //   role: "System Engineer",
    //   image: KislayTripathiImg,
    //   linkedin: null,
    // },
    // {
    //   name: "Neteti Teja",
    //   role: "Control Engineer",
    //   image: TeamMemberNetetiTejaImg,
    //   linkedin: "https://www.linkedin.com/in/neteti-teja",
    // },
    // {
    //   name: "Vaishnavi Gupta",
    //   role: "Business Analyst",
    //   image: TeamMemberVaishnaviGuptaImg, 
    //   linkedin: "https://www.linkedin.com/in/vaishnavi-gupta",
    // },
  ],
  advisors: [
    {
      name: "Dr. Aravind Vaidyanathan",
      role: "Professor, IIST",
      description: "Expert in System Engineering & Propulsion",
      image: DrAravindImg,
      linkedin: "https://www.linkedin.com/in/aravind-vaidyanathan",
    },
    {
      name: "Dr. Priyadarshnam Hari",
      role: "Professor, IIST",
      description: "Expert in Avionics architecture and Space system",
      image: DrPriyadarshnamImg,
      linkedin: "https://www.linkedin.com/in/priyadarshnam-hari",
    },
    // {
    //   name: "Samridh Patial",
    //   role: "Strategy Advisor",
    //   image: TeamMemberSamridhPatialImg, 
    //   linkedin: "https://www.linkedin.com/in/samridh-patial",
    // },
    // {
    //   name: "Aman Kumar Rai",
    //   role: "R&D Advisor",
    //   image: TeamMemberAmanKumarRaiImg, 
    //   linkedin: "https://www.linkedin.com/in/aman-kumar-rai",
    // },
    // {
    //   name: "Yoga Hariharan",
    //   role: "R&D Advisor",
    //   image: TeamMemberYogaHariharanImg, 
    //   linkedin: "https://www.linkedin.com/in/yoga-hariharan",
    // },
  ],
};

const TeamMemberCard = ({ member }) => (
  <div className="w-full h-[644px] bg-[#1D313C] bg-[linear-gradient(to_bottom,_#1D313C_40%,_#1A1A1A_40%)] rounded-[15px] flex flex-col justify-around items-center py-4 px-6">
    <div className="flex flex-col items-center gap-[3.9px]">
      <p className="font-roboto font-medium text-[23px] text-[#F9EFEC]">
        {member.name}
      </p>
      <p className="font-roboto font-normal text-[17px] text-[#B3B3B2]">
        {member.role}
      </p>
      {member.description && (
        <p className="font-roboto font-normal text-[15px] text-[#B3B3B2] text-center">
          {member.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
    <div className="w-full h-auto max-w-[395px]">
      {member.name === "Rifin Silva" ? (
        <div className="h-[360px]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full bg-cover rounded-[15px]"
          />
        </div>
      ) : (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-auto rounded-[15px]"
        />
      )}
    </div>
    <div className="h-[50px] w-full flex justify-center items-center space-x-[9px]">
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="linkedin" />
      </a>
    </div>
  </div>
);

const Teams = () => {
  return (
    <div className="pt-16">
      <div className="space-y-6">
        <div className="w-full h-auto rounded-[15px] flex flex-col lg:flex-row justify-between items-center bg-[#CAEF45] p-4 md:p-[48px]">
          <p className="font-roboto font-semibold text-[24px] md:text-[31px] leading-[40px] md:leading-[54px] uppercase text-center lg:text-left">
            Meet the brilliant minds behind
            <span className="font-bold text-[40px] md:text-[60px] leading-[50px] md:leading-[70px]">
              {" "}
              CLOUDONE
            </span>
          </p>
          <div className="hidden lg:flex w-[208px] h-[66px] justify-between items-center">
            <p className="font-roboto-mono font-medium text-[16px] md:text-[19px] text-[#1D313C]">
              ALL Members
            </p>
            <img
              src={AllMembersArrowImg}
              alt="All Members"
              className="w-[50px] md:w-[66px] h-[50px] md:h-[66px] rounded-full"
            />
          </div>
        </div>

        <div className="pt-8">
          <h2 className="text-4xl font-bold text-center text-[#1D313C] mb-6">
            Chief Patrons
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
            {teamData.chiefPatrons.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        <div className="pt-8">
          <h2 className="text-4xl font-bold text-center text-[#1D313C] mb-6">
            Patrons
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
            {teamData.patrons.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
        <div className="pt-8">
          <h2 className="text-4xl font-bold text-center text-[#1D313C] mb-6">
            Team
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
            {teamData.team.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        <div className="pt-8">
          <h2 className="text-4xl font-bold text-center text-[#1D313C] mb-6">
            Advisors
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
            {teamData.advisors.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        <div className="lg:hidden w-[208px] h-[66px] flex justify-between items-center mt-4 mb-4 mx-auto p-[10px] bg-[#CAEF45] rounded-[10px]">
          <p className="font-roboto-mono font-medium text-[16px] text-[#1D313C]">
            ALL Members
          </p>
          <img
            src={AllMembersArrowImg}
            alt="All Members"
            className="w-[50px] md:w-[55px] h-[50px] md:h-[55px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Teams;
