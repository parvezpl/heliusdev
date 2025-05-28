import { connectDB } from "../../../../lib/db";
import Bnshi from "../../../../lib/schema/bnshi";


export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const { search } = req.query
        console.log("Search query:", search);
        const data = await Bnshi.find()
        if (!data || data.length === 0) {
            return res.status(404).json({ error: "No data found" });
        }

        const bns = data.flatMap(item =>
            item.sections.filter(item1 => 
                item1.section.toLowerCase().includes(search.toLowerCase()) ||
                item1.section_title.toLowerCase().includes(search.toLowerCase())
                // || item1.content.toLowerCase().includes(search.toLowerCase())
            )
        );
        if (bns.length === 0) {
            return res.status(404).json({ error: "No matching sections found" });
        }
        return res.status(200).json({bns});
    }

}