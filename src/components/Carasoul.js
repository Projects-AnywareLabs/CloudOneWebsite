import { useState } from "react"
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

function Carasoul({ children }) {
    const [curr, setCurr] = useState(0)
    const prev = () => setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1))
    return (
        <div className="w-full md:w-2/4 overflow-hidden pt-8 md:pt-0">
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {children}
            </div>
            {/* Controls */}
            <div className="md:w-full bg-cloudone-gradient-four flex justify-between items-center px-4">
                <div className="flex  justify-between items-center ">
                   {
                        children.map((_,i) => (<span className={` ${curr === i ? "p-2" : "bg-opacity-50"} transition-all block w-[10px] h-[10px] m-1 bg-white rounded-full my-auto`}></span>))                         
                   }
                </div>
                <div>
                    <button onClick={prev} className="text-4xl text-white"><BiLeftArrowCircle /></button>
                    <button onClick={next} className="text-4xl text-white pl-4"><BiRightArrowCircle /></button>
                </div>
            </div>
        </div>
    )
}

export default Carasoul
