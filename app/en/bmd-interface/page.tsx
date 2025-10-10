import React from 'react';
import Footer from '@/components/Footer';
import BmdHeroEN from '@/components/sections/bmd/bmd-hero-en';
import BmdSchnittstelleEN from '@/components/sections/bmd/bmd-schnittstelle-en';
import BmdQuestionsEN from '@/components/sections/bmd/bmd-questions-en';
import BmdBuchhaltungEN from '@/components/sections/bmd/bmd-buchhaltung-en';
import BmdComparisonTableEN from '@/components/sections/bmd/bmd-comparison-table-en';
import ProductSliderEN from '@/components/ProductSlider/ProductSliderEN';

export default function BmdInterfacePage() {
  return (
    <div className="min-h-screen">
      <BmdHeroEN />
      <BmdSchnittstelleEN />
      <BmdQuestionsEN />
      <BmdBuchhaltungEN />
      <BmdComparisonTableEN />
      <ProductSliderEN currentProductSlug="bmd-interface" />
      <Footer locale="en" />
    </div>
  );
}
