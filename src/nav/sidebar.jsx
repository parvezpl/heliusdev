'use client'

import Link from "next/link";
import { useMemo } from "react";
import { useSession } from "next-auth/react";

export default function Sidebar({ isOpen }) {
    const { data: session } = useSession();
    const isAdmin = session?.user?.role === "admin";

    const navitionList = useMemo(() => {
        return {
            ...(isAdmin ? { admin: "/adminhome" } : {}),
            About: "/about",
        };
    }, [isAdmin]);

    return (
        <nav className={`left-sidebar ${isOpen ? "" : "closed"}`}>
            <ul className="left-sidebar-list">
                {Object.keys(navitionList).map((key, index) => (
                    <Link className="left-sidebar-link" href={navitionList[key]} key={index}>
                        {key}
                    </Link>
                ))}
            </ul>
        </nav>
    );
}
