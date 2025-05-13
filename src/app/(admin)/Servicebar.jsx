'use client'
import React, { useEffect, useState } from 'react'
import useStore from '../../../store/useStore'
import { useRouter } from 'next/navigation'

export default function Servicebar({ isSidebarOpen, setSidebarOpen }) {
    const router = useRouter()

    const setCollection = useStore((state) => state.setCollection)
    const collectionHead = [
        { name: 'Users', rout: 'adminhome/users', api: 'api/user/head/headfetch' },
        { name: 'Payments',rout: 'adminhome/payments', api: 'api/user/payments/payment' },
        { name: 'Links' },
        { name: 'blogs' },
    ]

    const headheander = (value) => {
        setCollection(value)
        router.push(`/${value.rout}`)
    }

    return (
        <div className={`flex flex-col px-0.5 bg-green-400 text-black h-screen absolute sm:relative border z-999
           box-border w-45 sm:w-[20vw] md:w-[24vw] items-center overflow-hidden ${isSidebarOpen ? " hidden" : 'flex'}`}>
            <h1 className=' font-bold text-gray-900 '>User Data</h1>
            <div className='flex w-screen border-black border-2'></div>
            <div className='flex flex-col bg-green-400 items-start w-full h-full p-1 mt-1 overflow-auto '>
                {
                    collectionHead.map((value, index) => {
                        return (
                            <div key={index} className=' relative flex border flex-col cursor-pointer w-full h-fit  p-1 rounded-md'>
                                <div className='flex' onClick={() => headheander(value)} >
                                    <h1 className='inline h-fit text-center  text-blue-950 hover:text-blue-600 '>{value.name}</h1>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
