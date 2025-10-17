import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata, Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.arinterlocklanscape.ca";
const siteName = "AR Interlocking Landscaping Construction";
const siteDesc =
  "Professional interlocking & landscaping in the GTA—driveways, patios, walkways, retaining walls, flagstone, sealing, epoxy floors, and repairs. Free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDesc,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description: siteDesc,
    siteName,
    images: [
      {
        url: "/og-cover.jpg", // 1200x630 önerilir //TODO: resmi ekle bos kalmasin
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDesc,
    images: ["/og-cover.jpg"], //TODO: resmi ekle bos kalmasin
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "Ar Interlock and Landscape",
    url: "https://www.arinterlocklandscape.ca",
    description:
      "Interlock and landscape services across the Greater Toronto Area: driveways, patios, walkways, retaining walls, flagstone, sealing, epoxy floors, and repairs.",
    telephone: "+1-647-709-7219",
    email: "info@arinterlocklandscape.ca",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
      { "@type": "AdministrativeArea", name: "Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greater Toronto Area",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    priceRange: "$$",
    keywords:
      "interlock, interlocking, landscaping, driveway, patio, walkway, retaining wall, flagstone, sealing, epoxy, GTA",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Driveway Interlocking" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Patio Interlocking" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Walkway Interlocking" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Retaining Walls" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Flagstone & Natural Stone" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sealing" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Epoxy Garage Floor & Basement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Repairs & Maintenance" },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
