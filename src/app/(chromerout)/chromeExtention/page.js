'use client'

import { useState } from "react"
import Chromedata from "./Chromedata"

export default function ChromeExtention(params) {
    const [styleOpentState, setStyleOpenState] = useState(false)
    const [opendata, setOpendata] = useState(null)
    const data = [
        {
            id: 1, name: "DataToWeb", data: "this is data ",
            heading: [
                { "detail": "here is detail" },
                { "how to upload": "here is upload detail" },
                { "how to set header": "header set datail" },
                { "how to set where you are send data": "send data detail" },
                { "for more": "for more" }
            ]
        },
        { id: 2, name: "expale1", data: "example data here" },
        { id: 3, name: "expale2" },
        { id: 4, name: "expale3" },
        { id: 5, name: "expale4" },
        { id: 6, name: "expale5" },
        { id: 7, name: "expale6" },
        { id: 8, name: "expale7" },
        { id: 9, name: "expale8" },
        { id: 10, name: "expale9" },
        { id: 11, name: "expale10" },
        { id: 12, name: "expale11" }

    ]

    const styles = {
        opendata: "flex flex-row justify-start relative left-0 bg-gray-500 overflow-auto h-screen scrollbar-none ",
        closedata: "flex flex-col bg-gray-800 items-center h-auto bg-slate-200 transition-all duration-900 ",
    }
    const openDataHandler = (e) => {
        data.forEach(item => {
            if (item.id === e) {
                setOpendata(item)
            }
        })
        setStyleOpenState(true)
        console.log("openDataHandler", e)
    }

    return (
        <div className="flex flex-col bg-gray-900 text-gray-200 items-center min-h-screen w-auto scroll relative">
            {/* <div className={styleOpentState ? styles.opendata : styles.closedata}> */}
            <div className="flex flex-row w-full h-full justify-center">
                <div className="flex flex-col items-center overflow-auto h-screen scrollbar-none ">
                {!styleOpentState && <h1 className="text-4xl font-bold m-8" > Chrome Extention </h1>}
                    {
                        data.map((item) => {
                            return (
                                <div key={item.id}
                                    onClick={() => openDataHandler(item.id)}
                                    className=" m-2 p-4 border border-gray-700 rounded-lg shadow-blue-800 shadow-md hover:bg-gray-600 cursor-pointer  "
                                >
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
                {styleOpentState ? <Chromedata data={opendata} /> : null}
            </div>
        </div>
    )
}