import type { Metadata, Viewport } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "./HeaderWrapper";

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
  description: "Alta Via Applications - NetSuite-Erweiterungen für den deutschen Markt",
  keywords: ["Alta Via Applications", "NetSuite", "German localization", "DATEV", "ERP"],
  authors: [{ name: "Alta Via Applications" }],
  creator: "Alta Via Applications",
  metadataBase: new URL("https://altaviaapplications.com"),
  icons: {
    icon: [
      { url: "/images/logo/AVA_Bildmarke_WEB_RGB_300px (1).png" },
    ],
    shortcut: "/images/logo/AVA_Bildmarke_WEB_RGB_300px (1).png",
    apple: "/images/logo/AVA_Bildmarke_WEB_RGB_300px (1).png",
  },
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': 'https://altaviaapplications.com',
      'en': 'https://altaviaapplications.com/en',
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    title: "Alta Via Applications",
    description: "NetSuite-Erweiterungen für den deutschen Markt",
    siteName: "Alta Via Applications",
    url: "https://altaviaapplications.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alta Via Applications",
    description: "NetSuite-Erweiterungen für den deutschen Markt",
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
    <html lang="de" className="scroll-smooth">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Critical inline CSS for instant render */}
        <style>{`
          :root {
            --color-dark-blue: #002e64;
            --color-sky-blue: #a8dcf4;
            --color-mid-blue: #5095cb;
            --color-ice-blue: #eaf3f9;
            --gradient-mid-to-sky: radial-gradient(50% 50% at 50% 50%, #a8dcf4 0%, #5095cb 100%);
            --gradient-sky-to-ice: radial-gradient(50% 50% at 50% 50%, #eaf3f9 0%, #a8dcf4 100%);
            --gradient-datev: radial-gradient(circle at center, #78dc3c 0%, #009b87 100%);
            --gradient-lokalisierung: radial-gradient(circle at center, #00bfbf 0%, #003399 100%);
          }

          /* Critical layout styles */
          body { margin: 0; font-family: var(--font-titillium), system-ui, sans-serif; }
          .min-h-screen { min-height: 100vh; }
          .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
          .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .text-center { text-align: center; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .grid { display: grid; }
          .items-center { align-items: center; }
          .gap-12 { gap: 3rem; }
          .font-bold { font-weight: 700; }
          .text-3xl { font-size: 1.875rem; }
          .mb-8 { margin-bottom: 2rem; }
          .leading-tight { line-height: 1.25; }

          /* Critical header styles */
          header { background: white; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; z-index: 50; }

          @media (min-width: 1024px) {
            .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .lg\\:text-4xl { font-size: 2.25rem; }
            .lg\\:py-20 { padding-top: 5rem; padding-bottom: 5rem; }
          }
        `}</style>

        {/* Preload critical images */}
        <link
          rel="preload"
          href="/images/logo/AVA_Logo.png"
          as="image"
          type="image/png"
        />

        {/* Preload favicon */}
        <link
          rel="preload"
          href="/favicon.ico"
          as="image"
          type="image/x-icon"
        />

        {/* Performance monitoring script (defer loading) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Defer non-critical CSS loading
              function loadCSS(href) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                link.media = 'print';
                link.onload = () => { link.media = 'all'; };
                document.head.appendChild(link);
              }

              // Load non-critical CSS after page load
              window.addEventListener('load', () => {
                // Defer any remaining stylesheets
                const deferredStyles = document.querySelectorAll('link[data-defer]');
                deferredStyles.forEach(style => {
                  style.rel = 'stylesheet';
                });
              });
            `
          }}
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
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}
