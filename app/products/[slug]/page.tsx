import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <main>
      <section className="section">
        <div className="container">
          <Link href="/products" style={{ color: "var(--muted)", fontSize: 13 }}>← Back to products</Link>

          <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 60, marginTop: 32, alignItems: "start" }}>
            <div style={{ aspectRatio: "1 / 1", background: "#e8e6df", borderRadius: 28, display: "grid", placeItems: "center", color: "#777" }}>
              PRODUCT IMAGE
            </div>

            <div style={{ paddingTop: 12 }}>
              <span className="eyebrow">{product.category}</span>
              <h1 style={{ fontSize: "clamp(42px, 5vw, 68px)", lineHeight: 1, letterSpacing: "-.05em", margin: "18px 0" }}>{product.name}</h1>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                A premium showroom product presented for the MARRKS C collection. Product specifications, finish options and live availability will be connected later.
              </p>

              <dl style={{ margin: "32px 0", display: "grid", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: 14 }}>
                  <dt style={{ color: "var(--muted)" }}>SKU</dt><dd style={{ margin: 0, fontWeight: 700 }}>{product.sku}</dd>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: 14 }}>
                  <dt style={{ color: "var(--muted)" }}>Brand</dt><dd style={{ margin: 0, fontWeight: 700 }}>{product.brand}</dd>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: 14 }}>
                  <dt style={{ color: "var(--muted)" }}>Availability</dt><dd style={{ margin: 0, fontWeight: 700 }}>Showroom</dd>
                </div>
              </dl>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button style={{ background: "var(--foreground)", color: "#fff", border: 0, borderRadius: 999, padding: "15px 22px", fontWeight: 800 }}>
                  Add to Reservation
                </button>
                <Link href="/showroom" style={{ border: "1px solid var(--border)", background: "#fff", borderRadius: 999, padding: "14px 21px", fontWeight: 750 }}>
                  Visit Showroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}