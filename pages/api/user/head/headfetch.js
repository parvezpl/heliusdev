// pages/api/data.js
import { connectDB } from "../../../../lib/db";
import User from "../../../../lib/schema/users";




export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        await connectDB()
        const users = await User.find()
        return res.status(200).json({ users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
