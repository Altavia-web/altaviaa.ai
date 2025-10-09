import React from 'react';
import Footer from '@/components/Footer';
import ReisekostenHeroEN from '@/components/sections/reisekosten/reisekosten-hero-en';
import ReisekostenHeroContentEN from '@/components/sections/reisekosten/ReisekostenHeroContentEN';
import ReisekostenChallengesEN from '@/components/sections/reisekosten/ReisekostenChallengesEN';
import ReisekostenSolutionsEN from '@/components/sections/reisekosten/ReisekostenSolutionsEN';
import ReisekostenTeaser from '@/components/sections/reisekosten/ReisekostenTeaser';
import ReisekostenTestimonialEN from '@/components/sections/reisekosten/ReisekostenTestimonialEN';
import ReisekostenComparisonEN from '@/components/sections/reisekosten/ReisekostenComparisonEN';
import ReisekostenGrowthEN from '@/components/sections/reisekosten/ReisekostenGrowthEN';

export default function TravelExpenses() {
  return (
    <div className="min-h-screen">
      <ReisekostenHeroEN />
      <ReisekostenHeroContentEN />
      <ReisekostenChallengesEN />
      <ReisekostenSolutionsEN />
      <ReisekostenTeaser />
      <ReisekostenTestimonialEN />
      <ReisekostenComparisonEN />
      <ReisekostenGrowthEN />
      <Footer />
    </div>
  );
}
