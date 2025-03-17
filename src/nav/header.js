'use client'
import "./nav.css"
import Link from "next/link";
import {FaGithub  } from "react-icons/fa"
import Login from "../auth/login.js"
import { useState } from "react";
export default function Header () {
    const [auth, setAuth] = useState(false)
    const authbtn = ()=>{
        console.log(auth)
        setAuth(!auth)
    //     return (
    //     <>
    //            { auth ? <Login/> :}
    //     </>
            
    // )
    //     console.log("login")
    }
    return (
        <header className="main_header">
            <div style={{display:"flex", alignItems:"center"}}>
            <div className="logo" >Helius<span style={{color:"black"}}>DEV</span></div>
            <Link href={"https://github.com/parvezpl"}><FaGithub  style={{ fontSize: "20px", margin:"10px" }} /></Link>
            </div>
            <div className="nav">
            <Link href="/">home</Link>
            <Link href="/apps">app</Link>
            <Link href="/contact">contact</Link>
            <Link href="/about">about</Link>
            <button onClick={authbtn}>login</button>
            {
                auth ? <Login/> : null
            }
            </div>
          </header>
    )
}