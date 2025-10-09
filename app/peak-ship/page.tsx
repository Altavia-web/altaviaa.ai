import React from 'react';
import Footer from '@/components/Footer';
import PeakShipHero from '@/components/sections/peak-ship/peak-ship-hero';
import PeakShipChallenges from '@/components/sections/peakship/PeakShipChallenges';
import PeakShipSolutions from '@/components/sections/peakship/PeakShipSolutions';
import PeakShipTeaser from '@/components/sections/peakship/PeakShipTeaser';
import PeakShipTestimonial from '@/components/sections/peakship/PeakShipTestimonial';
import PeakShipComparison from '@/components/sections/peakship/PeakShipComparison';
import PeakShipGrowth from '@/components/sections/peakship/PeakShipGrowth';

export default function PeakShip() {
  return (
    <div className="min-h-screen">
      <PeakShipHero />
      <PeakShipChallenges />
      <PeakShipSolutions />
      <PeakShipTeaser />
      <PeakShipTestimonial />
      <PeakShipComparison />
      <PeakShipGrowth />
      <Footer />
    </div>
  );
}
