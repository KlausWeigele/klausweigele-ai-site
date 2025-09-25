import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHat = Red_Hat_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "KI-Lösungen von Klaus Weigele",
  description: "Freelance AI Consultant – maßgeschneiderte Next.js & FastAPI Lösungen für Ihr Unternehmen.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "KI-Lösungen von Klaus Weigele",
    description: "Freelance AI Consultant mit Fokus auf produktionsreife KI-Systeme",
    url: "https://example.com",
    siteName: "Klaus Weigele – AI Consulting",
    locale: "de_DE",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${redHat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
