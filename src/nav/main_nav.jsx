'use client'
import Link from "next/link";
import { useState } from "react";
import ProfileLog from "../auth/ProfileLog.jsx";
import { MdMenu } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { useSession } from "next-auth/react";

export default function ManiNav({ toggleSidebar }) {
    const { data: session, status } = useSession();
    const [sidebarshow, setServiceShow] = useState(false);

    const menu = [
        { id: 1, name: "home", url: "/" },
        { id: 3, name: "about", url: "/about" },
    ];

    const showLoginButton = status !== "authenticated";

    return (
        <div>
            <header className="top-nav">
                <div className="top-nav-inner">
                    <div
                        onClick={() => {
                            toggleSidebar();
                            setServiceShow((prev) => !prev);
                        }}
                    >
                        <button className="nav-toggle" type="button" aria-label="Toggle sidebar">
                            {!sidebarshow ? <MdMenu /> : <ImCancelCircle />}
                        </button>
                    </div>

                    <div className="logo">
                        Helius
                        <span className="logo-accent">DEV</span>
                    </div>

                    <div className="nav-menu">
                        <div className="nav-menu desktop">
                            {menu.map((con) => (
                                <Link key={con.id} className="nav-link" href={`${con.url}`}>
                                    {con.name}
                                </Link>
                            ))}
                        </div>
                        <div>
                            {showLoginButton ? (
                                <Link href="/login" className="btn btn-ghost">
                                    Login
                                </Link>
                            ) : (
                                <ProfileLog session={session} />
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className="nav-mobile-row">
                <div className="nav-menu">
                    {menu.map((con) => (
                        <Link key={con.id} className="nav-link" href={`${con.url}`}>
                            {con.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
