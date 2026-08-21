export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 style={{ fontSize: "clamp(44px, 6vw, 76px)", letterSpacing: "-.05em", margin: "18px 0" }}>Let&apos;s talk about your project.</h1>
          <div style={{ marginTop: 40, maxWidth: 620, display: "grid", gap: 14 }}>
            <input aria-label="Name" placeholder="Your name" style={{ border: "1px solid var(--border)", padding: 16, borderRadius: 14, background: "#fff" }} />
            <input aria-label="Email" placeholder="Email address" type="email" style={{ border: "1px solid var(--border)", padding: 16, borderRadius: 14, background: "#fff" }} />
            <textarea aria-label="Message" placeholder="Tell us what you need..." rows={6} style={{ border: "1px solid var(--border)", padding: 16, borderRadius: 14, background: "#fff", resize: "vertical" }} />
            <button style={{ width: "fit-content", background: "var(--foreground)", color: "#fff", border: 0, borderRadius: 999, padding: "15px 22px", fontWeight: 800 }}>
              Send enquiry
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}