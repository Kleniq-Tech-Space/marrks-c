"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import { CheckCircle2 } from "lucide-react";

function makeOrderId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `MARRKS-${date}-${code}`;
}

export default function ReservationForm({ total }) {
  const { items, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "10:00", notes: "" });

  function submit(e) {
    e.preventDefault();
    const orderId = makeOrderId();
    setSubmitted({ ...form, orderId, total, items });
    clearCart();
  }

  if (submitted) {
    return (
      <div className="confirmation-card">
        <div className="confirmation-icon"><CheckCircle2 size={28} /></div>
        <span className="eyebrow">RESERVATION CONFIRMED</span>
        <h2>Your showroom reservation is ready.</h2>
        <p>Present this demo order ID at the showroom. Payment is completed in person when your reserved products are collected.</p>
        <div className="order-id"><small>ORDER / RESERVATION ID</small><strong>{submitted.orderId}</strong></div>
        <div className="confirmation-summary"><span>Customer</span><strong>{submitted.name}</strong><span>Visit</span><strong>{submitted.date} · {submitted.time}</strong><span>Estimated total</span><strong>₵{submitted.total.toLocaleString()}</strong></div>
        <button className="button button-primary" onClick={() => window.print()}>Print confirmation</button>
      </div>
    );
  }

  return (
    <form className="reservation-form" onSubmit={submit}>
      <span className="eyebrow">SHOWROOM COLLECTION</span>
      <h2>Complete your reservation.</h2>
      <p className="form-intro">This is a pitch demo. No payment is taken online.</p>

      <label>Full name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
      <label>Phone number<input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+233..." /></label>
      <label>Email address<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
      <div className="form-two">
        <label>Visit date<input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
        <label>Preferred time<select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}><option>09:00</option><option>10:00</option><option>11:00</option><option>13:00</option><option>14:00</option><option>15:00</option><option>16:00</option></select></label>
      </div>
      <label>Project note <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Optional note about your project..." rows="3" /></label>

      <div className="form-total"><span>Estimated showroom total</span><strong>₵{total.toLocaleString()}</strong></div>
      <button className="button button-primary submit-reservation" type="submit">Confirm reservation</button>
      <small className="form-footnote">You will pay at the showroom when collecting your reserved products.</small>
    </form>
  );
}
