// pages/api/data.js
import { connectDB } from "../../../../lib/db";
import Payments from "../../../../lib/schema/razorpayschema";



export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        await connectDB()
        const payments = await Payments.find().populate('userId')
        return res.status(200).json({ payments });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}
