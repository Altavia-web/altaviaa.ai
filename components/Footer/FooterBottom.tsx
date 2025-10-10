import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { type Locale } from '@/lib/i18n';

interface FooterBottomProps {
  locale?: Locale;
}

export default function FooterBottom({ locale = 'de' }: FooterBottomProps) {
  const isEnglish = locale === 'en';
  const privacyLink = isEnglish ? '/en/privacy' : '/datenschutzerklarung';
  const imprintLink = isEnglish ? '/en/imprint' : '/impressum';
  const privacyLabel = isEnglish ? 'Privacy Policy' : 'Datenschutz';
  const imprintLabel = isEnglish ? 'Imprint' : 'Impressum';
  const ctaText = isEnglish ? 'Acquire NetSuite App?' : 'App für NetSuite erwerben?';
  const ariaLegalNav = isEnglish ? 'Legal links' : 'Rechtliche Links';

  return (
    <>
      <div className="px-6" style={{backgroundColor: 'var(--color-ice-blue)', color: '#000'}}>
        <div className="mx-auto" style={{width: '80%'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" style={{paddingTop: '38.4px', paddingBottom: '38.4px', alignItems: 'end'}}>
            {/* Logo & Company Info (Left) */}
          <div className="flex flex-col items-start" style={{marginBottom: '2.5%'}}>
            <Image
              src="/images/logo/AVA_Bildmarke_WEB_RGB_300px (1).png"
              alt="Alta Via Applications Logo"
              width={46}
              height={46}
              className="mb-2"
            />
            <span
              style={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#002E64',
                marginBottom: '0.5rem',
                display: 'block'
              }}
            >
              Alta Via Applications
            </span>
            <div className="leading-relaxed">
              <p
                style={{
                  fontFamily: 'Titillium Web',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  color: '#002E64'
                }}
              >
                Nadistr. 12
              </p>
              <p
                style={{
                  fontFamily: 'Titillium Web',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  color: '#002E64'
                }}
              >
                80809 München
              </p>
            </div>
          </div>

          {/* Contact & CTA (Center) */}
          <div className="flex flex-col items-start md:items-center" style={{marginBottom: '2.5%'}}>
            <h3
              style={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '110%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#002E64',
                marginBottom: '1rem'
              }}
            >
              {ctaText}
            </h3>
            <div className="space-y-2">
              <div>
                <a
                  href="mailto:sales@altaviaa.ai"
                  style={{
                    fontFamily: 'Titillium Web',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#000',
                    textDecoration: 'none',
                    display: 'block'
                  }}
                  aria-label={isEnglish ? 'Email sales@altaviaa.ai' : 'E-Mail an sales@altaviaa.ai senden'}
                >
                  sales@altaviaa.ai
                </a>
              </div>
              <div>
                <a
                  href="tel:+4930837906556"
                  style={{
                    fontFamily: 'Titillium Web',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#000',
                    textDecoration: 'none',
                    display: 'block'
                  }}
                  aria-label={isEnglish ? 'Call +49 30 83790656' : 'Anrufen unter +49 30 83790656'}
                >
                  +49 30 83790656
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links (Right) */}
          <div className="flex flex-col items-start md:items-end" style={{marginBottom: '2.5%'}}>
            <nav aria-label={ariaLegalNav} className="flex gap-4">
              <Link
                href={privacyLink}
                style={{
                  fontFamily: 'Titillium Web',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  color: '#002E64',
                  textDecoration: 'none'
                }}
              >
                {privacyLabel}
              </Link>
              <Link
                href={imprintLink}
                style={{
                  fontFamily: 'Titillium Web',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  color: '#002E64',
                  textDecoration: 'none'
                }}
              >
                {imprintLabel}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Stripe */}
    <div style={{ width: '100%', height: '20px', backgroundColor: '#5095CB' }} />
    </>
  );
}