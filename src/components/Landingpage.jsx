//import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function Landingpage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-52 px-20">
        {["we create","eyes opeing","presentations"].map((item,index)=> {
                    return <div key={index} className="masker">
                        <div className="w-fit flex items-end overflow-hidden">
                            {index === 1 && (<div className="mr-2 w-[8vw] h-[5vw] rounded-md relative bg-red-500"></div>)}
                    <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Founders Grotesk'] font-medium">{item}</h1>
                      </div>
                      </div>
                })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=><p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>)}
            <div className="start flex items-center gap-2">
                <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">Start the Project</div>
                <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full"><MdArrowOutward /></div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage