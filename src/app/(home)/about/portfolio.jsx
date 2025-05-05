'use client'
import React from 'react'
import reactlog from '@/app/(home)/about/image/reactlog.png'
import nodelogo from '@/app/(home)/about/image/nodelogo.png'
import javascritlogo from '@/app/(home)/about/image/javascritlogo.png'
import pythonlogo from '@/app/(home)/about/image/python.png'
import nextlogo from '@/app/(home)/about/image/nextlog.png'
import typescript from '@/app/(home)/about/image/typescript.svg'
import Image from 'next/image'

function Portfolio() {
  const itemBoxHandler = () => {
    console.log("hello")
  }
  return (
    <div className='flex flex-col w-full justify-center items-center box-border'>
      <div className='flex capitalize font-bold text-2xl'>web development skills required</div>
      <div className='flex flex-wrap items-center justify-center   md:flex-row gap-8 m-4'>
        <div className='shrink-1 min-w-50  w-[40vw] h-[30vh] bg-gray-800 border border-b-cyan-400 m-1 p-1 cursor-pointer flex justify-center items-center
      shadow-black shadow-md rounded-sm text-gray-200 hover:bg-gray-900'
          onClick={() => itemBoxHandler()}>
          <div className='flex flex-col justify-center items-center'>
            <p className=' text-green-700 font-bold  text-[20px] capitalize'>language  </p>
            <div className='flex gap-4 justify-center items-center'>
              <Image
                src={javascritlogo}  // Local image in the public/ directory
                alt="react"
                width={60}
                height={60}
                className=' h-fit inline'
              />
              <Image
                src={typescript}  // Local image in the public/ directory
                alt="react"
                width={34}
                height={34}
                className='bg-black h-fit'
              />
              <Image
                src={pythonlogo}  // Local image in the public/ directory
                alt="react"
                width={34}
                height={34}
                className='bg-gray-700 h-fit'
              />
            </div>
          </div>
        </div>
        <div className='shrink-1 min-w-50 w-[40vw] h-[30vh] bg-gray-800 border border-b-cyan-400 m-1 p-1 cursor-pointer flex justify-center items-center
      shadow-black shadow-md rounded-sm text-gray-200 hover:bg-gray-900'
          onClick={() => itemBoxHandler()}>
          <div className='flex flex-col justify-center items-center'>
            <p className=' text-yellow-700 font-bold  text-[20px] capitalize'>library </p>
            <div className='flex gap-9 justify-center items-center'>
              <Image
                src={reactlog}  // Local image in the public/ directory
                alt="react"
                width={20}
                height={20}
                className='bg-gray-200 h-[60px] w-[60px]'
              />
              <Image
                src={nextlogo}  // Local image in the public/ directory
                alt="react"
                width={60}
                height={30}
                className='bg-gray-200'
              />
            </div>
          </div>
        </div>
        <div className='shrink-1 min-w-50  w-[40vw] h-[30vh] bg-gray-800 border border-b-cyan-400 m-1 p-1 cursor-pointer flex justify-center items-center
      shadow-black shadow-md rounded-sm text-gray-200 hover:bg-gray-900'
          onClick={() => itemBoxHandler()}>
          <div className='flex flex-col justify-center items-center'>
            <p className=' text-gree-700 font-bold  text-[20px] capitalize'>library </p>
            <div className='flex gap-4 justify-center items-center'>
              <Image
                src={reactlog}  // Local image in the public/ directory
                alt="react"
                width={30}
                height={30}
              />
              <Image
                src={nodelogo}  // Local image in the public/ directory
                alt="react"
                width={60}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio