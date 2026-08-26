import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/layout/BackToTop";
import { CartProvider } from "../components/cart/CartContext";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata = {
  title: "MARRKS C | Building Materials & Architectural Finishes",
  description: "A premium MARRKS C showroom experience for building materials and architectural finishes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}
