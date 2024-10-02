'use client'
import { Image } from 'lucide-react';
import { useParams } from 'next/navigation';

import React, { useState } from 'react'
import Dropzone from 'react-dropzone';

const Id = () => {
    const params=useParams();
    console.log(params);
    const [image,setImage]=useState<any>([]);
    const onDropAccepted=(files)=>{
        setImage(files);
    }
  return (
    <div className='px-[50px] py-10'>
        {image.length?
            image.map((img:any,index:number)=>{
                return <img key={index} className='w-50 h-20 object-contain' src={URL.createObjectURL(img)} />
            })  
        :null}
        <Dropzone onDropAccepted={onDropAccepted}
        accept={{
            'image/png':['.png'],
            'image/jpeg':['.jpeg'],
            'image/jpg':['.jpg'],
        }}
        >
            {
                ({getRootProps,getInputProps})=>(
                    <div className=' text-center flex flex-col items-center justify-center h-[400px] bg-slate-100 rounded-lg shadow-md shadow-gray-700 w-full px-[50px]' {...getRootProps()}>
                        <input {...getInputProps()}/>
                        <Image className='hover:text-slate-400'/>
                        <p className='tracking-tight'>Drag drop or click to upload</p>
                    </div>
                )
            }
        </Dropzone>
    </div>
  )
}

export default Id