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
  metadataBase: new URL("https://www.raintreems.com"),
  title: "Raintree Marketing Services | Texas Small Business SEO & AI",
  description:
    "Texas small businesses hire Raintree to get found on Google and save time with AI. Start with a $500 Digital Visibility or AI Readiness Assessment.",
  alternates: {
    canonical: "https://www.raintreems.com",
  },
  openGraph: {
    title: "Get Found on Google | Raintree Marketing Services",
    description:
      "Digital visibility and AI consulting for Texas small businesses. Start with a $500 assessment — delivered in 48 hours.",
    url: "https://www.raintreems.com",
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
