import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://raintreems.com"),
  title: "Raintree Marketing Services | Digital Visibility for Small Businesses",
  description:
    "Raintree Marketing Services helps small businesses get found on Google. Local SEO, Google Business Profile optimization, review management, and content — done for you.",
  openGraph: {
    title: "Get Found on Google | Raintree Marketing Services",
    description: "Digital visibility for specialty retail, antique vendors, boutiques, and local businesses in Texas. Start with a $500 audit.",
    url: "https://raintreems.com",
    type: "website",
    siteName: "Raintree Marketing Services",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-charcoal bg-warm-white antialiased">
        {children}
      </body>
    </html>
  );
}
