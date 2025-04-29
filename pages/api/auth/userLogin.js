
import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";
import Blog from "../../../lib/schema/blog";

export default async function handler(req, res) {
    await connectDB()
    if (req.method == 'POST') {
        const {username, password} =req.body
        const data = await User.findOne({"username": username})
        if (!data) {
            return res.status(400).json({message: "User not found", data:{state:false}})
        }
        if (data.password !== password) {
            return res.status(400).json({message: "Incorrect password", data:{state:false}})
        }
        if (data) {
            return res.status(200).json({message: "login", data: {state: true, user: data}})
        }
    }
    // if (req.method == 'POST') {
    //     const body = req.body
    //     console.log(body)
    //     const user = await User.findOne({ "username": "neha" })
    //     console.log(user)
    //     const blog = await Blog.create({
    //         titel: body.title,
    //         write: body.content,
    //         author: user._id
    //     })
    //     user.blogs.push(blog._id)
    //     await user.save()
    //     res.status(200).json({blog})
    // }

    // console.log(blog)

}
