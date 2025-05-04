import Link from "next/link";
import Portfolio from "./portfolio";
export default function about(params) {
    return (
        <div className="flex flex-col h-full box-border text-black bg-gray-300  justify-center items-center">
            <div className=" justify-center items-center ">
                <p className="mx-4">
                    <span className="text-red-600 font-bold">HeliusDEV</span> is a web development platform specializing in modern and efficient solutions.
                    It focuses on building dynamic and scalable web applications using React.js and Next.js for the frontend, while leveraging Node.js with Express for the backend.
                    In addition to web development, HeliusDEV also creates custom Chrome extensions to enhance browser functionality and user experience.
                </p>
            </div>
            <div className="flex w-full">
                <Portfolio/>
            </div>
        </div>
    )
}