'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Servicebar({isSidebarOpen, setSidebarOpen}) {
    const [getData, setData] = useState({})
    const [isActive, setIsActive] = useState(false)
    const [activeContent, setActiveContent] = useState({})
    const [userData, setUserData] = useState({})
    const router =useRouter()

    useEffect(() => {
        const getAllData = async () => {
            const res = await fetch('api/getalldata/data')
            const data = await res.json()
            setData(data)
        }
        getAllData()
    }, [])

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
        <div className={`flex flex-col px-0.5 bg-green-400 text-black h-screen absolute sm:relative border
           box-border w-45 sm:w-[20vw] md:w-[24vw] items-center overflow-hidden ${isSidebarOpen ? " hidden":'flex'}`}>
            <h1 className=' font-bold text-gray-900 '>User Data</h1>
            <div className='flex w-screen border-black border-2'></div>
            <div className='flex flex-col bg-green-400 items-start w-full h-full p-1 mt-1 overflow-auto '>
                {
                    Object.keys(getData).length === 0 ? <div className='text-center'>Loading...</div> :
                        Object.keys(getData).map((key, index) => {
                            return (
                                <div key={index} className=' relative flex border flex-col cursor-pointer w-full h-fit  p-1 rounded-md'>
                                    <div className='flex' onClick={() => isOpen(getData[key], key)} >
                                        {
                                            activeContent[key]?.isActive ? <span className='text-green-800 text-2xl'>-</span> :
                                                <span className='text-green-450 text-2xl'>+</span>
                                        }
                                        <h1 className='inline h-fit text-center  text-blue-950 hover:text-blue-600 '>{key}</h1>
                                    </div>
                                    {
                                        activeContent[key]?.isActive &&
                                        <div className='flex flex-col  bg-green-520 px-2 m-1 ml-6 rounded-sm '> 
                                            {


                                                activeContent[key]?.content?.map(useData => {
                                                    return (
                                                        <div key={useData._id} onClick={()=>router.push(`/adminhome?id=${JSON.stringify(useData)}`)} className=' hover:text-green-800 text-[0.9em] text-gray-800'>
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
