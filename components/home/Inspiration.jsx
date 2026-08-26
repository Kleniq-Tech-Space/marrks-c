import Link from "next/link";

const cards = [
  ["Choosing surfaces for modern interiors", "Tiles", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"],
  ["The details that make a bathroom feel finished", "Sanitaryware", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"],
  ["How to build a stronger first impression", "Doors", "https://images.unsplash.com/photo-1600566753051-2d9e7a3a1d99?auto=format&fit=crop&w=900&q=80"],
];

export default function Inspiration() {
  return (
    <section className="section">
      <div className="page-container">
        <div className="section-heading"><div><span className="eyebrow">HOME INSPIRATION</span><h2>Ideas for better spaces.</h2></div><span className="muted-label">Pitch preview</span></div>
        <div className="inspiration-grid">
          {cards.map(([title, tag, image]) => (
            <Link href="/products" className="inspiration-card" key={title}>
              <div className="inspiration-image" style={{ backgroundImage: `url(${image})` }} />
              <span>{tag}</span><h3>{title}</h3><small>Explore the collection →</small>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
