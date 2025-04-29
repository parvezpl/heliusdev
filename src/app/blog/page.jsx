"use client"

import React, { useEffect, useState } from 'react'
import ManiNav from '../../nav/main_nav'

function page() {
    const [getDatas, setDatas] = useState([null])
    const [formData, setFormData] = useState({ title: '', content: '' });
    const [getLocalData, setLocalData] = useState(
        {user:null}
    )

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    useEffect(() => {
        const data = localStorage.getItem('user')
        if(data){
            setLocalData(JSON.parse(data))
        }else{
          null  
        }
    },[])
    const submithandler = async (e) => {
        e.preventDefault()
        console.log(getLocalData.user)
        const res = await fetch('/api/blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, user:getLocalData.user }),
        });
        const result = await res.json();
        if (result) {
            setDatas([result.blog])
        }
    }
    const getData = async () => {
        const res = await fetch('/api/blog', {
            method: 'GET',
            // headers: { 'Content-Type': 'application/json' },
        })
        const result = await res.json();
        if (result) {
            console.log("get", result.data)
            setDatas(result.data)
        }
    }
    return (
        <>
            <ManiNav />
            <div className='flex flex-col m-8 items-center w-screen h-screen'>
                <h1>blog page</h1>
                <form className='flex flex-col gap-4 m-4' onSubmit={submithandler}>
                    <input type="text" placeholder="title"
                        name="title"
                        onChange={handleChange}
                        value={formData.name}
                        className=' outline-1' />
                    <input type="text" placeholder="content"
                        name="content"
                        onChange={handleChange}
                        value={formData.name}
                        className=' outline-1' />
                    <button type="submit"
                        className=" cursor-pointer border w-fit hover:bg-blue-200 px-2">save</button>/
                </form>
                <div>
                    <h1>get blog data</h1>
                    <button onClick={() => getData()} className='cursor-pointer border w-fit hover:bg-blue-200 px-2'>get</button>
                    <div className='flex flex-col'>
                        {
                            getDatas?.map(res => {
                                if (res) {
                                    return (
                                        <div key={res?._id} className='flex p-4 border'>{
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