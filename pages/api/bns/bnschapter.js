import { connectDB } from "../../../lib/db";
import Bnsen from "../../../lib/schema/bnsen";

export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        console.log(search)
        const bnsen = await Bnsen.find()
        bnsen.map((item) => {
            if (item.chapter == search) {
                console.log(item.detail)
                return res.status(200).json({chapter:item.detail})
            }
        })
    }

}