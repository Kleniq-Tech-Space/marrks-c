import Link from "next/link";

export function ShowroomCta() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ borderRadius: 28, background: "#1f1f1f", color: "#fff", padding: "clamp(40px, 7vw, 82px)", display: "flex", justifyContent: "space-between", alignItems: "end", gap: 40, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 680 }}>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>The showroom experience</span>
            <h2 style={{ fontSize: "clamp(38px, 5vw, 68px)", lineHeight: 1, letterSpacing: "-.045em", margin: "16px 0" }}>
              See the materials. Feel the difference.
            </h2>
            <p style={{ color: "#bdbdbd", lineHeight: 1.7, fontSize: 16 }}>
              Explore our collection in person and get closer to the materials you are considering for your next project.
            </p>
          </div>
          <Link href="/showroom" style={{ background: "var(--gold)", color: "#1f1f1f", padding: "15px 22px", borderRadius: 999, fontWeight: 800 }}>
            Schedule a visit
          </Link>
        </div>
      </div>
    </section>
  );
}