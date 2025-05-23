
import { connectDB } from "../../../lib/db";
import Bnsen from "../../../lib/schema/bnsen";



export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        const bnsen = await Bnsen.findOne()
        // console.log(bnsen)
        // const seardata= bns.filter((item) => {
        //     if (item.username.toLowerCase().match(search.toLowerCase())) {
        //         return  item
        //     }
        // })
        return res.status(200).json({bnsen});
    }

}
