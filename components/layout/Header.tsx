import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Showroom", href: "/showroom" },
];

export function Header() {
  return (
    <header style={{ background: "rgba(247,246,242,.9)", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(16px)" }}>
      <div className="container" style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <Link href="/" aria-label="MARRKS C home" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/images/mc-logo.png" alt="MARRKS C" width={116} height={58} priority style={{ width: 96, height: "auto", objectFit: "contain" }} />
        </Link>

        <nav aria-label="Primary navigation" style={{ display: "flex", gap: 30, alignItems: "center" }}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} style={{ fontSize: 14, fontWeight: 650 }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/showroom" style={{ background: "var(--foreground)", color: "#fff", padding: "12px 18px", borderRadius: 999, fontSize: 13, fontWeight: 750 }}>
          Visit Showroom
        </Link>
      </div>
    </header>
  );
}