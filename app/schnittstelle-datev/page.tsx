import React from 'react';
import Footer from '@/components/Footer';
import DatevHero from '@/components/sections/datev/datev-hero';
import DatevSchnittstelle from '@/components/sections/datev/datev-schnittstelle';

export default function SchnittstelleDatev() {
  return (
    <div className="min-h-screen">
      <DatevHero />
      <DatevSchnittstelle />
      <Footer />
    </div>
  );
}
