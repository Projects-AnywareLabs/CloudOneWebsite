export default function HostDroneWorkshop() {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-2 mb-[10rem]">
        {/* Left Section: Image */}
        <div className="w-full h-full">
          <img
            src="/workshop.png" 
            alt="Drone Workshop"
            className="object-cover w-full h-full"
          />
        </div>
  
        {/* Right Section: Content */}
        <div className="bg-[#162D3D] text-white flex items-center p-8 md:py-16 md:px-10 3xl:px-16">
          <div>
            <h1 className="text-[40px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[45px] xl2:text-[50px] 2xl:text-[60px] 3xl:text-[65px] font-[700] font-inter leading-tight mb-6">
              Host a Drone Workshop at <span className="text-[#92C83E]">Your Institution</span>
            </h1>
            <p className="text-[#B9B9B9] font-inter font-[500] mb-8 text-[20px]">
            Interested in hosting a CloudOne AI Drone Bootcamp at your institution, or event? We’re actively conducting sessions across India and offer customizable sessions based on your audience and goals.
            </p>
            <button className="bg-[#84b634] text-[18px] text-white font-[600] font-inter px-8 py-3 rounded-xl hover:bg-green-500 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  