"use client";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // Call backend to create PaymentIntent
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5000, currency: "usd" }),
    });

    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent?.status === "succeeded") {
      alert("✅ Payment successful!");
      window.location.href = "/success";
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="border p-3 rounded-md " />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-[#003d5d] text-white px-6 py-2 rounded-md hover:bg-[#edae49] hover:text-[#003d5d] transition"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}
