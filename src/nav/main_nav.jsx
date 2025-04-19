'use client'
import "./nav.css"
import Link from "next/link";
import { FaGithub } from "react-icons/fa"
import Login from "../auth/login.js"
import { useEffect, useState } from "react";
import ProfileLog from "../auth/ProfileLog.jsx";
import Sidebar from "./sidebar";
export default function ManiNav() {
    const [isLoginOpen, setLoginOpen] = useState(false)
    const [islogin, setIslogin] = useState(false)
    const [islogout, setLogout] = useState(false)
    const [sidebarshow, setServiceShow] = useState(false)
    const [menuState, setMenuState] = useState(false)
    useEffect(() => {
        // setIslogin(false)
    }, [setLogout])

    return (
        <header
            className=" flex justify-between items-center  border-b border-green-800 text-gray-200 bg-[#101923] p-1 shadow-md sticky z-50
        ">

            <div onClick={() => setServiceShow(prev => !prev)} className="top-12 ">
                <span className=" text-2xl p-1 rounded-sm cursor-pointer hover:text-blue-600">{!sidebarshow ? "=" :"X"}</span>
                {sidebarshow && <Sidebar />}
            </div>

            {/* my web logo heliusdev */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className="logo" >Helius<span style={{ color: "black" }}>DEV</span></div>
                <Link href={"https://github.com/parvezpl"}><FaGithub style={{ fontSize: "20px", margin: "10px" }} /></Link>
            </div>

            <div className="  flex flex-col-reverse justify-end sm:flex-row ">
                <div className={`${menuState ? "hidden" : "block"} flex flex-col absolute z-200000 top-22 rounded-sm p-2 w-auto right-0 gap-2
                    sm:static sm:flex-row sm:flex sm:gap-8 shadow-md shadow-green-800 bg-gray-900 `}
                >
                    <Link className=" hover:bg-gray-500" href="/">home</Link>
                    <Link href="/apps">app</Link>
                    <Link href="/contact">contact</Link>
                    <Link href="/about">about</Link>
                </div>
                <div onClick={() => setMenuState(prev => !prev)} className="bg-green-500 p-1 border rounded-sm absolute top-12 right-0 shadow-md shadow-gray-500
                sm:hidden ">menu</div>
                <div className="flex justify-center items-center ml-4">
                    {islogin ?
                        <ProfileLog logOut={(res) => setIslogin(res)} /> :
                        <div onClick={() => setLoginOpen(true)}
                            className="flex justify-center items-center h-6 border px-2 text-[15px]
                            rounded-sm cursor-pointer text-center  hover:bg-blue-600   ">
                            login
                        </div>
                    }
                    <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} setIslogin={(res) => setIslogin(res)} />
                </div>
            </div>
        </header>
    )
}