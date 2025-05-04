"use client"

import React, { useEffect, useState } from 'react'
import ManiNav from '../../nav/main_nav'

function page() {
    const [getDatas, setDatas] = useState([null])
    const [formData, setFormData] = useState({ title: '', content: '' });
    const [getLocalData, setLocalData] = useState(
        { user: null }
    )

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data) {
            setLocalData(JSON.parse(data))
        } else {
            null
        }
    }, [])
    const submithandler = async (e) => {
        e.preventDefault()
        // console.log(getLocalData.user)
        const res = await fetch('/api/blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, user: getLocalData.user }),
        });
        const result = await res.json();
        if (result) {
            setDatas([result.blog])
        }
    }
    const getData = async () => {
        const res = await fetch(`/api/blog?id=${getLocalData.user._id}`)
        const result = await res.json();
        if (result) {
            // console.log("get", result.data.blogs)
            setDatas(result.data.blogs)
        }
    }
    return (
        <>
            <ManiNav />
            <div className='flex flex-col m-8 items-center  min-h-screen '>
                <h1 className=' capitalize text-2xl'>blog page</h1>
                <form className='flex flex-col gap-4 m-4 border w-[70%] p-4 h-fit justify-center items-center shadow-black shadow-md ' onSubmit={submithandler}>
                    <input type="text" placeholder="title"
                        name="title"
                        onChange={handleChange}
                        value={formData.name}
                        className=' outline-1 w-[40vw]' />
                    <textarea type="text" placeholder="content"
                        name="content"
                        onChange={handleChange}
                        value={formData.name}
                        className=' outline-1 w-[40vw] min-h-[200px]' />
                    <button type="submit"
                        className="  cursor-pointer border w-fit hover:bg-blue-200 px-2">save</button>
                </form>
                <div className='bg-gray-400 flex flex-col min-h-screen w-full p-2'>
                    <div className='flex flex-row gap-4'>
                        <h1>get blog data</h1>
                        <button onClick={() => getData()} className='cursor-pointer border w-fit hover:bg-blue-200 px-2'>get</button>
                    </div>
                    <div className='flex flex-col'>
                        {
                            getDatas?.map(res => {
                                if (res) {
                                    return (
                                        <div key={res?._id} className='flex flex-col p-4 border w-full'>{
                                            Object.keys(res).map((data) => {
                                                return (
                                                    <div key={data} className='p-4'>{res[data]}</div>
                                                )
                                            })
                                        }</div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default page