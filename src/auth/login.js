'use client'
import './login.css'


import { useRouter } from "next/navigation"

export default function Login(params) {
  const router = useRouter()

  return (
    <div className="login_container">
      <div className="login_box">
        <h1 className=''>Login</h1>
        <form className='flex flex-col justify-center items-center gap-4'>
          <input type="text" placeholder="Username" className=' outline-1' />
          <input type="password" placeholder="Password" className=' outline-1' />
          <button onClick={() => router.push('/dashboard')}>Login</button>
        </form>
      </div>
    </div>
  )
}