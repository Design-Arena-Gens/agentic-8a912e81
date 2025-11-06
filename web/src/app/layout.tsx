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
  title: "QuantumX - AI Crypto Copilot for Serious Traders",
  description:
    "QuantumX delivers institutional-grade crypto analytics, AI strategy copilot, and low-latency execution so you can trade with conviction in any market.",
  keywords: [
    "crypto",
    "AI trading",
    "quant analytics",
    "crypto dashboard",
    "on-chain data",
    "automated trading",
  ],
  metadataBase: new URL("https://agentic-8a912e81.vercel.app"),
  openGraph: {
    title: "QuantumX - AI Crypto Copilot for Serious Traders",
    description:
      "Navigate volatility with an autonomous crypto analyst built for decisive traders. Unified market intelligence, AI chat, and automation.",
    url: "https://agentic-8a912e81.vercel.app",
    siteName: "QuantumX",
    images: [
      {
        url: "https://images.unsplash.com/photo-1640622302910-5be9d786df22?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "QuantumX platform preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@quantumx",
    title: "QuantumX - AI Crypto Copilot for Serious Traders",
    description:
      "Institutional-grade crypto analytics with an AI copilot that executes with confidence.",
    images: ["https://images.unsplash.com/photo-1640622302910-5be9d786df22?auto=format&fit=crop&w=1200&q=80"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
