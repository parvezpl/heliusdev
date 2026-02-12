import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";

export default async function handler(req, res) {
    if (req.method !== "DELETE") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        await connectDB();
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: "Missing user id" });
        }
        const user = await User.findByIdAndDelete(id);
        return res.status(200).json({ user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
