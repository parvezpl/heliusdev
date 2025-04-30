import Link from "next/link";
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io5";
export default function Footer() {
    return (
        <div className="flex flex-col sm:flex-row justify-around items-center w-full min-h-[14vh]
             p-[10px] gap-[20px] bg-gray-900 text-gray-200 md:text-[1.5rem]
              border-t-[8px solid #dbbc09] border-t border-[#28851c]">
            <p>term & condition </p>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span>contact </span>
                <span>email: <span>heliustime@gmail.com</span></span>
            </div>
            <div className="" style={{ display: "flex", gap: "10px" }}>
                <FaYoutube style={{ fontSize: "20px" }} />
                <Link href={'https://github.com/parvezpl'} target="_blank" rel="noopener noreferrer" ><FaGithub style={{ fontSize: "20px" }} /></Link>
                <FaInstagram style={{ fontSize: "20px" }} />
                <IoLogoWhatsapp style={{ fontSize: "20px" }} />
            </div>
        </div>
    );
}