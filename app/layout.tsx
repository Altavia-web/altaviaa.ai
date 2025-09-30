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

        {/* Inline critical CSS for instant render */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root{--color-dark-blue:#002e64;--color-sky-blue:#a8dcf4;--color-mid-blue:#5095cb;--color-ice-blue:#eaf3f9;--gradient-mid-to-sky:radial-gradient(50% 50% at 50% 50%,#a8dcf4 0%,#5095cb 100%)}
            html{font-family:system-ui,-apple-system,sans-serif;font-size:18px;line-height:1.4}
            body{margin:0;padding:0;background:#fff;color:#171717;font-family:var(--font-titillium),system-ui,-apple-system,sans-serif}
            .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
            .sr-only:focus{position:static;width:auto;height:auto;padding:.5rem 1rem;margin:0;overflow:visible;clip:auto;white-space:normal}
          `
        }} />

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
