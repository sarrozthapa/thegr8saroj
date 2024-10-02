'use-client'
import React, { useRef } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { PROJECTS } from '@/constants/HomePageConstants'
import { TooltipContent, TooltipProvider } from '@radix-ui/react-tooltip'
import { Tooltip, TooltipTrigger } from './ui/tooltip'
import {motion, useInView} from 'framer-motion'
const MyProjects = () => {
  const ref=useRef<any>();
  const isInView=useInView(ref,{
    once:true,
  })
  const ref2=useRef<any>();
  const isInView2=useInView(ref2,{
    once:true
  })
  return (
    <section ref={ref} className='bg-[#0e100f] text-[#ffffe3] my-20'>
  
      <p className="text-center text-2xl font-semibold text-[#a87aff]">MY PROJECTS</p>
      <div>
        <div className='h-[1px] border-color mt-8'/>
      </div>
      {
      !isInView?<></>:
        <div ref={ref} className='md:grid md:grid-cols-2 lg:hidden gap-10 flex flex-col'>
          {PROJECTS.map((project,index)=>{
            return <motion.div
            initial={{
              opacity:0,
              translateX:-20,
            }}
            animate={{
              opacity:100,
              translateX:[-20,5,0]
            }}
            transition={{
              duration:1+1*index,
              ease:'linear',
              delay:0.5,
            }}
            key={index} className='cursor-pointer' onClick={()=>{window.open(project.url,'_blank')}}>
              <div>
              <div className={` mb-4 ${index%2&&'lg:order-last'} border-[2px] border-white/20 rounded-md p-[1px] `}>
                    <img src={project.image} className='object-cover min-h-[200px]'/>
                </div>
              </div>
              <div>
              <div className='flex justify-between'>
                        <div className=''>
                            <h1 className='text-[23px] font-[400] leading-5'>{project.title}</h1>
                            <div className='flex mt-2'>
                                {
                                    project.techStack.map((stack,index)=>{
                                            return <p key={index} className='text-xs font-light tracking-[0.5px]'>{stack}{index<PROJECTS[0].techStack.length-1?',':'..'}</p>
                                    })
                                }      
                            </div>
                        </div>
                        <h2>{project.date}</h2>
                    </div>
              </div>
            </motion.div>
          })}
        </div>
        } 
        {/*For large screens*/}
        
        <div ref={ref2}>
        {
  
        !isInView2?<></>:
        <div className='hidden lg:block min-h-3 min-w-3'>
          <div className=''>
            {
              PROJECTS.map((project,index)=>{
                return <motion.div 
                initial={{
                  opacity:0,
                }}
                animate={{
                  opacity:100,
                }}
                transition={{
                  ease:'linear',
                  duration:1+index*1,
                }}
                key={index} className=''>
                <TooltipProvider >
                  <Tooltip delayDuration={0.1}>
                    <TooltipTrigger className='w-full'>

                <div onClick={()=>{
                  window.open(project.url,'_blank');
                }} className='flex justify-between project-parent cursor-pointer h-[160px] items-center'>
                  <div className='flex flex-col project-left '>
                    <h1 className='text-[23px] font-[400] leading-5 project-title'>{project.title}</h1>
                    <h2 className='text-xs font-light'>{PROJECTS[0].date}</h2>
                  </div>

                    <div className='flex mt-2 project-right'>
                                {
                                  project.techStack.map((stack,index)=>{
                                    return <p key={index} className='text-sm font-light tracking-[0.5px]'>{stack}{index<PROJECTS[0].techStack.length-1?',':'..'}</p>
                                  })
                                }      
                     </div>
                  </div>
                     {
                       <div className='h-[2px] border-color'/>
                      }
            </TooltipTrigger>
            <TooltipContent>
              <p className='py-[4px] px-3 bg-blue-500 rounded-full'>{project.function}</p>
            </TooltipContent>
            </Tooltip>

                </TooltipProvider>
              </motion.div>
              })
            }
          </div>
        </div>
        }
        </div>
        </section>
  )
}

export default MyProjects