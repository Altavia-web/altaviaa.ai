import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Logo & Firmenname (Links) */}
          <div className={styles.column}>
            <div className={styles.logoSection}>
              <div className={styles.logoContainer}>
                <div
                  className={styles.logo}
                  aria-hidden="true"
                />
                <span className={styles.srOnly}>Alta Via Applications Logo</span>
              </div>
              <h2 className={styles.companyName}>
                Alta Via Applications
              </h2>
            </div>
          </div>

          {/* Firmenadresse (Links-Mitte) */}
          <div className={styles.column}>
            <h3 className={styles.sectionTitle}>Anschrift</h3>
            <address className={styles.address}>
              <div>Nadistr. 12</div>
              <div>80809 München</div>
            </address>
          </div>

          {/* Call-to-Action Bereich (Rechts-Mitte) */}
          <div className={styles.column}>
            <h3 className={styles.sectionTitle}>
              App für NetSuite erwerben?
            </h3>
            <div className={styles.ctaSection}>
              <div>
                <a
                  href="mailto:sales@altaviaa.ai"
                  className={styles.contactLink}
                  aria-label="E-Mail an sales@altaviaa.ai senden"
                >
                  sales@altaviaa.ai
                </a>
              </div>
              <div>
                <a
                  href="tel:+493083790656"
                  className={styles.contactLink}
                  aria-label="Anrufen unter +49 30 83790656"
                >
                  +49 30 83790656
                </a>
              </div>
            </div>
          </div>

          {/* Rechtliche Links (Rechts) */}
          <div className={styles.column}>
            <h3 className={styles.sectionTitle}>Rechtliches</h3>
            <nav aria-label="Rechtliche Links">
              <ul className={styles.legalNav}>
                <li>
                  <Link
                    href="/datenschutz"
                    className={styles.legalLink}
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className={styles.legalLink}
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.divider}>
          <div className={styles.copyright}>
            <p>
              © {new Date().getFullYear()} Alta Via Applications. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}