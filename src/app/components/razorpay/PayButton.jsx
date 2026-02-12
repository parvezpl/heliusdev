'use client'

import { signIn, useSession } from "next-auth/react";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function PayButton() {
  const { data: session, status } = useSession();

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Failed to load Razorpay SDK");
      return;
    }

    if (status !== "authenticated") {
      await signIn("google", { callbackUrl: "/" });
      return;
    }

    const order = await fetch("/api/payment/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 200,
        username: session?.user?.username || session?.user?.name,
        id: session?.user?.id,
      }),
    }).then((response) => response.json());

    const paymentsetle = async (response) => {
      return await fetch('/api/payment/razorpaysetle', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature
        }),
      });
    };

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "heliudev pay",
      description: "Test pay helius dev Transaction",
      order_id: order.id,
      handler: function (response) {
        const paymentsetleres = paymentsetle(response);
        if (paymentsetle) {
          console.log(response);
          console.log(paymentsetleres);
          alert("Payment Successful!");
          return;
        }
        console.log("payment not setle");
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button onClick={handlePayment} className="btn btn-primary" type="button">
      Pay Rs200
    </button>
  );
}
