import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography Test",
  description: "Typography system test page for Titillium Web font family",
};

export default function TypographyTestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-12">
            <h1 className="mb-4">Typography System Test</h1>
            <p className="text-lg text-gray-600">
              Testing Titillium Web font family with comprehensive typography scale.
              Base font size: 18px, Scale factor: 1.125, Line height: 140%
            </p>
          </div>

          {/* Headings Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-blue-600">Heading Hierarchy</h2>

            <div className="space-y-6">
              <div>
                <h1>H1 Heading - Main Title</h1>
                <p className="text-sm text-gray-500">Desktop: 41.1px (2.566rem) / Mobile: 32.4px (2.027rem) - Bold (700)</p>
              </div>

              <div>
                <h2>H2 Heading - Section Title</h2>
                <p className="text-sm text-gray-500">Desktop: 36.5px (2.281rem) / Mobile: 28.8px (1.802rem) - Semi-bold (600)</p>
              </div>

              <div>
                <h3>H3 Heading - Subsection Title</h3>
                <p className="text-sm text-gray-500">Desktop: 28.8px (1.802rem) / Mobile: 25.6px (1.602rem) - Semi-bold (600)</p>
              </div>

              <div>
                <h4>H4 Heading - Subsection Title</h4>
                <p className="text-sm text-gray-500">Desktop: 25.6px (1.602rem) / Mobile: 22.8px (1.424rem) - Semi-bold (600)</p>
              </div>

              <div>
                <h5>H5 Heading - Minor Title</h5>
                <p className="text-sm text-gray-500">Desktop: 22.8px (1.424rem) / Mobile: 20.3px (1.266rem) - Semi-bold (600)</p>
              </div>

              <div>
                <h6>H6 Heading - Smallest Title</h6>
                <p className="text-sm text-gray-500">Desktop: 20.3px (1.266rem) / Mobile: 18px (1.125rem) - Semi-bold (600)</p>
              </div>
            </div>
          </section>

          {/* Body Text Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-blue-600">Body Text Styles</h2>

            <div className="space-y-4">
              <div>
                <p className="mb-2">
                  <strong>Base Text (18px):</strong> This is the standard body text using Titillium Web at 18px with 140% line height.
                  It provides excellent readability for professional B2B content and maintains good contrast ratios.
                </p>
              </div>

              <div>
                <p className="text-small mb-2">
                  <strong>Small Text (14px):</strong> This smaller text size is perfect for captions, metadata,
                  or secondary information that doesn&apos;t need as much visual prominence.
                </p>
              </div>

              <div>
                <p className="text-smaller mb-2">
                  <strong>Smaller Text (12px):</strong> The smallest text size, ideal for fine print,
                  legal text, or very minor details.
                </p>
              </div>
            </div>
          </section>

          {/* Font Weights Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-blue-600">Font Weights</h2>

            <div className="space-y-4">
              <p className="font-regular">
                <strong>Regular (400):</strong> The standard font weight used for body text and general content.
                Provides good readability without being too light or heavy.
              </p>

              <p className="font-semibold">
                <strong>Semi-bold (600):</strong> Used for emphasis, subheadings, and important information
                that needs to stand out from regular text.
              </p>

              <p className="font-bold">
                <strong>Bold (700):</strong> Reserved for main headings, call-to-actions,
                and content that requires maximum visual impact.
              </p>
            </div>
          </section>

          {/* Links Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-blue-600">Link Styles</h2>

            <div className="prose max-w-none">
              <p>
                Here are examples of inline links within content:
                <a href="#">This is a standard inline link</a> that provides
                clear visual indication and hover effects. Links maintain
                <a href="#">proper contrast ratios</a> and include focus states
                for accessibility.
              </p>

              <p>
                Links can also appear in lists:
              </p>
              <ul>
                <li><a href="#">Applications Overview</a> - Main applications page</li>
                <li><a href="#">Resource Center</a> - Documentation and guides</li>
                <li><a href="#">Contact Information</a> - Get in touch with our team</li>
              </ul>
            </div>
          </section>

          {/* Typography Scale Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-blue-600">Complete Typography Scale</h2>

            <div className="space-y-3">
              <div className="text-xs">Extra Small (12px / 0.75rem)</div>
              <div className="text-sm">Small (14px / 0.875rem)</div>
              <div className="text-base">Base (18px / 1.125rem)</div>
              <div className="text-lg">Large (20.3px / 1.266rem)</div>
              <div className="text-xl">Extra Large (22.8px / 1.424rem)</div>
              <div className="text-2xl">2XL (25.6px / 1.602rem)</div>
              <div className="text-3xl">3XL (28.8px / 1.802rem)</div>
              <div className="text-4xl">4XL (32.4px / 2.027rem)</div>
              <div className="text-5xl">5XL (36.5px / 2.281rem)</div>
              <div className="text-6xl">6XL (41.1px / 2.566rem)</div>
            </div>
          </section>

          {/* Sample Content Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-blue-600">Sample Content Layout</h2>

            <article className="space-y-content">
              <h3>Application Development Best Practices</h3>

              <p>
                At Alta Via Applications, we believe in delivering simplicity through
                well-crafted digital solutions. Our development approach focuses on
                creating applications that are not only functional but also intuitive
                and user-friendly.
              </p>

              <h4>Key Principles</h4>

              <ul>
                <li><strong>User-Centered Design:</strong> Every decision is made with the end user in mind</li>
                <li><strong>Performance First:</strong> We optimize for speed and efficiency from day one</li>
                <li><strong>Scalable Architecture:</strong> Built to grow with your business needs</li>
                <li><strong>Comprehensive Testing:</strong> Rigorous quality assurance processes</li>
              </ul>

              <p>
                Our team combines <a href="#">technical expertise</a> with business acumen to
                deliver solutions that drive results. Whether you&apos;re looking for
                <a href="#">web applications</a>, <a href="#">mobile solutions</a>, or
                <a href="#">enterprise systems</a>, we have the experience to bring
                your vision to life.
              </p>

              <h5>Ready to Get Started?</h5>

              <p className="text-small">
                Contact our team today to discuss your project requirements and discover
                how Alta Via Applications can help transform your business processes.
              </p>
            </article>
          </section>

          {/* Color and Accessibility Section */}
          <section>
            <h2 className="mb-6 text-blue-600">Color & Accessibility</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-blue-900 mb-2">Primary Blue</h4>
                <p className="text-blue-800 text-small">
                  Used for links, buttons, and accent elements.
                  Meets WCAG AA contrast requirements.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="text-gray-900 mb-2">Neutral Gray</h4>
                <p className="text-gray-700 text-small">
                  Used for body text and secondary information.
                  Provides excellent readability.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}