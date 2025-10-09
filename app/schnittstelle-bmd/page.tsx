import React from 'react';
import Footer from '@/components/Footer';
import BmdHero from '@/components/sections/bmd/bmd-hero';
import BmdSchnittstelle from '@/components/sections/bmd/bmd-schnittstelle';
import BmdQuestions from '@/components/sections/bmd/bmd-questions';
import BmdBuchhaltung from '@/components/sections/bmd/bmd-buchhaltung';
import BmdTeaser from '@/components/sections/bmd/bmd-teaser';
import BmdZitat from '@/components/sections/bmd/bmd-zitat';
import BmdComparisonTable from '@/components/sections/bmd/bmd-comparison-table';
import ProductsWeitereLosungen from '@/components/sections/products/products-weitere-loesungen';

export default function SchnittstelleBmd() {
  return (
    <div className="min-h-screen">
      <BmdHero />
      <BmdSchnittstelle />
      <BmdQuestions />
      <BmdBuchhaltung />
      <BmdTeaser />
      <BmdZitat />
      <BmdComparisonTable />
      <ProductsWeitereLosungen />
      <Footer />
    </div>
  );
}
