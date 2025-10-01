import React from 'react';
import Footer from '@/components/Footer';
import DatevHero from '@/components/sections/datev/datev-hero';
import DatevSchnittstelle from '@/components/sections/datev/datev-schnittstelle';
import DatevQuestions from '@/components/sections/datev/datev-questions';
import DatevBuchhaltung from '@/components/sections/datev/datev-buchhaltung';
import DatevTeaser from '@/components/sections/datev/datev-teaser';
import DatevZitat from '@/components/sections/datev/datev-zitat';
import DatevComparisonTable from '@/components/sections/datev/datev-comparison-table';

export default function SchnittstelleDatev() {
  return (
    <div className="min-h-screen">
      <DatevHero />
      <DatevSchnittstelle />
      <DatevQuestions />
      <DatevBuchhaltung />
      <DatevTeaser />
      <DatevZitat />
      <DatevComparisonTable />
      <Footer />
    </div>
  );
}
