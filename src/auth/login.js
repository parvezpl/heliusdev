'use client'


import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Login({ isOpen, onClose }) {
  const [islogin, setIslogin] =useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' });
  const router = useRouter()
  const loginRef = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null


  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submithandler = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    console.log("submit", result)
    setIslogin(result.state)
  }
  return (
    <div className="flex absolute w-screen h-screen  justify-center items-center inset-0 z-10  bg-black/50 ">
      login
      <div ref={loginRef} className="bg-zinc-700 w-[300px] h-[300px] flex flex-col justify-center items-center gap-4 p-4 rounded-lg  ">
        <h1 className='text-[25px] font-light text-blue-400 border-b-1 border-amber-600 text-shadow-sm text-shadow-gray-800 '>Login</h1>
        <form className='flex flex-col justify-center items-center gap-4' onSubmit={submithandler}>
          <input type="text" placeholder="Username"
            name="username"
            onChange={handleChange}
            value={formData.name}
            className=' outline-[0.1px] outline-blue-500 text-[15px] text-white w-[200px] h-8 p-2 ' />
          <input type="password" placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData.name}
            className=' outline-[0.1px] outline-blue-500 text-[15px] text-white w-[200px] h-8 p-2 ' />
          <button type="submit" className=" text-sm bg-cyan-500 shadow-lg shadow-cyan-500/50 border-1 px-4 rounded-sm ">Login</button>
        </form>
        <div className="flex gap-4 text-[10px] text-gray-200 font-light">
          <div className=" cursor-pointer border-1 px-2 hover:bg-gray-600">google</div>
          <div className=" cursor-pointer border-1 px-2 hover:bg-gray-600">github</div>
        </div>
      </div>
    </div>
  )
}