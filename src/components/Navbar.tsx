'use client'
import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button';
import { ArrowRight, BriefcaseBusiness, FileText, House, MessageSquareDot, X } from 'lucide-react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {easeIn, motion} from 'framer-motion'
import AnimatedMobileNavbar from './AnimatedMobileNavbar';
const Navbar = () => {
    const user=undefined;
    const isAdmin=undefined;
    const [isNavOpen,setIsNavOpen]=useState<boolean>(false);
  return (
    <>
    <nav className='sticky z-[100] py-3 top-0 border-b-[0.2px] border-white/20 bg-[#0e100f] text-[#ffffe3] backdrop-blur-lg transition-all'>
        
            <div className='flex  items-center justify-between'>
                <Link href='/' className='flex items-center justify-center gap-2 z-40 text-[16px] font-medium  border-[0.5px] border-white/20 hover:border-blue-500 transition-all p-2 rounded-full'><span className='w-[14px] h-[14px] rounded-full bg-[#ffffe3]'></span>thegr8Saroj</Link>
                
                <div className=' items-center space-x-4 border-[0.5px] border-white/20 p-3 rounded-full hidden md:flex'>
                    <Link href='/' className='text-[#ffffe3]  text-[15px] flex items-center gap-[3px] transition-all duration-100 hover:text-blue-400 hover:cursor-pointer font-[450]'><House className='h-[13px] w-[13px] '/>Home</Link>
                    <Link href='/myprojects' className='text-[#ffffe3]  text-[15px] flex items-center gap-[3px] transition-all duration-100 hover:text-blue-400 hover:cursor-pointer font-[450]'><BriefcaseBusiness className='h-[13px] w-[13px] '/>My Projects</Link>
                    <Link href='/aboutme' className='text-[#ffffe3]  text-[15px] flex items-center gap-[3px] transition-all duration-100 hover:text-blue-400 hover:cursor-pointer font-[450]'><FileText className='h-[13px] w-[13px] '/>About Me</Link>
                </div>
                <Link href='/contactme' className='hidden md:flex items-center justify-center  z-40 text-[15px] font-[450]  border-[0.5px] border-white/20 p-2 rounded-full transition-all duration-100 hover:text-blue-400 hover:cursor-pointer gap-1'><MessageSquareDot className='h-[13px] w-[13px]'/>Contact Me</Link>
                <div className='md:hidden cursor-pointer' onClick={()=>setIsNavOpen((state)=>!state)}>
                    {isNavOpen?
                    <motion.div>
                        <X className='h-7 w-7 text-[#ffffe3]'/>
                    </motion.div>:
                    <motion.div>
                        <HamburgerMenuIcon className='h-7 w-7 text-[#ffffe3]'/>
                    </motion.div>
                    }

                </div>
            </div>
       
    </nav>
    {
                isNavOpen&&
                <AnimatedMobileNavbar setIsNavOpen={setIsNavOpen}/>
            }
                    </>
  )
}

export default Navbar