import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span>
            © 2026 inteGroup · <span className="accent">EUROCOMPLAI</span> —
            compliance integrata
          </span>
          <div className="footer-links">
            <Link href="/privacy/">Privacy</Link>
            <Link href="/cookie/">Cookie</Link>
            <Link href="/termini/">Termini</Link>
            <Link href="/come-funziona/">Come funziona</Link>
            <Link href="/chi-siamo/">Chi siamo</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
