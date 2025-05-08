// pages/api/data.js
import { connectDB } from "../../../lib/db";
import User from "../../../lib/schema/users";
import Links from "../../../lib/schema/links";
import Blog from "../../../lib/schema/blog";
import Payments from "../../../lib/schema/razorpayschema";



export default async function handler(req, res) {
    await connectDB()
       
    if (req.method == "GET") {
        const users = await User.find()
        const links = await Links.find().populate('author', 'username')
        const blogs = await Blog.find().populate('author', 'username')
        const payments = await Payments.find().populate('userId', 'username')
        const userIdUserUname= payments.map((item) => {
            return  {id:item.userId._id, username: item.userId.username}
        })
        const userdata = userIdUserUname.reduce((acc, curr) => {
            acc[curr.id];
            return acc;
        }, {});
        
        // const data = await PaymentSchema.find({'userId':userdata.id})
        console.log(userdata)
        return res.status(200).json({ users, links, blogs, payments });
    }

    // if (req.method == 'POST') {
    //     const body = req.body
    //     const user = await User.findOne({ "username": body.username })

    //     if (!user) {
    //         return res.status(404).json({ message: "user not found" })
    //     }
    //     const links = await Links.create({
    //         type: body.type,
    //         links: body.links,
    //         description: body.description,
    //         author: user._id
    //     })
    //     user.links.push(links._id)
    //     await user.save()
    //     res.status(200).json({message: "add succsessfully" ,links})
    // }

    // if (req.method == 'DELETE') {
    //     const { id } = req.query
    //     const links = await Links.findByIdAndDelete(id)
    //     if (!links) {
    //         return res.status(404).json({ message: "link not found" })
    //     }
    //     res.status(200).json({ message: "link deleted" })
    // }
    // console.log(blog)

}
