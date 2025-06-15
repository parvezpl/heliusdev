'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";


import ManiNav from "../nav/main_nav";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/nav/sidebar";
import Service from "./(home)/service/service";
import Pythonbadge from "./(home)/service/pythonbadge";
import PayButton from "./components/razorpay/PayButton";
import { useEffect, useRef } from "react"

export default function Home() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [seachOpen, setSeachOpen] = useState(false);


  const sidebarRef = useRef()
  const navbtnRef = useRef()
  const searchRef = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target) && !navbtnRef.current.contains(event.target)) {
        setSidebarOpen(false)
      }
    }
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [sidebarOpen])

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSeachOpen(false)
      }
    }
    if (seachOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [seachOpen])




  const toggleSidebar = () => {
    console.log('toggleSidebar', sidebarOpen)
    setSidebarOpen(prev => !prev)
  };
  const subcribehandler = () => {
    console.log('key', process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID)
  }

  let timedata = 500
  const [suggationword, setSuggationword] = useState([])
  let timeout;

  const seachhandler = async (e) => {
    const word = e.target.value
    setSeachOpen(true)

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fetchData()
    }, timedata);


    const fetchData = async () => {
      try {
        if (word.length >= 0) {
          const res = await fetch(`/api/wordsuggation/ws?word=${word}`)
          const data = await res.json()
          setSuggationword(data.suggationword)
        }
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  // for how may time visite my site code here 


  return (
    <>
      <div ref={navbtnRef}>
        <ManiNav toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex flex-row  bg-[#b1d891] text-gray-950  ">
        <div ref={sidebarRef} className={`bg-gray-200 transition-all duration-300 ${!sidebarOpen ? 'w-0' : 'w-0 sm:w-64'} `} >
          <Sidebar isOpen={sidebarOpen} />
        </div>
        <main className="flex flex-col min-h-screen max-w-screen " >
          <div className=" relative flex flex-col justify-center items-center  p-2 rounded-md ">
            <div className="flex flex-row justify-center items-center border border-gray-400 rounded-md  mx-4 text-justify  ">
              <input onChange={seachhandler} type="text" placeholder="search" className="outline-none mx-2  " />
              <button className="bg-blue-500 text-white px-2 py-1 rounded-md ">Search</button>
            </div>
            <div ref={searchRef} className={`flex absolute top-12 justify-center items-center mx-4 text-justify ${!seachOpen ? 'hidden' : 'visible'}`}>
              <div className="flex flex-col justify-center bg-green-200 rounded-md w-70  mx-4 px-4 text-justify max-h-50 overflow-y-auto">
                {suggationword.map((item, index) => (
                  <div key={index} onClick={() => `/wordsuggation/${item}`} className="text-blue-500 hover:underline">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h1 className=" inline  text-4xl font-bold text-shadow-blue-800 text-shadow-md self-center m-4 " >Welcome to HeliusDEV !</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center  p-2 rounded-md ">
            <Image
              src="/home.svg"
              alt="My photo"
              width={300}
              height={200}
              className="w-[300px]"
            />

            <div>
              <div className="flex flex-col justify-center items-center  mx-4 text-justify ">
                <h1 className=" text-2xl font-bold justify-center text-center border-b-1 w-fit m-4 shadow-md shadow-blue-700 px-2 capitalize">Why take subsciption</h1>
                <p className="w-9/10 sm:w-6/10 md:w-7/10" style={{ fontSize: "16px", fontFamily: "math" }}>Get exclusive access to all Chrome extension codes and premium resources. Plus, become a part of the HeliusDEV community by contributing to ongoing projects.
                  Subscribe now and take your development journey to the next level!
                </p>
                <div className="flex flex-col md:flex-row mt-8 gap-2 justify-center items-center">
                  <span className=" text-center capitalize">subcribe in only 200 rs.</span>
                  <div className="flex flex-col sm:flex-row items-center justify-center ">
                    <div className="text-[14px]">click to get subsciption -</div>
                    <div
                      onClick={() => subcribehandler()}
                      className=""><PayButton /></div>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </main>
      </div>
      <div className="flex min-h-screen pb-4  border-t bg-[#9fcaaa]">
        <Service />
      </div>
      <div className="flex flex-col min-h-screen  border-t bg-[#7c97bb]">
        <h1 className=' self-center m-4 font-bold text-orange-500 text-2xl text-shadow-black text-shadow-md'>Python Sevice</h1>
        <Pythonbadge />
      </div>
    </>
  );
}
