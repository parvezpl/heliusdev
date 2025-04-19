'use client'

import Link from "next/link"

export default function Sidebar() {

    const navitionList = {
        ChromeExtention: "/chromeExtention",
        JavaScript: "/apps",
        Automation: "/contact",
        Python: "/about"
    }

    return (

        <nav className="flex h-auto ">
            
            <ul className="flex flex-col border pointer-events-auto p-1 shadow-md rounded-sm bg-gray-300">
                {
                    Object.keys(navitionList).map((key, index) => {
                        return <Link 
                        className="flex p-1 text-[4vw] sm:text-[1.5vw] m-0.5 rounded-sm hover:bg-gray-400
                        
                        "
                        href={navitionList[key]} key={index}>{key}</Link>
                    })
                }

            </ul>
        </nav>

    )
}