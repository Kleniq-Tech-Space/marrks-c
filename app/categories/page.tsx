import Link from "next/link";

const categories = ["Tiles", "Sanitaryware", "Roofing", "Doors"];

export default function CategoriesPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Collections</span>
          <h1 style={{ fontSize: "clamp(44px, 6vw, 76px)", letterSpacing: "-.05em", margin: "16px 0" }}>Shop by category.</h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 42 }}>
            {categories.map((category, index) => (
              <Link key={category} href="/products" style={{ minHeight: 300, background: index % 2 ? "#1f1f1f" : "#fff", color: index % 2 ? "#fff" : "#1f1f1f", border: "1px solid var(--border)", borderRadius: 24, padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <span style={{ color: "var(--gold-dark)", fontWeight: 800 }}>0{index + 1}</span>
                <div>
                  <h2 style={{ fontSize: 34, margin: "0 0 8px" }}>{category}</h2>
                  <span style={{ opacity: .65, fontSize: 14 }}>Explore collection →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}