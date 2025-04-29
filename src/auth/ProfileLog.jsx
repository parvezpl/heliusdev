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
        if(url){
            console.log(url,loginData )
            router.push(url, {
                query:{username:"parvez", _id:"1"}
            }
            )
            return
        }
        fetch('/api/auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()).then(result => {
            console.log("logout", result)
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
            <div className={`flex absolute justify-center border-1 border-gray-900 shadow-md shadow-green-800 right-0 z-[99999] w-50 h-50 bg-gray-900 rounded-md p-1 m-1 `}>
                <div className='flex relative flex-col gap-2 justify-center w-full m-[1px] p-2  rounded-md '>
                    {
                        userBox.map((item) => {
                            return (
                                <div key={item.id}
                                    onClick={() => userboxhandler(item.url)}
                                    className=' flex hover:text-blue-800 hover:bg-zinc-400 hover:px-1 hover:rounded-sm cursor-pointer'>
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
            <div className='relative top-0 z-50'>
                <div onClick={() => { logohander() }}
                    className='  overflow-hidden flex place-content-center 
                    cursor-pointer place-items-center h-8 w-8 bg-[#499ea9] 
                    rounded-2xl shadow-md shadow-gray-800
                     hover:bg-gray-300 '
                >
                    <span className='text-[10px]'>{loginData.user.username}</span>
                </div>
                {
                    profilebox &&
                    ProfileBoxCom()
                }
            </div >
        </>

    )
}
