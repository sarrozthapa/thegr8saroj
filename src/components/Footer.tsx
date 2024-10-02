'use client'
import React, { useState, useTransition } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { useTransform } from 'framer-motion'
import { Progress } from './ui/progress'
import { Loader, Loader2 } from 'lucide-react'
import sharp from 'sharp'
import { useRouter } from 'next/navigation'

const Footer = () => {

  return (
    <footer className=' bg-[#0e100f] text-[#ffffe3] pb-3'>
        <MaxWidthWrapper>
            <div className='flex flex-col sm:flex-row sm:justify-between items-center px-2'>
                <h1>thegr8Saroj 2024 - Privacy Policy</h1>
                <h1>Kathmandu, Nepal</h1>
            </div>
        </MaxWidthWrapper>
    </footer>
  )
}

export default Footer