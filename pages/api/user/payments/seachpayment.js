// pages/api/data.js
import { connectDB } from "../../../../lib/db";
import Payments from "../../../../lib/schema/razorpayschema";



export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        const payments = await Payments.find().populate('userId')
        const seardata= payments.filter((item) => {
            if (item.userId.username.toLowerCase().match(search.toLowerCase())) {
                return  item
            }
            if (String(item.amount).match(String(search))) {
                return  item
            }
            if (item.status.toLowerCase().match(search.toLowerCase())) {
                return  item
            }
           
        })
        return res.status(200).json({ seardata});
    }

}
