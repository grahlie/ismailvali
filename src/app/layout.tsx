import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
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
  title: "Ismail Vali - Professional Portfolio",
  description: "Professional portfolio and services by Ismail Vali",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${raleway.variable} antialiased`}
      >
        <nav className="flex items-center justify-between px-6 h-16 border-b bg-background/80 sticky top-0 z-30">
          <div className="font-bold text-xl tracking-wider">ISMAIL VALI</div>
          <DarkModeToggle />
        </nav>
        {children}
      </body>
    </html>
  );
}
