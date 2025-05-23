// pages/api/data.js
import { connectDB } from "../../../../lib/db";
import User from "../../../../lib/schema/users";




export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const users = await User.find()
        return res.status(200).json({ users});
    }

    
}
