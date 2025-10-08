import React from 'react';
import Footer from '@/components/Footer';
import DunningHero from '@/components/sections/dunning/dunning-hero';
import DunningHeroContent from '@/components/sections/dunning/DunningHero';
import DunningChallenges from '@/components/sections/dunning/DunningChallenges';
import DunningSolutions from '@/components/sections/dunning/DunningSolutions';
import DunningTeaser from '@/components/sections/dunning/DunningTeaser';
import DunningTestimonial from '@/components/sections/dunning/DunningTestimonial';
import DunningComparison from '@/components/sections/dunning/DunningComparison';

export default function Dunning() {
  return (
    <div className="min-h-screen">
      <DunningHero />
      <DunningHeroContent />
      <DunningChallenges />
      <DunningSolutions />
      <DunningTeaser />
      <DunningTestimonial />
      <DunningComparison />
      <Footer />
    </div>
  );
}
