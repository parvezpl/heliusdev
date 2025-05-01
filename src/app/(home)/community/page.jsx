'use client'
import { use, useEffect, useState } from "react"
import Chatbox from "./chatbox"
import CommunitJoinPage from "./communityJoin"

export default function CommunityHomePage (){
    const [isMember, setIsMember] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const data = localStorage.getItem('user')
            if (!data) {
                router.push('/')
                return
            }
            const { user } = JSON.parse(data)
            console.log(user._id)
            const res = await fetch(`/api/community/getmember/?id=${user._id}`)
            const result = await res.json()
            console.log(result)
            setIsMember(result.comminityMember)
            setIsLoading(false)
        }
        getData()
    }
    , [])
    return (
        <div className=" h-screen w-screen  box-border text-black bg-gray-200 pt-10 sm:pt-0">
            {
                isLoading ? <div className="flex justify-center items-center h-screen w-screen">Loading...</div> :
                    <div className="flex flex-col justify-center items-center h-screen w-screen">
                        <h1 className="text-2xl font-bold">Welcome to the Community Page</h1>
                        {isMember ? <Chatbox/> : <CommunitJoinPage setIsMember={(res)=>(setIsMember(res))}/>}
                    </div>
            }
        </div>
    )
}