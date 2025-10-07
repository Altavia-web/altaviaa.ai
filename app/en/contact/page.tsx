import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Alta Via Applications',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#002e64' }}>
          Contact
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Get in touch with us for inquiries about our NetSuite extensions.
        </p>
        {/* TODO: Add contact form here */}
      </div>
    </div>
  );
}
