import React from 'react';
import Footer from '@/components/Footer';
import DatevHero from '@/components/sections/datev/datev-hero';
import DatevSchnittstelle from '@/components/sections/datev/datev-schnittstelle';
import DatevQuestions from '@/components/sections/datev/datev-questions';

export default function SchnittstelleDatev() {
  return (
    <div className="min-h-screen">
      <DatevHero />
      <DatevSchnittstelle />
      <DatevQuestions />
      <Footer />
    </div>
  );
}
