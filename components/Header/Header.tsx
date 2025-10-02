"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
              <div className={styles.dropdown}>
                <button
                  onClick={() => {
                    setIsApplicationsOpen(!isApplicationsOpen);
                    setIsRessourcenOpen(false);
                    setIsKontaktOpen(false);
                  }}
                  className={`${styles.dropdownButton} ${isActive('/products') || isActive('/abwesenheitsverwaltung') || isActive('/schnittstelle-datev') || isActive('/localization-germany') || isActive('/reisekosten') || isActive('/dunning') || isActive('/peak-ship') ? styles.active : ''}`}
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
              </div>

              {/* Ressourcen Dropdown */}
              <div className={styles.dropdown}>
                <button
                  onClick={() => {
                    setIsRessourcenOpen(!isRessourcenOpen);
                    setIsApplicationsOpen(false);
                    setIsKontaktOpen(false);
                  }}
                  className={`${styles.dropdownButton} ${isActive('/ressourcen') ? styles.active : ''}`}
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
              </div>

              {/* Kontakt Dropdown */}
              <div className={styles.dropdown}>
                <button
                  onClick={() => {
                    setIsKontaktOpen(!isKontaktOpen);
                    setIsApplicationsOpen(false);
                    setIsRessourcenOpen(false);
                  }}
                  className={`${styles.dropdownButton} ${isActive('/kontakt') ? styles.active : ''}`}
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
      {/* Click outside to close dropdowns */}
      {(isApplicationsOpen || isRessourcenOpen || isKontaktOpen || isMobileMenuOpen) && (
        <div
          className={styles.overlay}
          onClick={() => {
            closeAllDropdowns();
            setIsMobileMenuOpen(false);
          }}
        />
      )}
      {isApplicationsOpen && (
        <div className={styles.desktopDropdown}>
          <div className={styles.desktopDropdownContent}>
            <Link
              href="/products"
              className={styles.featured}
              onClick={closeAllDropdowns}
            >
              Alle Produkte
            </Link>
            <Link
              href="/abwesenheitsverwaltung"
              onClick={closeAllDropdowns}
            >
              Abwesenheitsverwaltung
            </Link>
            <Link
              href="/schnittstelle-datev"
              onClick={closeAllDropdowns}
            >
              DATEV Export
            </Link>
            <Link
              href="/localization-germany"
              onClick={closeAllDropdowns}
            >
              Lokalisierung Deutschland
            </Link>
            <Link
              href="/reisekosten"
              onClick={closeAllDropdowns}
            >
              Reisekosten
            </Link>
            <Link
              href="/dunning"
              onClick={closeAllDropdowns}
            >
              Mahnwesen (Dunning)
            </Link>
            <Link
              href="/peak-ship"
              onClick={closeAllDropdowns}
            >
              Peak Ship
            </Link>
          </div>
        </div>
      )}

      {isRessourcenOpen && (
        <div className={styles.desktopDropdown}>
          <div className={styles.desktopDropdownContent}>
            <Link
              href="/ressourcen"
              className={styles.featured}
              onClick={closeAllDropdowns}
            >
              All Resources
            </Link>
            <Link
              href="/ressourcen#documentation"
              onClick={closeAllDropdowns}
            >
              Documentation
            </Link>
            <Link
              href="/ressourcen#guides"
              onClick={closeAllDropdowns}
            >
              Guides & Tutorials
            </Link>
            <Link
              href="/ressourcen#support"
              onClick={closeAllDropdowns}
            >
              Support Center
            </Link>
          </div>
        </div>
      )}

      {isKontaktOpen && (
        <div className={styles.desktopDropdown}>
          <div className={styles.desktopDropdownContent}>
            <Link
              href="/kontakt"
              className={styles.featured}
              onClick={closeAllDropdowns}
            >
              Contact Form
            </Link>
            <Link
              href="/kontakt#support"
              onClick={closeAllDropdowns}
            >
              Support
            </Link>
            <Link
              href="/kontakt#business"
              onClick={closeAllDropdowns}
            >
              Business Inquiries
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}