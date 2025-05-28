
import { connectDB } from "../../../../lib/db";
import Bnshi from "../../../../lib/schema/bnshi";



export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        const bnshi = await Bnshi.findOne()
        // console.log(bnsen)
        // const seardata= bns.filter((item) => {
        //     if (item.username.toLowerCase().match(search.toLowerCase())) {
        //         return  item
        //     }
        // })
        return res.status(200).json({bnshi});
    }

}
