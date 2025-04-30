// pages/api/data.js
import { connectDB } from "../../lib/db";
import User from "../../lib/schema/users";

export default async function handler(req, res) {
    await connectDB()
    const method = req.method
    const user = await User.create({"username":"fahad", "password":"1234"})
    // console.log(user)

  res.status(200).json({ user, method });
}
