import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";
import { metadataBase, siteUrl } from "@/lib/site-url";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const seoTitle = "Mohammed Boungab — Portfolio Data, IA et Objets Connectés";
const seoDescription = "Portfolio de Mohammed Boungab, étudiant en Master à l’Université de Poitiers, à la recherche d’une alternance en Data, Intelligence Artificielle, Machine Learning et Objets Connectés à partir de septembre 2026.";

export const metadata: Metadata = {
  metadataBase,
  title: { default: seoTitle, template: "%s — Mohammed Boungab" },
  description: seoDescription,
  authors: [{ name: profile.name, url: profile.linkedinUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: Boolean(siteUrl),
    follow: Boolean(siteUrl),
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    type: "website",
    locale: "fr_FR",
    siteName: "Portfolio de Mohammed Boungab",
    url: siteUrl ?? undefined,
    images: siteUrl ? [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Mohammed Boungab — Portfolio Data, IA et Objets Connectés" }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: siteUrl ? ["/opengraph-image"] : undefined,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" suppressHydrationWarning><body className={`${geist.variable} ${geistMono.variable} antialiased`}><ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange><a href="#contenu" className="skip-link">Aller au contenu</a><Header /><main id="contenu">{children}</main><Footer /></ThemeProvider></body></html>;
}
