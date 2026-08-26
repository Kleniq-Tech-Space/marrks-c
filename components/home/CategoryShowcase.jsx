import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  ["Tiles", "01", "Timeless surfaces", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"],
  ["Sanitaryware", "02", "Refined bathroom forms", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80"],
  ["Roofing", "03", "Protection with character", "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=80"],
  ["Doors", "04", "Entrances with presence", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"],
];

export default function CategoryShowcase() {
  return (
    <section className="section home-categories">
      <div className="page-container">
        <div className="section-heading">
          <div><span className="eyebrow">SHOP BY CATEGORY</span><h2>Find the right finish.</h2></div>
          <Link href="/categories" className="text-link">View all <ArrowUpRight size={15} /></Link>
        </div>

        <div className="category-grid">
          {categories.map(([name, number, description, image]) => (
            <Link href={`/categories?category=${name.toLowerCase()}`} className="category-card" key={name}>
              <div className="category-image" style={{ backgroundImage: `url(${image})` }} />
              <div className="category-card-body">
                <span>{number}</span>
                <div><h3>{name}</h3><p>{description}</p></div>
                <ArrowUpRight className="category-arrow" size={19} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
