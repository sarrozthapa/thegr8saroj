import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import {motion} from 'framer-motion'
import ExploreSection from '@/components/ExploreSection'
const page = () => {
  return (
    <div className=' px-2 pt-[100px] pb-[50px]'>
      
        <div className=''>
          <h1 className='text-[50px]'>Let&#39;s Connect!</h1>
          <div>
            <p className='leading-[28px]'>Whether you&#39;re looking to collaborate on a project, need a solution to a challenging problem, or just want to talk tech, feel free to reach out. Together, we can turn ideas into reality.</p>
          </div>
        </div>
        {/*Second section*/}
        <div className='px-4 py-8'>
        <Line/>
        {/*Name*/}
          <div className='mt-6 mb-10'>
            <div className='flex gap-4 items-center mb-2'> 
              <h2 className='text-[#ffffff33] font-light'>01</h2>
              <h1 className='text-[22px] '>What&#39; your name?</h1>
            </div>
            <input type='text' className='border-none text-blue-500  outline-none bg-transparent pl-8 text-[17px] font-[350]' placeholder='Ram Bahadur Thapa'/>
          </div>
          <Line/>
          {/*Email*/}
          <div className='mt-6 mb-10'>
            <div className='flex gap-4 items-center mb-2'> 
              <h2 className='text-[#ffffff33] font-light'>02</h2>
              <h1 className='text-[22px]'>What&#39; your email?</h1>
            </div>
            <input type='text' className='border-none text-blue-500  outline-none bg-transparent pl-8 text-[17px] font-[350]' placeholder='example@email.com*'/>
          </div>
          <Line/>
          {/*Organization*/}
          <div className='mt-6 mb-10'>
            <div className='flex gap-4 items-center mb-2'> 
              <h2 className='text-[#ffffff33] font-light'>03</h2>
              <h1 className='text-[22px] '>What&#39; the name of your organization?</h1>
            </div>
            <input type='text' className='border-none text-blue-500  outline-none bg-transparent pl-8 text-[17px] font-[350]' placeholder='Your organization'/>
          </div>
          <Line/>
          {/*Area of help*/}
          <div className='mt-6 mb-10'>
            <div className='flex gap-4 items-center mb-2'> 
              <h2 className='text-[#ffffff33] font-light'>04</h2>
              <h1 className='text-[22px] '>What specific area or task do you need help?</h1>
            </div>
            <input type='text' className='border-none text-blue-500  outline-none bg-transparent pl-8 text-[17px] font-[350]' placeholder='To improve the performance of a Next.js application'/>
          </div>
          <Line/>
          {/*Message*/}
          <div className='mt-6 mb-2'>
            <div className='flex gap-4 items-center mb-2'> 
              <h2 className='text-[#ffffff33] font-light'>05</h2>
              <h1 className='text-[22px] '>Your message</h1>
            </div>
            <input type='text' className='border-none text-blue-500  outline-none bg-transparent pl-8 text-[17px] font-[350]' placeholder='Hello Saroj, can you help me with..*'/>
          </div>
        </div>
        <div className='flex justify-end '>
          <button 
          className="hover:bg-blue-500 send-button transition-all text-box p-4 text-lg font-[40px] flex max-w-[170px] h-[70px] items-center gap-4 hover:cursor-pointer flex-"
          >
          Send it
          <ArrowRight className="w-7 h-7"/>
          </button>
        </div>
        
        <ExploreSection/>
    </div>
  )
}

const Line=()=>{
  return <div className='h-[1.7px] border-color w-full'/>
}

export default page