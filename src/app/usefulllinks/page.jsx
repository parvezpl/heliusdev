'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { MdDelete } from "react-icons/md";

function UseFullLinks() {
    const router = useRouter();

    const [addlinkshandler, setAddLinkshandler] = useState(false)
    const [getSuccsessSms, setSuccsessSms] = useState({})
    const [getLocalData, setLocalData] = useState(
        { user: null }
    )
    const [getlinkdata, setLinkdata] = useState([])
    const data = [
        { type: "this is react icon linsk", links: "https://react-icons.github.io/react-icons/icons/ai/" }
    ]
    useEffect(() => {
        const getlings = async () => {
            const res = await fetch('/api/links/links')
            res.json().then((links) => {
                setLinkdata(links)
                console.log(links)
            })

        }
        getlings()
    }, [getSuccsessSms])


    useEffect(() => {
        const data = localStorage.getItem('user')
        setLocalData(JSON.parse(data))
    }, [])

    const AddLinks = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const res = await fetch('/api/links/links', {
            method: 'POST',
            body: JSON.stringify({ ...data, username: getLocalData.user.username }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await res.json()
        setSuccsessSms({ sms: "add succsessfully ", links: result.links })
        console.log(result)
    }
    function AddLinksForm() {
        return (
            <div className='flex w-6/8 justify-center bg-gray-400 mt-4 p-4 rounded-sm shadow-gray-900 shadow-md'>
                <form onSubmit={AddLinks} className='flex flex-col gap-4 m-2 rounded-sm bg-gray-300 p-4 w-6/10'>
                    <input type="text" name='type' placeholder='type' className='border px-2 py-1 rounded-sm' />
                    <input type="text" name='links' placeholder='links' className='border px-2 py-1 rounded-sm' />
                    <textarea name='description' placeholder='description' className='border px-2 py-1 rounded-sm h-32' />
                    <button type='submit' className='border px-2 hover:bg-blue-300 rounded-sm'>add</button>
                </form>
                <div>{getSuccsessSms?.sms}</div>
            </div>
        )
    }
    return (
        <div className='flex flex-col min-h-screen text-gray-950 bg-gray-300 items-center '>
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
            <h1 className='m-4 text-2xl font-bold underline'>use full links</h1>
            <div className=''>
                {
                    getlinkdata.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-row  gap-4 justify-between border p-4 m-2 bg-gray-400 rounded-sm shadow-md shadow-gray-900'>
                                <h1>{item.description}</h1>
                                <div className='flex gap-4 items-center'>
                                    <Link href={item.links} target="_blank" rel="noopener noreferrer" className=' border px-2 hover:bg-blue-400 rounded-sm'>click</Link>
                                    <span className=' cursor-pointer'><MdDelete className='text-2xl hover:text-red-500' /></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UseFullLinks