"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { productsList } from "@/app/data/products";

const placeholderImg = "/images/placeholder.png";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Filter products by name or description
  const filtered = productsList.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Search results for: <span className="text-[#edae49]">{query}</span>
      </h1>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={product.image || placeholderImg}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {product.description}
                </p>
                <p className="text-[#003d5d] font-bold">${product.price}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-2 inline-block bg-[#003d5d] text-white px-4 py-2 rounded-lg hover:bg-[#edae49] hover:text-[#003d5d] transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <Image
            src={placeholderImg}
            alt="Not Found"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <p className="text-lg text-gray-600">
            No products found matching{" "}
            <span className="font-semibold">{query}</span>.
          </p>
        </div>
      )}
    </div>
  );
}
