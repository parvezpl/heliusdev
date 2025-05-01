'use client'
import Sidebar from '@/nav/sidebar'
import ManiNav from '../../nav/main_nav'
import React, { useState } from 'react'

export default function main({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    console.log("sidebar")
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <ManiNav toggleSidebar={toggleSidebar} />
      <div className='flex '>
        <div className={`h-screen transition-all duration-300  ${!sidebarOpen ? 'w-0' : 'w-0 sm:w-[20vw]'}`} >
          <Sidebar isOpen={sidebarOpen} />
        </div>
        {children}
        
      </div>
    </>
  )
}
