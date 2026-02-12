'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        const visitcount = sessionStorage.getItem('count');
        if (!hasVisited) {
            fetch('/api/visits')
                .then((res) => res.json())
                .then((data) => {
                    setCount(data.count);
                    sessionStorage.setItem('count', data.count);
                })
                .catch((err) => console.error("Error counting visit", err));
            sessionStorage.setItem('hasVisited', 'true');
        } else {
            setCount(visitcount);
        }
    }, []);

    return (
        <footer className="footer-root">
            <p>term & condition</p>
            <div className="footer-contact">
                <span>contact</span>
                <div>email: <span>heliustime@gmail.com</span></div>
                <div className="footer-count">
                    <span>This site has been visited: </span>
                    <strong>{count !== null ? `${count} times` : 'Loading...'}</strong>
                </div>
            </div>
            <div className="footer-icons">
                <FaYoutube />
                <Link href={'https://github.com/parvezpl'} target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
                <FaInstagram />
                <IoLogoWhatsapp />
            </div>
        </footer>
    );
}
