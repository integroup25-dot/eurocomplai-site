import Link from "next/link";
import Logomark from "./Logomark";
import ArrowIcon from "./ArrowIcon";

type NavItem = { href: string; label: string };

const DEFAULT_NAV: NavItem[] = [
  { href: "/come-funziona/", label: "Come funziona" },
  { href: "/soluzioni/sanita/", label: "Soluzioni" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/chi-siamo/", label: "Chi siamo" },
];

type Props = {
  ctaHref?: string;
  ctaLabel?: string;
  nav?: NavItem[];
};

export default function Header({
  ctaHref = "/demo/",
  ctaLabel = "Prenota la demo",
  nav = DEFAULT_NAV,
}: Props) {
  return (
    <header className="header">
      <Logomark />
      <nav className="nav-bar">
        <ul className="nav-links">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link href={ctaHref} className="btn btn-primary btn-sm">
          {ctaLabel}
          <ArrowIcon />
        </Link>
      </nav>
    </header>
  );
}
