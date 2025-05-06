import Razorpay from "razorpay";
import { connectDB } from "../../../lib/db";
import PaymentSchema from '../../../lib/schema/razorpayschema'
import User from "../../../lib/schema/users";

export default async function handler(req, res) {

  if (req.method === "POST") {
    await connectDB()
    const { username, id } = req.body
    const user = await User.findById(id)
    console.log(user)
    if (!user) {
      res.status(500).json({ error: "user not login plz login first" })
    }
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET_KEY,
    });

    const options = {
      amount: req.body.amount * 100, // amount in smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    try {
      const order = await razorpay.orders.create(options);
      //save oder detail in mongodb after succussec full detail should be send with api send
      console.log(order)

      await PaymentSchema.create({
        amount: order.amount,
        currency: order.currency,
        status: order.status,
        receipt: order.receipt,
        razorpay_order_id: order.id,
        userId: user._id || '1'

      })

      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: "Order creation failed" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
