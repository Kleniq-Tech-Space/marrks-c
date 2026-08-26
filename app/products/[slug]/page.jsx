import Link from "next/link";
import { notFound } from "next/navigation";
import ProductDetail from "../../../components/products/ProductDetail";
import { products } from "../../../data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <div className="detail-page">
      <div className="page-container">
        <div className="breadcrumbs"><Link href="/products">Products</Link><span>/</span><span>{product.category}</span><span>/</span><strong>{product.name}</strong></div>
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
