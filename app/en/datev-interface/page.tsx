import React from 'react';
import Footer from '@/components/Footer';
import DatevHeroEN from '@/components/sections/datev/datev-hero-en';
import DatevSchnittstelleEN from '@/components/sections/datev/datev-schnittstelle-en';
import DatevQuestionsEN from '@/components/sections/datev/datev-questions-en';
import DatevBuchhaltungEN from '@/components/sections/datev/datev-buchhaltung-en';
import DatevTeaserEN from '@/components/sections/datev/datev-teaser-en';
import DatevZitatEN from '@/components/sections/datev/datev-zitat-en';
import DatevComparisonTableEN from '@/components/sections/datev/datev-comparison-table-en';
import ProductSliderEN from '@/components/ProductSlider/ProductSliderEN';

export default function DatevInterfacePage() {
  return (
    <div className="min-h-screen">
      <DatevHeroEN />
      <DatevSchnittstelleEN />
      <DatevQuestionsEN />
      <DatevBuchhaltungEN />
      <DatevTeaserEN />
      <DatevZitatEN />
      <DatevComparisonTableEN />
      <ProductSliderEN currentProductSlug="datev-interface" />
      <Footer />
    </div>
  );
}
