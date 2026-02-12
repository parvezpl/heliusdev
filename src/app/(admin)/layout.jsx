'use client'
import React, { useEffect, useState } from 'react';
import Servicebar from './Servicebar';
import { MdMenu } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

function AdminLayout({ children }) {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const sidebarRef = React.useRef();
    const sidebarbtnRef = React.useRef();

    useEffect(() => {
        if (status === 'loading') return;

        if (status === 'unauthenticated') {
            router.replace('/');
            return;
        }

        if (session?.user?.role !== 'admin') {
            router.replace('/');
        }
    }, [status, session, router]);

    useEffect(() => {
        function handleClickOutside(event) {
            const isMobile = window.innerWidth <= 768;
            if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target) && !sidebarbtnRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        }
        if (isSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    if (status !== 'authenticated' || session?.user?.role !== 'admin') {
        return null;
    }

    return (
        <>
            <nav className="top-nav">
                <div className="top-nav-inner">
                    <button
                        ref={sidebarbtnRef}
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="nav-toggle"
                        aria-label="Toggle sidebar"
                    >
                        <MdMenu />
                    </button>
                    <div className="nav-link">Admin Console</div>
                    <Link href={'/'} className="btn btn-ghost">
                        Home
                    </Link>
                </div>
            </nav>
            <div className='admin-layout'>
                <div ref={sidebarRef}>
                    <Servicebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                </div>
                <main className="admin-main">{children}</main>
            </div>
        </>
    );
}

export default AdminLayout;
