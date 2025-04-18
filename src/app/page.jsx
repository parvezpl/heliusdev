'use client'
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import RazorpayButton from "../../payment/razorpaybtn";
import ManiNav from "../nav/main_nav";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState("name")
  const router = useRouter()

  const btn = (data) => {
    setName(data)
    console.log("heloo")
  }

  return (
    <>
      <ManiNav />
      <div className="flex flex-col min-h-screen bg-gray-950 text-gray-200 justify-center items-center">
        <h1 className=" text-4xl font-bold m-4 text-shadow-blue-800 text-shadow-md " >Welcome to HeliusDEV !</h1>
        <main className={styles.main}>
          <div className="flex flex-col w-screen">
            <div>
              <Image
                src="/home.svg"
                alt="My photo"
                width={300}
                height={200}
              />

            </div>
            <div>
              <div className="flex flex-col justify-center items-center mx-4 text-justify">
                <h1 className=" text-2xl font-bold justify-center text-center border-b-1 w-fit m-4 shadow-md shadow-blue-700 px-2">Why take subsciption</h1>
                <div style={{ fontSize: "16px", fontFamily: "math" }}>Get exclusive access to all Chrome extension codes and premium resources. Plus, become a part of the HeliusDEV community by contributing to ongoing projects.
                  Subscribe now and take your development journey to the next level!</div>
                <span  className=" text-center border m-2">subcribe in only 100 rs.</span>
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
