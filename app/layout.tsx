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
  metadataBase: new URL("https://raintreelocal.com"),
  title: "Raintree Local | AI-Powered Local SEO for Small Businesses",
  description:
    "Raintree Local helps small businesses in home services and specialty retail get found on Google. Local SEO, GBP optimization, review management, and content — done for you.",
  openGraph: {
    title: "Get Found on Google | Raintree Local",
    description: "AI-powered local SEO for HVAC, plumbing, roofing, and specialty retail businesses. Free Google audit. No contracts.",
    url: "https://raintreelocal.com",
    type: "website",
    siteName: "Raintree Local",
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
