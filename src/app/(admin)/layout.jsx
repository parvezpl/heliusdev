'use client'
import React, { useEffect, useState } from 'react'
import Servicebar from './Servicebar'
import { MdMenu } from "react-icons/md";
import Link from 'next/link';

function AdminLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const sidebarRef = React.useRef()
    const sidebarbtnRef = React.useRef()
    useEffect(() => {
        function handleClickOutside(event) {
            const isMobile = window.innerWidth <= 768;
            if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target) && !sidebarbtnRef.current.contains(event.target)) {
                setSidebarOpen(true)
            }
        }
        if (!isSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isSidebarOpen])




    return (
        <>
            <nav className='bg-green-950 h-10 flex justify-between items-center
                px-2 text-gray-200 border-b border-cyan-400 shadow-md'>
                <span ref={sidebarbtnRef}>
                    <MdMenu onClick={() => setSidebarOpen(!isSidebarOpen)} />
                </span>
                <div className=''>
                    <Link href={'/'}>Home</Link>
                </div>
                <div className='border px-2 rounded-sm hover:bg-green-900'>
                    logout
                </div>
            </nav>
            <div className='flex text-black'>
                <div ref={sidebarRef} >
                    <Servicebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                </div>
                {children}
            </div>
        </>

    )
}

export default AdminLayout