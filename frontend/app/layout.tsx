import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

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
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[#030712] font-sans text-slate-100">
        <div className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 via-transparent to-accent/10 blur-3xl" />
          {children}
        </div>
      </body>
    </html>
  );
}
