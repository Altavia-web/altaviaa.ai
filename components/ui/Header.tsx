"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isRessourcenOpen, setIsRessourcenOpen] = useState(false);
  const [isKontaktOpen, setIsKontaktOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeAllDropdowns = () => {
    setIsApplicationsOpen(false);
    setIsRessourcenOpen(false);
    setIsKontaktOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row - Language Switcher */}
        <div className="flex justify-end py-2 border-b border-gray-100">
          <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-dark-blue border border-gray-300 rounded-md hover:border-blue-300 transition-colors duration-200">
            EN
          </button>
        </div>

        {/* Bottom Row - Logo and Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/AVA_Logo.png"
              alt="Alta Via Applications Logo"
              width={240}
              height={240}
              className="h-24 w-auto"
              priority
              quality={100}
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Applications Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsApplicationsOpen(!isApplicationsOpen);
                  setIsRessourcenOpen(false);
                  setIsKontaktOpen(false);
                }}
                className="flex items-center space-x-1 text-gray-700 hover:text-dark-blue transition-colors duration-200 py-2 font-medium"
              >
                <span className="font-medium">Applications</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isApplicationsOpen ? "rotate-180" : ""
                  }`}
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/applications"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200 font-medium"
                    >
                      Applications Overview
                    </Link>
                    <Link
                      href="/applications#web"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200"
                    >
                      Web Applications
                    </Link>
                    <Link
                      href="/applications#mobile"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200"
                    >
                      Mobile Solutions
                    </Link>
                    <Link
                      href="/applications#enterprise"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200"
                    >
                      Enterprise Systems
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Ressourcen Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsRessourcenOpen(!isRessourcenOpen);
                  setIsApplicationsOpen(false);
                  setIsKontaktOpen(false);
                }}
                className="flex items-center space-x-1 text-gray-700 hover:text-dark-blue transition-colors duration-200 py-2"
              >
                <span className="font-medium">Ressourcen</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isRessourcenOpen ? "rotate-180" : ""
                  }`}
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/ressourcen"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200 font-medium"
                    >
                      All Resources
                    </Link>
                    <Link
                      href="/ressourcen#documentation"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200"
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/ressourcen#guides"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200"
                    >
                      Guides & Tutorials
                    </Link>
                    <Link
                      href="/ressourcen#support"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200"
                    >
                      Support Center
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Kontakt Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsKontaktOpen(!isKontaktOpen);
                  setIsApplicationsOpen(false);
                  setIsRessourcenOpen(false);
                }}
                className="flex items-center space-x-1 text-gray-700 hover:text-dark-blue transition-colors duration-200 py-2"
              >
                <span className="font-medium">Kontakt</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isKontaktOpen ? "rotate-180" : ""
                  }`}
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/kontakt"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200 font-medium"
                    >
                      Contact Form
                    </Link>
                    <Link
                      href="/kontakt#support"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200"
                    >
                      Support
                    </Link>
                    <Link
                      href="/kontakt#business"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-ice-blue hover:text-dark-blue transition-all duration-200"
                    >
                      Business Inquiries
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-dark-blue hover:bg-ice-blue transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Language Switcher */}
            <div className="flex justify-end pb-4 border-b border-gray-100">
              <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-dark-blue border border-gray-300 rounded-md hover:border-blue-300 transition-colors duration-200">
                EN
              </button>
            </div>

            {/* Mobile Applications */}
            <div>
              <button
                onClick={() => setIsApplicationsOpen(!isApplicationsOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-dark-blue font-medium"
              >
                <span>Applications</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isApplicationsOpen ? "rotate-180" : ""
                  }`}
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
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/applications"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Applications Overview
                  </Link>
                  <Link
                    href="/applications#web"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Web Applications
                  </Link>
                  <Link
                    href="/applications#mobile"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mobile Solutions
                  </Link>
                  <Link
                    href="/applications#enterprise"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Enterprise Systems
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Ressourcen */}
            <div>
              <button
                onClick={() => setIsRessourcenOpen(!isRessourcenOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-dark-blue font-medium"
              >
                <span>Ressourcen</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isRessourcenOpen ? "rotate-180" : ""
                  }`}
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
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/ressourcen"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Resources
                  </Link>
                  <Link
                    href="/ressourcen#documentation"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/ressourcen#guides"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Guides & Tutorials
                  </Link>
                  <Link
                    href="/ressourcen#support"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Support Center
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Kontakt */}
            <div>
              <button
                onClick={() => setIsKontaktOpen(!isKontaktOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-dark-blue font-medium"
              >
                <span>Kontakt</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isKontaktOpen ? "rotate-180" : ""
                  }`}
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
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/kontakt"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Form
                  </Link>
                  <Link
                    href="/kontakt#support"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Support
                  </Link>
                  <Link
                    href="/kontakt#business"
                    className="block py-2 text-sm text-gray-600 hover:text-dark-blue hover:bg-ice-blue px-2 rounded transition-all duration-200"
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

      {/* Click outside to close dropdowns */}
      {(isApplicationsOpen || isRessourcenOpen || isKontaktOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            closeAllDropdowns();
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </header>
  );
}