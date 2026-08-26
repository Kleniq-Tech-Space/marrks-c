"use client";

import Link from "next/link";
import { Search, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "../../data/products";
import { useCart } from "../../components/cart/CartContext";

const filters = ["All", "Tiles", "Sanitaryware", "Roofing", "Doors"];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  const visible = useMemo(() => products.filter((p) => {
    const matchesCategory = filter === "All" || p.category === filter;
    const term = search.trim().toLowerCase();
    return matchesCategory && (!term || `${p.name} ${p.sku} ${p.category}`.toLowerCase().includes(term));
  }), [filter, search]);

  return (
    <div className="catalog-page">
      <div className="page-container">
        <div className="catalog-hero">
          <span className="eyebrow">THE COLLECTION</span>
          <h1>Explore our<br /><em>products.</em></h1>
          <p>A curated showroom catalogue of tiles, sanitaryware, roofing and doors. Add pieces to a reservation and complete payment at the showroom.</p>
        </div>

        <div className="catalog-toolbar">
          <div className="filter-pills">
            {filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <label className="search-box"><Search size={17} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." /></label>
        </div>

        <div className="catalog-count">{visible.length} selected pieces</div>
        <div className="product-grid catalog-grid">
          {visible.map((product) => (
            <article className="product-card" key={product.id}>
              <Link href={`/products/${product.slug}`} className="product-image-link">
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                  <span className="product-badge">{product.badge}</span>
                  <span className="product-view"><ArrowUpRight size={16} /></span>
                </div>
              </Link>
              <div className="product-info">
                <div><span>{product.category}</span><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><small>{product.sku}</small></div>
                <div className="product-price"><strong>₵{product.price.toLocaleString()}</strong><small>/ {product.unit}</small></div>
              </div>
              <button className="quick-add" onClick={() => addToCart(product)}><ShoppingBag size={15} /> Add to reservation</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
