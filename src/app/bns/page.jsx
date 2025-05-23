'use client'
import React, { useEffect, useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function Page() {
    const [bns, setBns] = useState()
    const [act, setAct] = useState()
    const [chapterdetail, setChapterdetail] = useState()
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    const chapter = [
        { id: 1, name: "chapter 1" },
        { id: 2, name: "chapter 2" },
        { id: 3, name: "chapter 3" },
        { id: 4, name: "chapter 4" },
        { id: 5, name: "chapter 5" },
        { id: 6, name: "chapter 6" },
        { id: 7, name: "chapter 7" },
        { id: 8, name: "chapter 8" },
        { id: 9, name: "chapter 9" },
        { id: 10, name: "chapter 10" },
        { id: 11, name: "chapter 11" },
        { id: 12, name: "chapter 12" },
        { id: 13, name: "chapter 13" },
        { id: 14, name: "chapter 14" },
        { id: 15, name: "chapter 15" },
        { id: 16, name: "chapter 16" },
        { id: 17, name: "chapter 17" },
        { id: 18, name: "chapter 18" },
        { id: 19, name: "chapter 19" },
        { id: 20, name: "chapter 20" },

    ]
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/bns/bnsen')
            const data = await res.json()
            setBns(data.bnsen.detail)
            // setAct(data.bnsen.detail)
            // console.log(data)
        }
        fetchData()
    }, [])
    const searchhandler = async (e) => {
        const search = e.target.value
        const res = await fetch('/api/bns/bnssearch?search=' + search)
        if (res.ok) {
            const datas = res.json()
            datas.then((data) => {
                setBns(data.bns)
            })
        }
    }

    const chapterhanler = async (id) => {
        console.log(id)
        const res = await fetch('/api/bns/bnschapter?search=' + id)
        if (res.ok) {
            const data = await res.json()
            console.log(data.chapter)
            setBns(data.chapter)
        }
    }

    const rthandler = () => {
        console.log("right")
    }

    const pagehandler = (e) => {
        console.log(e.target.innerText)
        const chapter = e.target.innerText
        setBns(bns.detail[chapter - 1])
        // console.log(bns.detail[chapter - 1])
    }
    console.log(bns)
    return (
        <div className='flex flex-col items-center min-h-screen w-screen bg-gray-100 border'>
            <div className=' flex flex-col w-screen m-2 p-2 bg-gray-200 rounded-lg shadow-md'>
                <h1 className='text-3xl font-bold text-center my-4 capitalize'>bharatiya nyaya sanhita 2023</h1>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <input type="text" placeholder="Search..." className='border border-gray-300 rounded-lg p-2' onChange={searchhandler} />
                    <button className='bg-blue-500 text-white rounded-lg p-2 ml-2'>Search</button>
                </div>
            </div>
            <div className='flex flex-row min-h-full w-full justify-center bg-gray-100'>
                <div className='flex flex-col items-center w-50 min-h-screen  bg-gray-300 rounded-lg shadow-md p-4'>
                    <div className='flex flex-col items-center w-full justify-center bg-gray-200 rounded-lg shadow-md p-4 overflow-auto'>
                        {
                            chapter.map((item, index) => {
                                return (
                                    <div key={index} onClick={() => chapterhanler(item.id)} className='flex flex-row text-xl cursor-pointer hover:text-gray-100 hover:bg-green-500 justify-center items-center gap-2  bg-gray-300 p-1 rounded-md  font-bold'>
                                        {item.name}
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
                <div className='flex flex-col w-[70vw] min-h-[100vh] items-center justify-center bg-gray-300 rounded-lg shadow-md p-4 '>
                    <div className='min-h-screen w-full flex flex-col items-center h-screen overflow-y-scroll  bg-gray-200 rounded-lg shadow-md p-4'>
                        {/* <h1 className='text-3xl font-bold text-center'>CHAPTER : {bns?.chapter}</h1> */}
                        {
                            bns && bns.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-row w-full h-full justify-center  bg-gray-200 gap-2 px-2 py-4'>
                                        <div className='flex flex-col text-[16px] text-center text-gray-950 font-bold  px-1'><span>BNS</span> <span className='w-[81px]'>ACT :- {item.act}</span> </div>
                                        <div className='flex flex-col gap-2 w-[80vw] text-justify'>
                                            <div className='text-blue-950 font-bold uppercase'>{item.title}</div>
                                            <div className='text-gray-800 ml-4'>{item.content}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>
                    <div className='flex justify-between w-[40vw] bg-gray-300 rounded-md p-2 text-2xl text-black'>
                        <AiFillCaretLeft />
                        <div className='flex w-full bg-gray-200 mx-2 gap-2 overflow-auto'>
                            {
                                numbers.map((num, index) => {
                                    return (
                                        <div key={index} onClick={pagehandler} className='flex flex-row cursor-pointer hover:text-gray-100 hover:bg-green-500 justify-center items-center gap-2 text-sm bg-gray-300 p-1 rounded-md  font-bold'>
                                            {num}
                                        </div>
                                    )
                                })}
                        </div>
                        <AiFillCaretRight onClick={rthandler} className=' cursor-pointer hover:text-blue-700' />
                    </div>
                </div>
            </div>
        </div>
    )
}
