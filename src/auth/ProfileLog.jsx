'use clint'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ProfileLog({ loginData, logOut }) {
    const [profilebox, setProfilebox] = useState(false)
    const [userData, setUserData] = useState('')
    const router = useRouter()
    const logohander = () => {
        setProfilebox(prev => !prev)
    }

    const userboxhandler = (url) => {
        if (url) {
            router.push(url, {
                query: { username: "parvez", _id: "1" }
            }
            )
            return
        }
        fetch('/api/auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()).then(result => {
            localStorage.removeItem('user')
            logOut({ state: false })
            router.push('/')
        })
    }

    const userBox = [
        { id: 1, name: 'profile', url: '/userbox/userprofile' },
        { id: 2, name: 'setting', url: '/usersetting' },
        { id: 3, name: 'contact', url: '/usercontact' },
        { id: 4, name: 'help', url: '/userhelp' },
        { id: 5, name: 'logout', url: '' }
    ]

    const ProfileBoxCom = () => {
        return (
            <div className={`flex absolute justify-center border-1 border-gray-900 shadow-md right-0 z-[99999] w-fit h-fit
             bg-gray-900 rounded-md p-1 m-1 top-12 sm:top-4 `}>
                <div className='flex relative flex-col gap-2 justify-center w-full m-[1px] p-2  rounded-md '>
                    {
                        userBox.map((item) => {
                            return (
                                <div key={item.id}
                                    onClick={() => userboxhandler(item.url)}
                                    className=' flex hover:text-blue-800 hover:bg-gray-900 hover:px-1 hover:rounded-sm cursor-pointer'>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='relative flex flex-col top-0 z-50'>
                <div onClick={() => { logohander() }}
                    className='  overflow-hidden flex place-content-center 
                    cursor-pointer place-items-center h-fit px-4 bg-[#c48b37] 
                    border rounded-sm shadow-md shadow-blue-300
                     hover:bg-gray-600 '
                >
                    <span className='text-[10px] text-gray-900 font-bold'>{loginData.user.username}</span>
                </div>
                <div className='relative' >
                    {
                        profilebox &&
                        ProfileBoxCom()
                    }
                </div>
            </div >
        </>

    )
}
