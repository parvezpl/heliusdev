'use client'
import React, { useState } from 'react'
import Servicebar from './Servicebar'
import { MdMenu } from "react-icons/md";

function adminLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <nav className='bg-green-950 h-10 flex justify-between items-center
                px-2 text-gray-200 border-b border-cyan-400 shadow-md'>
                <span>
                    <MdMenu onClick={()=>setSidebarOpen(!isSidebarOpen)} />
                </span>
                <div>
                    admin pannel
                </div>
                <div className='border px-2 rounded-sm hover:bg-green-900'>
                    logout
                </div>
            </nav>
            <div className='flex'>
                <Servicebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                {children}
            </div>
        </>

    )
}

export default adminLayout