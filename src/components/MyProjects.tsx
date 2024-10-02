import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { PROJECTS } from '@/constants/HomePageConstants'
import { TooltipContent, TooltipProvider } from '@radix-ui/react-tooltip'
import { Tooltip, TooltipTrigger } from './ui/tooltip'

const MyProjects = () => {
  return (
    <section className='bg-[#0e100f] text-[#ffffe3] my-20'>
  
      <p className="text-center text-2xl font-semibold text-[#a87aff]">MY PROJECTS</p>
      <div>
        <div className='h-[1px] border-color mt-8'/>
      </div>
        <div className='md:grid md:grid-cols-2 lg:hidden gap-10 flex flex-col'>
          {PROJECTS.map((project,index)=>{
            return <div key={index} className='cursor-pointer' onClick={()=>{window.open(project.url,'_blank')}}>
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
            </div>
          })}
        </div>

        {/*For large screens*/}
        <div className='hidden lg:block'>
          <div className=''>
            {
              PROJECTS.map((project,index)=>{
                return <div key={index} className=''>
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
              </div>
              })
            }
          </div>
        </div>
        </section>
  )
}

export default MyProjects