import React from 'react'
import Navoffice from './navoffice'

function Layout({children}) {
  return (
    <div className='flex flex-col w-full min-h-screen bg-amber-700 sm:flex-row box-border'>
        <Navoffice/>
        {children}
    </div>
  )
}

export default Layout