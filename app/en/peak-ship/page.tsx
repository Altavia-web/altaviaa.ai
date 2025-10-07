import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peak Ship',
  description: 'Shipping management for NetSuite',
};

export default function PeakShipPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#002e64' }}>
          Peak Ship for NetSuite
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Integrated logistics and shipping management directly in NetSuite.
        </p>
        {/* TODO: Add full Peak Ship product page content */}
      </div>
    </div>
  );
}
