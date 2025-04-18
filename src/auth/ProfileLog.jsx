'use clint'
import React, { useState } from 'react'

export default function ProfileLog({logOut}) {
    const [profilebox, setProfilebox] = useState(false)
    const logohander = () => {
        setProfilebox(prev => !prev)
    }

    const logouthandler =()=>{
        fetch('/api/auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()).then(result => {
            console.log("logout", result)
            logOut(false)
        })
    }
    const ProfileBoxCom = () => {
        return (
            <div className={`flex absolute justify-center border-1 border-gray-400 shadow-md shadow-gray-800 right-0 z-[99999] w-50 h-50 bg-zinc-300 rounded-md p-1 m-1 `}>
                <div className='flex relative flex-col gap-2 justify-center w-full m-[1px] p-2  rounded-md bg-gray-300'>
                    <div className=' flex hover:text-blue-800 hover:bg-zinc-400 hover:px-1 hover:rounded-sm cursor-pointer'>profile</div>
                    <div className=' flex hover:text-blue-800 hover:bg-zinc-400 hover:px-1 hover:rounded-sm cursor-pointer'>setting</div>
                    <div className=' flex hover:text-blue-800 hover:bg-zinc-400 hover:px-1 hover:rounded-sm cursor-pointer'>help</div>
                    <div className=' flex hover:text-blue-800 hover:bg-zinc-400 hover:px-1 hover:rounded-sm cursor-pointer'>contact</div>
                    <div onClick={()=>logouthandler()} className=' flex hover:text-blue-800 hover:bg-zinc-400 hover:px-1 hover:rounded-sm cursor-pointer'>logout</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='relative top-0 z-50'>
                <div onClick={() => { logohander() }} className='  overflow-hidden flex place-content-center cursor-pointer place-items-center h-8 w-8 bg-[#499ea9] rounded-2xl shadow-md shadow-gray-800
                hover:bg-gray-300 '
                >
                    <span className='text-[10px]'>logo</span>
                </div>
                {
                    profilebox &&
                    ProfileBoxCom()
                }
            </div >
        </>

    )
}
