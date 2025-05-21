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
export default function ManiNav({ toggleSidebar  }) {
    const [isLoginOpen, setLoginOpen] = useState(false)
    const [loginData, setLoginData] = useState({user:{},state:false})
    const [islogout, setLogout] = useState(false)
    const [sidebarshow, setServiceShow] = useState(false)
    const [chechloginState, setShechloginState] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem('user')
            if (user) {
                setLoginData(JSON.parse(user))
            }
            setShechloginState(true)
    }, [setLogout])
    // console.log(loginData)
    const menu = [
        { id: 1, name: "home", url: '/' },
        // { id: 2, name: "office", url: '/office' },
        { id: 3, name: "about", url: '/about' },
        { id: 4, name: "community", url: '/community' },
    ]

    return (
        <div className="flex flex-col w-full">
            <header
                className="flex justify-between items-center  box-border
            border-b border-green-800 text-gray-200 bg-[#101923]
             p-1 px-2 shadow-md sticky z-50 w-full
        ">

                {/* onClick={() => setServiceShow(prev => !prev)} */}
                <div onClick={()=>{
                    toggleSidebar();
                    setServiceShow(prev => !prev)
                }} className="top-12 max-w-[43vw] sm:min-w-[43vw] ">
                    <span className=" text-2xl py-1 rounded-sm cursor-pointer hover:text-blue-600 rotate-40">
                        {!sidebarshow ?
                            <MdMenu/>
                            :
                            <ImCancelCircle />
                        }
                    </span>
                    {/* {sidebarshow && <Sidebar />} */}
                </div>

                {/* my web logo heliusdev */}
                <div className=" inline w-fit justify-center">
                    <div className="bg-[#f4f5f5] text-red-600 font-[800] px-1 rounded-[4px] border border-[#09a178]" >
                        Helius
                        <span className="text-black hover:translate-10">DEV</span></div>
                    {/* <Link href={"https://github.com/parvezpl"}><FaGithub style={{ fontSize: "20px", margin: "10px" }} /></Link> */}
                </div>

                <div className=" max-w-[43vw] sm:min-w-[43vw] flex justify-end sm:flex-row overflow-hidden items-end sm:items-center ">
                    <div className={`p-2 w-fit justify-center hidden
                    sm:static sm:flex-row sm:flex sm:gap-2 md:gap-3 `}
                    >
                        {
                            menu.map((con) => {
                                return (
                                    <Link key={con.id}
                                        className=" flex hover:text-blue-500 hover:-translate-1 px-1 text-[2vw] sm:text-[1.5vw] capitalize" href={`${con.url}`}
                                    >
                                        {con.name}
                                    </Link>
                                )
                            })
                        }

                    </div>
                    <div className="w-fit justify-center items-center ml-1 ">
                        {
                          chechloginState &&  (!loginData?.state ?
                            <div onClick={() => setLoginOpen(true)}
                                className="flex justify-center items-center h-6 border px-2 text-[15px] rounded-sm cursor-pointer text-center  hover:bg-blue-600   ">
                                login
                            </div> :
                            <ProfileLog loginData={loginData} logOut={(res) => setLoginData(res)} />)
                            
                        }
                        <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} setLoginData={(res) => setLoginData(res)} />
                    </div>
                </div>
            </header>
            <div className="h-[7vw] sm:h-0 bg-gray-800 sm:hidden flex justify-center items-center">
                <div className={`flex p-2 w-fit justify-center 
                    sm:static sm:flex-row sm:flex sm:gap-2 md:gap-3 `}
                >
                    {
                        menu.map((con) => {
                            return (
                                <Link key={con.id}
                                    className=" flex text-white hover:text-blue-500 hover:-translate-1 px-1 text-[2vw] sm:text-[1.5vw]" href={`${con.url}`}
                                >
                                    {con.name}
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}