import "./community.css"

export default function CommunitPage (){

    return (
        <div className=" h-screen w-screen  box-border text-black bg-gray-200 pt-10 sm:pt-0">
            <div className="flex flex-col justify-center items-center h-full w-full ">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to HeliusDEV Community</h1>
                <p className="text-lg text-gray-600 mt-4">Join us to share knowledge, ask questions, and connect with fellow developers.</p>
                <div className="mt-6">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Join Now</button>
                </div>
                <div className="mt-4 text-gray-500">or</div>
                <div className="mt-2">
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Explore Resources</button>
                </div>
                <div className="mt-4 text-gray-500">Connect with us on social media:</div>
                <div className="flex gap-4 mt-2">
                    <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                    <a href="#" className="text-blue-500 hover:underline">Discord</a>
                    <a href="https://github.com/parvezpl" className="text-blue-500 hover:underline">GitHub</a>
                </div>
                <div className="mt-4 text-gray-500">Stay updated with the latest news and updates.</div>

            this is a commuint page 
            </div>
        </div>
    )
}