// pages/api/data.js
import { connectDB } from "../../../../lib/db";
import Payments from "../../../../lib/schema/razorpayschema";



export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const payments = await Payments.find().populate('userId')
        return res.status(200).json({ payments});
    }

}
