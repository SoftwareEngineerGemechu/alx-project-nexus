// src/app/checkout/page.tsx
"use client";

import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

// Load Stripe publishable key from env
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function CheckoutPage() {
  return (
    <div className="max-w-6xl mx-auto mt-12 px-6 py-12 shadow-lg rounded-xl bg-[#00798e]/10 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8 hover:text-[#edae49] transition">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 shadow-lg p-8 rounded-xl bg-[#00798e]/30">
        {/* Left: Payment Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 ">
            Complete Your Payment
          </h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>

        {/* Right: Order Summary */}
        <div>
          <OrderSummary />
        </div>
      </div>
      {/* Back to Cart Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#003d5b] hover:text-[#edae49] mt-16 transition-colors"
      >
        <i className="bx bx-arrow-back text-2xl"></i>
        <span className="font-semibold">Back to Cart</span>
      </Link>
    </div>
  );
}
