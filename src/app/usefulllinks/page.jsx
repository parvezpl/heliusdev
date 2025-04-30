'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { MdDelete } from "react-icons/md";

function UseFullLinks() {
    const router = useRouter();
    // console.log(process.env.NEXT_PUBLIC_DB_API_URL)
    const [addlinkshandler, setAddLinkshandler] = useState(false)
    const [getSuccsessSms, setSuccsessSms] = useState({})
    const [loading, setLoading] = useState(false)
    const [getLocalData, setLocalData] = useState(
        { user: null }
    )
    const [getlinkdata, setLinkdata] = useState([])

    useEffect(() => {
        const getlings = async () => {
            const res = await fetch('/api/links/links')
            res.json().then((links) => {
                setLinkdata(links)
            })

        }
        getlings()
    }, [loading])


    useEffect(() => {
        const data = localStorage.getItem('user')
        if (!data) {
            router.push('/')
            return
        }
        setLocalData(JSON.parse(data))
    }, [])

    const AddLinks = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        const res = await fetch('/api/links/links', {
            method: 'POST',
            body: JSON.stringify({ ...data, username: getLocalData?.user.username }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await res.json()
        setSuccsessSms({ sms: result.message, links: result.links })
        setAddLinkshandler(false)
        setLoading(!loading)
        setTimeout(() => {
            setSuccsessSms({ sms: "" })
        }, 5000)
    }

    const Deletehandler = async (id) => {
        console.log("id", id)
        const res = await fetch(`/api/links/links/?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await res.json()
        console.log(result)
        if (result) {
            setLinkdata(getlinkdata.filter((item) => item._id !== id))
            setSuccsessSms({ sms: "delete succsessfully" })
            setLoading(!loading)
            setTimeout(() => {
                setSuccsessSms({ sms: "" })
            }, 3000)
        }
    }

    function AddLinksForm() {
        return (
            <div className=' absolute z-50 top-10 flex flex-col w-7/8 sm:w-4/8 h-5/8 justify-center items-center border bg-gray-300 mt-4 p-0 sm:p-4 rounded-sm shadow-gray-900 shadow-xl'>
                <span onClick={() => setAddLinkshandler(false)}
                 className=' absolute top-0 right-0 mx-4 my-3 text-2xl text-red-800 font-bold text-shadow text-shadow-md
                 hover:text-red-900 cursor-pointer'
                 >X</span>
                <form onSubmit={AddLinks} className='flex flex-col gap-4 m-0 sm:m-2 rounded-sm  p-4 w-9/10 sm:w-7/10'>
                    <input type="text" name='type' placeholder='type' className='border px-2 py-1 rounded-sm' required />
                    <input type="text" name='links' placeholder='links' className='border px-2 py-1 rounded-sm' required />
                    <textarea name='description' placeholder='description' className='border px-2 py-1 rounded-sm h-32' />
                    <button type='submit' className='border px-2 hover:bg-blue-300 rounded-sm'>add</button>
                </form>
            </div>
        )
    }
    return (
        <div className=' relative flex flex-col min-h-screen text-gray-950 bg-gray-300 items-center '>
            <div className='flex justify-between px-2 items-center h-12 w-full bg-gray-500'>
                <div className='flex gap-4'>
                    <span onClick={() => router.back()} className='border px-2 rounded-sm hover:bg-blue-300'>back</span>
                    <Link href={'/'} className='border px-2 rounded-sm hover:bg-blue-300'>home</Link>

                </div>
                <button onClick={() => setAddLinkshandler(true)} className='border px-2 hover:bg-blue-300 rounded-sm'>add new links</button>
            </div>
            {
                addlinkshandler && <AddLinksForm />
            }
            {getSuccsessSms?.sms && <div className='text-green-500 text-2xl flex justify-center bg-gray-800 w-64 p-1'>{getSuccsessSms?.sms}</div>}
            <h1 className='m-4 text-2xl font-bold underline'>use full links</h1>
            <div className='flex  w-full justify-center items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit  p-2 '>
                    {
                        getlinkdata.map((item, index) => {
                            return (
                                <div key={index} className=' relative flex flex-row  gap-4 justify-between border p-4 m-2  rounded-sm shadow-md shadow-gray-900'
                                     >
                                    <h1>{item.type}</h1>
                                    <div className='flex gap-4 items-center'>
                                        <Link href={item.links} target="_blank" rel="noopener noreferrer" className=' border px-2 hover:bg-blue-400 rounded-sm'>click</Link>
                                        {getLocalData.user?.role === "admin" && <span onClick={() => Deletehandler(item._id)} className=' cursor-pointer'><MdDelete className='text-2xl hover:text-red-500' /></span>}
                                    </div>
                                    <div className='absolute translate-8 left-0 rounded-sm w-64  bg-gray-800 opacity-0 hover:opacity-100 transition-opacity  duration-300 ease-in-out flex justify-center items-center'>
                                        <div className='w-64 h-32 text-gray-200 bg-gray-700 p-2 rounded-sm'>
                                            <h1 className='text-xl text-green-500 font-bold flex justify-center underline'>description</h1>
                                            <p className='text-sm'>{item.description}</p>
                                            <p className='text-sm'>{item.links}</p>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UseFullLinks