"use client";

import Link from "next/link";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../components/cart/CartContext";
import ReservationForm from "../../components/cart/ReservationForm";

export default function ReservationPage() {
  const { items, total, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="reservation-page">
      <div className="page-container">
        <div className="reservation-header">
          <div><span className="eyebrow">YOUR RESERVATION</span><h1>Reserve your <em>pieces.</em></h1><p>Select what you need, choose a showroom visit and receive a demo reservation ID.</p></div>
          <Link href="/products" className="text-link"><ArrowLeft size={16} /> Continue shopping</Link>
        </div>

        {items.length === 0 ? (
          <div className="empty-state"><div className="empty-icon">□</div><h2>Your reservation is empty.</h2><p>Browse the collection and add products you would like to reserve for showroom collection.</p><Link href="/products" className="button button-primary">Explore products</Link></div>
        ) : (
          <div className="reservation-layout">
            <div className="reservation-items">
              {items.map((item) => (
                <div className="reservation-item" key={item.id}>
                  <div className="reservation-item-image" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="reservation-item-copy"><span>{item.category}</span><h3>{item.name}</h3><small>{item.sku}</small></div>
                  <div className="reservation-item-qty"><button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button><strong>{item.quantity}</strong><button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button></div>
                  <strong className="reservation-item-price">₵{(item.price * item.quantity).toLocaleString()}</strong>
                  <button className="remove-item" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}><Trash2 size={16} /></button>
                </div>
              ))}
              <div className="reservation-total"><span>Estimated showroom total</span><strong>₵{total.toLocaleString()}</strong></div>
            </div>
            <ReservationForm total={total} />
          </div>
        )}
      </div>
    </div>
  );
}
