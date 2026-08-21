export type Product = {
  id: string;
  slug: string;
  name: string;
  sku: string;
  category: string;
  brand: string;
};

export const products: Product[] = [
  { id: "p-001", slug: "calacatta-stone", name: "Calacatta Stone", sku: "MRC-TL-001", category: "Tiles", brand: "MARRKS C" },
  { id: "p-002", slug: "sandstone-matte", name: "Sandstone Matte", sku: "MRC-TL-002", category: "Tiles", brand: "MARRKS C" },
  { id: "p-003", slug: "arc-basin", name: "Arc Basin", sku: "MRC-SW-001", category: "Sanitaryware", brand: "MARRKS C" },
  { id: "p-004", slug: "slate-roof-panel", name: "Slate Roof Panel", sku: "MRC-RF-001", category: "Roofing", brand: "MARRKS C" },
  { id: "p-005", slug: "linear-oak-door", name: "Linear Oak Door", sku: "MRC-DR-001", category: "Doors", brand: "MARRKS C" },
];