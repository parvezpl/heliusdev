'use client'
// import { unique } from 'next/dist/build/utils'
import React, { useEffect, useState } from 'react'

export default function Chromedata({ data }) {
    const [heading, setHeading] = useState([{ "more": "more" }])
    const [getData, setData] = useState(data.data)
    useEffect(() => {
        if (data.heading) {
            setHeading(data.heading)
        } else {
            setHeading([{ "more": "more" }])
        }
        setData(data.data)
        console.log("render")
    }, [data])

    function openDetail(e) {
        setData(Object.values(e)[0])
    }




    return (
        <div className='flex bg-gray-950 w-full  h-screen flex-col ml-1 p-4 text-gray-200' >
            <div className='flex w-full flex-col items-center overflow-auto'>
                <h1 className=' h-fit text-4xl font-bold m-2 text'> {data.name} </h1>
                <div className='flex flex-row w-full justify-between overflow-auto '>
                    <div className='flex w-full justify-center overflow-auto scrollbar-none '>
                        <div className=''>
                            {getData}
                            <div className='w-32 h-32 bg-amber-300'>
                                photos
                            </div>
                            <div className='w-32 h-32 bg-blue-300'>
                                photos
                            </div>
                            <div className='w-32 h-32 bg-amber-300'>
                                photos
                            </div>
                            <div className='w-32 h-32 bg-amber-300'>
                                photos
                            </div>
                            <div className='w-32 h-32 bg-amber-300'>
                                photos
                            </div>
                            <div className='w-32 h-32 bg-amber-300'>
                                photos
                            </div>
                        </div>
                    </div>
                    <div className='p-2 min-w-[250px] flex flex-col gap-2 underline border-l-1 border-blue-500
                     '>
                        {
                            heading.map((item, index) => {
                                return (<h1 key={index}
                                    onClick={() => openDetail(item)}
                                    className='hover:text-blue-900 cursor-pointer'>{Object?.keys(item)}</h1>)
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
