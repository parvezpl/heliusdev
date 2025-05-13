// pages/api/data.js
import { connectDB } from "../../../../lib/db";
import User from "../../../../lib/schema/users";



export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        const users = await User.find()
        const seardata= users.filter((item) => {
            if (item.username.toLowerCase().match(search.toLowerCase())) {
                return  item
            }
        })
        return res.status(200).json({ seardata});
    }

}
