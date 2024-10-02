import { WHATIDO } from '@/constants/HomePageConstants'
import React, { ReactNode, useRef } from 'react'
import {motion, useInView} from 'framer-motion'
interface props{
    title:string,
    index:number,
    description:string,
    color:string,
    icon:ReactNode
}
const DELAY=0.4;
const INITIAL_DELAY=0.3;
const WhatIDoCard = ({index,title,description,color,icon}:props) => {
    const ref=useRef<any>();
    const isInView=useInView(ref,{
        once:true,
    });
    console.log(isInView);
    return (
    <motion.div
    ref={ref}
    initial={{
        opacity:isInView?0:0,
    }}
    animate={{
        opacity:isInView?100:0,
    }}
    transition={{
        duration:0.2,
        delay:index*DELAY-(index*0.1)+INITIAL_DELAY,
        ease:'circIn',
    }}
    className='text-[#ffffe3] w-[100%] h-[300px] sm:w-[300px] md:h-[320px] md:w-[320px]  bg-[#191917] border-[0.5px] border-white/20 rounded-md px-4 py-8 flex justify-end flex-col gap-3'>
        <div className={``}
        style={{
            color:color
        }}
        >
            {icon}
        </div>
        <div style={{
            color:color
        }}
        className='text-md font-semibold'
        >{title}</div>
        <p className='text-[13px]'>{description}</p>
    </motion.div>
  )
}

export default WhatIDoCard