"use client";

import { useCart } from "../context/CartContext";

export default function CartBadge() {
  const { totalItems } = useCart();

  return (
    <div className="relative">
      🛒
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );
}
