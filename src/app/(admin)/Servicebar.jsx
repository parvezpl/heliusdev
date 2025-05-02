'use client'
import React, { useEffect, useState } from 'react'

export default function Servicebar() {
    const [getData, setData] = useState({})
    const [isActive, setIsActive] = useState(false)
    const [activeContent, setActiveContent] = useState({})
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const getAllData = async () => {
            const res = await fetch('api/getalldata/data')
            const data = await res.json()
            setData(data)
        }
        getAllData()
    }, [])

    // setActiveContent((prev) => {
    //     const exists = prev.find((val) => val.key === key)
    //     if (exists) {
    //         return prev.map(item => item.key === key ? { ...item, isActive: !item.isActive } : item)
    //     } else {
    //         return [...prev,
    //         {
    //             key: key,
    //             isActive: true,
    //             content: content
    //         }
    //         ]
    //     }
    const isOpen = (content, key) => {
        setActiveContent((prev) => {
            const exists = Object.keys(prev).find((prekey) => prekey === key)
            if (exists) {
                return { ...prev, [`${exists}`]: { ...prev[`${exists}`], isActive: !prev[`${exists}`].isActive } }
            } else {
                return {
                    ...prev,
                    [`${key}`]: {
                        isActive: true,
                        'content': content
                    }

                }
            }
        })

    }


    return (
        <div className='flex flex-col px-2 bg-gray-300 text-black h-screen w-[20vw] items-center'>
            <h1 className=' font-bold text-blue-950 underline'>User Data</h1>
            <div className='flex w-screen border-black border-2'></div>
            <div className='flex flex-col bg-amber-300 items-start w-full h-full px-1 mt-1 overflow-auto'>
                {
                    Object.keys(getData).length === 0 ? <div className='text-center'>Loading...</div> :
                        Object.keys(getData).map((key, index) => {
                            return (
                                <div key={index} onClick={() => isOpen(getData[key], key)} className=' relative flex w-full border flex-col cursor-pointer h-fit  p-1 rounded-md'>
                                    <div className='flex'>
                                        {
                                            activeContent[key]?.isActive ? <span className='text-green-800 text-2xl'>-</span> :
                                                <span className='text-green-800 text-2xl'>+</span>
                                        }
                                        <h1 className='inline h-fit text-center  text-blue-950 hover:text-blue-600 '>{key}</h1>
                                    </div>
                                    {
                                        activeContent[key]?.isActive &&
                                        <div className='flex flex-col relative left-4 '> 
                                            {


                                                activeContent[key]?.content?.map(useData => {
                                                    return (
                                                        <div key={useData._id} className=' hover:text-green-800 text-[0.9em] text-gray-800'>
                                                            {useData?.username || useData?.type || useData?.title}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    }

                                </div>
                            )
                        })
                    // getData?.map(item => {
                    //     return (<>
                    //         {
                    //             Object.keys(item).map(key => {
                    //                 return (
                    //                     <div key={key}>{key}</div>
                    //                 )
                    //             }
                    //             )
                    //         }
                    //     </>
                    //     )
                    // })
                }
            </div>
        </div>
    )
}
