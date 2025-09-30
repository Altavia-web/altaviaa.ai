import React from 'react';
import styles from './HomeCompany.module.css';

const HomeCompany = React.memo(() => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Alta Via Applications: Produktentwicklung mit Weitblick
        </h2>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            Die <span className={styles.companyName}>Alta Via Applications GmbH</span> ist aus der Beratungserfahrung der Alta Via Consulting
            hervorgegangen – als eigenständige Produktgesellschaft mit klarem Fokus auf NetSuite-Erweiterungen.
            Was wir entwickeln, entsteht direkt aus dem Gelände unserer Kunden – konkret, anwenderfreundlich
            und mit Blick auf die gesamte Route.
          </p>

          <p className={styles.paragraph}>
            Wir konzentrieren uns auf das, was Sie für den nächsten Schritt brauchen: robuste Tools,
            präzise Ausrichtung und kontinuierliche Weiterentwicklung.
          </p>
        </div>
      </div>
    </section>
  );
});

HomeCompany.displayName = 'HomeCompany';

export default HomeCompany;