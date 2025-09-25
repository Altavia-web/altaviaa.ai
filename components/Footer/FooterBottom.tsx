import React from 'react';
import Link from 'next/link';

export default function FooterBottom() {
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Company Info (Left) */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M8 2L14 8L8 14L2 8L8 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Alta Via Applications
              </span>
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p>Nadistr. 12</p>
              <p>80809 München</p>
            </div>
          </div>

          {/* Contact & CTA (Center) */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              App für NetSuite erwerben?
            </h3>
            <div className="space-y-2">
              <div>
                <a
                  href="mailto:sales@altaviaa.ai"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
                  aria-label="E-Mail an sales@altaviaa.ai senden"
                >
                  sales@altaviaa.ai
                </a>
              </div>
              <div>
                <a
                  href="tel:+4930837906556"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
                  aria-label="Anrufen unter +49 30 83790656"
                >
                  +49 30 83790656
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links (Right) */}
          <div className="flex flex-col items-start md:items-end">
            <nav aria-label="Rechtliche Links" className="space-y-2">
              <div>
                <Link
                  href="/datenschutzerklarung"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Datenschutz
                </Link>
              </div>
              <div>
                <Link
                  href="/impressum"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Impressum
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}