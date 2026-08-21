export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">About MARRKS C</span>
          <h1 style={{ fontSize: "clamp(44px, 6vw, 76px)", lineHeight: .98, letterSpacing: "-.05em", maxWidth: 850, margin: "18px 0 28px" }}>
            A modern destination for better building materials.
          </h1>
          <p style={{ maxWidth: 700, color: "var(--muted)", fontSize: 18, lineHeight: 1.8 }}>
            This prototype intentionally uses neutral brand messaging until the client provides official company information, history, certifications and partner details.
          </p>
        </div>
      </section>
    </main>
  );
}