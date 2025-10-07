import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Data protection and privacy policy',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#002e64' }}>
          Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none">
          {/* TODO: Add privacy policy content (German law requires German text) */}
          <p className="text-lg leading-relaxed">
            Privacy policy according to German law (content in German).
          </p>
        </div>
      </div>
    </div>
  );
}
