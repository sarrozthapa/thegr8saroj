'use client'
import React, { useRef } from 'react'
import { Button } from './ui/button'
import {motion,MotionConfig,useAnimationControls, useInView, useScroll, useTransform} from 'framer-motion'
import { Scale } from 'lucide-react'



const FIRST_DURATION=0.7;
const NORMAL_DURATION=0.2;
const TEXT=['Hola','Bonjour','Ola','Namaste']
const Z_INDEX=110;
const Gestures = () => {
  return (
    <div className=' w-full min-h-[100vh] bg-orange-500'>

    <motion.div
    style={{
      zIndex:Z_INDEX-1,
    }}
    animate={{
      height:0,
      minHeight:0,
    }}

    transition={{
      duration:0.5,
      ease:'circInOut',
      delay:FIRST_DURATION+NORMAL_DURATION*TEXT.length,
      
    }}

    className='bg-[#0e100f] fixed left-0 top-0 min-h-screen w-full '>
        <motion.div 
        initial={{
          display:'flex',
        }}
        animate={{
          display:'none',
        }}
        style={{
          zIndex:Z_INDEX
        }}
        transition={
          {
            duration:FIRST_DURATION,
          }
        }
        className={`bg-[#0e100f]   fixed top-0 left-0 text-white flex items-center justify-center min-h-[100vh] w-full`}>
          <motion.p
          initial={
            {
              opacity:0,
            }
          }
          animate={
            {
              opacity:100,
            }
          }
          transition={{
            duration:0.5,
            ease:'easeOut'
          }}
          className='text-5xl tracking-wider '>Hello</motion.p>
        </motion.div>    

        {
          TEXT.map((text,index)=>{
            return (
              <motion.div 
              key={index}
        initial={{
          display:'flex'
        }}
        animate={{
          display:'none'
        }}
        transition={
          {
            duration:(FIRST_DURATION+(index+1)*NORMAL_DURATION),
            ease:"easeIn",
          }
        }
        style={{
          zIndex:Z_INDEX-index-1,
        }}
        className={`bg-[#0e100f] fixed top-0 left-0 text-white flex items-center justify-center min-h-[100vh] w-full`
          
          
        }>
          <p className='text-5xl tracking-wider '>{text}</p>
        </motion.div> 
            )
          })
        }

      </motion.div>
        </div>
  )
}

export default Gestures