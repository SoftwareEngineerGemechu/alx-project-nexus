"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  categoryColor: string;
  categorySlug: string;
}

export default function ProductCard({
  product,
  categoryColor,
  categorySlug,
}: ProductCardProps) {
  const { id, name, description, price, image } = product;

  const { cart, addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const inCart = cart.some((item) => item.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
      <div className="h-64 relative bg-gray-50 p-6 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="max-h-full object-contain h-full w-auto group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 border-t border-gray-100">
        <h2 className="text-lg font-bold text-[#003d5b] mb-2 line-clamp-1">
          {name}
        </h2>
        <p className="text-sm text-[#30638e]/80 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold" style={{ color: categoryColor }}>
            ${price.toLocaleString()}
          </span>
          <div className="flex gap-2">
            <Link
              href={`/products/${categorySlug}/${id}`}
              className="px-4 py-2 flex justify-center items-center rounded-full text-white text-sm font-medium"
              style={{ backgroundColor: categoryColor }}
            >
              View Details
            </Link>
            <button
              onClick={handleAdd}
              disabled={inCart}
              className="w-12 h-12 rounded-full text-white flex items-center justify-center disabled:opacity-70"
              style={{ backgroundColor: categoryColor }}
            >
              {inCart ? (
                <i className="bx bx-check text-2xl"></i>
              ) : added ? (
                <i className="bx bx-check-double text-2xl"></i>
              ) : (
                <i className="bx bx-cart text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
