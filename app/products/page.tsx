import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Catalogue</span>
          <h1 style={{ fontSize: "clamp(44px, 6vw, 76px)", letterSpacing: "-.05em", margin: "16px 0" }}>
            Explore our products.
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 650, fontSize: 17, lineHeight: 1.7 }}>
            A curated showroom catalogue. Search, filtering and live availability will be connected to the product service in the next phase.
          </p>

          <div style={{ margin: "42px 0 24px", display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["All", "Tiles", "Sanitaryware", "Roofing", "Doors"].map((item) => (
              <button key={item} style={{ border: "1px solid var(--border)", background: item === "All" ? "var(--foreground)" : "#fff", color: item === "All" ? "#fff" : "var(--foreground)", borderRadius: 999, padding: "10px 16px", fontSize: 13, fontWeight: 700 }}>
                {item}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {products.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
                <div style={{ aspectRatio: "1 / 1", background: "#e8e6df", display: "grid", placeItems: "center", color: "#777", fontSize: 12 }}>PRODUCT IMAGE</div>
                <div style={{ padding: 18 }}>
                  <p style={{ margin: 0, color: "var(--gold-dark)", fontSize: 11, fontWeight: 800, textTransform: "uppercase" }}>{product.category}</p>
                  <h2 style={{ fontSize: 17, margin: "8px 0 6px" }}>{product.name}</h2>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: 13 }}>{product.sku}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}