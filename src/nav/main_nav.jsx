'use client'
import "./nav.css"
import Link from "next/link";
import { FaGithub } from "react-icons/fa"
import Login from "../auth/login.js"
import { useEffect, useState } from "react";
import ProfileLog from "../auth/ProfileLog.jsx";
import Sidebar from "./sidebar";
import { MdMenu } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
export default function ManiNav({ toggleSidebar }) {
    const [isLoginOpen, setLoginOpen] = useState(false)
    const [loginData, setLoginData] = useState({})
    const [islogout, setLogout] = useState(false)
    const [sidebarshow, setServiceShow] = useState(false)
    const [menuState, setMenuState] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setLoginData(JSON.parse(user))
        }
    }, [setLogout])

    const menu = [
        { id: 1, name: "home", url: '/' },
        { id: 2, name: "contact", url: '/contact' },
        { id: 3, name: "about", url: '/about' },
        { id: 4, name: "community", url: '/community' },
    ]

    return (
        <header
            className=" grid grid-cols-3 justify-between items-center  
            border-b border-green-800 text-gray-200 bg-[#101923]
             p-1 px-2 shadow-md sticky z-50 w-full
        ">
            {/* onClick={() => setServiceShow(prev => !prev)} */}
            <div onClick={toggleSidebar} className="top-12 ">
                <span className=" text-2xl py-1 rounded-sm cursor-pointer hover:text-blue-600 rotate-40">
                    {!sidebarshow ?
                        <MdMenu className=" animate-pulse" />
                        :
                        <ImCancelCircle className="" />
                    }
                </span>
                {/* {sidebarshow && <Sidebar />} */}
            </div>

            {/* my web logo heliusdev */}
            <div className="flex justify-center animate-bounce">
                <div className="bg-[#f4f5f5] text-red-600 font-[800] px-1 rounded-[4px] border border-[#09a178]" >
                    Helius
                    <span className="text-black hover:translate-10">DEV</span></div>
                {/* <Link href={"https://github.com/parvezpl"}><FaGithub style={{ fontSize: "20px", margin: "10px" }} /></Link> */}
            </div>

            <div className="flex flex-col-reverse justify-end sm:flex-row ">
                <div className={`flex flex-row absolute z-200000 top-7 right-0 rounded-sm p-2 w-fit bg-gray-800 justify-center  sm:bg-gray-900 gap-2
                    sm:static sm:flex-row sm:flex sm:gap-3 md:gap-8 `}
                >
                    {
                        menu.map((con) => {
                            return (
                                <Link key={con.id}
                                    className=" hover:text-blue-500 hover:-translate-1" href={`${con.url}`}
                                >
                                    {con.name}
                                </Link>
                            )
                        })
                    }

                </div>
                {/* <div onClick={() => setMenuState(prev => !prev)} className="bg-green-500 p-1 border rounded-sm absolute top-12 right-0 shadow-md shadow-gray-500
                sm:hidden ">menu</div> */}
                <div className="flex flex-col justify-center items-center ml-1 ">
                    {loginData?.state ?
                        <ProfileLog loginData={loginData} logOut={(res) => setLoginData(res)} /> :
                        <div onClick={() => setLoginOpen(true)}
                            className="flex justify-center items-center h-6 
                            border px-2 text-[15px]
                            rounded-sm cursor-pointer text-center  hover:bg-blue-600   ">
                            login
                        </div>
                    }
                    <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} setLoginData={(res) => setLoginData(res)} />
                </div>
            </div>
        </header>
    )
}