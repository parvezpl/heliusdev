// models/Payment.js
import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    razorpay_order_id: {
      type: String,
      required: true,
      unique: true,
    },
    razorpay_payment_id: {
      type: String,
    },
    razorpay_signature: {
      type: String,
    },
    amount: {
      type: Number, // in paise
      required: true,
    },
    currency: {
      type: String,
      default: "INR",
    },
    status: {
      type: String,
      enum: ["created", "paid", "failed"],
      default: "created",
    },
    receipt: {
      type: String,
    },
    notes: {
      type: mongoose.Schema.Types.Mixed, // Razorpay allows custom notes
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Optional: link to user if needed
    },
  },
  { timestamps: true }
);

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
