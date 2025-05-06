const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const handlePayment = async () => {
  const res = await loadRazorpayScript();
  if (!res) {
    alert("Failed to load Razorpay SDK");
    return;
  }
  const users = localStorage.getItem('user')
  if(!users){
    alert("For Payment Plz Login First")
    return 
  }

  const user = JSON.parse(users)
  const order = await fetch("/api/payment/razorpay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: 200, username: user.user.username, id: user.user._id }), // ₹500
  }).then((res) => res.json());

  const paymentsetle=async (response) => {
    return await fetch('/api/payment/razorpaysetle', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        razorpay_order_id:response.razorpay_order_id,
        razorpay_payment_id:response.razorpay_payment_id,
        razorpay_signature:response.razorpay_signature
       }),
    })
  }
  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use public key
    amount: order.amount,
    currency: order.currency,
    name: "heliudev pay",
    description: "Test pay helius dev Transaction",
    order_id: order.id,
    handler: function (response) {
      const paymentsetleres=paymentsetle(response)
      // send success data with api and set in database that have already create pament detail
      if (paymentsetle) {
        console.log(response);
        console.log(paymentsetleres);
        alert("Payment Successful!");
        return
      }
      console.log("payment not setle")
    },
    theme: {
      color: "#3399cc",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export default function PayButton() {
  return (
    <button onClick={handlePayment} className="cursor-pointer px-4 py-1 border rounded-sm bg-blue-500">
      Pay ₹200
    </button>
  );
}
