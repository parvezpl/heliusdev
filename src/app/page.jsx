'use client'
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import ManiNav from "../nav/main_nav";
import Image from "next/image";
import Sidebar from "@/nav/sidebar";
import Service from "./(home)/service/service";
import Pythonbadge from "./(home)/service/pythonbadge";
import PayButton from "./components/razorpay/PayButton";

export default function Home() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [seachOpen, setSeachOpen] = useState(false);

  const sidebarRef = useRef();
  const navbtnRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target) && !navbtnRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSeachOpen(false);
      }
    }
    if (seachOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [seachOpen]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const timedata = 500;
  const [suggationword, setSuggationword] = useState([]);
  const timeoutRef = useRef(null);

  const seachhandler = async (e) => {
    const word = e.target.value;
    setSeachOpen(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fetchData();
    }, timedata);

    const fetchData = async () => {
      try {
        if (word.length > 0) {
          const res = await fetch(`/api/wordsuggation/ws?word=${word}`);
          const data = await res.json();
          setSuggationword(data.suggationword);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  };

  return (
    <>
      <div ref={navbtnRef}>
        <ManiNav toggleSidebar={toggleSidebar} />
      </div>
      <div className="home-layout">
        <div className="home-row">
          <div ref={sidebarRef} className={`sidebar-wrap ${!sidebarOpen ? 'closed' : 'open'}`}>
            <Sidebar isOpen={sidebarOpen} />
          </div>
          <main className="home-main">
            <section className="hero">
              <div className="hero-grid">
                <div>
                  <div className="pill">HeliusDEV Studio</div>
                  <h1 className="hero-title">Build premium web experiences with confidence.</h1>
                  <p className="hero-copy">
                    Custom web apps, high-converting landing pages, and premium resources for builders.
                    Modern, fast, and designed to feel expensive.
                  </p>
                  <div className="search-box">
                    <div className="input-shell">
                      <input
                        onChange={seachhandler}
                        type="text"
                        placeholder="Search resources, templates, or posts"
                      />
                      <button type="button" className="btn btn-ghost">Search</button>
                    </div>
                    {seachOpen && suggationword.length > 0 && (
                      <div ref={searchRef} className="search-results">
                        {suggationword.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => router.push(`/wordsuggation/${item}`)}
                            className="search-item"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="tech-list">
                    <div className="pill muted">Next.js</div>
                    <div className="pill muted">React</div>
                    <div className="pill muted">MongoDB</div>
                  </div>
                </div>

                <div className="hero-card">
                  <div className="hero-card-glow" />
                  <div className="hero-card-inner">
                    <Image src="/home.svg" alt="HeliusDEV" width={360} height={260} className="hero-image" />
                    <div style={{ marginTop: "1.2rem" }}>
                      <h2 style={{ fontSize: "1.6rem" }}>Subscription access</h2>
                      <p className="hero-copy">
                        Get exclusive access to Chrome extension code, premium resources, and community projects.
                      </p>
                      <div className="price-row">
                        <span className="pill warn">Only Rs200</span>
                        <PayButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <section className="section-wrap">
          <div className="container">
            <Service />
          </div>
        </section>
        <section className="section-wrap alt">
          <div className="container">
            <h2 className="section-heading">Python Service</h2>
            <Pythonbadge />
          </div>
        </section>
      </div>
    </>
  );
}
