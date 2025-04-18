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

        <nav className="flex z-0  items-center justify-center bg-slate-300 w-auto h-auto p-2 shadow-md sticky top-0 ">
            <ul className="flex flex-row">
                {
                    Object.keys(navitionList).map((key, index) => {
                        return <Link className="flex p-2 bg-orange-300 m-0.5 rounded-sm hover:bg-gray-400" href={navitionList[key]} key={index}>{key}</Link>
                    })
                }

            </ul>
        </nav>

    )
}