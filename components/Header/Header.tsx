"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Download, Video, Linkedin, Youtube } from "lucide-react";
import styles from './Header.module.css';
import LanguageSwitch from './LanguageSwitch';
import { useTranslations, type Locale } from '@/lib/i18n';

interface HeaderProps {
  locale?: Locale;
}

export default function Header({ locale = 'de' }: HeaderProps) {
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations(locale);

  const closeAllDropdowns = () => {
    setIsApplicationsOpen(false);
  };

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  // Generate locale-aware URLs
  const baseUrl = locale === 'en' ? '/en' : '';
  const contactUrl = locale === 'en' ? '/en/contact' : '/kontakt';
  const productsUrl = locale === 'en' ? '/en/applications' : '/products';

  const productUrls = {
    datev: locale === 'en' ? '/en/datev-interface' : '/schnittstelle-datev',
    bmd: locale === 'en' ? '/en/bmd-interface' : '/schnittstelle-bmd',
    localization: locale === 'en' ? '/en/localization-germany' : '/localization-germany',
    localizationAustria: locale === 'en' ? '/en/austrian-localization' : '/lokalisierung-oesterreich',
    dunning: locale === 'en' ? '/en/dunning' : '/dunning',
    peakship: locale === 'en' ? '/en/peak-ship' : '/peak-ship',
    travel: locale === 'en' ? '/en/travel-expenses' : '/reisekosten',
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC key closes all dropdowns
      if (e.key === 'Escape') {
        closeAllDropdowns();
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      onMouseLeave={() => {
        setIsApplicationsOpen(false);
      }}
    >
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Top Row - Language Switcher */}
          <div className={styles.topRow}>
            <LanguageSwitch currentLocale={locale} />
          </div>

          {/* Bottom Row - Logo and Navigation */}
          <div className={styles.bottomRow}>
            {/* Logo Section */}
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/images/logo/AVA_Logo.png"
                alt="Alta Via Applications Logo"
                width={320}
                height={320}
                className={styles.logo}
                priority
                quality={100}
              />
            </Link>

            {/* Navigation */}
            <div className={styles.nav}>
              {/* Applications Dropdown */}
              <div
                className={styles.dropdown}
                onMouseEnter={() => {
                  setIsApplicationsOpen(true);
                }}
                onMouseLeave={() => {
                  // Don't close here - handled by parent container
                }}
              >
                <Link
                  href={productsUrl}
                  className={`${styles.dropdownButton} ${isActive('/products') || isActive('/en/applications') || isActive('/schnittstelle-datev') || isActive('/schnittstelle-bmd') || isActive('/en/bmd-interface') || isActive('/localization-germany') || isActive('/lokalisierung-oesterreich') || isActive('/en/austrian-localization') || isActive('/reisekosten') || isActive('/en/travel-expenses') || isActive('/dunning') || isActive('/peak-ship') ? styles.active : ''}`}
                  aria-haspopup="true"
                  aria-label={t.nav.productsMenu.title}
                >
                  <span>{t.nav.productsMenu.title}</span>
                  <svg
                    className={`${styles.dropdownIcon} ${isApplicationsOpen ? styles.open : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Kontakt Link (no dropdown) */}
              <Link
                href={contactUrl}
                className={`${styles.dropdownButton} ${isActive('/kontakt') || isActive('/en/contact') ? styles.active : ''}`}
                aria-label={t.nav.contact}
              >
                <span>{t.nav.contact}</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={styles.mobileMenuButton}
              >
                <svg className={styles.mobileMenuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {/* Applications Link + Dropdown */}
            <Link
              href={productsUrl}
              className={styles.mobileMainLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.productsMenu.title}
            </Link>
            <div className={styles.mobileProductList}>
              <Link href={productUrls.datev} className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>{t.nav.productsMenu.datev.title}</span>
                <Image
                  src="/images/DATEV/AVA_Compass_DATEV.webp"
                  alt={t.nav.productsMenu.datev.short}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href={productUrls.bmd} className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>{t.nav.productsMenu.bmd.title}</span>
                <Image
                  src="/images/DATEV/AVA_Compass_DATEV.webp"
                  alt={t.nav.productsMenu.bmd.short}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href={productUrls.localization} className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>{t.nav.productsMenu.localization.title}</span>
                <Image
                  src="/images/LOCALIZATION/AVA_Map_Localization.webp"
                  alt={t.nav.productsMenu.localization.short}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href={productUrls.localizationAustria} className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>{t.nav.productsMenu.localizationAustria.title}</span>
                <Image
                  src="/images/LOCALIZATION/AVA_Map_Localization.webp"
                  alt={t.nav.productsMenu.localizationAustria.short}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href={productUrls.dunning} className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>{t.nav.productsMenu.dunning.title}</span>
                <Image
                  src="/images/DUNNING/AVA_Carabiner_Dunning.webp"
                  alt={t.nav.productsMenu.dunning.short}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href={productUrls.peakship} className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>{t.nav.productsMenu.peakship.title}</span>
                <Image
                  src="/images/PEAKSHIP/AVA_Rope_PeakShip.webp"
                  alt={t.nav.productsMenu.peakship.short}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href={productUrls.travel} className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>{t.nav.productsMenu.travel.title}</span>
                <Image
                  src="/images/REISEKOSTEN/AVA_Backpack_Reisekosten.webp"
                  alt={t.nav.productsMenu.travel.short}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
            </div>

            {/* Kontakt Link */}
            <Link
              href={contactUrl}
              className={styles.mobileMainLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        )}
      </header>

      {/* Dropdown Menus - Outside header for full width */}
      {isApplicationsOpen && (
        <div
          className={styles.megaMenu}
          role="menu"
          aria-label="Applications navigation"
          onMouseEnter={() => setIsApplicationsOpen(true)}
        >
          {/* Produkt-Grid */}
          <div className={styles.produktGrid}>
            <Link
              href={productUrls.datev}
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/DATEV/AVA_Compass_DATEV.webp"
                  alt={t.nav.productsMenu.datev.short}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>{t.nav.productsMenu.datev.title}</h3>
              <p>{t.nav.productsMenu.datev.description}</p>
            </Link>

            <Link
              href={productUrls.bmd}
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/DATEV/AVA_Compass_DATEV.webp"
                  alt={t.nav.productsMenu.bmd.short}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>{t.nav.productsMenu.bmd.title}</h3>
              <p>{t.nav.productsMenu.bmd.description}</p>
            </Link>

            <Link
              href={productUrls.localization}
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/LOCALIZATION/AVA_Map_Localization.webp"
                  alt={t.nav.productsMenu.localization.short}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>{t.nav.productsMenu.localization.title}</h3>
              <p>{t.nav.productsMenu.localization.description}</p>
            </Link>

            <Link
              href={productUrls.localizationAustria}
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/LOCALIZATION/AVA_Map_Localization.webp"
                  alt={t.nav.productsMenu.localizationAustria.short}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>{t.nav.productsMenu.localizationAustria.title}</h3>
              <p>{t.nav.productsMenu.localizationAustria.description}</p>
            </Link>

            <Link
              href={productUrls.dunning}
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/DUNNING/AVA_Carabiner_Dunning.webp"
                  alt={t.nav.productsMenu.dunning.short}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>{t.nav.productsMenu.dunning.title}</h3>
              <p>{t.nav.productsMenu.dunning.description}</p>
            </Link>

            <Link
              href={productUrls.peakship}
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/PEAKSHIP/AVA_Rope_PeakShip.webp"
                  alt={t.nav.productsMenu.peakship.short}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>{t.nav.productsMenu.peakship.title}</h3>
              <p>{t.nav.productsMenu.peakship.description}</p>
            </Link>

            <Link
              href={productUrls.travel}
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/REISEKOSTEN/AVA_Backpack_Reisekosten.webp"
                  alt={t.nav.productsMenu.travel.short}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>{t.nav.productsMenu.travel.title}</h3>
              <p>{t.nav.productsMenu.travel.description}</p>
            </Link>
          </div>

          {/* Footer-Section */}
          <div className={styles.footerSection}>
            <div className={styles.footerContent}>
              <a href={`${baseUrl}/download-broschuere`} className={styles.footerLink}>
                <Download size={20} />
                <span>{t.nav.downloadBrochure}</span>
              </a>
              <a href={`${baseUrl}/webinare`} className={styles.footerLink}>
                <Video size={20} />
                <span>{t.nav.webinars}</span>
              </a>
              <div className={styles.socialLinks}>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}