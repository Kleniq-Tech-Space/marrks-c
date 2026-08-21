import Link from "next/link";

const categories = [
  ["01", "Tiles", "Surfaces that define a space."],
  ["02", "Sanitaryware", "Thoughtful solutions for modern bathrooms."],
  ["03", "Roofing", "Protection with architectural character."],
  ["04", "Doors", "A stronger first impression."],
];

export function CategoryShowcase() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "end", marginBottom: 38 }}>
          <div>
            <span className="eyebrow">Explore the collection</span>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", letterSpacing: "-.04em", margin: "14px 0 0", maxWidth: 600 }}>
              Materials for every part of the build.
            </h2>
          </div>
          <Link href="/categories" style={{ fontWeight: 750, whiteSpace: "nowrap" }}>View all categories →</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {categories.map(([number, title, description]) => (
            <Link key={title} href={`/categories/${title.toLowerCase()}`} style={{ minHeight: 310, borderRadius: 22, padding: 24, background: "#fff", border: "1px solid var(--border)", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "transform .2s ease" }}>
              <span style={{ color: "var(--gold-dark)", fontWeight: 800 }}>{number}</span>
              <div>
                <h3 style={{ fontSize: 25, margin: "0 0 8px" }}>{title}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}