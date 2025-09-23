"use client";

export default function CheckoutButton({ items }: { items: any[] }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    >
      Checkout
    </button>
  );
}
