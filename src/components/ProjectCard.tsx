import { motion,useInView } from 'framer-motion';
import React, { useRef } from 'react'

type Props={
    index:number,
    title:string,
    image:string,
    url:string,
    techStack:ReadonlyArray<string>,
}
const DELAY=0.4;
const ProjectCard = ({title,index,image,url,techStack}:Props) => {
    const ref=useRef<any>();
    const isInView=useInView(ref,{
        once:true,
    });
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
        delay:index*DELAY-(index*0.1),
        ease:'circIn',
    }}
    className='text-[#ffffe3] w-[100%] h-[300px] sm:w-[300px] md:h-[320px] md:w-[320px]  bg-[#191917] border-[0.5px] border-white/20 rounded-md px-4 py-8 flex justify-end flex-col gap-3'>
    </motion.div>
    )
}

export default ProjectCard