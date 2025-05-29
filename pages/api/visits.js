import { connectDB } from "../../lib/db";
import Visit from "../../lib/schema/visit";
// In-memory storage (resets on server restart)
let visitCount = 0;
export default async function handler(req, res) {
    await connectDB()
    const visit = await Visit.findOne({ "username": "visiter" });
    console.log(visit)
    if (req.method === 'GET') {
        if (visit) {
            visitCount = visit.count;
            visitCount += 1;
            visit.count = visitCount;
            await visit.save()
            res.status(200).json({ count: visitCount });
        } else {
            const visit = await Visit.create({
                username: "visiter",
                count: 0,
            })
            await visit.save()
        }

    } else {

        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
