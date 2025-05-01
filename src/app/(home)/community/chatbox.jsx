import React from 'react'

function Chatbox() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Chatbox</h1>
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Chat with the Community</h2>
          <div className="overflow-y-auto h-64 border border-gray-300 rounded-lg p-2 mb-4">
            {/* Chat messages will go here */}
          </div>
          {/* input field and under input, button for sending messages */}
          <div className="flex  items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="border border-gray-300 rounded-lg p-2 flex-1 mr-2"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatbox