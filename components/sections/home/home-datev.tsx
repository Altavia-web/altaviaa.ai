import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomeDatev() {
  return (
    <section className="py-16 lg:py-20 px-6" style={{ background: 'var(--gradient-datev)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Linke Spalte - Content */}
          <div className="order-2 lg:order-1 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              Alta Via DATEV Export für NetSuite – Der direkte Pfad zur Finanzbuchhaltung mit DATEV
            </h2>

            <p className="text-lg leading-relaxed mb-8">
              Mit der von DATEV-zertifizierten SuiteApp &quot;DATEV Export für NetSuite&quot; gelangen Ihre Buchungsdaten
              sicher und strukturiert in die DATEV-Finanzbuchführung. Alle relevanten Informationen – von
              Stammdaten bis zu Transaktionen – werden im DATEV-Format exportiert und können direkt übernommen
              werden. Damit gelingt die Zusammenarbeit mit Steuerberatern ohne Umwege.
            </p>

            <Link href="/schnittstelle-datev">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-lg">
                Mehr erfahren
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* Rechte Spalte - Bild */}
          <div className="order-1 lg:order-2">
            <Image
              src="/images/produkte/AVA_DATEV_DE.webp"
              alt="DATEV Export für NetSuite"
              width={400}
              height={320}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}