import React from 'react'

function Chatbox() {
  return (
    <div className='flex flex-col h-screen w-full'>
        <div className='flex items-center justify-between p-4 bg-gray-200 border-b'>
            <h1 className='text-xl font-bold'>Chat</h1>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>New Chat</button>
        </div>
        <div className='flex flex-col h-[80vh] '>
            <div className='flex-1 overflow-y-auto p-4'>
            Chat messages will go here
            </div>
            <div className='p-4 border-t'>
            <input type="text" placeholder="Type a message..." className='w-full p-2 border rounded' />
            </div>
        </div>
    </div>
  )
}

export default Chatbox