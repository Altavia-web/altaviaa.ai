import React from 'react';
import Footer from '@/components/Footer';
import DunningHero from '@/components/sections/dunning/dunning-hero';
import DunningHeroContent from '@/components/sections/dunning/DunningHero';
import DunningChallenges from '@/components/sections/dunning/DunningChallenges';
import DunningSolutions from '@/components/sections/dunning/DunningSolutions';
import DunningTeaser from '@/components/sections/dunning/DunningTeaser';
import DunningComparison from '@/components/sections/dunning/DunningComparison';
import DunningGrowth from '@/components/sections/dunning/DunningGrowth';
import ProductsWeitereLosungen from '@/components/sections/products/products-weitere-loesungen';

export default function Dunning() {
  return (
    <div className="min-h-screen">
      <DunningHero />
      <DunningHeroContent />
      <DunningChallenges />
      <DunningSolutions />
      <DunningTeaser />
      <DunningComparison />
      <DunningGrowth />
      <ProductsWeitereLosungen />
      <Footer />
    </div>
  );
}
