import React from 'react';
import Image from 'next/image';
import FooterBottom from './FooterBottom';
import styles from './Footer.module.css';
import { useTranslations, type Locale } from '@/lib/i18n';

interface FooterProps {
  locale?: Locale;
}

export default function Footer({ locale = 'de' }: FooterProps) {
  const t = useTranslations(locale);

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Section 1: Full width image only */}
      <div className={styles.section1} />

      {/* Section 2: Light blue gradient with 2-column content */}
      <div className={styles.section2}>
        <div className={styles.section2Container}>
          <div className={styles.section2Content}>
            {/* Left: Text content */}
            <div className={styles.textContent}>
              <h2 className={styles.headline}>
                {t.footer.heading}
              </h2>
              <h3 className={styles.subheadline}>
                {t.footer.subheading}
              </h3>
              <p className={styles.description}>
                {t.footer.description}
              </p>
            </div>

            {/* Right: Image */}
            <div className={styles.imageContent}>
              <Image
                src="/images/AVA_Poles_Grad.svg"
                alt={t.footer.altImage}
                width={300}
                height={400}
                className={styles.poleImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Footer Bottom */}
      <FooterBottom locale={locale} />
    </footer>
  );
}