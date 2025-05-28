import { connectDB } from "../../../../lib/db";
import Bnshi from "../../../../lib/schema/bnshi";

export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        const bnsen = await Bnshi.find()
        bnsen.map((item) => {
            if (item.chapter === search) {
                return res.status(200).json({chapter:item})
            }
        })
    }

}