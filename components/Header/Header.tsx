"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Database, MapPin, AlertCircle, Truck, Briefcase, Calendar, Download, Video, Linkedin, Youtube } from "lucide-react";
import styles from './Header.module.css';

export default function Header() {
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isRessourcenOpen, setIsRessourcenOpen] = useState(false);
  const [isKontaktOpen, setIsKontaktOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Updated product navigation links

  const closeAllDropdowns = () => {
    setIsApplicationsOpen(false);
    setIsRessourcenOpen(false);
    setIsKontaktOpen(false);
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
    <div>
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
                  setIsRessourcenOpen(false);
                  setIsKontaktOpen(false);
                }}
                onMouseLeave={() => setIsApplicationsOpen(false)}
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

              {/* Ressourcen Dropdown */}
              <div
                className={styles.dropdown}
                onMouseEnter={() => {
                  setIsRessourcenOpen(true);
                  setIsApplicationsOpen(false);
                  setIsKontaktOpen(false);
                }}
                onMouseLeave={() => setIsRessourcenOpen(false)}
              >
                <Link
                  href="/ressourcen"
                  className={`${styles.dropdownButton} ${isActive('/ressourcen') ? styles.active : ''}`}
                  aria-haspopup="true"
                  aria-label="Ressourcen"
                >
                  <span>Ressourcen</span>
                  <svg
                    className={`${styles.dropdownIcon} ${isRessourcenOpen ? styles.open : ''}`}
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

              {/* Kontakt Dropdown */}
              <div
                className={styles.dropdown}
                onMouseEnter={() => {
                  setIsKontaktOpen(true);
                  setIsApplicationsOpen(false);
                  setIsRessourcenOpen(false);
                }}
                onMouseLeave={() => setIsKontaktOpen(false)}
              >
                <Link
                  href="/kontakt"
                  className={`${styles.dropdownButton} ${isActive('/kontakt') ? styles.active : ''}`}
                  aria-haspopup="true"
                  aria-label="Kontakt"
                >
                  <span>Kontakt</span>
                  <svg
                    className={`${styles.dropdownIcon} ${isKontaktOpen ? styles.open : ''}`}
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
            <div className={styles.mobileMenuContent}>
              {/* Mobile Language Switcher */}
              <div className={styles.mobileLanguage}>
                <button className={styles.languageButton}>
                  EN
                </button>
              </div>

              {/* Mobile Applications */}
              <div className={styles.mobileDropdown}>
                <button
                  onClick={() => setIsApplicationsOpen(!isApplicationsOpen)}
                  className={styles.mobileDropdownButton}
                >
                  <span>Applications</span>
                  <svg
                    className={`${styles.dropdownIcon} ${isApplicationsOpen ? styles.open : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isApplicationsOpen && (
                  <div className={styles.mobileDropdownContent}>
                    <Link
                      href="/products"
                      className={`${styles.mobileDropdownLink} ${styles.featured}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Alle Produkte
                    </Link>
                    <Link
                      href="/abwesenheitsverwaltung"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Abwesenheitsverwaltung
                    </Link>
                    <Link
                      href="/schnittstelle-datev"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      DATEV Export
                    </Link>
                    <Link
                      href="/localization-germany"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Lokalisierung Deutschland
                    </Link>
                    <Link
                      href="/reisekosten"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Reisekosten
                    </Link>
                    <Link
                      href="/dunning"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mahnwesen (Dunning)
                    </Link>
                    <Link
                      href="/peak-ship"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Peak Ship
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Ressourcen */}
              <div className={styles.mobileDropdown}>
                <button
                  onClick={() => setIsRessourcenOpen(!isRessourcenOpen)}
                  className={styles.mobileDropdownButton}
                >
                  <span>Ressourcen</span>
                  <svg
                    className={`${styles.dropdownIcon} ${isRessourcenOpen ? styles.open : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isRessourcenOpen && (
                  <div className={styles.mobileDropdownContent}>
                    <Link
                      href="/ressourcen"
                      className={`${styles.mobileDropdownLink} ${styles.featured}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Resources
                    </Link>
                    <Link
                      href="/ressourcen#documentation"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/ressourcen#guides"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Guides & Tutorials
                    </Link>
                    <Link
                      href="/ressourcen#support"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Support Center
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Kontakt */}
              <div className={styles.mobileDropdown}>
                <button
                  onClick={() => setIsKontaktOpen(!isKontaktOpen)}
                  className={styles.mobileDropdownButton}
                >
                  <span>Kontakt</span>
                  <svg
                    className={`${styles.dropdownIcon} ${isKontaktOpen ? styles.open : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isKontaktOpen && (
                  <div className={styles.mobileDropdownContent}>
                    <Link
                      href="/kontakt"
                      className={`${styles.mobileDropdownLink} ${styles.featured}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Form
                    </Link>
                    <Link
                      href="/kontakt#support"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Support
                    </Link>
                    <Link
                      href="/kontakt#business"
                      className={styles.mobileDropdownLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Business Inquiries
                    </Link>
                  </div>
                )}
              </div>
            </div>
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
          onMouseLeave={() => setIsApplicationsOpen(false)}
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
                <Database size={48} />
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
                <MapPin size={48} />
              </div>
              <h3>Lokalisierung Deutschland für NetSuite</h3>
              <p>NetSuite Lokalisierung für DE-Compliance</p>
            </Link>

            <Link
              href="/localization-austria"
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <MapPin size={48} />
              </div>
              <h3>Lokalisierung Österreich für NetSuite</h3>
              <p>NetSuite Lokalisierung für AT-Compliance</p>
            </Link>

            <Link
              href="/dunning"
              className={styles.produktCard}
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              <div className={styles.iconWrapper}>
                <AlertCircle size={48} />
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
                <Truck size={48} />
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
                <Briefcase size={48} />
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
                <Calendar size={48} />
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

      {isRessourcenOpen && (
        <div
          className={styles.desktopDropdown}
          role="menu"
          aria-label="Ressourcen navigation"
          onMouseEnter={() => setIsRessourcenOpen(true)}
          onMouseLeave={() => setIsRessourcenOpen(false)}
        >
          <div className={styles.desktopDropdownContent}>
            <Link
              href="/ressourcen#documentation"
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              Documentation
            </Link>
            <Link
              href="/ressourcen#guides"
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              Guides & Tutorials
            </Link>
            <Link
              href="/ressourcen#support"
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              Support Center
            </Link>
          </div>
        </div>
      )}

      {isKontaktOpen && (
        <div
          className={styles.desktopDropdown}
          role="menu"
          aria-label="Kontakt navigation"
          onMouseEnter={() => setIsKontaktOpen(true)}
          onMouseLeave={() => setIsKontaktOpen(false)}
        >
          <div className={styles.desktopDropdownContent}>
            <Link
              href="/kontakt#support"
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              Support
            </Link>
            <Link
              href="/kontakt#business"
              onClick={closeAllDropdowns}
              role="menuitem"
            >
              Business Inquiries
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}