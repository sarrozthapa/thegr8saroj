import Link from 'next/link'
import React from 'react'

type Props={
    name:string,
    link:string,

}
const AnimatedLinks = ({name,link}:Props) => {
  return (
    <Link href={link} className='text-[#ffffe3]  text-[17px] flex items-center gap-[3px] transition-all duration-100 hover:text-blue-400 hover:cursor-pointer font-[450]'>{name}</Link>
  )
}

export default AnimatedLinks