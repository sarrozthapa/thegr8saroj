'use client'
import BaiscsOfMotion from '@/components/BaiscsOfMotion';
import Gestures from '@/components/Gestures';
import LandingPageAnimation from '@/components/LandingPageAnimation';
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button';
import React, { useRef, useState } from 'react'

const Transitions = () => {
  
  return (
    <div className='min-h-screen flex justify-center items-center'>
      {/* <BaiscsOfMotion/> */}
      <LandingPageAnimation/>
    </div>
  )
}

export default Transitions