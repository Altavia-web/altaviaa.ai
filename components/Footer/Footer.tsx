import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './Footer.module.css';

export default function Footer() {
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
                Bereit für den nächsten Höhenmeter?
              </h2>
              <h3 className={styles.subheadline}>
                Partner werden:
              </h3>
              <p className={styles.description}>
                Nutzen Sie unser Partnerprogramm – inklusive Vertriebsunterlagen,
                Testzugängen und direktem Kontakt.
              </p>
              <Button
                variant="filled"
                color="midBlue"
                size="lg"
                showArrow={true}
              >
                Demo vereinbaren
              </Button>
            </div>

            {/* Right: Image */}
            <div className={styles.imageContent}>
              <Image
                src="/components/Footer/images/AVA_Poles_Grad .svg"
                alt="Alta Via Applications Poles Gradient"
                width={400}
                height={300}
                className={styles.poleImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Placeholder */}
      <div className={styles.section3}>
        {/* Content for section 3 will be added in next step */}
      </div>

      {/* Section 4: Placeholder */}
      <div className={styles.section4}>
        {/* Content for section 4 will be added in next step */}
      </div>
    </footer>
  );
}