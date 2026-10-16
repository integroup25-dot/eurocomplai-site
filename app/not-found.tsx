import "./globals.css";
import NotFoundError from "next/dist/client/components/not-found-error";
import SiteHeader from "@/components/SiteHeader";

/**
 * 404 del sito. Il layout radice non ha più l'header (la landing non lo usa):
 * qui si rimette, con la pagina 404 predefinita di Next come prima.
 */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <NotFoundError />
    </>
  );
}
