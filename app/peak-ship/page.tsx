import React from 'react';
import Footer from '@/components/Footer';
import PeakShipHero from '@/components/sections/peak-ship/peak-ship-hero';
import PeakShipHeroContent from '@/components/sections/peakship/PeakShipHero';
import PeakShipChallenges from '@/components/sections/peakship/PeakShipChallenges';
import PeakShipSolutions from '@/components/sections/peakship/PeakShipSolutions';
import PeakShipTeaser from '@/components/sections/peakship/PeakShipTeaser';
import PeakShipComparison from '@/components/sections/peakship/PeakShipComparison';

export default function PeakShip() {
  return (
    <div className="min-h-screen">
      <PeakShipHero />
      <PeakShipHeroContent />
      <PeakShipChallenges />
      <PeakShipSolutions />
      <PeakShipTeaser />
      <PeakShipComparison />
      <Footer />
    </div>
  );
}
