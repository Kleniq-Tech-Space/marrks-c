import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section style={{ background: "#1f1f1f", color: "#fff", minHeight: "calc(100vh - 76px)", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.02fr .98fr", gap: 70, alignItems: "center", padding: "90px 0" }}>
        <div>
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Premium building materials</span>
          <h1 style={{ fontSize: "clamp(52px, 7vw, 92px)", lineHeight: .94, letterSpacing: "-.055em", margin: "24px 0", maxWidth: 720 }}>
            Build spaces that make an impression.
          </h1>
          <p style={{ color: "#bdbdbd", fontSize: 18, lineHeight: 1.7, maxWidth: 560, marginBottom: 34 }}>
            Discover a carefully curated collection of building materials designed for modern homes, commercial spaces and ambitious projects.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/products" style={{ background: "var(--gold)", color: "#1f1f1f", padding: "15px 22px", borderRadius: 999, fontWeight: 800 }}>
              Explore Products
            </Link>
            <Link href="/showroom" style={{ border: "1px solid #555", color: "#fff", padding: "15px 22px", borderRadius: 999, fontWeight: 750 }}>
              Visit Showroom
            </Link>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: 520, borderRadius: 28, overflow: "hidden", background: "#2b2b2b" }}>
          <Image
            src="/images/hero-placeholder.svg"
            alt="Architectural materials showroom"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", left: 22, bottom: 22, background: "rgba(255,255,255,.92)", color: "#1f1f1f", padding: "14px 16px", borderRadius: 14, maxWidth: 240 }}>
            <strong style={{ display: "block", fontSize: 13 }}>The MARRKS C collection</strong>
            <span style={{ display: "block", marginTop: 4, color: "#667085", fontSize: 12 }}>Materials selected for modern spaces.</span>
          </div>
        </div>
      </div>
    </section>
  );
}