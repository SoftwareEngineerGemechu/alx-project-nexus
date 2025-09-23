import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import "boxicons/css/boxicons.min.css";
import { CartProvider } from "./context/CartContext";
import Providers from "./providers";

const promptFont = Prompt({
  subsets: ["latin"],
  variable: "--font-prompt",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Storebrand - Premium products",
  description: "Ecommerce store built with nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={promptFont.className}>
      <body className="antialiased min-h-screen flex flex-col m-0 p-0">
        <Providers>
          <CartProvider>{children}</CartProvider>
        </Providers>
      </body>
    </html>
  );
}
