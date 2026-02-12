import { connectDB } from "../../lib/db";
import Visit from "../../lib/schema/visit";

const USERNAME = "visiter";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        await connectDB();
        const visit = await Visit.findOneAndUpdate(
            { username: USERNAME },
            { $inc: { count: 1 } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        return res.status(200).json({ count: visit.count });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
