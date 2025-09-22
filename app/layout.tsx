import type { Metadata, Viewport } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Alta Via Applications",
    template: "%s | Alta Via Applications",
  },
  description: "Alta Via Applications - Professional web development and digital solutions",
  keywords: ["Alta Via Applications", "web development", "digital solutions"],
  authors: [{ name: "Alta Via Applications" }],
  creator: "Alta Via Applications",
  metadataBase: new URL("https://altaviaapplications.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alta Via Applications",
    description: "Professional web development and digital solutions",
    siteName: "Alta Via Applications",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alta Via Applications",
    description: "Professional web development and digital solutions",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${titilliumWeb.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
