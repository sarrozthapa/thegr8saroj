import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {motion} from 'framer-motion'
const MyTechStack = () => {
  return (
    <section className='my-10'>
        <MaxWidthWrapper>
            <div className='flex gap-2 justify-center items-center flex-col text-center'>
                <h1 className=' text-2xl lg:text-3xl font-semibold text-[#a477ff]'>MY TECH STACK</h1>
                <p className='md:text-md lg:text-[23px]'>My expertise spans a diverse range of <span className='text-[#ffdb78]'>technologies,</span> enabling me to deliver comprehensive and <span className='text-[#0ae949]'>cutting-edge solutions</span> across various platforms.</p>
            </div>
           <div className='logos'>
                <div className='logos-before'/>
                {
                    [1,2].map((item,index)=>{
                        return  <div key={index} className='logos-slide'>
                        <div><img src='javascript.svg'/></div>
                        <div><img src='mongodb.svg'/>                     </div>
                        <div><img src='react.svg'/></div>
                        <div><img src='typescript.svg'/></div>
                        <div><img src='nextjs.svg'className='bg-white rounded-full p-1'/></div>
                        <div><img src='shadcn.png'/></div>
                        <div><img src='tailwind.svg'/></div>
                        <div><img src='postgresql.svg'/></div>
                        <div><img src='git.svg'/></div>
                        
                    </div>
                    })
                }
               
             <div className='logos-after'/>
           </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default MyTechStack