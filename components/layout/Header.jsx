"use client";

import Link from "next/link";
import { Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCart } from "../cart/CartContext";

const nav = [
  ["Products", "/products"],
  ["Categories", "/categories"],
  ["About", "/about"],
  ["Showroom", "/showroom"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const { itemCount } = useCart();

  useEffect(() => {
    const stored = localStorage.getItem("marrks-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = stored || (systemDark ? "dark" : "light");
    document.documentElement.dataset.theme = next;
    setTheme(next);

    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("marrks-theme", next);
    setTheme(next);
  }

  return (
    <>
      <motion.header
        className={`site-header ${scrolled ? "is-scrolled" : ""}`}
        animate={{
          top: scrolled ? 14 : 0,
          left: scrolled ? 18 : 0,
          right: scrolled ? 18 : 0,
        }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar">
          <Link href="/" className="brand" aria-label="MARRKS C home">
            <span className="brand-mark">
              <img src="/images/mc-logo.png" alt="" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <span className="brand-fallback">MC</span>
            </span>
            <span className="brand-name">MARRKS <b>C</b></span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/reservation" className="cart-button" aria-label={`Reservation cart with ${itemCount} items`}>
              <ShoppingBag size={18} />
              <span className="cart-count">{itemCount}</span>
            </Link>
            <Link href="/products" className="nav-cta">Explore collection</Link>
            <button className="icon-button menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={21} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu-layer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} aria-label="Close menu" />
            <motion.aside
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-menu-head">
                <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
                  <span className="brand-mark"><span className="brand-fallback">MC</span></span>
                  <span className="brand-name">MARRKS <b>C</b></span>
                </Link>
                <button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X size={21} />
                </button>
              </div>

              <nav className="mobile-nav">
                {nav.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                    <span>{label}</span>
                    <span>↗</span>
                  </Link>
                ))}
              </nav>

              <div className="mobile-menu-card">
                <span className="eyebrow">VISIT THE SHOWROOM</span>
                <p>Compare finishes, discuss your project and reserve the pieces you need.</p>
                <Link href="/showroom" onClick={() => setMenuOpen(false)} className="button button-primary">Plan your visit</Link>
              </div>

              <button className="mobile-theme-toggle" onClick={toggleTheme}>
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
