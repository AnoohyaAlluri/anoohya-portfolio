import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anoohya-portfolio.vercel.app"),

  title: {
    default: "Anoohya Alluri | Marketing Analytics & Growth Operations",
    template: "%s | Anoohya Alluri",
  },

  description:
    "Portfolio of Anoohya Alluri featuring marketing analytics, growth operations, attribution, automation, GA4, GTM, dashboards, SEO, AEO, GEO, and data-driven business systems.",

  keywords: [
    "Anoohya Alluri",
    "Marketing Analytics",
    "Growth Operations",
    "Marketing Technology",
    "MarTech",
    "GA4",
    "Google Tag Manager",
    "Marketing Attribution",
    "Lead Generation Analytics",
    "Power BI",
    "Tableau",
    "SQL",
    "Automation",
    "SEO",
    "AEO",
    "GEO",
    "Growth Analytics",
  ],

  authors: [
    {
      name: "Anoohya Alluri",
      url: "https://anoohya-portfolio.vercel.app/",
    },
  ],

  creator: "Anoohya Alluri",
  publisher: "Anoohya Alluri",

  alternates: {
    canonical: "https://anoohya-portfolio.vercel.app/",
  },

  openGraph: {
    title: "Anoohya Alluri | Marketing Analytics & Growth Operations",
    description:
      "Explore marketing analytics, attribution, automation, dashboards, search growth, MarTech, and data-driven business systems.",
    url: "https://anoohya-portfolio.vercel.app/",
    siteName: "Anoohya Alluri Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Anoohya Alluri Marketing Analytics and Growth Operations Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anoohya Alluri | Marketing Analytics & Growth Operations",
    description:
      "Marketing analytics, attribution, automation, dashboards, SEO, MarTech, and growth operations portfolio.",
    images: ["/portfolio-preview.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
