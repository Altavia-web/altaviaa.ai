"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isRessourcenOpen, setIsRessourcenOpen] = useState(false);
  const [isKontaktOpen, setIsKontaktOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/images/logo/AVA_Logo.png"
              alt="Alta Via Applications Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">
                Alta Via Applications
              </span>
              <span className="text-sm text-blue-600 font-medium">
                Delivering Simplicity
              </span>
            </div>
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
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/applications"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Applications Overview
                    </Link>
                    <Link
                      href="/applications#web"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Web Applications
                    </Link>
                    <Link
                      href="/applications#mobile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Mobile Solutions
                    </Link>
                    <Link
                      href="/applications#enterprise"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/ressourcen"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      All Resources
                    </Link>
                    <Link
                      href="/ressourcen#documentation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/ressourcen#guides"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Guides & Tutorials
                    </Link>
                    <Link
                      href="/ressourcen#support"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/kontakt"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Contact Form
                    </Link>
                    <Link
                      href="/kontakt#support"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Support
                    </Link>
                    <Link
                      href="/kontakt#business"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Business Inquiries
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-blue-600 border border-gray-300 rounded-md hover:border-blue-300 transition-colors duration-200">
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Click outside to close dropdowns */}
      {(isApplicationsOpen || isRessourcenOpen || isKontaktOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsApplicationsOpen(false);
            setIsRessourcenOpen(false);
            setIsKontaktOpen(false);
          }}
        />
      )}
    </header>
  );
}