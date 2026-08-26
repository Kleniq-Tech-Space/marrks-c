"use client";

import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "../../data/products";
import { useCart } from "../cart/CartContext";

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section className="section section-soft">
      <div className="page-container">
        <div className="section-heading">
          <div><span className="eyebrow">FEATURED PRODUCTS</span><h2>Selected pieces.</h2><p>Materials and finishes chosen for projects with a point of view.</p></div>
          <Link href="/products" className="text-link">Shop collection <ArrowUpRight size={15} /></Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 6).map((product, index) => (
            <motion.article className="product-card" key={product.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.04 }}>
              <Link href={`/products/${product.slug}`} className="product-image-link">
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                  <span className="product-badge">{product.badge}</span>
                  <span className="product-view"><ArrowUpRight size={16} /></span>
                </div>
              </Link>
              <div className="product-info">
                <div><span>{product.category}</span><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3></div>
                <div className="product-price"><strong>₵{product.price.toLocaleString()}</strong><small>/ {product.unit}</small></div>
              </div>
              <button className="quick-add" onClick={() => addToCart(product)}><ShoppingBag size={15} /> Add to reservation</button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
