import React, { useState } from 'react'

export default function Singup() {
    const [isSingup, setSingup] = useState(false)
    const Singups = () => {
        return (
            <>

                <div className='flex absolute w-screen h-screen justify-center items-center inset-0 z-10  bg-black/50 '>
                    <div className=' flex w-64 h-64  bg-amber-500'>singups</div>
                </div>
            </>
        )
    }
    return (
        <>
            <div onClick={() => setSingup(prev => !prev)} className=' bg-amber-500'>singup</div>
            {isSingup && <Singups />}
        </>
    )
}
