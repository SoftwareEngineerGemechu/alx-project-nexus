"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "../data/products";
import CartDrawer from "./CartDrawer";
import AuthNavItem from "./AuthNavItem";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // ✅ Added: mobile menu state

  // Map category slug to an icon (Boxicons)
  const categoryIcons: Record<string, string> = {
    smartphones: "bx bx-mobile-alt",
    televisions: "bx bx-tv",
    headphones: "bx bx-headphone",
    laptops: "bx bx-laptop",
    smartwatches: "bx bx-stopwatch",
    cameras: "bx bx-camera",
    tablets: "bx bx-tab",
    speakers: "bx bx-speaker",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#003d5d] shadow-md py-4 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-[#edae49] text-[#003d5d] rounded-full flex items-center justify-center font-bold text-xl mr-2">
                SB
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Store<span className="text-[#edae49]">Brand</span>
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block flex-grow max-w-lg mx-8">
            <form action="/search" method="get" className="group relative">
              <input
                type="text"
                name="q"
                placeholder="Search for products..."
                className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-4 pr-10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#edae49] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-white/70 p-1.5 hover:text-white rounded-full transition-colors"
              >
                <i className="bx bx-search text-xl"></i>
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Products Dropdown */}
            <div className="group relative">
              <button
                onClick={() => setOpen(!open)}
                className="text-white/90 hover:text-[#edae49] transition-colors p-2 rounded-full hover:bg-white/10 flex items-center"
              >
                <i className="bx bx-store text-2xl mr-1"></i>
                <span className="hidden md:inline text-base font-medium">
                  Products
                </span>
                <i className="bx bx-chevron-down ml-1"></i>
              </button>
              {open && (
                <div
                  className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg z-50
               max-h-96 overflow-y-auto"
                >
                  <ul className="divide-y divide-gray-100">
                    {categories.map((cat) => (
                      <li key={cat.slug}>
                        <Link
                          href={`/products/${cat.slug}`}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                          {/* Icon */}
                          <i
                            className={`${
                              categoryIcons[cat.slug] || "bx bx-box"
                            } text-xl`}
                            style={{ color: cat.color }}
                          ></i>

                          {/* Texts */}
                          <div className="flex-1">
                            <p className="font-medium">{cat.name}</p>
                            <p className="text-sm text-gray-500">
                              {cat.description}
                            </p>
                          </div>

                          {/* Chevron */}
                          <i className="bx bx-chevron-right text-gray-400"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Cart Drawer */}
            <CartDrawer />

            {/* Authentication */}
            <AuthNavItem />
          </div>

          {/* ✅ Added: Hamburger menu button for mobile */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={mobileOpen ? "bx bx-x" : "bx bx-menu"}></i>
          </button>
        </div>
      </div>

      {/* ✅ Added: Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#003d5d] px-4 pb-4 space-y-4">
          {/* Search bar on mobile */}
          <form action="/search" method="get" className="group relative">
            <input
              type="text"
              name="q"
              placeholder="Search for products..."
              className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-4 pr-10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#edae49] focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 text-white/70 p-1.5 hover:text-white rounded-full transition-colors"
            >
              <i className="bx bx-search text-xl"></i>
            </button>
          </form>

          {/* Products Link */}
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left text-white/90 hover:text-[#edae49] transition-colors p-2 rounded-lg hover:bg-white/10 flex items-center"
          >
            <i className="bx bx-store text-2xl mr-2"></i>
            Products
            <i className="bx bx-chevron-down ml-auto"></i>
          </button>
          {open && (
            <div className="bg-white rounded-xl shadow-lg">
              <ul className="divide-y divide-gray-100">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/products/${cat.slug}`}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <i
                        className={`${
                          categoryIcons[cat.slug] || "bx bx-box"
                        } text-xl`}
                        style={{ color: cat.color }}
                      ></i>
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cart + Auth on mobile */}
          <div className="flex items-center space-x-4">
            <CartDrawer />
            <AuthNavItem />
          </div>
        </div>
      )}
    </nav>
  );
}
