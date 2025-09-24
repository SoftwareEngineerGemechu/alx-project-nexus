"use client"; // ✅ Added client directive for state handling
import { useState } from "react";
import Link from "next/link";
import { categories } from "../data/products";

export default function Footer() {
  // ✅ Accordion state for each section
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer>
      {/* Newsletter section */}
      <div className="bg-[#003d5b] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center flex-wrap">
            <div className="mb-8 md:mb-0 md:max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">
                Join Our Newsletter
              </h2>
              <p className="text-white/80">
                Get the latest products, promotion, and tech news delivered to
                your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  className="px-5 py-3 rounded-lg sm:rounded-l-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#edae49] min-w-[240px] flex-grow"
                  placeholder="Your email address"
                  required
                />
                <button className="bg-[#edae49] hover:bg-[#edae49]/90 text-white px-6 py-3 rounded-lg sm:rounded-r-lg transform hover:scale-105 font-medium flex items-center justify-center transition-all">
                  Subscribe <i className="bx bx-envelope ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main content footer */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          {/* Logo + Description */}
          <div className="col-span-1 md:col-span-4 text-center md:text-left">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start mb-6"
            >
              <div className="bg-[#edae49] text-[#003d5b] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mr-2">
                SB
              </div>
              <span className="text-xl text-[#003d5b] font-bold">
                Store<span className="text-[#edae49]">Brand</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6">
              Elevating your tech experience with premium products and
              exceptional service.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                {
                  name: "linkedin",
                  url: "https://www.linkedin.com/in/gemmechubekele/",
                },
                {
                  name: "facebook",
                  url: "https://web.facebook.com/gemmechubekkele",
                },
                { name: "twitter", url: "https://lnkd.in/eedfhY8X" },
                { name: "instagram", url: "https://lnkd.in/eJn27bsk" },
              ].map((platform) => (
                <a
                  href={platform.url}
                  key={platform.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 hover:bg-[#003d5b] transform hover:scale-110"
                >
                  <i
                    className={`bx bxl-${platform.name} text-gray-500 group-hover:text-white text-xl transition-colors`}
                  ></i>
                </a>
              ))}
            </div>
          </div>

          {/* ✅ Collapsible Sections for mobile */}
          {[
            {
              title: "Categories",
              id: "categories",
              items: categories.slice(0, 5).map((c) => (
                <Link
                  key={c.slug}
                  href="/products"
                  className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-flex items-center transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#edae49] opacity-70 mr-2 inline-block"></span>
                  {c.name}
                </Link>
              )),
              extra: (
                <Link
                  href="/products"
                  className="text-[#00798c] hover:text-[#003d5b] font-bold hover:translate-x-1 inline-flex items-center transition-all group"
                >
                  View All{" "}
                  <i className="bx bx-right-arrow-alt ml-1 opacity-70 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              ),
            },
            {
              title: "Shop",
              id: "shop",
              items: [
                "All Products",
                "New Arrivals",
                "Best Sellers",
                "Deals",
                "Gift Cards",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-[#00798c] inline-block"
                >
                  {item}
                </a>
              )),
            },
            {
              title: "Support",
              id: "support",
              items: [
                "Contact Us",
                "FAQs",
                "Shipping",
                "Returns",
                "Track Order",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-[#00798c] inline-block"
                >
                  {item}
                </a>
              )),
            },
            {
              title: "Company",
              id: "company",
              items: [
                "About Us",
                "Blog",
                "Careers",
                "Press",
                "Privacy Policy",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-[#00798c] inline-block"
                >
                  {item}
                </a>
              )),
            },
          ].map((section) => (
            <div key={section.id} className="col-span-1 md:col-span-2">
              {/* Title with toggle on mobile */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center md:block text-left"
              >
                <h3 className="text-[#003d5b] font-bold mb-4 text-lg">
                  {section.title}
                </h3>
                {/* Chevron only visible on mobile */}
                <i
                  className={`bx bx-chevron-down md:hidden transition-transform ${
                    openSection === section.id ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {/* Items (visible on desktop or when opened on mobile) */}
              <ul
                className={`space-y-2.5 overflow-hidden transition-all duration-300 md:block ${
                  openSection === section.id
                    ? "max-h-96 mt-2"
                    : "max-h-0 md:max-h-none"
                }`}
              >
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
                {section.extra && <li>{section.extra}</li>}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} StoreBrand. All rights reserved.
            </div>
            <div className="flex items-center justify-center space-x-6 mb-4 md:mb-0">
              {["Visa", "Mastercard", "Paypal", "Apple"].map((method) => (
                <div key={method} className="text-gray-400">
                  <i className={`bx bxl-${method.toLowerCase()} text-2xl`}></i>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-3">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#003d5b]"
              >
                Terms
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#003d5b]"
              >
                Privacy
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#003d5b]"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
