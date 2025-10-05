"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Download, Video, Linkedin, Youtube } from "lucide-react";
import styles from './Header.module.css';

export default function Header() {
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Updated product navigation links

  const closeAllDropdowns = () => {
    setIsApplicationsOpen(false);
  };

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

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
            <button className={styles.languageButton}>
              EN
            </button>
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
                  href="/products"
                  className={`${styles.dropdownButton} ${isActive('/products') || isActive('/abwesenheitsverwaltung') || isActive('/schnittstelle-datev') || isActive('/localization-germany') || isActive('/reisekosten') || isActive('/dunning') || isActive('/peak-ship') ? styles.active : ''}`}
                  aria-haspopup="true"
                  aria-label="Applications"
                >
                  <span>Applications</span>
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
                href="/kontakt"
                className={`${styles.dropdownButton} ${isActive('/kontakt') ? styles.active : ''}`}
                aria-label="Kontakt"
              >
                <span>Kontakt</span>
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
              href="/products"
              className={styles.mobileMainLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Applications
            </Link>
            <div className={styles.mobileProductList}>
              <Link href="/schnittstelle-datev" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>DATEV Schnittstelle für NetSuite</span>
                <Image
                  src="/images/DATEV/AVA_Compass_DATEV.webp"
                  alt="DATEV"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href="/localization-germany" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Lokalisierung Deutschland für NetSuite</span>
                <Image
                  src="/images/LOCALIZATION/AVA_Map_Localization.webp"
                  alt="Lokalisierung"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href="/abwesenheitsverwaltung" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Abwesenheitsverwaltung für NetSuite</span>
                <Image
                  src="/images/ABWESENHEITSVERWALTUNG/AVA_Tent_Abwesenheit.webp"
                  alt="Abwesenheit"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href="/dunning" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Mahnwesen für NetSuite</span>
                <Image
                  src="/images/DUNNING/AVA_Carabiner_Dunning.webp"
                  alt="Mahnwesen"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href="/peak-ship" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>PeakShip für NetSuite</span>
                <Image
                  src="/images/PEAKSHIP/AVA_Rope_PeakShip.webp"
                  alt="PeakShip"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href="/reisekosten" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Reisekostenverwaltung für NetSuite</span>
                <Image
                  src="/images/REISEKOSTEN/AVA_Backpack_Reisekosten.webp"
                  alt="Reisekosten"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
              <Link href="/abwesenheitsverwaltung" className={styles.mobileProductLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Urlaubsplanung für NetSuite</span>
                <Image
                  src="/images/ABWESENHEITSVERWALTUNG/AVA_Tent_Abwesenheit.webp"
                  alt="Urlaubsplanung"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
              </Link>
            </div>

            {/* Kontakt Link */}
            <Link
              href="/kontakt"
              className={styles.mobileMainLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
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
              href="/schnittstelle-datev"
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/DATEV/AVA_Compass_DATEV.webp"
                  alt="DATEV Schnittstelle"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>DATEV Schnittstelle für NetSuite</h3>
              <p>Finanzdaten exportieren nach DATEV</p>
            </Link>

            <Link
              href="/localization-germany"
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/LOCALIZATION/AVA_Map_Localization.webp"
                  alt="Lokalisierung Deutschland"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>Lokalisierung Deutschland für NetSuite</h3>
              <p>NetSuite Lokalisierung für DE-Compliance</p>
            </Link>

            <Link
              href="/abwesenheitsverwaltung"
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/ABWESENHEITSVERWALTUNG/AVA_Tent_Abwesenheit.webp"
                  alt="Abwesenheitsverwaltung"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>Abwesenheitsverwaltung für NetSuite</h3>
              <p>Abwesenheitsmanagement und Urlaubsverwaltung</p>
            </Link>

            <Link
              href="/dunning"
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/DUNNING/AVA_Carabiner_Dunning.webp"
                  alt="Mahnwesen"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>Mahnwesen für NetSuite</h3>
              <p>NetSuite automatisierte Mahnungen für Forderungen</p>
            </Link>

            <Link
              href="/peak-ship"
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/PEAKSHIP/AVA_Rope_PeakShip.webp"
                  alt="PeakShip"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>PeakShip für NetSuite</h3>
              <p>NetSuite-Integration für Speditionsautomatisierung</p>
            </Link>

            <Link
              href="/reisekosten"
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/REISEKOSTEN/AVA_Backpack_Reisekosten.webp"
                  alt="Reisekostenverwaltung"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>Reisekostenverwaltung für NetSuite</h3>
              <p>NetSuite-konforme Reisekostenerstattung</p>
            </Link>

            <Link
              href="/abwesenheitsverwaltung"
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/ABWESENHEITSVERWALTUNG/AVA_Tent_Abwesenheit.webp"
                  alt="Urlaubsplanung"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>Urlaubsplanung für NetSuite</h3>
              <p>Subline steht hier und beinhaltet sicherlich NetSuite</p>
            </Link>
          </div>

          {/* Footer-Section */}
          <div className={styles.footerSection}>
            <div className={styles.footerContent}>
              <a href="/download-broschuere" className={styles.footerLink}>
                <Download size={20} />
                <span>Download Produktbroschüre</span>
              </a>
              <a href="/webinare" className={styles.footerLink}>
                <Video size={20} />
                <span>Webinare</span>
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