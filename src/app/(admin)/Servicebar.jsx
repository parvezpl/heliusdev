'use client'
import React, { useEffect, useState } from 'react'

export default function Servicebar() {
    const [getData, setData] = useState([{ test: "test data" }])

    useEffect(() => {
        setData(data)
    }, [])
    const data = [
        {
            user: [
                { name: "parvez" },
                { name: "alam" },
            ]
        },


    ]
    console.log(getData)
    return (
        <div className='flex px-2 bg-green-900 text-gray-200 h-8'>
            <div>
                {
                    getData.map(item => {
                        return (<>
                            {
                                Object.keys(item).map(key => {
                                    return (
                                        <div>{key}</div>
                                    )
                                }
                                )
                            }
                        </>
                        )
                    })
                }
            </div>
        </div>
    )
}
