import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-4 gap-8">

          {/* Logo & Firmenname (Links) */}
          <div className="w-4/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
              <div
                className="w-8 h-8 bg-gradient-to-br from-sky-blue to-mid-blue rounded"
                aria-hidden="true"
              />
              <span className="sr-only">Alta Via Applications Logo</span>
            </div>
            <h2 className="text-lg font-semibold mt-4">
              Alta Via Applications
            </h2>
          </div>

          {/* Firmenadresse (Links-Mitte) */}
          <div className="w-4/5">
            <h3 className="text-md font-semibold text-gray-300 mb-4">Anschrift</h3>
            <address className="not-italic text-gray-400 leading-relaxed flex flex-col sm:flex-row sm:space-x-2 space-y-1 sm:space-y-0">
              <div>Nadistr. 12</div>
              <div>80809 München</div>
            </address>
          </div>

          {/* Call-to-Action Bereich (Rechts-Mitte) */}
          <div className="w-4/5">
            <h3 className="text-md font-semibold text-gray-300 mb-4">
              App für NetSuite erwerben?
            </h3>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <div>
                <a
                  href="mailto:sales@altaviaa.ai"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
                  aria-label="E-Mail an sales@altaviaa.ai senden"
                >
                  sales@altaviaa.ai
                </a>
              </div>
              <div>
                <a
                  href="tel:+493083790656"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
                  aria-label="Anrufen unter +49 30 83790656"
                >
                  +49 30 83790656
                </a>
              </div>
            </div>
          </div>

          {/* Rechtliche Links (Rechts) */}
          <div className="w-4/5">
            <h3 className="text-md font-semibold text-gray-300 mb-4">Rechtliches</h3>
            <nav aria-label="Rechtliche Links">
              <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <li>
                  <Link
                    href="/datenschutz"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Alta Via Applications. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}