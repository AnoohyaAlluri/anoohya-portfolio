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
    default: "Anoohya Alluri | Marketing Analytics & Lead Generation",
    template: "%s | Anoohya Alluri",
  },

  description:
    "Portfolio of Anoohya Alluri, a Marketing Analytics and Lead Generation Analyst specializing in SQL, Power BI, GA4, Adobe Analytics, attribution, CRM analytics, growth analytics, automation, and conversion optimization.",

  keywords: [
    "Anoohya Alluri",
    "Marketing Analytics",
    "Marketing Data Analyst",
    "Lead Generation Analyst",
    "Growth Marketing Analyst",
    "Growth Analytics",
    "Marketing Technology",
    "MarTech",
    "Acquisition Analytics",
    "Lead Generation Analytics",
    "Lead Quality Analysis",
    "Marketing Attribution",
    "Conversion Funnel Analysis",
    "Customer Journey Analytics",
    "CRM Analytics",
    "Marketing Automation",
    "Campaign Analytics",
    "Digital Analytics",
    "SQL",
    "SQL Server",
    "Power BI",
    "DAX",
    "Power Query",
    "Adobe Analytics",
    "GA4",
    "Google Analytics 4",
    "Google Tag Manager",
    "Google Ads",
    "Google Search Console",
    "HubSpot",
    "Mailchimp",
    "A/B Testing",
    "Experimentation",
    "Statistical Analysis",
    "SEO",
    "AEO",
    "GEO",
    "CRO",
    "Conversion Optimization",
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
    title: "Anoohya Alluri | Marketing Analytics & Lead Generation",
    description:
      "Marketing analytics, lead generation, growth analytics, attribution, CRM automation, SQL, Power BI, GA4, Adobe Analytics, and conversion optimization portfolio.",
    url: "https://anoohya-portfolio.vercel.app/",
    siteName: "Anoohya Alluri Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Anoohya Alluri Marketing Analytics and Lead Generation Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anoohya Alluri | Marketing Analytics & Lead Generation",
    description:
      "Marketing analytics, lead generation, growth analytics, attribution, CRM, SQL, Power BI, GA4, Adobe Analytics, and MarTech portfolio.",
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

  category: "Marketing Analytics",

  applicationName: "Anoohya Alluri Portfolio",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
