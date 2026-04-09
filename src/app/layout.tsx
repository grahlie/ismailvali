import "@/lib/localStorage-polyfill";
import type { Metadata } from "next";
import { Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import { ScrollRevealNav } from "@/components/layout/scroll-reveal-nav";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ismail Vali - President of GCI and former Founder & CEO of Yield Sec",
  description:
    "Ismail Vali is the President of Gaming Compliance International (GCI) and the inventor, founder and former CEO of Yield Sec, a technical intelligence platform for online marketplaces. Expert in gambling, streaming, crypto, and consumer market intelligence.",
  keywords: [
    "Ismail Vali",
    "Yield Sec",
    "Gaming Compliance International (GCI)",
    "technical intelligence platform",
    "online marketplace",
    "gambling intelligence",
    "streaming analytics",
    "crypto market intelligence",
    "consumer protection",
    "black market monitoring",
    "revenue optimization",
    "taxation receipts",
    "marketplace analytics",
  ],
  authors: [{ name: "Ismail Vali" }],
  creator: "Ismail Vali",
  publisher: "Ismail Vali",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ismailvali.com",
    title:
      "Ismail Vali - President of GCI and former Founder & CEO of Yield Sec",
    description:
      "Ismail Vali is the President of Gaming Compliance International (GCI) and the inventor, founder and former CEO of Yield Sec.",
    siteName: "Ismail Vali",
    images: [
      {
        url: "/header-image.png",
        width: 1200,
        height: 630,
        alt: "Ismail Vali - President of GCI and former Founder & CEO of Yield Sec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ismail Vali - President of GCI and former Founder & CEO of Yield Sec",
    description:
      "Ismail Vali is the President of Gaming Compliance International (GCI) and the inventor, founder and former CEO of Yield Sec.",
    images: ["/header-image.png"],
    creator: "@yieldsec",
  },
  alternates: {
    canonical: "https://ismailvali.com",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ismail Vali",
    jobTitle: "President of GCI and former Founder & CEO of Yield Sec",
    worksFor: {
      "@type": "Organization",
      name: "Gaming Compliance International (GCI)",
      url: "https://gamingcompliance.com/",
      description: "Gaming Compliance International",
    },
    description:
      "Ismail Vali is the President of Gaming Compliance International (GCI) and the inventor, founder and former CEO of Yield Sec.",
    url: "https://ismailvali.com",
    sameAs: [
      "https://www.linkedin.com/company/yieldsec/",
      "https://x.com/yieldsec",
      "https://www.instagram.com/yieldsec/",
      "https://www.tiktok.com/@yieldsec",
      "https://bsky.app/profile/yield-sec.bsky.social",
      "https://www.youtube.com/@yieldsecglobal",
    ],
    email: "ismail.vali@yieldsec.com",
    telephone: "+1 323 841 5853",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistMono.variable} ${raleway.variable} antialiased`}>
        <ScrollRevealNav />
        {children}
      </body>
    </html>
  );
}
