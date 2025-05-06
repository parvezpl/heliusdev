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

export default function Home() {
  const [name, setName] = useState("name")
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // const [getLocalData, setLocalData] = useState(
  const btn = (data) => {
    setName(data)
    console.log("heloo")
  }

  const toggleSidebar = () => {
    console.log("sidebar")
    setSidebarOpen(!sidebarOpen);
  };
  const subcribehandler =()=>{
    console.log('key',process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID)
  }
  return (
    <>
      <ManiNav toggleSidebar={toggleSidebar} />
      <div className="flex flex-row  bg-[#b1d891] text-gray-950  ">
        <div className={`bg-gray-200 transition-all duration-300 ${!sidebarOpen ? 'w-0' : 'w-0 sm:w-64'} `} >
          <Sidebar isOpen={sidebarOpen} />
        </div>
        <main className="flex flex-col min-h-screen max-w-screen " >
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
                <div className="flex flex-col md:flex-row mt-8 gap-2">
                  <span className=" text-center capitalize">subcribe in only 100 rs.</span>
                  <div className="flex flex-col sm:flex-row ">
                    <div className="text-[14px]">click to get subsciption -</div>
                    <div
                    onClick={()=>subcribehandler()}
                     className=""><PayButton/></div>
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
