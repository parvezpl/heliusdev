
import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";

export default async function handler(req, res) {
    await connectDB()
    if (req.method == 'POST') {
        const body = req.body
        const data = await User.create(
            {
                username: body.username,
                password: body.password,
                email: body.email
            }
        )
        if (data) {
            return res.status(200).json({ message: "account create sucssecfull", data: { state: true, user: data } })
        }
    }
   
}
