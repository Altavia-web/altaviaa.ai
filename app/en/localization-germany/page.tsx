import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Localization Germany',
  description: 'NetSuite optimized for the German market',
};

export default function LocalizationGermanyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#002e64' }}>
          Localization Germany for NetSuite
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Legally compliant adaptations and features specifically for German requirements.
        </p>
        {/* TODO: Add full localization product page content */}
      </div>
    </div>
  );
}
