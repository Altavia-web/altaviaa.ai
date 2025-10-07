import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Expenses',
  description: 'Digital travel expense management in NetSuite',
};

export default function TravelExpensesPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#002e64' }}>
          Travel Expenses for NetSuite
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Digitally record and process travel expenses directly in NetSuite.
        </p>
        {/* TODO: Add full travel expenses product page content */}
      </div>
    </div>
  );
}
