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
      <div className="mx-auto py-12 px-6" style={{width: '80%'}}>
        <div className="space-y-8" style={{fontFamily: 'Titillium Web', fontSize: '18px', lineHeight: '140%', color: '#000000'}}>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem'}}>1. Datenschutz auf einen Blick</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Allgemeine Hinweise</h3>
            <p style={{marginBottom: '1rem'}}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Datenerfassung auf dieser Website</h3>
            <p style={{marginBottom: '1rem'}}>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br /><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <p style={{marginBottom: '1rem'}}>
              <strong>Wie erfassen wir Ihre Daten?</strong><br /><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>

            <p style={{marginBottom: '1rem'}}>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p style={{marginBottom: '1rem'}}>
              <strong>Wofür nutzen wir Ihre Daten?</strong><br /><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
            </p>

            <p style={{marginBottom: '1rem'}}>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br /><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>

            <p style={{marginBottom: '1rem'}}>
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>

            <p style={{marginBottom: '1rem'}}>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Analyse-Tools und Tools von Drittanbietern</h3>
            <p style={{marginBottom: '1rem'}}>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>2. Hosting</h2>

            <p style={{marginBottom: '1rem'}}>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Strato</h3>
            <p style={{marginBottom: '1rem'}}>
              Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend „Strato"). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen. Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato: <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://www.strato.de/datenschutz/</a>.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Auftragsverarbeitung</h3>
            <p style={{marginBottom: '1rem'}}>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Datenschutz</h3>
            <p style={{marginBottom: '1rem'}}>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Hinweis zur verantwortlichen Stelle</h3>
            <p style={{marginBottom: '1rem'}}>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p style={{marginBottom: '1rem'}}>
              Alta Via Applications GmbH<br />
              Nadistr. 12<br />
              80809 München<br />
              info@altaviaa.ai<br /><br />
              Geschäftsführer: Peter von Zimmermann<br />
              Handelsregister: München HRB 302272<br /><br />
              Telefon: +49 (0) 123 44 55 66<br />
              E-Mail: support@altaviaa.ai
            </p>
            <p style={{marginBottom: '1rem'}}>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Speicherdauer</h3>
            <p style={{marginBottom: '1rem'}}>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
            <p style={{marginBottom: '1rem'}}>
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Empfänger von personenbezogenen Daten</h3>
            <p style={{marginBottom: '1rem'}}>
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p style={{marginBottom: '1rem'}}>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
            <p style={{marginBottom: '1rem', textTransform: 'uppercase'}}>
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>
            <p style={{marginBottom: '1rem', textTransform: 'uppercase'}}>
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p style={{marginBottom: '1rem'}}>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Recht auf Datenübertragbarkeit</h3>
            <p style={{marginBottom: '1rem'}}>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Auskunft, Berichtigung und Löschung</h3>
            <p style={{marginBottom: '1rem'}}>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Recht auf Einschränkung der Verarbeitung</h3>
            <p style={{marginBottom: '1rem'}}>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc'}}>
              <li style={{marginBottom: '0.5rem'}}>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li style={{marginBottom: '0.5rem'}}>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
              <li style={{marginBottom: '0.5rem'}}>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li style={{marginBottom: '0.5rem'}}>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>SSL- bzw. TLS-Verschlüsselung</h3>
            <p style={{marginBottom: '1rem'}}>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Widerspruch gegen Werbe-E-Mails</h3>
            <p style={{marginBottom: '1rem'}}>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>4. Datenerfassung auf dieser Website</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Cookies</h3>
            <p style={{marginBottom: '1rem'}}>
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p style={{marginBottom: '1rem'}}>
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Server-Log-Dateien</h3>
            <p style={{marginBottom: '1rem'}}>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc'}}>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p style={{marginBottom: '1rem'}}>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>5. Newsletter</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Newsletterversand an Bestandskunden</h3>
            <p style={{marginBottom: '1rem'}}>
              Wenn Sie Waren oder Dienstleistungen bei uns bestellen und hierbei Ihre E-Mail-Adresse hinterlegen, kann diese E-Mail-Adresse in der Folge durch uns für den Versand von Newslettern verwendet werden, sofern wir Sie vorab hierüber informieren. In einem solchen Fall wird über den Newsletter nur Direktwerbung für eigene ähnliche Waren oder Dienstleistungen versendet. Die Zusendung dieses Newsletters kann von Ihnen jederzeit gekündigt werden. Zu diesem Zweck findet sich in jedem Newsletter ein entsprechender Link.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Rechtsgrundlage für den Versand des Newsletters ist in diesem Fall Art. 6 Abs. 1 lit. f DSGVO in Verbindung mit § 7 Abs. 3 UWG.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns ggf. in einer Blacklist gespeichert, um künftige Mailings an Sie zu verhindern. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>6. Analyse Tools</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Google Analytics</h3>
            <p style={{marginBottom: '1rem'}}>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Google Analytics verwendet so genannte „Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>IP-Anonymisierung</h3>
            <p style={{marginBottom: '1rem'}}>
              Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Browser Plugin</h3>
            <p style={{marginBottom: '1rem'}}>
              Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://tools.google.com/dlpage/gaoptout?hl=de</a>.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Widerspruch gegen Datenerfassung</h3>
            <p style={{marginBottom: '1rem'}}>
              Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert: Google Analytics deaktivieren.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://support.google.com/analytics/answer/6004245?hl=de</a>.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Auftragsdatenverarbeitung</h3>
            <p style={{marginBottom: '1rem'}}>
              Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Demografische Merkmale bei Google Analytics</h3>
            <p style={{marginBottom: '1rem'}}>
              Diese Website nutzt die Funktion „demografische Merkmale" von Google Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie im Punkt „Widerspruch gegen Datenerfassung" dargestellt generell untersagen.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>7. Webinare</h2>

            <p style={{marginBottom: '1rem'}}>
              Für Webinare nutzen wir die Webinarplattform von WebinarGeek.com (Chroomstraat 12, 2718 RR Zoetermeer, Niederlande).
            </p>
            <p style={{marginBottom: '1rem'}}>
              Für die Anmeldung und die Durchführung der Online-Seminare verwenden wir die von Ihnen an uns übermittelten Daten bei der Anmeldung zum jeweiligen Seminar, und zwar Vorname, Nachname, E-Mail, Unternehmen/Arbeitgeber und die Postleitzahl.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Nach der Anmeldung nutzen wir Ihre E-Mail-Adresse, um die Anmeldung zu bestätigen, Einwahl-Informationen zu versenden und Sie kurz vor dem Webinar an den anstehenden Termin zu erinnern. Nach einem Webinar nutzen wir Ihre E-Mail-Adresse und ihren Namen einmalig, um Ihnen eine E-Mail zu schicken und Ihnen Zugriff zu den Aufnahmen des Online-Seminars zu ermöglichen.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Im Rahmen des Online-Seminars erhalten wir von Ihnen folgende Daten: Name, Vorname, E-Mail-Adresse zur Identifizierung und Login, Land, IP-Adresse und Cookies zur Verwaltung der Internetsitzung und Gewährleistung der Bereitstellung des Webinars. Die Verarbeitung Ihrer Daten erfolgt nur im Rahmen des Online-Seminars.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Rechtsgrundlage für die vorgenannten Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO. Die Verarbeitung dient ausschließlich der Vertragserfüllung in Form der Durchführung sowie Vor- und Nachbereitung der Teilnahmevereinbarung des jeweiligen Webinars.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Mit Webinargeek wurde ein Auftragsverarbeitungsvertrag geschlossen. Webinargeek verarbeitet die Daten ausschließlich in der europäischen Union. Ein Transfer Ihrer personenbezogenen Daten in Drittstaaten findet nicht statt.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Weitere Infos zum Datenschutz bei Webinargeek finden Sie unter: <a href="https://www.webinargeek.com/security-and-availability" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://www.webinargeek.com/security-and-availability</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
