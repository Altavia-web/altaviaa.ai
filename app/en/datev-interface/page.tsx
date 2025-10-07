import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DATEV Interface',
  description: 'Seamless integration between NetSuite and DATEV',
};

export default function DatevInterfacePage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#002e64' }}>
          DATEV Interface for NetSuite
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Export your NetSuite booking data directly to DATEV financial accounting with our DATEV-certified SuiteApp.
        </p>
        {/* TODO: Add full DATEV product page content */}
      </div>
    </div>
  );
}
