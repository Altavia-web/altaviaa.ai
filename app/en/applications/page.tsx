import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applications',
  description: 'Discover our NetSuite extensions for the German market',
};

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center" style={{ color: '#002e64' }}>
          Our NetSuite Applications
        </h1>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Explore our suite of NetSuite extensions designed specifically for the German market.
        </p>
        {/* TODO: Add product grid/list here */}
      </div>
    </div>
  );
}
