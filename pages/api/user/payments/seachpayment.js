// pages/api/data.js
import { connectDB } from "../../../../lib/db";
import Payments from "../../../../lib/schema/razorpayschema";



export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        await connectDB()
        const { search } = req.query
        const term = (search || "").toString().toLowerCase()
        const payments = await Payments.find().populate('userId')
        if (!term) {
            return res.status(200).json({ seardata: payments });
        }
        const seardata = payments.filter((item) => {
            const username = (item.userId?.username || "").toString().toLowerCase()
            const amount = String(item.amount || "")
            const status = (item.status || "").toString().toLowerCase()
            return username.includes(term) || amount.includes(term) || status.includes(term)
        })
        return res.status(200).json({ seardata });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}
