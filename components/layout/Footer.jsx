import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [["Products", "/products"], ["Categories", "/categories"], ["About us", "/about"], ["Showroom", "/showroom"]],
  },
  {
    title: "Services",
    links: [["Reserve products", "/reservation"], ["Distributor enquiries", "/distributor"], ["Contact team", "/contact"]],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-newsletter">
          <div>
            <span className="eyebrow">MARRKS C JOURNAL</span>
            <h2>Ideas, materials and inspiration for better spaces.</h2>
          </div>
          <Link href="/products" className="button button-primary">Explore the collection <ArrowUpRight size={17} /></Link>
        </div>

        <div className="footer-main">
          <div className="footer-brand-block">
            <Link href="/" className="footer-brand">MARRKS <b>C</b></Link>
            <p>Premium building materials and architectural finishes selected with a sharp eye for quality, texture and timeless design.</p>
            <div className="footer-socials">
              <a href="mailto:hello@marrksc.com" aria-label="Email MARRKS C"><Mail size={16} /></a>
              <a href="tel:+233000000000" aria-label="Call MARRKS C"><Phone size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </div>

          {columns.map((column) => (
            <div className="footer-column" key={column.title}>
              <span className="footer-label">{column.title}</span>
              {column.links.map(([label, href]) => (
                <Link key={href} href={href} className="footer-link">
                  <span>{label}</span><ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          ))}

          <div className="footer-column">
            <span className="footer-label">Contact</span>
            <span className="footer-contact"><MapPin size={15} /> Accra, Ghana</span>
            <a className="footer-contact" href="tel:+233000000000"><Phone size={15} /> +233 (0) 00 000 0000</a>
            <a className="footer-contact" href="mailto:hello@marrksc.com"><Mail size={15} /> hello@marrksc.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MARRKS C. All rights reserved.</span>
          <span>Developed by <strong>KLENIQ TECH SPACE</strong></span>
        </div>
      </div>
    </footer>
  );
}
