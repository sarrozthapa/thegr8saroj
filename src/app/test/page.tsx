'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { ArrowUpWideNarrow } from 'lucide-react'
import NextImage from 'next/image'
import React, { useRef, useState } from 'react'
import { Rnd } from 'react-rnd'

const Page = () => {
  const imageDimensions={
    height:500,
    width:300,
  }
  const [renderedDimension,setRenderedDimension]=useState({
    width:imageDimensions.width,
    height:imageDimensions.height,
  })
  const [renderedPosition,setRenderedPosition]=useState({
    x:0,
    y:0,
  })
  const [testImage,setTestImage]=useState<any>(null);
  const phoneCaseRef=useRef<HTMLDivElement|null>(null);
  const containerRef=useRef<HTMLDivElement|null>(null);
  const [baseImg,setBaseImg]=useState<any>(null);
  async function saveConfiguration() {
    try {
      const {
        left: caseLeft,
        top: caseTop,
        width,
        height,
      } = phoneCaseRef.current!.getBoundingClientRect()

      const { left: containerLeft, top: containerTop,width:a,height:b } =
        containerRef.current!.getBoundingClientRect()

      const leftOffset = caseLeft - containerLeft
      const topOffset = caseTop - containerTop
      const actualX = renderedPosition.x - leftOffset
      const actualY = renderedPosition.y - topOffset
      
     
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      console.log(width,height,a,b);
      const userImage = new Image()
      userImage.crossOrigin = 'anonymous'
      userImage.src = '/me.png'
      console.log('before',userImage);
      console.log(typeof(userImage));
      await new Promise((resolve) => (userImage.onload = resolve))
      ctx?.drawImage(
        userImage,
        actualX,
        actualY,
        renderedDimension.width,
        renderedDimension.height,
      )
      const base64 = canvas.toDataURL()
      const base64Data = base64.split(',')[1]
      setBaseImg(base64);
      const blob = base64ToBlob(base64Data, 'image/png')
      const file = new File([blob], 'filename.png', { type: 'image/png' })
      setTestImage(file);
    } catch (err) {
      console.log(err)
    }
  }

  function base64ToBlob(base64: string, mimeType: string) {
    const byteCharacters = atob(base64)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray], { type: mimeType })
  }

  const tempImg=new Image();
  tempImg.src='/new.jpg';
  
  return (
    <MaxWidthWrapper className='p-10 lg:flex'>
      <div className='relative p-12 border-black border-2 mr-10'>

            <div  className=' h-[37rem] aspect-[896/1831] z-50 pointer-events-none'>
                <AspectRatio  ratio={896/1831}>
                    <NextImage alt='phone image' src="/phone-template.png" fill className='z-50' />
                </AspectRatio>
            </div>
            <div  className='absolute top-[3rem] left-[3rem] h-[37rem] aspect-[896/1831] z-40 pointer-events-none'>
                <AspectRatio ratio={896/1831}>
                    {
                      testImage&&<NextImage alt='phone image' src={URL.createObjectURL(testImage)} fill className='z-50' />
                    }
                </AspectRatio>
            </div>
      </div>
        <div ref={containerRef} className='p-12 relative overflow-hidden max-w-fit border-dashed border-2 border-gray-300'>
            <div  className=' h-[37rem] aspect-[896/1831] z-50 pointer-events-none'>
                <AspectRatio ref={phoneCaseRef} ratio={896/1831}>
                    <NextImage alt='phone image' src="/phone-template.png" fill className='z-50' />
                </AspectRatio>
            </div>
            <div className='absolute inset-0 h-[calc(37rem-2px)] aspect-[896/1831] top-[3rem] left-[3rem] pointer-events-none z-[60] rounded-[50px] bottom-px  shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]' />
          <div
            className={cn(
              'absolute inset-0 h-[calc(37rem-2px)] aspect-[896/1831] top-[3rem] left-[3rem] z-10 rounded-[50px]',
              'bg-black'
            )}
          />

          <Rnd default={
           { 
            x: 0,
            y: 0,
            height:imageDimensions.height,
            width:imageDimensions.width
          }
          
          }
          lockAspectRatio
          resizeHandleComponent={{
            topLeft:<div className='bg-black rounded-full w-5 h-5'></div>,
            topRight:<div className='bg-black rounded-full w-5 h-5'></div>,
            bottomLeft:<div className='bg-black rounded-full w-5 h-5'></div>,
            bottomRight:<div className='bg-black rounded-full w-5 h-5'></div>,
          }}
          className='z-[45]'

          onResizeStop={(_,__,ref,___,{x,y})=>{
            setRenderedDimension({
              height:parseInt(ref.style.height.slice(0,-2)),
              width:parseInt(ref.style.width.slice(0,-2))
            })
            setRenderedPosition({
              x,y
            })
          }}
          
          onDragStop={(_,data)=>{
            const{x,y}=data;
            setRenderedPosition({x,y});
          }}
          >
            <div className='h-full w-full pointer-events-none'>
                <NextImage alt='phone image' src="/me.png" fill className='border-2 border-black'/>
            </div>
          </Rnd>

        </div>
        <div className='h-[37.5rem] flex flex-col bg-white'>
          <ScrollArea className='relative flex flex-1 overflow-auto'>
            
          </ScrollArea>
        </div>
      <Button onClick={saveConfiguration}>
        Click
      </Button>
    </MaxWidthWrapper>
  )
}

export default Page