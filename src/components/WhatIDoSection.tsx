import React from 'react'
import WhatIDoCard from './WhatIDoCard'
import { WHATIDO } from '@/constants/HomePageConstants'

const WhatIDoSection = () => {
  return (
    <section className="pt-8">
        <p className="text-center text-2xl font-semibold text-[#a87aff] pb-4">WHAT I DO</p>
        <div className=" flex justify-center flex-wrap gap-8">
        {
          WHATIDO.map((value,index)=>{
            return (
              <WhatIDoCard key={index} index={index} {...value} />
            )
          })
        }
        </div>
      </section>
  )
}

export default WhatIDoSection