import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Absence Management',
  description: 'Leave and absence management in NetSuite',
};

export default function AbsenceManagementPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#002e64' }}>
          Absence Management for NetSuite
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Centrally manage vacation, sick leave, and absences in NetSuite.
        </p>
        {/* TODO: Add full absence management product page content */}
      </div>
    </div>
  );
}
