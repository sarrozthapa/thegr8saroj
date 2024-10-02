import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const InfoSection = () => {
  return (
        <section className="pt-20">
          <div className="flex gap-[50px] pb-10">
            <p className="text-lg lg:text-xl">Empowering success in the digital landscape. Together, we shape a visionary future, delivering on promises and continuously pioneering innovation.</p>
            <p className="text-[13px] font-[10px] tracking-wide">My blend of design, coding, and interaction expertise distinguishes me within the tech industry.</p>  
          </div>

          <div className="text-2xl font-semibold tracking-wide text-[#0ae949] border-bottom pb-4">
            <p>
              Coding the Future
            </p>
            <p>
              Architecting Innovation
            </p>
          </div>
          <div className="mt-10 min-h-[150px] flex justify-between items-center flex-col sm:flex-row gap-8">
            <div className="w-[360px] text-center sm:w-[400px] md:w-[450px] text-lg sm:text-md md:text-lg">I specialize in engineering bespoke solutions, consistently pushing the limits in each project, with an unwavering dedication to prioritizing excellence.</div>
            <div className="flex flex-col-reverse h-full">
              <Link href='/aboutme' className="hover:bg-blue-500 transition-all text-box p-4 text-lg font-[40px] flex  items-center gap-4 hover:cursor-pointer flex-">About Me<ArrowRight className="w-7 h-7"/></Link>
            </div>
          </div>
        </section>
  )
}

export default InfoSection