
import { connectDB } from "../../../lib/db";
import PaymentSchema from '../../../lib/schema/razorpayschema'
import User from "../../../lib/schema/users";

export default async function handler(req, res) {

    if (req.method === "POST") {
        await connectDB()
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body
        console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature)
        const oldpayment = await PaymentSchema.findOne({ razorpay_order_id: razorpay_order_id })
        oldpayment.razorpay_payment_id = razorpay_payment_id
        oldpayment.razorpay_signature = razorpay_signature
        oldpayment.status='paid'
        oldpayment.save()
        res.status(200).json(oldpayment);
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
