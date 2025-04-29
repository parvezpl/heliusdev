import db from '../../../../lib/mongodb';

const User = require('../../../../lib/schema/users')
const mongoose = require('mongoose');
// const {jwtAuthMiddleware, generateToken} = require('./../jwt')
 
export async function GET() {
    const Db= await db()
    console.log("hello", mongoose.connection.readyState)
    // const data = await User.find()
    const data ="checked"
    console.log("data",mongoose.connection)
    return Response.json({ message: 'Hello from get created signup!', data });
}

// export async function POST(request) {
//     const body = await request.json();
//     // const { username, password } = body;
//     const newUser = new User(body)
//     const responce  = await newUser.save()
//     console.log("body",responce )
//     return Response.json({ message: 'You sent:', responce});
// }


// userRouter.post('/createAccount', async (req, res)=>{
    
//     try {
//         const data =req.body
//         const newUser= new User(data)
//         const responce = await newUser.save()
//         console.log(responce)
//         const token = generateToken(responce.id) //contact replace by username 
//         res.cookie("token",token, {
//             secure:true,
//             httpOnly:true
//         })
//         token ? res.json({token,newUser}) : res.json(false)
//     } catch (error) {
//         res.json({"not gen":error})
//     }
// }) 


// userRouter.post('/userlogin', async (req, res) => {
//     try {
//         const {username, password} =req.body;
//         console.log(username)
//         const user= await User.findOne({username: username}); // contact replay by username 
//         if(!user || !(await user.comparePassword(password))){
//             return res.status(401).json({error:"invalid username or password"})
//         }

//         const payload = {
//             id : user.id,
//             name:user.name,
//         }
        
//         const token = generateToken(payload)
//         res.cookie("token",token, {
//             secure:true,
//             httpOnly:true
//         })
//         token ? res.json({payload,token}) : res.json(false)
//         console.log("login successful")
//     } catch(err){
//         res.status(500).json({error:"internal server erro"})
//     }
// })

// userRouter.get('/logout', async (req, res) => {
//     console.log("log")
//     try {
//         await res.clearCookie("token")
//         console.log("logout successfull")
//         res.json("logout successfull")
//     } catch(err){
//         res.status(500).json({error:"internal server erro"})
//     }
// })


// userRouter.get('/getuser',jwtAuthMiddleware, async (req, res) => {
//     const userData = req.user
//     const data = await User.find()
//     res.status(200).json(data)
// })

// userRouter.get('/getuserdata',jwtAuthMiddleware, async (req, res) => {
//     const { id } = req.query;
//     const data = await User.findOne({_id:id})
//     res.status(200).json(data)
// })


// userRouter.put('/getuserdata/:id', async (req, res) => {
//     const { id } = req.params;
//     const { data } = req.body;
//     console.log(id,data)
//     try {
//         const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
//         if (!updatedUser) return res.status(404).send('User not found');
//         res.send(updatedUser);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// userRouter.delete('/getuserdata/:id',jwtAuthMiddleware, async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deletedUser = await User.findByIdAndDelete(id);
//         if (!deletedUser) return res.status(404).send('User not found');
//         res.send({ message: 'User deleted successfully', deletedUser });
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });


// userRouter.get('/token',jwtAuthMiddleware, async (req, res) => {
//     // const token = req.headers['authorization']?.split(' ')[1]; 
//     const name = req.user.name
//     console.log("name",name)
//     res.json(name)
// })
