// src/components/CategoryGrid.tsx
"use client";

import Image from "next/image";
import { categories, Category } from "../data/products"; // adjust path if needed
import Link from "next/link";

// Map slugs -> icons
const categoryIcons: Record<string, string> = {
  smartphones: "bx bx-mobile-alt",
  televisions: "bx bx-tv",
  headphones: "bx bx-headphone",
  laptops: "bx bx-laptop",
  smartwatches: "bx bx-watch",
  cameras: "bx bx-camera",
  tablets: "bx bx-tab",
  speakers: "bx bx-speaker",
};

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 my-16">
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl shadow-md p-10 md:p-12 flex flex-col md:flex-row items-center gap-x-20">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Shop by Category
          </h2>
          <p className="text-slate-600 max-w-md">
            Discover our curated collection of premium tech products across
            multiple categories.
          </p>

          {/* Category Buttons */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {categories.slice(0, 4).map((cat: Category) => (
              <button
                key={cat.slug}
                className="flex flex-col items-center justify-center w-full py-2 rounded-lg shadow-md hover:opacity-90 transition text-white font-semibold text-lg"
                style={{ backgroundColor: cat.color }}
              >
                <i className={`${categoryIcons[cat.slug]} text-3xl mb-2`}></i>
                {cat.name}
              </button>
            ))}
          </div>

          {/* View All link */}
          <Link
            href="/products"
            className="text-teal-700 font-medium flex items-center gap-2 hover:text-[#003d5b] mt-4"
          >
            View All Categories <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>

        {/* Right Product Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/images/product005.png"
            alt="Featured Category"
            width={300}
            height={220}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
