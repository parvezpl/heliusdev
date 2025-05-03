'use client'

import Link from "next/link"

export default function Sidebar({isOpen }) {
    const navitionList = {
        ChromeExtention: "/chromeExtention",
        JavaScript: "/apps",
        Automation: "/contact",
        Python: "/about",
        blog: "/blog",
        links: '/usefulllinks',
        admin: '/adminhome'
    }

    return (
        // <nav className="flex min-h-screen bg-gray-900 text-gray-200 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/7 top-0 left-0 z-50 p-2 shadow-md shadow-gray-900 ">
        <nav className={`flex relative h-screen w-[25vw] sm:w-[16vw] bg-gray-900 text-white z-50  duration-300 transition-transform  ${isOpen ? ' translate-x-0 opacity-100  ' : '-translate-x-60 opacity-0 '} `}>
            <ul className="flex flex-col p-1  ">
                {
                    Object.keys(navitionList).map((key, index) => {
                        return <Link
                            className="flex p-1 text-[2.5vw] sm:text-[1.5vw] m-0.5 rounded-sm hover:bg-gray-800 capitalize
                        "
                            href={navitionList[key]} key={index}>{key}</Link>
                    })
                }
            </ul>
        </nav>

    )
}