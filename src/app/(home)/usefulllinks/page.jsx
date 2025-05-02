'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { MdDelete } from "react-icons/md";
import ManiNav from '@/nav/main_nav';

function UseFullLinks() {
    const router = useRouter();
    const [addlinkshandler, setAddLinkshandler] = useState(false)
    const [getSuccsessSms, setSuccsessSms] = useState({})
    const [loading, setLoading] = useState(false)
    const [componnentLoading, setComponnentLoading] = useState(false)
    const [getLocalData, setLocalData] = useState(
        { user: null }
    )
    const [getlinkdata, setLinkdata] = useState([])

    useEffect(() => {
        const getlings = async () => {
            setComponnentLoading(true)
            const res = await fetch('/api/links/links')
            res.json().then((links) => {
                setLinkdata(links)
                setComponnentLoading(false)
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
        <div className=' relative flex flex-col  h-screen w-screen text-gray-950 bg-gray-300 items-center overflow-auto '>
            <nav className='flex justify-between px-2 items-center h-12 w-full bg-gray-500'>
                <div className='flex gap-4'>
                    <span onClick={() => router.back()} className='border px-2 rounded-sm hover:bg-blue-300'>Back</span>
                    <Link href={'/'} className='border px-2 rounded-sm hover:bg-blue-300'>Home</Link>

                </div>
                <button onClick={() => setAddLinkshandler(true)} className='border px-2 hover:bg-blue-300 rounded-sm capitalize'>add new links</button>
            </nav>
            {
                addlinkshandler && <AddLinksForm />
            }
            {getSuccsessSms?.sms && <div className='text-green-500 text-2xl flex justify-center bg-gray-800 w-64 p-1'>{getSuccsessSms?.sms}</div>}
            <h1 className='m-4 text-2xl font-bold underline capitalize'>use full links</h1>
            {
                componnentLoading ? <div className='text-center'>Loading...</div> :
                    getlinkdata?.length === 0 ? <div className='text-center'>No links found</div> :
                        <div className='flex flex-col gap-2 w-9/10 sm:w-7/10'>
                            {
                                getlinkdata?.map((item, index) => {
                                    return (
                                        <div key={index} className='flex justify-between items-center border px-2 py-1 rounded-sm break-all'>
                                            <div className='flex flex-col gap-1 '>
                                                <h1 className='text-lg font-bold'>{item.type}</h1>
                                                <h1 className='text-sm'>{item.description}</h1>
                                                <a href={item.links} target='_blank' rel="noopener noreferrer" className='flex  text-blue-500  underline'>{item.links}</a>
                                            </div>
                                            <span onClick={() => Deletehandler(item._id)} className='text-red-500 text-xl cursor-pointer'><MdDelete /></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
            }

        </div>
    )
}

export default UseFullLinks