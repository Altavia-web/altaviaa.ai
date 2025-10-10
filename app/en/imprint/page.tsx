import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Imprint() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-64 flex items-center justify-center">
        <Image
          src="/images/AVA_Header_Imprint_2000x416.webp"
          alt="Imprint Header"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <h1 className="relative z-10 text-white font-bold text-center" style={{fontSize: '69px', lineHeight: '110%', letterSpacing: '0'}}>
          Imprint
        </h1>
      </section>

      {/* Content Section */}
      <div className="mx-auto py-12 px-6" style={{width: '80%'}}>
        <div className="space-y-8" style={{fontFamily: 'Titillium Web', fontSize: '18px', lineHeight: '140%', color: '#000000'}}>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem'}}>Information pursuant to § 5 TMG</h2>
            <p style={{marginBottom: '1rem'}}>
              Alta Via Applications GmbH<br />
              Nadistr. 12<br />
              80809 Munich, Germany
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Contact</h2>
            <p style={{marginBottom: '1rem'}}>
              Phone: +49 30 83790656<br />
              Email: <a href="mailto:info@altaviaa.ai" style={{color: '#002e64', textDecoration: 'underline'}}>info@altaviaa.ai</a>
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Represented by</h2>
            <p style={{marginBottom: '1rem'}}>
              Managing Director: Peter von Zimmermann
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Commercial Register Entry</h2>
            <p style={{marginBottom: '1rem'}}>
              Commercial Register: Munich Local Court, HRB 302272
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>VAT ID</h2>
            <p style={{marginBottom: '1rem'}}>
              VAT identification number according to §27a Value Added Tax Act: DE455286649
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Responsible for Content pursuant to § 55 para. 2 RStV</h2>
            <p style={{marginBottom: '1rem'}}>
              Peter von Zimmermann<br />
              Alta Via Applications GmbH<br />
              Nadistr. 12<br />
              80809 Munich, Germany
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Disclaimer</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Liability for Content</h3>
            <p style={{marginBottom: '1rem'}}>
              As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG under general laws. However, according to §§ 8 to 10 TMG, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Liability for Links</h3>
            <p style={{marginBottom: '1rem'}}>
              Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
            </p>
            <p style={{marginBottom: '1rem'}}>
              However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Copyright</h3>
            <p style={{marginBottom: '1rem'}}>
              The content and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>Dispute Resolution</h2>
            <p style={{marginBottom: '1rem'}}>
              The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://ec.europa.eu/consumers/odr</a>.<br />
              You can find our email address in the imprint above.
            </p>
            <p style={{marginBottom: '1rem'}}>
              We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </section>

        </div>
      </div>
      <Footer locale="en" />
    </div>
  );
}
