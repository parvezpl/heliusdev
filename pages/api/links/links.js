// pages/api/data.js
import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";
import Links from "../../../lib/schema/links";


export default async function handler(req, res) {
    // console.log("links", req)
    await connectDB()
    if (req.method == "GET") {
        const {id} = req.query
        const data = await Links.find()
        console.log(data)
        return res.status(200).json(data);
    }

    if (req.method == 'POST') {
        const body = req.body
        const user = await User.findOne({ "username": body.username })

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        const links = await Links.create({
            type: body.type,
            links: body.links,
            description: body.description,
            author: user._id
        })
        user.links.push(links._id)
        await user.save()
        res.status(200).json({message: "add succsessfully" ,links})
    }

    if (req.method == 'DELETE') {
        const { id } = req.query
        const links = await Links.findByIdAndDelete(id)
        if (!links) {
            return res.status(404).json({ message: "link not found" })
        }
        res.status(200).json({ message: "link deleted" })
    }
    // console.log(blog)

}
