"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "../cart/CartContext";
import Link from "next/link";

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  function add() {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="product-detail">
      <div className="detail-image" style={{ backgroundImage: `url(${product.image})` }}>
        <span>{product.badge}</span>
      </div>
      <div className="detail-copy">
        <span className="eyebrow">{product.category} · {product.sku}</span>
        <h1>{product.name}</h1>
        <p className="detail-description">{product.description}</p>
        <div className="detail-price">₵{product.price.toLocaleString()} <small>/ {product.unit}</small></div>

        <div className="reservation-note"><strong>Reserve now. Pay at showroom.</strong><span>No online payment is required! Your reservation simply holds the selected products for collection.</span></div>

        <div className="quantity-row">
          <span>Quantity</span>
          <div className="quantity-control">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity"><Minus size={16} /></button>
            <strong>{quantity}</strong>
            <button onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity"><Plus size={16} /></button>
          </div>
        </div>

        <button className="button button-primary add-large" onClick={add}><ShoppingBag size={18} /> {added ? "Added to reservation" : "Add to reservation"}</button>
        {added && <Link className="after-add" href="/reservation">View reservation →</Link>}

        <div className="detail-meta">
          <div><span>Brand</span><strong>{product.brand}</strong></div>
          <div><span>SKU</span><strong>{product.sku}</strong></div>
          <div><span>Availability</span><strong>Demo stock available</strong></div>
        </div>
      </div>
    </div>
  );
}
