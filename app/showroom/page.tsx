import Link from "next/link";

export default function ShowroomPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Showroom</span>
          <h1 style={{ fontSize: "clamp(44px, 6vw, 76px)", lineHeight: .98, letterSpacing: "-.05em", maxWidth: 850, margin: "18px 0" }}>
            Experience the materials in person.
          </h1>
          <p style={{ maxWidth: 650, color: "var(--muted)", fontSize: 17, lineHeight: 1.7 }}>
            The showroom visit flow will become the bridge between browsing online and completing a purchase in person.
          </p>
          <div style={{ marginTop: 34 }}>
            <button style={{ background: "var(--foreground)", color: "#fff", border: 0, borderRadius: 999, padding: "15px 22px", fontWeight: 800 }}>
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}