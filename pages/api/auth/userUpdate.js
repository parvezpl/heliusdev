import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";

export default async function handler(req, res) {
    await connectDB()
    if (req.method == 'POST') {
        const {id, updatedPassword} =req.body
        // console.log(id, updatedPassword)
        const data = await User.findOne({"_id": id})
        data.password=updatedPassword
        await data.save()

        return res.status(200).json({message: "password update sucssesfull", data: {state: true, user: data}})
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
