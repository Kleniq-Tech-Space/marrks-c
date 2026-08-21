import Link from "next/link";
import { products } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="section" style={{ background: "#efeee9" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, marginBottom: 38 }}>
          <div>
            <span className="eyebrow">Featured products</span>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", letterSpacing: "-.04em", margin: "14px 0 0" }}>Selected for the showroom.</h2>
          </div>
          <Link href="/products" style={{ fontWeight: 750 }}>Browse all →</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {products.slice(0, 4).map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
              <div style={{ aspectRatio: "1 / 1", background: "#e8e6df", display: "grid", placeItems: "center", color: "#777", fontSize: 12 }}>
                PRODUCT IMAGE
              </div>
              <div style={{ padding: 18 }}>
                <p style={{ color: "var(--gold-dark)", fontSize: 11, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", margin: 0 }}>{product.category}</p>
                <h3 style={{ margin: "8px 0 6px", fontSize: 17 }}>{product.name}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 13 }}>{product.sku}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}