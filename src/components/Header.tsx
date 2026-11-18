"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";

export default function Header() {
  const path = usePathname();
  return (
    <header className="header">
      <div className="header-in">
        <Link href="/" className="logo-link">
          $vinayak.unde<span className="cursor" aria-hidden="true" />
        </Link>
        <nav className="nav" aria-label="Main">
          {nav.map((n) => {
            const on = n.href === "/" ? path === "/" : path.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href} className={`navlink${on ? " on" : ""}`} aria-current={on ? "page" : undefined}>
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
