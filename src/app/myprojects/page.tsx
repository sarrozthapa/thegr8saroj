'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import { PROJECTS } from '@/constants/HomePageConstants'
import Link from 'next/link'
import { Router } from 'lucide-react'
import { useRouter } from 'next/navigation'
const Page = () => {
    const router=useRouter();
  return (
    <section className='min-h-screen py-4'>
        
            {
                PROJECTS.map((project,index)=>{
                    return <div key={index} className='' >
                                <div className='border-[1px] my-10 rounded-md border-white/20 lg:grid lg:grid-cols-2 px-2  py-4 flex flex-col lg:items-center'>
                <div className={` mb-4 md:min-h-[300px] min-h-[250px]  ${index%2&&'lg:order-last'} border-[2px] border-white/20 rounded-md p-[0.5px] `}>
                    <img src={project.image} className='object-cover  md:min-h-[200px]'/>
                </div>

                <div className='px-4'>

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
                        <h2>{PROJECTS[0].date}</h2>
                    </div>

                    <div className='border-color h-[1px] my-4'/>

                    <div>
                        {project.description.map((description,index)=>{
                            return <div key={index} className='flex items-center gap-2'>
                                <p className='h-1 w-1 bg-[#ffffe3]'/><p className='text-[15px] tracking-[0.5px] leading-8'>{description}</p>
                            </div>
                        })}
                    </div>
                    <div>
                        <Link href={project.url} target='_blank' className='cursor-pointer text-[#ffffe3] border-2 border-[#ffffff33]  rounded-full w-full py-2 flex items-center justify-center hover:text-blue-400 hover:border-blue-400 transition-all '>
                            Visit
                        </Link>
                    </div>
                </div>
            </div>
                    </div>
                })
            }
            
        
    </section>
  )
}

export default Page