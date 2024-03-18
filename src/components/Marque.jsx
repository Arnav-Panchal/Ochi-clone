import { motion } from 'framer-motion'
import React from 'react'

function Marque() {

  
  return (
    <div className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004d43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 gap-20 overflow-hidden flex whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear" , repeat: Infinity , duration :5}} className='text-[17vw] leading-none font-["Founders Grotesk"] uppercase -pt-6 pb-1 font-semibold'>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear" , repeat: Infinity , duration :5}} className='text-[17vw] leading-none font-["Founders Grotesk"] uppercase -pt-6 pb-1 font-semibold'>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear" , repeat: Infinity , duration :5}} className='text-[17vw] leading-none font-["Founders Grotesk"] uppercase -pt-6 pb-1 font-semibold'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marque