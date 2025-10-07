import React from 'react';
import styles from './HomeCompany.module.css';
import { useTranslations, type Locale } from '@/lib/i18n';

interface HomeCompanyProps {
  locale?: Locale;
}

const HomeCompany = React.memo(({ locale = 'de' }: HomeCompanyProps) => {
  const t = useTranslations(locale);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          {t.home.company.heading}
        </h2>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            {t.home.company.paragraph1.split('Alta Via Applications GmbH')[0]}
            <span className={styles.companyName}>{t.home.company.companyName}</span>
            {t.home.company.paragraph1.split('Alta Via Applications GmbH')[1]}
          </p>

          <p className={styles.paragraph}>
            {t.home.company.paragraph2}
          </p>

          <p className={styles.paragraph}>
            {t.home.company.paragraph3}
          </p>
        </div>
      </div>
    </section>
  );
});

HomeCompany.displayName = 'HomeCompany';

export default HomeCompany;