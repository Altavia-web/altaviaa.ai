import React from 'react';
import Footer from '@/components/Footer';
import BmdHero from '@/components/sections/bmd/bmd-hero';
import BmdSchnittstelle from '@/components/sections/bmd/bmd-schnittstelle';
import BmdQuestions from '@/components/sections/bmd/bmd-questions';
import BmdBuchhaltung from '@/components/sections/bmd/bmd-buchhaltung';
import BmdTeaser from '@/components/sections/bmd/bmd-teaser';
import BmdComparisonTable from '@/components/sections/bmd/bmd-comparison-table';
import ProductSlider from '@/components/ProductSlider/ProductSlider';

export default function SchnittstelleBmd() {
  return (
    <div className="min-h-screen">
      <BmdHero />
      <BmdSchnittstelle />
      <BmdQuestions />
      <BmdBuchhaltung />
      <BmdTeaser />
      <BmdComparisonTable />
      <ProductSlider currentProductSlug="schnittstelle-bmd" />
      <Footer />
    </div>
  );
}
