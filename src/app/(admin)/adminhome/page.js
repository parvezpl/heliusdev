'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function AdminHome() {
  const searchParams = useSearchParams()
  const useId = searchParams.get('id')
  const data = JSON.parse(useId)
  console.log(data)

  const edithandler = () => {

  }

  const deletehandler = () => {

  }
  return (
    <div className='flex flex-col bg-gray-300 text-neutral-900 h-screen w-screen box-border overflow-auto '>
      <h1 className='flex bg-amber-500 justify-center font-bold uppercase text-2xl'>{data?.username || data?.title || data?.type}</h1>
      <div className='w-full flex justify-center'>
        <div className='bg-gray-300 w-[80vw] h-full text-black '>
          {
            Object.keys(data).map((key) => {
              return (
                <div key={key} className='grid grid-cols-3 sm:text-[2vw] px-2'>
                  <div className='text-gray-900 font-bold w-32 capitalize'>{key}:</div>
                  <div className='text-gray-800 break-all '>
                    {

                      typeof (data[key]) === 'object' ?
                        data[key].map((res, index) => {
                          return (
                            <div key={index}
                              onClick={() => blogHandler(res)}
                              className='flex flex-row text-blue-800 cursor-pointer
                                      hover:bg-gray-500 px-2'>
                              <div>{res.title}</div>
                            </div>
                          )
                        }) :
                        data[key]
                    }

                  </div>
                  <div className=' flex justify-center gap-2 items-center'>
                    <button onClick={() => edithandler()} className=' cursor-pointer hover:text-blue-600 border px-4 rounded-sm h-fit '>edit</button>
                    <button onClick={() => deletehandler()} className=' cursor-pointer hover:text-blue-600'>delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
