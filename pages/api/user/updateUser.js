// pages/api/data.js
import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";
// import Links from "../../../lib/schema/links";
// import Blog from "../../../lib/schema/blog";
// import Payments from "../../../lib/schema/razorpayschema";



export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "POST") {
        console.log("get data")
        const user = await User.findOne({'_id':req.query.id})
        
        return res.status(200).json({ user});
    }
}
