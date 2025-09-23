"use client";

import { useCart } from "../context/CartContext";
import CheckoutButton from "../components/CheckoutButton";

export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>
                  ${item.price} × {item.quantity}
                </p>
                <p className="text-sm text-gray-500">
                  Subtotal: ${item.price * item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 border rounded"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 border rounded"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
                <button
                  className="ml-4 text-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 border-t pt-4">
            <p className="text-lg font-semibold">
              Total ({totalItems} items): ${totalPrice}
            </p>
            <CheckoutButton items={cart} />
          </div>
        </div>
      )}
    </div>
  );
}
