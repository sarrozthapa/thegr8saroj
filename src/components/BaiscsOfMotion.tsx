'use client'
import React, { useState } from 'react'
import {easeIn, motion, useInView,AnimatePresence} from 'framer-motion'
import { Button } from './ui/button'
const BaiscsOfMotion = () => {
    const [show,setShow]=useState<boolean>(true);

  return (
    <div>
            <AnimatePresence
        mode="popLayout"
        >

        {show&&
        <motion.div 
        initial={{
            backgroundColor:"black",
            scale:0
        }
    }
    animate={{
        backgroundColor:'red',
        scale:2,
    }}
    exit={{
        rotate:"0deg",
        scale:0,
        y:0,
    }}
    transition={{
        duration:5,
       
    }}
    className='w-[150px] h-[150px] bg-black'>

        </motion.div>
}
            </AnimatePresence>
    </div>
  )
}

export default BaiscsOfMotion