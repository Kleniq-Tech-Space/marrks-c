import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  ["Tiles", "Surfaces that set the tone.", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"],
  ["Sanitaryware", "Refined forms for modern bathrooms.", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85"],
  ["Roofing", "Reliable protection with architectural character.", "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1400&q=85"],
  ["Doors", "Entrances and interiors with presence.", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"],
];

export default function CategoriesPage() {
  return <div className="inner-page"><div className="page-container"><div className="inner-hero"><span className="eyebrow">COLLECTIONS</span><h1>Explore by <em>category.</em></h1><p>Start with the material that defines the space.</p></div><div className="large-category-grid">{categories.map(([name, text, image], i) => <Link href={`/products?category=${name}`} className="large-category" key={name}><div style={{backgroundImage:`url(${image})`}}/><div><span>0{i+1}</span><h2>{name}</h2><p>{text}</p><ArrowUpRight size={20}/></div></Link>)}</div></div></div>;
}
