import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Alta Via Applications",
    template: "%s | Alta Via Applications",
  },
  description: "Alta Via Applications - NetSuite extensions for the German market",
  keywords: ["Alta Via Applications", "NetSuite", "German localization", "DATEV", "ERP"],
  authors: [{ name: "Alta Via Applications" }],
  creator: "Alta Via Applications",
  alternates: {
    canonical: '/en',
    languages: {
      'de-DE': 'https://altaviaapplications.com',
      'en': 'https://altaviaapplications.com/en',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    title: "Alta Via Applications",
    description: "NetSuite extensions for the German market",
    siteName: "Alta Via Applications",
    url: "https://altaviaapplications.com/en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alta Via Applications",
    description: "NetSuite extensions for the German market",
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

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This is a nested layout - it doesn't wrap in html/body
  // The parent layout (app/layout.tsx) handles that
  return <>{children}</>;
}
