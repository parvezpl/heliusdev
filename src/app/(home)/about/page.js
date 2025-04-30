import Link from "next/link";
import "./about.css";
export default function about(params) {
    return (
        <div className=" flex h-screen box-border text-black bg-gray-300 pt-10 sm:pt-0 justify-center items-center text-[2vw] ">
            <div className=" justify-center items-center ">
                <p>
                    <span>HeliusDEV</span> is a web development platform specializing in modern and efficient solutions.
                    It focuses on building dynamic and scalable web applications using React.js and Next.js for the frontend, while leveraging Node.js with Express for the backend.
                    In addition to web development, HeliusDEV also creates custom Chrome extensions to enhance browser functionality and user experience.
                </p>
            </div>
        </div>
    )
}