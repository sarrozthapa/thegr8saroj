'use client'
import { MoveRight } from 'lucide-react'
import React, { useRef } from 'react'
import AnimatedLinks from './AnimatedLinks'
import MaxWidthWrapper from './MaxWidthWrapper'
import {motion, useInView} from 'framer-motion'
import { useRouter } from 'next/navigation'
const DELAY=0.1;
const INITIAL_DELAY=0.2;
const DURATION=1.5;
const ExploreSection = () => {
  const ref=useRef<any>();
  const isInView=useInView(ref,{
      once:true,
  });
  console.log(isInView);
  const router=useRouter();
  return (
    <section ref={ref}>
      {!isInView?<>Contact Me</>:
    <MaxWidthWrapper>
      <div className="mt-8 grid md:grid-cols-4 gap-y-4 gap-x-[10%] sm:gap-x-[30%] md:gap-x-0 grid-cols-2 p-4 border-[0.5px] rounded-md border-white/20">
        <motion.p 
        className="text-lg font-semibold tracking-wide"
        initial={{
          translateX:-30,
          opacity:0,
        }}
        animate={{
          translateX:[-30,10,0],
          opacity:100,
        }}
        transition={{
          durtation:DURATION,
          delay:DELAY+INITIAL_DELAY,
        }}
        >Where <span className="text-[#fec5fb]">aesthetics</span> & <br/><span className="text-[#17f3d2]">funtionality</span> meet</motion.p>
        {/*Explore*/}
        <motion.div 
        className="flex flex-col gap-4"
        initial={{
          translateX:-30,
          opacity:0,
        }}
        animate={{
          translateX:[-30,10,0],
          opacity:100,
        }}
        transition={{
          durtation:DURATION,
          delay:DELAY+INITIAL_DELAY,
        }}
        >
          <h2 className="text-[#ff8809] font-semibold text-lg tracking-wide">Explore</h2>
          <div className="flex flex-col">
            <AnimatedLinks name="Home" link=""/>
            <AnimatedLinks name="About Me" link=""/>
            <AnimatedLinks name="Contact" link=""/>
          </div>
        </motion.div>
        {/*Follow Me*/}
        <motion.div 
        className="flex flex-col gap-4"
        initial={{
          translateX:-30,
          opacity:0,
        }}
        animate={{
          translateX:[-30,10,0],
          opacity:100,
        }}
        transition={{
          durtation:DURATION,
          delay:2*DELAY+INITIAL_DELAY,
        }}
        >
          <h2 className="text-[#17f3d2] text-lg font-semibold tracking-wide">Follow Me</h2>
          <div className="flex flex-col">
            <AnimatedLinks name="LinkedIn" link=""/>
            <AnimatedLinks name="Github" link=""/>
            <AnimatedLinks name="Gmail" link=""/>
          </div>
        </motion.div>

        {/*Contact me*/}
        <motion.div 
        className="flex flex-col gap-4 "
        initial={{
          translateX:-30,
          opacity:0,
        }}
        animate={{
          translateX:[-30,10,0],
          opacity:100,
        }}
        transition={{
          durtation:DURATION,
          delay:3*DELAY+INITIAL_DELAY,
        }}
        >
          <div onClick={()=>router.push('/contactme')} className="cursor-pointer flex items-center gap-4 explore">
          <div className="flex flex-col">
                <h1 className="explore-text blue-hover-text">Contact Me</h1>
                <span className="text-sm">Say Hello!</span>
              </div>
              <div className="explore-icon rounded-full flex items-center justify-center h-11 w-11 full-rounded-border">
                <MoveRight className="text-green-500 w-8 h-8 "/>
              </div>
          </div>
          <div className="w-[150px] h-[0.5px] border-color"></div>
          <div onClick={()=>router.push('/myprojects')} className="cursor-pointer flex items-center gap-4 explore">
          <div  className="flex flex-col">
                <h1 className="explore-text blue-hover-text">My Projects</h1>
                <span className="text-sm">Explore Projects</span>
              </div>
              <div className="explore-icon rounded-full flex items-center justify-center h-11 w-11 full-rounded-border">
                <MoveRight className="text-green-500 w-8 h-8 "/>
              </div>
          </div>
        </motion.div>
        
      </div>
    </MaxWidthWrapper>
}
  </section>
  )
}

export default ExploreSection