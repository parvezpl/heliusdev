import Link from "next/link";
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io5";
export default function Footer() {
    return (
        <footer className="flex justify-around items-center h-[90px]
             p-[10px] gap-[20px] bg-gray-900 text-gray-200
              border-t-[8px solid #dbbc09] border-t border-[#28851c]">
            <p>term & condition </p>
            <div style={{ display: "grid", gap: "10px" }}>
                <h4>contact </h4>
                <p>email: <span>heliustime@gmail.com</span></p>
            </div>
            <div className="" style={{ display: "flex", gap: "10px" }}>
                <FaYoutube style={{ fontSize: "20px" }} />
                <Link href={'https://github.com/parvezpl'} target="_blank" rel="noopener noreferrer" ><FaGithub style={{ fontSize: "20px" }} /></Link>
                <FaInstagram style={{ fontSize: "20px" }} />
                <IoLogoWhatsapp style={{ fontSize: "20px" }} />
            </div>
        </footer>
    );
}