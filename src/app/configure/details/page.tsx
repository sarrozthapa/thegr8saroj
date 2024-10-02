'use client'
import React from 'react'

interface Props {
    searchParams:{
        [key:string]:string|string[]
    }
}
const Details = ({searchParams}:Props) => {
    console.log(searchParams)
  return (
    <div>Details</div>
  )
}

export default Details