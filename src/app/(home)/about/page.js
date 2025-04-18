import Link from "next/link";
import "./about.css";
export default function about(params) {
    return (
        <div className="about_page_container">
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Link href="/about">about</Link>
                <Link href="/">Your feedback</Link>
            </div>

            <div style={{ flex: 5 }} >
                <p>
                    <span>HeliusDEV</span> is a web development platform specializing in modern and efficient solutions.
                    It focuses on building dynamic and scalable web applications using React.js and Next.js for the frontend, while leveraging Node.js with Express for the backend.
                    In addition to web development, HeliusDEV also creates custom Chrome extensions to enhance browser functionality and user experience.
                </p>
            </div>
            <div style={{ flex: 1 }}></div>

        </div>
    )
}