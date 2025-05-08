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
            logOut({user:{},state:false})
            router.push('/')
        })
    }

    const userBox = [
        { id: 1, name: 'Profile', url: '/userbox/userprofile' },
        { id: 2, name: 'Setting', url: '/usersetting' },
        { id: 3, name: 'Contact', url: '/usercontact' },
        { id: 4, name: 'Help', url: '/userhelp' },
        { id: 5, name: 'Logout', url: '' }
    ]


    return (
        <div className='w-fit'>
            <div onClick={() => logohander()}
                className=' overflow-hidden flex place-content-center 
                    cursor-pointer place-items-center h-fit w-fit px-4 py-2 bg-[#55aafa] 
                    border rounded-sm  
                     hover:bg-gray-600 '
            >
                <span className='text-[10px] text-gray-900 font-bold'>{loginData.user.username}</span>
            </div>
            <div className={` absolute flex flex-col top-13 right-0 w-[30vw] sm:w-[20vw]  p-2 py-4 bg-gray-200 rounded-sm shadow-md shadow-gray-900
               overflow-hidden  transition-all duration-500 ease-in-out ${profilebox ? 'opacity-100 h-64 sm:h-64 ' : 'opacity-0 pointer-events-none h-0 sm:h-0 '}`}>
                    <div className='bg-amber-400  h-fit flex justify-center py-2'>logo</div>
                {
                    userBox.map((item) => {
                        return (
                            <div key={item.id}
                                onClick={() => userboxhandler(item.url)}
                                className=' inline box-content text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] px-1 my-1  text-black hover:text-blue-800 hover:border rounded-sm cursor-pointer'>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
