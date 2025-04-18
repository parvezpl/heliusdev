'use client'
import "./nav.css"
import Link from "next/link";
import { FaGithub } from "react-icons/fa"
import Login from "../auth/login.js"
import { useEffect, useState } from "react";
import ProfileLog from "../auth/ProfileLog.jsx";
import Singup from "../app/(home)/login/Singup.jsx";
export default function ManiNav() {
    const [isLoginOpen, setLoginOpen] = useState(false)
    const [islogin, setIslogin] = useState(true)
    useEffect(() => {

        // setIslogin(true)
    }, [])

    return (
        <header className="flex justify-between items-center bg-slate-400 p-1 shadow-md sticky top-0 z-50">
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className="logo" >Helius<span style={{ color: "black" }}>DEV</span></div>
                <Link href={"https://github.com/parvezpl"}><FaGithub style={{ fontSize: "20px", margin: "10px" }} /></Link>
            </div>
            <div className="nav">
                <Singup></Singup>
                <Link href="/">home</Link>
                <Link href="/apps">app</Link>
                <Link href="/contact">contact</Link>
                <Link href="/about">about</Link>
                {islogin ?
                 <ProfileLog /> : 
                 <div onClick={() => setLoginOpen(true)} className="flex justify-center items-center h-6 bg-blue-500 px-2 text-[15px] rounded-sm cursor-pointer text-center  hover:bg-blue-600   ">login</div>
                 }
                <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
            </div>
        </header>
    )
}