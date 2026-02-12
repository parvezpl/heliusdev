// pages/api/data.js
import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";
// import Links from "../../../lib/schema/links";
// import Blog from "../../../lib/schema/blog";
// import Payments from "../../../lib/schema/razorpayschema";



export default async function handler(req, res) {
    if (req.method !== "GET" && req.method !== "PUT") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        await connectDB()
        const { id } = req.query
        if (!id) {
            return res.status(400).json({ message: "Missing user id" });
        }

        if (req.method == "GET") {
            const user = await User.findOne({ '_id': id })
            return res.status(200).json({ user });
        }

        if (req.method == "PUT") {
            const { head, value } = req.body
            if (!head) {
                return res.status(400).json({ message: "Missing field name" });
            }
            const user = await User.findOne({ '_id': id })
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            user[head] = value
            await user.save()
            return res.status(200).json({ massage: "updated successfull", user });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
