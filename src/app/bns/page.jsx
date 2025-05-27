'use client'
import React, { useEffect, useRef, useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";

export default function Page() {
    const [bns, setBns] = useState()
    const [sidebar, setSidebar] = useState(false)
    const [act, setAct] = useState()
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');
    const sidebarRef = useRef(null);
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

      useEffect(() => {
        function handleClickOutside(event) {
          const isMobile = window.innerWidth <= 768;
          if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebar(false)
          }
        }
        if (sidebar) {
          document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [sidebar])


    const chapter = [
        { id: 1, name: "chapter 1", value: 'CHAPTER I' },
        { id: 2, name: "chapter 2", value: 'CHAPTER II' },
        { id: 3, name: "chapter 3", value: 'CHAPTER III' },
        { id: 4, name: "chapter 4", value: 'CHAPTER IV' },
        { id: 5, name: "chapter 5", value: 'CHAPTER V' },
        { id: 6, name: "chapter 6", value: 'CHAPTER VI' },
        { id: 7, name: "chapter 7", value: 'CHAPTER VII' },
        { id: 8, name: "chapter 8", value: 'CHAPTER VII' },
        { id: 9, name: "chapter 9", value: 'CHAPTER IX' },
        { id: 10, name: "chapter 10", value: 'CHAPTER X' },
        { id: 11, name: "chapter 11", value: 'CHAPTER XI' },
        { id: 12, name: "chapter 12", value: 'CHAPTER XII' },
        { id: 13, name: "chapter 13", value: 'CHAPTER XIII' },
        { id: 14, name: "chapter 14", value: 'CHAPTER XIV' },
        { id: 15, name: "chapter 15", value: 'CHAPTER XV' },
        { id: 16, name: "chapter 16", value: 'CHAPTER XVI' },
        { id: 17, name: "chapter 17", value: 'CHAPTER XVII' },
        { id: 18, name: "chapter 18", value: 'CHAPTER XVIII' },
        { id: 19, name: "chapter 19", value: 'CHAPTER XIX' },
        { id: 20, name: "chapter 20", value: 'CHAPTER XX' },





    ]
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/bns/bnsen')
            const data = await res.json()
            setBns(data.bnsen.sections)
        }
        fetchData()
    }, [])


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500); // wait 500ms

        return () => clearTimeout(handler); // clear timer on next input
    }, [searchTerm]);

    useEffect(() => {

        const fetchResults = async () => {
            const res = await fetch(`/api/bns/bnssearch?search=${debouncedTerm}`);
            const datas = res.json();
            datas.then((data) => {
                setBns(data.bns)
            })
        };

        fetchResults();
    }, [debouncedTerm]);

    const searchhandler = (e) => {
        setSearchTerm(e.target.value)
    }


    const chapterhanler = async (value) => {
        const res = await fetch('/api/bns/bnschapter?search=' + value)
        if (res.ok) {
            const data = await res.json()
            setBns(data.chapter.sections)
        }
    }


    const pagehandler = (e) => {
        console.log(e.target.innerText)
        const chapter = e.target.innerText
        setBns(bns.detail[chapter - 1])
        // console.log(bns.detail[chapter - 1])
    }
    function smartSplit(text) {
        // const matches = [...text.matchAll(/(?=\((?:[a-z]|\d+)\))/g)];
        console.log(text)
        const matches = [...text.matchAll(/(?=\(\w+\))/g)];
        console.log(matches)

        const result = [];

        let lastIndex = 0;
        let lastSliceHadSubsection = false;

        for (const match of matches) {
            const start = match.index;
            const segment = text.slice(lastIndex, start);

            if (!segment.toLowerCase().includes("sub-section") && segment.trim()) {
                result.push(segment.trim());
                lastSliceHadSubsection = false;
            } else {
                // merge with previous if 'sub-section' detected
                if (result.length > 0) {
                    result[result.length - 1] += " " + segment.trim();
                } else {
                    result.push(segment.trim());
                }
                lastSliceHadSubsection = true;
            }

            lastIndex = start;
        }

        // Add the final chunk
        const finalPart = text.slice(lastIndex).trim();
        if (finalPart) {
            if (lastSliceHadSubsection && result.length > 0) {
                result[result.length - 1] += " " + finalPart;
            } else {
                result.push(finalPart);
            }
        }

        return result;
    }

    // const textbreack = (text) => {
    //     const formatted = text.replace(/(?<!sub-section )(?=\(\d+\))/g, '\n');
    //     return formatted;
    // }

    const getHighlightedText = (text, highlight) => {
        // const text=textbreack(texts)
        if (!highlight) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        const data = parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={i} className="bg-yellow-300 ">{part}</span>
            ) : (
                <span key={i} className=" font-sans  ">{part}</span>
            )
        );
        return <div className='whitespace-break-spaces '>{data}</div>
    };

    

    return (
        <div className='  items-center min-h-screen w-screen bg-gray-100 border box-border'>
            <div className='  m-2 p-2 bg-gray-200 rounded-lg shadow-md box-border'>
                <h1 className='text-3xl font-bold text-center my-4 capitalize'>bharatiya nyaya sanhita 2023</h1>
                <div className='flex flex-row items-center justify-between'>
                    {/* <button></button> */}
                    <TiThMenu className='text-2xl cursor-pointer' onClick={() => setSidebar(!sidebar)} />
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <input type="text" placeholder="Search..." className='border border-gray-300 rounded-lg p-2' onChange={searchhandler} />
                        <button className='bg-blue-500 text-white rounded-lg p-2 ml-2'>Search</button>
                    </div>
                </div>
            </div>
            <div className='flex relative max-w-full overflow-auto flex-row min-h-full justify-center bg-gray-100'>
                <div ref={sidebarRef} className={` absolute sm:relative left-0 flex-col items-center w-fit min-h-screen  bg-gray-300 rounded-lg shadow-md p-4 ${sidebar ? 'visible' : 'hidden sm:visible'}`}>
                    <div className='flex flex-col items-center  justify-center bg-gray-200 rounded-lg shadow-md p-4 overflow-auto'>
                        {
                            chapter.map((item, index) => {
                                return (
                                    <div key={index} onClick={() => chapterhanler(item.value)}
                                        className='flex flex-row text-xl cursor-pointer w-max hover:text-gray-100 hover:bg-green-500 justify-center items-center gap-2  bg-gray-300 p-1 rounded-md  font-bold'>
                                        {item.name}
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
                <div className='min-h-[100vh] shrink items-center justify-center bg-gray-300 rounded-lg shadow-md p-4 box-border '>
                    <div className=' flex flex-col min-h-screen items-center   bg-gray-200 rounded-lg shadow-md p-4 box-border'>
                        {/* <h1 className='text-3xl font-bold text-center'>CHAPTER : {bns?.chapter}</h1> */}
                        {
                            bns && bns.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-col sm:flex-row min-h-fit justify-center w-full bg-gray-200 gap-2 px-2 py-4'>
                                        <div className='flex flex-row  sm:flex-col text-[16px]  justify-center sm:justify-start sm:items-start text-gray-950 font-bold  px-1'>
                                            <span>BNS__  </span> <span className='w-[81px] flex'>ACT :- {getHighlightedText(item.section, searchTerm)}</span>
                                        </div>
                                        <div className='flex flex-col gap-2 grow text-justify'>
                                            <pre className='text-blue-950 font-bold h-fit sm:w-[50vw] font-sans whitespace-break-spaces'>
                                                {getHighlightedText(item.section_title, searchTerm)}
                                            </pre>
                                            
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
                        <AiFillCaretRight  className=' cursor-pointer hover:text-blue-700' />
                    </div>
                </div>
            </div>
        </div>
    )
}
