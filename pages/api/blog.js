// pages/api/data.js
import { connectDB } from "../../lib/db";
import User from "../../lib/schema/users";
import Blog from "../../lib/schema/blog";

export default async function handler(req, res) {
    await connectDB()
    if (req.method == "GET") {
        const {id} = req.query
        const data = await User.findOne({'_id':id}).populate('blogs')
        // console.log(data)
        return res.status(200).json({data});
    }

    if (req.method == 'POST') {
        const body = req.body
        // console.log(body)
        const user = await User.findOne({ "username": body.user.username })
        const blog = await Blog.create({
            title: body.title,
            content: body.content,
            author: user._id
        })
        user.blogs.push(blog._id)
        await user.save()
        res.status(200).json({blog})
    }

    // console.log(blog)

}
