import React from 'react';
import Footer from '@/components/Footer';
import ReisekostenHero from '@/components/sections/reisekosten/reisekosten-hero';
import ReisekostenHeroContent from '@/components/sections/reisekosten/ReisekostenHero';
import ReisekostenChallenges from '@/components/sections/reisekosten/ReisekostenChallenges';
import ReisekostenSolutions from '@/components/sections/reisekosten/ReisekostenSolutions';
import ReisekostenTeaser from '@/components/sections/reisekosten/ReisekostenTeaser';
import ReisekostenComparison from '@/components/sections/reisekosten/ReisekostenComparison';
import ReisekostenGrowth from '@/components/sections/reisekosten/ReisekostenGrowth';

export default function Reisekosten() {
  return (
    <div className="min-h-screen">
      <ReisekostenHero />
      <ReisekostenHeroContent />
      <ReisekostenChallenges />
      <ReisekostenSolutions />
      <ReisekostenTeaser />
      <ReisekostenComparison />
      <ReisekostenGrowth />
      <Footer />
    </div>
  );
}
