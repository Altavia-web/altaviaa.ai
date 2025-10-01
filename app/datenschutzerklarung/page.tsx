import React from 'react';
import Image from 'next/image';

export default function Datenschutzerklarung() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-64 flex items-center justify-center">
        <Image
          src="/images/AVA_Header_Imprint_2000x416.webp"
          alt="Datenschutzerklärung Header"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <h1 className="relative z-10 text-white font-bold text-center" style={{fontSize: '69px', lineHeight: '110%', letterSpacing: '0'}}>
          Datenschutzerklärung
        </h1>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>

          <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3 className="text-lg font-medium mb-2">Datenerfassung auf dieser Website</h3>
          <p className="mb-4">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
            können Sie dem Impressum dieser Website entnehmen.
          </p>

          <p className="mb-4">
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
            z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-lg font-medium mb-2">Datenschutz</h3>
          <p className="mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
            Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen
            sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-lg font-medium mb-2">Hinweis zur verantwortlichen Stelle</h3>
          <p className="mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mb-4">
            [Firmenname]<br />
            [Straße und Hausnummer]<br />
            [PLZ und Ort]<br />
            Telefon: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse]
          </p>

          <h3 className="text-lg font-medium mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="mb-4">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
            eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Datenerfassung auf dieser Website</h2>

          <h3 className="text-lg font-medium mb-2">Server-Log-Dateien</h3>
          <p className="mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">Kontaktformular</h3>
          <p className="mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
            von Anschlussfragen bei uns gespeichert.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Ihre Rechte</h2>
          <p className="mb-4">
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
            oder Löschung dieser Daten zu verlangen.
          </p>

          <p className="mb-4">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
            Impressum angegebenen Adresse an uns wenden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Analyse-Tools und Werbung</h2>
          <p>
            Diese Website verwendet keine Analyse-Tools oder Werbung von Drittanbietern. Sollte sich dies
            in Zukunft ändern, werden wir Sie entsprechend informieren und diese Datenschutzerklärung
            aktualisieren.
          </p>
        </section>
      </div>
    </div>
    </div>
  );
}