import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import {motion} from 'framer-motion'
const HeroSection = () => {
  return (
    <section className="border-b-[1px] border-white/20 lg:pb-3">
        <MaxWidthWrapper className="pb-24 pt-10 flex flex-col items-center gap-4">
          
          <div className="flex items-center justify-center gap-2">
            <div className="bg-[#ffffe3] rounded-full relative h-12 w-12 lg:h-16 lg:w-16">
              <img alt='hero-image' src='/hero.png' className="absolute top-1.5 lg:left-1 w-12 h-12 lg:w-14 lg:h-14" />
            </div>
              <div className="text-box p-2.5 lg:p-4 text-[18px]">
                Hello, I&apos;m Saroj
              </div>
          </div>

          <div className="  items-center justify-center">
            <div className="text-[45px] leading-[45px] lg:text-[60px] lg:leading-[63px] flex flex-col items-center justify-center ">
                <p className="text-[#a477ff]">FRONT END</p>
                <p className="text-[#ffdb78]">DEVELOPER</p>
            </div>
          </div>

            <div className="flex justify-center items-center gap-6">
              
              <div className="text-xs lg:text-md">
                <div className="flex justify-cente items-center"><div className="h-3.5 w-[1px] bg-[#ffffe3] rotate-[30deg]"></div>
                <div className="h-3.5 w-[1px]  bg-[#ffffe3] rotate-[30deg] mr-2 ml-1"></div>
                Based in</div>
                <p>Kathmandu, Nepal</p>
              </div>

              <motion.div
              whileHover={{
                backgroundColor:'rgba(24,160,251)'
              }}
              transition={{
                duration:0.5,
                ease:"easeOut"
              }}
              className="text-box p-2.5 text-sm flex items-center gap-2 cursor-pointer">
                
                <motion.div 
                initial={{
                  scale:1,
                  opacity:10,
                  
                }}
                animate={{
                  scale:[1,1.1,1],
                }}
                transition={{
                  duration:1,
                  ease:'circIn',
                  repeat:10000,
                  
                }}
                className="h-4 w-4 bg-green-400 rounded-full">
                </motion.div>
                <p>Let&apos;s Connect</p>
              </motion.div>
            </div>

            <div className="flex flex-col text-center items-center mt-3 text-lg lg:text-2xl tracking-wide">
              <p>I create a digital experience that borders on</p>
              <p><span className='text-[#a477ff]'>efficiency</span>, <span className="text-[#ffdb78]">aesthetics</span> and <span className="text-[#17f3d2]">functionality</span>.</p>
            </div>
        </MaxWidthWrapper>
      </section>
  )
}

export default HeroSection