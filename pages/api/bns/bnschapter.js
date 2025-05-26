import { connectDB } from "../../../lib/db";
import Bnsen from "../../../lib/schema/bnsen";

export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        const bnsen = await Bnsen.find()
        bnsen.map((item) => {
            if (item.chapter === search) {
                return res.status(200).json({chapter:item})
            }
        })
    }

}