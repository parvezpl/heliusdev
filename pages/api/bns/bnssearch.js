import { connectDB } from "../../../lib/db";
import Bnsen from "../../../lib/schema/bnsen";

export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        console.log(search)
        const data = await Bnsen.find()
        let bns=[]

        data.map((item) => {
            // console.log(item.detail)
            item.detail.map((item1) => {
                if (item1.act.toLowerCase().match(search.toLowerCase())) {
                    bns.push(item1)
                    return
                }
                if (item1.title.toLowerCase().match(search.toLowerCase())) {
                    bns.push(item1)
                    return
                }
                if (item1.content.toLowerCase().match(search.toLowerCase())) {
                    bns.push(item1)
                    return
                }
            })

        })
        // console.log(bns)
        return res.status(200).json({bns});
    }

}