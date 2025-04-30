
import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";


export default async function handler(req, res) {
    await connectDB()
    if (req.method == 'POST') {
        
        return res.status(200).json({ message: "logout sucssecfull", data: { state: false} })

    }
   
}
