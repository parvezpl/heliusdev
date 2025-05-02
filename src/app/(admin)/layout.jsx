import React from 'react'
import Servicebar from './Servicebar'

function adminLayout({ children }) {
    return (
        <>
            <nav className='bg-green-950 h-10 flex justify-between items-center
                px-2 text-gray-200 border-b border-cyan-400 shadow-md'>
                <div>
                    admin pannel
                </div>
                <div className='border px-2 rounded-sm hover:bg-green-900'>
                    logout
                </div>
            </nav>
            <div className='flex'>
                <Servicebar />
                {children}
            </div>
        </>

    )
}

export default adminLayout