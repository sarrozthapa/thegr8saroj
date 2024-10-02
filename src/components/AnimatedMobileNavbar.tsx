'use client'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BriefcaseBusiness, FileText, House, MessageSquareDot } from 'lucide-react';
import { useRouter } from 'next/navigation';
const FIRST_DURATION=0.1;
const DELAY=0.05;
const NAV_ITEMS=[
    {
    name:'Home',
    link:'/',
    icon:<House/>
},
    {
    name:'My Projects',
    link:'/myprojects',
    icon:<BriefcaseBusiness/>
},
    {
    name:'About Me',
    link:'/aboutme',
    icon:<FileText/>
},
{
    name:'Contact Me',
    link:'/contactme',
    icon:<MessageSquareDot/>
},
]
const AnimatedMobileNavbar = ({setIsNavOpen}:any) => {
    const router=useRouter();
    return (
        <div className='fixed z-10 w-full bg-[rgb(14,16,15)] text-[#ffffe3] border-bottom '>
                    <div className='fixed top-0 left-0 h-full w-full z-0' onClick={()=>setIsNavOpen(false)}>
                    </div>
                    <MaxWidthWrapper className='z-100 relative w-full'>
                        <div className='flex flex-col gap-4 py-4'>
                            {
                                NAV_ITEMS.map((item,index)=>{
                                    return <motion.div 
                                    onClick={()=>{
                                        setIsNavOpen(false);
                                        router.push(item.link);
                                    }}
                                    key={index}
                                    className='flex justify-between border-[0.5px] border-white/30 hover:border-blue-400 transition-all rounded-lg py-4 px-4 text-lg cursor-pointer'
                                    initial={{
                                        scaleX:0,
                                        scaleY:0.5,
                                    }}
                                    animate={{
                                        scaleX:1,
                                        scaleY:1,
                                    }}
                                    transition={{
                                        duration:FIRST_DURATION+index*DELAY,
                                    }}
                                    >
                                    <Link href={item.link} className='' >{item.name}</Link>
                                    {item.icon}
                                    </motion.div>
                                })
                            }
                        
                        </div>
                    </MaxWidthWrapper>
     </div>
                                    
  )
}

export default AnimatedMobileNavbar