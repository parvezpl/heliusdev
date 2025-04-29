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

}