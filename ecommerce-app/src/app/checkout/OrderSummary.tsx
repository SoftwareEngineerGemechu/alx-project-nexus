"use client";

import { useEffect, useState } from "react";

export default function OrderSummary() {
  interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(stored);
    }
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-[#00798e]/50 shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <ul className="divide-y divide-gray-200 mb-4">
        {cart.map((item, i) => (
          <li key={i} className="py-3 flex justify-between">
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  );
}
