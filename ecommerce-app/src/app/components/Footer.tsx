import Link from "next/link";
import { categories } from "../data/products";

export default function Footer() {
  return (
    <footer>
      {/* Newsletter section */}
      <div className="bg-[#003d5b] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-2">
                Join Our Newsletter
              </h2>
              <p className="text-white/80">
                Get the latest products, promotion, and tech news delivered to
                your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  className="px-5 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#edae49]min-w-[240px]"
                  placeholder="Your email address"
                  required
                />
                <button className="bg-[#edae49] hover:bg-[#edae49]/90 text-white px-6 py-3 rounded-lg transform hover:scale-105 font-medium flex items-center justify-center translation-all">
                  Subscribe <i className="bx bx-envelope ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Main content footer */}
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols md:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center mb-6">
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
            <div className="flex space-x-4">
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

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#003d5b] font-bold mb-4 text-lg">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link
                    href="/products"
                    className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-flex items-center transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#edae49] opacity-70 mr-2 inline-block"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-[#00798c] hover:text-[#003d5b] font-bold  hover:translate-x-1 inline-flex items-center transition-all group"
                >
                  View All{" "}
                  <i className="bx bx-right-arrow-alt ml-1 opacity-70 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#003d5b] font-bold mb-4 text-lg">Shop</h3>
            <ul className="space-y-2.5">
              {[
                "All Products",
                "New Arrivals",
                "Best Sellers",
                "Deals",
                "Gift Cards",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-block transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#003d5b] font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-2.5">
              {["Contact Us", "FAQs", "Shipping", "Returns", "Track Order"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-block transition-all"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#003d5b] font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2.5">
              {["About Us", "Blog", "Careers", "Press", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-block transition-all"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} StoreBrand. All rights reserved.
            </div>

            {/* Payment methods */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {["Visa", "Mastercard", "Paypal", "Apple"].map((method) => (
                <div key={method} className="text-gray-400">
                  <i className={`bx bxl-${method.toLowerCase()} text-2xl`}></i>
                </div>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex items-center space-x-3">
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
