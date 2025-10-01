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
      <div className="mx-auto py-12 px-6" style={{width: '80%'}}>
        <div className="space-y-8" style={{fontFamily: 'Titillium Web', fontSize: '18px', lineHeight: '140%', color: '#000000'}}>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem'}}>Angaben gemäß § 5 TMG</h2>
            <p style={{marginBottom: '1rem'}}>
              Alta Via Applications GmbH<br />
              Nadistr. 12<br />
              80809 München
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Kontakt</h2>
            <p style={{marginBottom: '1rem'}}>
              Telefon: +49 30 83790656<br />
              E-Mail: <a href="mailto:info@altaviaa.ai" style={{color: '#002e64', textDecoration: 'underline'}}>info@altaviaa.ai</a>
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Vertreten durch</h2>
            <p style={{marginBottom: '1rem'}}>
              Geschäftsführer: Peter von Zimmermann
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Registereintrag</h2>
            <p style={{marginBottom: '1rem'}}>
              Handelsregister: Amtsgericht München, HRB 302272
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Umsatzsteuer-ID</h2>
            <p style={{marginBottom: '1rem'}}>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE455286649
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p style={{marginBottom: '1rem'}}>
              Peter von Zimmermann<br />
              Alta Via Applications GmbH<br />
              Nadistr. 12<br />
              80809 München
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Haftungsausschluss</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Haftung für Inhalte</h3>
            <p style={{marginBottom: '1rem'}}>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Haftung für Links</h3>
            <p style={{marginBottom: '1rem'}}>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Urheberrecht</h3>
            <p style={{marginBottom: '1rem'}}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Streitschlichtung</h2>
            <p style={{marginBottom: '1rem'}}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://ec.europa.eu/consumers/odr</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
