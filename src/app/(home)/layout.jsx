'use client'
import Sidebar from '@/nav/sidebar'
import ManiNav from '../../nav/main_nav'
import React, { useState } from 'react'

export default function Main({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <ManiNav toggleSidebar={toggleSidebar} />
      <div className='home-row'>
        <div className={`sidebar-wrap ${!sidebarOpen ? 'closed' : 'open'}`}>
          <Sidebar isOpen={sidebarOpen} />
        </div>
        <main className="admin-main">{children}</main>
      </div>
    </>
  )
}
