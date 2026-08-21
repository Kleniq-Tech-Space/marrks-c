export function Footer() {
  return (
    <footer style={{ background: "#1f1f1f", color: "#fff", padding: "64px 0 28px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48 }}>
          <div>
            <p style={{ fontSize: 28, fontWeight: 850, margin: 0 }}>MARRKS C</p>
            <p style={{ color: "#b6b6b6", maxWidth: 420, lineHeight: 1.7 }}>
              A premium showroom experience for discovering quality building materials.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 750 }}>Explore</p>
            <p><a href="/products">Products</a></p>
            <p><a href="/categories">Categories</a></p>
            <p><a href="/showroom">Showroom</a></p>
          </div>
          <div>
            <p style={{ fontWeight: 750 }}>Company</p>
            <p><a href="/about">About Us</a></p>
            <p><a href="/distributor">Distributors</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #3a3a3a", marginTop: 52, paddingTop: 22, color: "#888", fontSize: 13 }}>
          © {new Date().getFullYear()} MARRKS C. Prototype.
        </div>
      </div>
    </footer>
  );
}