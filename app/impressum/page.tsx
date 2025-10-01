import React from 'react';
import Image from 'next/image';

export default function Impressum() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-64 flex items-center justify-center">
        <Image
          src="/images/AVA_Header_Imprint_2000x416.webp"
          alt="Impressum Header"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <h1 className="relative z-10 text-white font-bold text-center" style={{fontSize: '69px', lineHeight: '110%', letterSpacing: '0'}}>
          Impressum
        </h1>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
          <p>
            [Firmenname]<br />
            [Straße und Hausnummer]<br />
            [PLZ und Ort]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Vertreten durch</h2>
          <p>[Name des Geschäftsführers/Vertretungsberechtigten]</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
          <p>
            Telefon: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [USt-IdNr.]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            [Name]<br />
            [Adresse]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Haftungsausschluss</h2>

          <h3 className="text-lg font-medium mb-2">Haftung für Inhalte</h3>
          <p className="mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="text-lg font-medium mb-2">Haftung für Links</h3>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="text-lg font-medium mb-2">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
    </div>
  );
}