import type { Metadata, Viewport } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
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
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Critical styles to prevent FOUC */}
        <style>{`
          :root {
            --color-dark-blue: #002e64;
            --color-sky-blue: #a8dcf4;
            --color-mid-blue: #5095cb;
            --color-ice-blue: #eaf3f9;
            --gradient-mid-to-sky: radial-gradient(50% 50% at 50% 50%, #a8dcf4 0%, #5095cb 100%);
            --gradient-sky-to-ice: radial-gradient(50% 50% at 50% 50%, #eaf3f9 0%, #a8dcf4 100%);
          }
        `}</style>

        {/* Preload favicon */}
        <link
          rel="preload"
          href="/favicon.ico"
          as="image"
          type="image/x-icon"
        />
      </head>
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
