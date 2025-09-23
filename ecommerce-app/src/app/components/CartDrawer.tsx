"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartDrawer() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-white/90 flex justify-center items-center hover:text-[#edae49] p-2 rounded-full hover:bg-white/10 transition-colors relative"
        aria-label="Open cart"
      >
        <i className="bx bx-cart text-2xl" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed right-4 top-4 bottom-4 w-80 bg-white shadow-lg z-50 rounded-xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1 ml-2">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">${item.price}</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <button
                        type="button"
                        onClick={() => decreaseQty(item.id)}
                        className="px-1 border rounded"
                        aria-label={`Decrease ${item.name}`}
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => increaseQty(item.id)}
                        className="px-1 border rounded"
                        aria-label={`Increase ${item.name}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer with checkout link */}
          <div className="border-t px-4 py-3">
            <p className="font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="block mt-3 bg-[#003d5b] text-white py-2 rounded text-center hover:bg-[#edae49] hover:text-[#003d5b] transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
