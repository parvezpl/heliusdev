import "./nav.css"
import Link from "next/link";
import {FaGithub  } from "react-icons/fa"
export default function Header () {
    return (
        <header className="main_header">
            <div style={{display:"flex", alignItems:"center"}}>
            <div className="logo" >Helius<span style={{color:"black"}}>DEV</span></div>
            <Link href={"https://github.com/parvezpl"}><FaGithub  style={{ fontSize: "20px", margin:"10px" }} /></Link>
            </div>
            <div className="nav">
            <Link href="/">Home</Link>
            <Link href="/apps">App</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/community">Community</Link>
            </div>
          </header>
    )
}