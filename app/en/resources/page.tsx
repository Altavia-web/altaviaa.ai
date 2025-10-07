import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Resources and documentation for Alta Via Applications',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center" style={{ color: '#002e64' }}>
          Resources
        </h1>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Documentation, guides, and resources for our NetSuite extensions.
        </p>
        {/* TODO: Add resources content */}
      </div>
    </div>
  );
}
