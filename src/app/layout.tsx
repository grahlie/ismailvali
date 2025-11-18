import "@/lib/localStorage-polyfill";
import type { Metadata } from "next";
import { Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

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
  title: "Ismail Vali - Founder & CEO of Yield Sec | Technical Intelligence Platform",
  description: "Ismail Vali is the inventor, founder and CEO of Yield Sec, a technical intelligence platform for online marketplaces. Expert in gambling, streaming, crypto, and consumer market intelligence.",
  keywords: [
    "Ismail Vali",
    "Yield Sec",
    "technical intelligence platform",
    "online marketplace",
    "gambling intelligence",
    "streaming analytics",
    "crypto market intelligence",
    "consumer protection",
    "black market monitoring",
    "revenue optimization",
    "taxation receipts",
    "marketplace analytics"
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ismailvali.com',
    title: 'Ismail Vali - Founder & CEO of Yield Sec',
    description: 'Ismail Vali is the inventor, founder and CEO of Yield Sec, a technical intelligence platform for online marketplaces.',
    siteName: 'Ismail Vali',
    images: [
      {
        url: '/header-image.png',
        width: 1200,
        height: 630,
        alt: 'Ismail Vali - Founder & CEO of Yield Sec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail Vali - Founder & CEO of Yield Sec',
    description: 'Ismail Vali is the inventor, founder and CEO of Yield Sec, a technical intelligence platform for online marketplaces.',
    images: ['/header-image.png'],
    creator: '@yieldsec',
  },
  alternates: {
    canonical: 'https://ismailvali.com',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ismail Vali",
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Yield Sec",
      "url": "https://www.yieldsec.com/",
      "description": "Technical intelligence platform for online marketplaces"
    },
    "description": "Ismail Vali is the inventor, founder and CEO of Yield Sec, a technical intelligence platform for online marketplaces.",
    "url": "https://ismailvali.com",
    "sameAs": [
      "https://www.linkedin.com/company/yieldsec/",
      "https://x.com/yieldsec",
      "https://www.instagram.com/yieldsec/",
      "https://www.tiktok.com/@yieldsec",
      "https://bsky.app/profile/yield-sec.bsky.social",
      "https://www.youtube.com/@yieldsecglobal"
    ],
    "email": "ismail.vali@yieldsec.com",
    "telephone": "+1 323 841 5853",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistMono.variable} ${raleway.variable} antialiased`}
      >
        <nav className="flex items-center justify-between px-6 h-16 border-b bg-background/80 sticky top-0 z-30">
          <div className="font-bold text-xl tracking-wider">ISMAIL VALI</div>
        </nav>
        {children}
      </body>
    </html>
  );
}
