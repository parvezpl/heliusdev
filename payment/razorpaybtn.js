"use client";
import { useEffect } from "react";

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_Q0kMG4mYcAbmNo");
    script.async = true;
    // document.getElementById("razorpay-container").appendChild(script);
    // return <div id="razorpay-container"></div>
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your key
      amount: 50000, // in paise
      currency: 'INR',
      name: 'Your Company',
      description: 'Test Transaction',
      order_id: 'order_xxxxxx', // Get from server
      handler: function (response) {
        alert('Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Parvez Alam',
        email: 'parvez@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <form>
      <button type="button" onClick={handlePayment}>
        Pay with Razorpay
      </button>
    </form>
  );
}

export default RazorpayButton;