// pages/api/data.js
import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";
import Links from "../../../lib/schema/links";


export default async function handler(req, res) {
    await connectDB()
    if (req.method == "GET") {
        const {id} = req.query
        const data = await Links.find()
        // console.log(data)
        return res.status(200).json(data);
    }

    if (req.method == 'POST') {
        const body = req.body
        console.log(body)
        const user = await User.findOne({ "username": body.username })
        const links = await Links.create({
            type: body.type,
            links: body.links,
            description: body.description,
            author: user._id
        })
        user.links.push(links._id)
        await links.save()
        res.status(200).json({links})
    }

    // console.log(blog)

}
