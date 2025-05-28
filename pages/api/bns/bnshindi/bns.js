
import { connectDB } from "../../../../lib/db";
import Bns from "../../../../lib/schema/bns";



export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        const bns = await Bns.find()
        // const seardata= bns.filter((item) => {
        //     if (item.username.toLowerCase().match(search.toLowerCase())) {
        //         return  item
        //     }
        // })
        return res.status(200).json({bns});
    }

}
