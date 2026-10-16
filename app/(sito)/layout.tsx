import "../globals.css";
import SiteHeader from "@/components/SiteHeader";

/**
 * Layout delle pagine del sito: header e stile globale. La landing
 * /prenota-demo/ sta fuori da questo gruppo perché ha grafica e CSS suoi.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
