'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import RazorpayButton from "../../payment/razorpaybtn";
import ManiNav from "../nav/main_nav";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/nav/sidebar";

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
  return (
    <>
      <ManiNav toggleSidebar={toggleSidebar} />
      <div className="flex flex-row  bg-gray-200 text-gray-950 h-screen  items-center  ">
        <div className={` h-screen transition-all duration-300  ${!sidebarOpen ? 'w-0' : 'w-0 sm:w-64'}`} >
          <Sidebar isOpen={sidebarOpen} />
        </div>
        <main className=" h-screen" >
          <div className="flex flex-col justify-center items-center  p-2 rounded-md ">
            <h1 className=" inline  text-4xl font-bold text-shadow-blue-800 text-shadow-md m-auto " >Welcome to HeliusDEV !</h1>
            <div>
              <Image
                src="/home.svg"
                alt="My photo"
                width={300}
                height={200}
              />
            </div>
            <div>
              <div className="flex flex-col justify-center items-center  mx-4 text-justify ">
                <h1 className=" text-2xl font-bold justify-center text-center border-b-1 w-fit m-4 shadow-md shadow-blue-700 px-2">Why take subsciption</h1>
                <div className="w-9/10 sm:w-6/10 md:w-7/10" style={{ fontSize: "16px", fontFamily: "math" }}>Get exclusive access to all Chrome extension codes and premium resources. Plus, become a part of the HeliusDEV community by contributing to ongoing projects.
                  Subscribe now and take your development journey to the next level!</div>
                <span className=" text-center border m-2">subcribe in only 100 rs.</span>
                <div className="flex  justify-between p-1" >
                  <div className="text-[14px]">click to get subsciption -</div>
                  <button className="bg
                  -[#35da66] px-1 rounded-sm border-1 m-1">subcribe</button>
                </div>
                {/* <RazorpayButton /> */}

              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
