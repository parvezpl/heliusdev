'use client'


import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Login({ isOpen, onClose, setIslogin }) {
  const [issignupbox, setSignupbox] = useState(true)
  const [formData, setFormData] = useState({ username: '', password: '', email:'' });
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
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result) {
      console.log("submit", result, result.data.state)
      setIslogin(result.data.state)
      onClose()
    }
  }

  const loginbox = () => {
    return (
      <>
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
        <div className="text-yellow-500 text-shadow-sm text-shadow-gray-900 cursor-pointer
           hover:text-yellow-400"
           onClick={()=>setSignupbox(false)}
           >create a new account</div>
        <div className="flex gap-4 text-[10px] text-gray-200 font-light">
          <div className=" cursor-pointer border-1 px-2 hover:bg-gray-600">google</div>
          <div className=" cursor-pointer border-1 px-2 hover:bg-gray-600">github</div>
        </div>
      </>
    )
  }

  const singupbox = () => {
    return (
      <>
        <div onClick={()=>{setSignupbox(true)}} className="flex absolute cursor-pointer top-0 left-0 text-yellow-500 m-2 shadow-sm shadow-gray-900"><IoMdArrowRoundBack /></div>
        <h1 className='text-[25px] font-light text-blue-400 border-b-1 border-amber-600 text-shadow-sm text-shadow-gray-800 '>sign up</h1>
        <form className='flex flex-col justify-center items-center gap-4' onSubmit={submithandler}>
          <input type="text" placeholder="Username"
            name="username"
            onChange={handleChange}
            value={formData.name}
            className=' outline-[0.1px] outline-blue-500 text-[15px] text-white w-[200px] h-8 p-2 ' />
          <input type="email" placeholder="email"
            name="email"
            onChange={handleChange}
            value={formData.name}
            className=' outline-[0.1px] outline-blue-500 text-[15px] text-white w-[200px] h-8 p-2 ' />
          <input type="password" placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData.name}
            className=' outline-[0.1px] outline-blue-500 text-[15px] text-white w-[200px] h-8 p-2 ' />
          <button type="submit" className=" text-sm bg-cyan-500 shadow-lg shadow-cyan-500/50 border-1 px-4 rounded-sm ">SignUp</button>
        </form>
      </>
    )
  }
  return (
    <div className="flex absolute w-screen h-screen  justify-center items-center inset-0 z-10  bg-black/50 ">
      <div ref={loginRef} className=" relative bg-zinc-700 w-[300px] h-[300px] flex flex-col justify-center items-center gap-4 p-4 rounded-lg  ">
        {
          issignupbox ? loginbox() : singupbox()
        }
     </div>
    </div>
  )
}

