import React from 'react';
import Footer from '@/components/Footer';
import AbwesenheitsverwaltungHero from '@/components/sections/abwesenheitsverwaltung/abwesenheitsverwaltung-hero';
import AbwesenheitHero from '@/components/sections/abwesenheit/AbwesenheitHero';
import AbwesenheitChallenges from '@/components/sections/abwesenheit/AbwesenheitChallenges';
import AbwesenheitSolutions from '@/components/sections/abwesenheit/AbwesenheitSolutions';
import AbwesenheitTeaser from '@/components/sections/abwesenheit/AbwesenheitTeaser';
import AbwesenheitComparison from '@/components/sections/abwesenheit/AbwesenheitComparison';

export default function Abwesenheitsverwaltung() {
  return (
    <div className="min-h-screen">
      <AbwesenheitsverwaltungHero />
      <AbwesenheitHero />
      <AbwesenheitChallenges />
      <AbwesenheitSolutions />
      <AbwesenheitTeaser />
      <AbwesenheitComparison />
      <Footer />
    </div>
  );
}
