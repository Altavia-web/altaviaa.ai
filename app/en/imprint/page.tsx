import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Legal information and imprint',
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#002e64' }}>
          Imprint
        </h1>
        <div className="prose prose-lg max-w-none">
          {/* TODO: Add legal imprint content (German law requires German text) */}
          <p className="text-lg leading-relaxed">
            Legal information according to German law (content in German).
          </p>
        </div>
      </div>
    </div>
  );
}
