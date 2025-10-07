import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dunning Management',
  description: 'Automated receivables management for NetSuite',
};

export default function DunningPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#002e64' }}>
          Dunning Management for NetSuite
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Efficient dunning processes directly in NetSuite with automated workflows.
        </p>
        {/* TODO: Add full dunning product page content */}
      </div>
    </div>
  );
}
