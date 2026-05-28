import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const SITE_URL = "https://eurocomplai.com";
const SITE_NAME = "EurocomplAI";
const DEFAULT_TITLE =
  "EurocomplAI — Compliance integrata per GDPR, NIS2, AI Act";
const DEFAULT_DESCRIPTION =
  "Tre normative. Un sistema che estrae, intervista, genera. Tu validi, lui lavora. EurocomplAI è il software di compliance integrata europea, costruito da chi la compliance la fa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — EurocomplAI",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "inteGroup" }],
  creator: "inteGroup",
  publisher: "inteGroup",
  keywords: [
    "GDPR",
    "NIS2",
    "AI Act",
    "compliance integrata",
    "compliance europea",
    "DPIA",
    "registro trattamenti",
    "inteGroup",
    "EurocomplAI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EurocomplAI — Compliance integrata europea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "inteGroup",
    url: "https://www.integroup.it",
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: [],
  };
  const productLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EurocomplAI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    publisher: { "@type": "Organization", name: "inteGroup" },
  };

  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationLd, productLd]),
          }}
        />
      </body>
    </html>
  );
}
