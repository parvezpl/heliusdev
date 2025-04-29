'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDone } from "react-icons/md";
// import User from '../../../../../lib/schema/users';

function Page() {
    const [userData, setUserData] = useState({})
    const [getBlogData, setBlogData] = useState({})
    const [getUpdatePassword, setUpdatePassword] = useState('')
    const [editable, setEditable] = useState(false)
    const [updatasms, setUpdatasms] = useState(false)


    const handleInput = (e) => {
        console.log(e.target.innerText)
        setUpdatePassword(e.target.innerText);
    };

    const router = useRouter()
    const getBlog = async (data) => {
        const res = await fetch(`/api/blog?id=${data}`)
        return res
    }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user"))
        getBlog(data.user._id).then((res) => {
            res.json().then((item) => {
                setUserData(item.data)
            })
        })
    }, [])
    const blogHandler = async (res) => {
        console.log(res)
        setBlogData(res)
    }

    const edithandler = async (id) => {
        console.log(id)
        await fetch('/api/auth/userUpdate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                updatedPassword: getUpdatePassword
            })
        }).then((res) => {
            console.log(res)
            setEditable(false)
            setUpdatasms(true)
            setTimeout(() => {
                setUpdatasms(false)
            }, 2000)
        })
    }
    return (
        <div className=' flex flex-col bg-gray-200 h-auto w-auto border items-center p-2
        '>
            <div className=' text-2xl font-bold'>{userData.username} </div>
            <div className='flex mt-8 w-full min-h-lvh  flex-col p-2'>
                <div className='border'>
                    <div className='flex justify-center items-center border-b'>
                        <div className='grid grid-cols-2  p-4 text-[3vw]
                      justify-center items-center
                     sm:text-[16px]'>
                            <div className=''>user id : </div> <div>{userData._id}</div>
                            <div>user name :</div> <div>{userData.username}</div>
                            <div>user password: </div> <div className='flex gap-4 justify-between'>
                                <div className='relative'>
                                    <div className={`${editable && 'border px-2 w-[150px] rounded-sm bg-gray-300'}`}
                                        contentEditable={editable}
                                        suppressContentEditableWarning
                                        onInput={handleInput}
                                    >{userData.password}</div>

                                </div>
                                {
                                    !editable ?
                                        <div onClick={() => setEditable(true)} ><BiSolidEdit className=' cursor-pointer text-xl' /></div> :
                                        <div
                                            className=' fle cursor-pointer border px-1 hover:bg-blue-200'
                                            onClick={() =>
                                                edithandler(userData._id)
                                            } >done</div>
                                }
                                {
                                    
                                    updatasms && <div className='text-green-700 text-xl flex' ><MdOutlineDone /> : password updated</div>

                                }
                            </div>
                            <div>created date: </div> <div>{userData.updatedAt}</div>
                        </div>
                    </div>
                    <div className=' flex border-b justify-center '>meta data :</div>
                    <div className='grid grid-cols-12 '>
                        <div className=' col-span-4 flex text-justify  h-auto flex-col p-4'>

                            {/* take object and seprate key and value */}
                            {
                                Object.keys(userData).map((key) => {
                                    return (
                                        <div key={key} className='flex flex-row '>
                                            <div className='text-gray-900 font-bold w-32'>{key}:</div>
                                            <div className='text-gray-800 '>{

                                                typeof (userData[key]) === 'object' ?
                                                    userData[key].map((res, index) => {
                                                        return (
                                                            <div key={index}
                                                                onClick={() => blogHandler(res)}
                                                                className='flex flex-row text-blue-800 cursor-pointer
                                                             hover:bg-gray-500 px-2'>
                                                                <div>{res.title}</div>
                                                            </div>
                                                        )
                                                    }) :
                                                    userData[key]
                                            }</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='border-l col-span-8'>
                            <div className='flex items-center justify-center'>
                                <h1 className=' font-bold text-2xl border-b'>{getBlogData.title}</h1>
                            </div>
                            <div className='flex p-4'>
                                <p>{getBlogData.content}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page