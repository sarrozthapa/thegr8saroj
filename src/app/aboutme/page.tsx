'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import {motion} from 'framer-motion'
import ExploreSection from '@/components/ExploreSection'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import MyTechStack from '@/components/MyTechStack'
const page = () => {
  return (
    <div className='pb-10 w-full pt-16 px-3'>
      <div className='flex gap-2'>
        <h1 className='font-normal text-[38px] tracking-wide leading-10'>Hello! I&#39;m Saroj</h1>
        <motion.div
          animate={{
           rotateZ:[-10,0,40,0],
          }}
          transition={{
            duration:1,
            ease:'linear',
            repeat:10000,
          }}
          >
            <img src='hand.png' className='h-12 w-12'/>
        </motion.div>
      </div>
      <h1 className='font-normal text-[38px] tracking-wide leading-10'>Crafting Digital Excellence</h1>
      <div className='border-color h-[1px] my-10'></div>
      <div className='flex flex-col sm:flex-row justify-between gap-10'>
        <h1 className='text-lg max-w-[600px] lg:text-2xl'>
          As a Software Engineer, I excel in building scalable applications, enhancing user experiences, and streamlining development processes.
        </h1>
        <p className='text-sm max-w-[350px]  tracking-wide'>
          My proficiency in design, coding, and interaction sets me apart within the domain of software engineering.
        </p>
      </div>
      <motion.div>
        <h1 className='mt-10 gap-[4px] flex justify-center text-2xl tracking-wide items-end font-[550] text-[#a477ff]'>I can help you with 
          <motion.div 
            initial={{
              opacity:0,
            }}
            animate={{
              opacity:[0,100,0],
            }}
            transition={{
              duration:1,
              repeat:1000,
            }}
            className='w-[7px] h-[7px] bg-[#a477ff] mb-2'/></h1>
            <motion.div className='flex mt-10 flex-col justify-center items-center sm:flex-row sm:justify-between'>
              <div className='flex flex-col max-w-[300px] md:max-w-[300px] lg:max-w-[500px]'>
                <p className='text-[#ffffff33]'>01</p>
                <span className='h-[0.5px] border-color mt-3 mb-6' />
                <h1 className='text-[28px]'>Development</h1>
                <p className='text-[15px] font-[300] mt-10'>I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions, and interaction. I use Next.js and React.js for development and incorporate GSAP and Framer Motion for animations</p>
              </div>
              <div className='flex flex-col max-w-[300px] md:max-w-[300px] lg:max-w-[500px]'>
                <p className='text-[#ffffff33]'>02</p>
                <span className='h-[0.5px] border-color mt-3 mb-6' />
                <h1 className='text-[28px]'>The full package</h1>
                <p className='text-[15px] font-[300] mt-10'>What sets me apart is my ability to deliver complete full-stack applications from concept to implementation. My keen eye for design, along with my expertise in frontend and backend development, including database integration, allows me to create exceptional projects</p>
              </div>
             
             
            </motion.div>
          </motion.div>
          <div className='relative my-[100px] '>
            <div className='h-[1px] border-color'/>
            <Link href='/contactme' className="h-[60px] absolute text-box p-4 top-[-30px] right-[30px] bg-[#0e100f] hover:bg-blue-500 transition-all md:right-[40px] lg:right-[50px] text-lg font-[40px] flex  items-center gap-4 hover:cursor-pointer ">Contact Me<ArrowRight className="w-7 h-7"/></Link>
          </div>
      <MyTechStack/>
      <ExploreSection/>
    </div>
  )
}

export default page