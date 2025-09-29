import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Palette Test",
  description: "Complete Alta Via Applications color system test page",
};

interface ColorSampleProps {
  name: string;
  className: string;
  hex: string;
  description?: string;
}

function ColorSample({ name, className, hex, description }: ColorSampleProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className={`h-20 w-full ${className}`}></div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
        <p className="text-sm text-gray-600 font-mono mb-1">{hex}</p>
        <p className="text-xs text-gray-500">{className}</p>
        {description && <p className="text-xs text-gray-600 mt-2">{description}</p>}
      </div>
    </div>
  );
}


interface ProductColorSectionProps {
  productName: string;
  primaryHex: string;
  secondaryHex: string;
  primaryClass: string;
  secondaryClass: string;
}

function ProductColorSection({ productName, primaryHex, secondaryHex, primaryClass, secondaryClass }: ProductColorSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{productName}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSample
          name={`${productName} Primary`}
          className={primaryClass}
          hex={primaryHex}
          description="Main product color"
        />
        <ColorSample
          name={`${productName} Secondary`}
          className={secondaryClass}
          hex={secondaryHex}
          description="Supporting product color"
        />
      </div>
    </div>
  );
}

export default function ColorsTestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Alta Via Applications Color System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete color palette with primary colors, secondary colors, product-specific colors,
            alpha variants, and gradient definitions.
          </p>
        </div>

        {/* Primary Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Primary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ColorSample
              name="Dark Blue"
              className="bg-dark-blue"
              hex="#002e64"
              description="Main brand color, used for headers and primary elements"
            />
            <ColorSample
              name="Sky Blue"
              className="bg-sky-blue"
              hex="#a8dcf4"
              description="Light accent color for highlights and secondary elements"
            />
            <ColorSample
              name="Mid Blue"
              className="bg-mid-blue"
              hex="#5095cb"
              description="Medium blue for balance and transitions"
            />
            <ColorSample
              name="Ice Blue"
              className="bg-ice-blue"
              hex="#eaf3f9"
              description="Subtle background color and light elements"
            />
          </div>
        </section>

        {/* Alpha Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Alpha Variants (40% & 70% Opacity)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Dark Blue Alpha</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ColorSample name="Dark Blue" className="bg-dark-blue" hex="#002e64" description="100% opacity" />
                <ColorSample name="Dark Blue 70%" className="bg-darkBlue-70" hex="#002e64b3" description="70% opacity" />
                <ColorSample name="Dark Blue 40%" className="bg-darkBlue-40" hex="#002e6466" description="40% opacity" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Sky Blue Alpha</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ColorSample name="Sky Blue" className="bg-sky-blue" hex="#a8dcf4" description="100% opacity" />
                <ColorSample name="Sky Blue 70%" className="bg-sky-blue-70" hex="#a8dcf4b3" description="70% opacity" />
                <ColorSample name="Sky Blue 40%" className="bg-sky-blue-40" hex="#a8dcf466" description="40% opacity" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Mid Blue Alpha</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ColorSample name="Mid Blue" className="bg-mid-blue" hex="#5095cb" description="100% opacity" />
                <ColorSample name="Mid Blue 70%" className="bg-mid-blue-70" hex="#5095cbb3" description="70% opacity" />
                <ColorSample name="Mid Blue 40%" className="bg-mid-blue-40" hex="#5095cb66" description="40% opacity" />
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Secondary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ColorSample
              name="Orange"
              className="bg-orange"
              hex="#f7a600"
              description="Accent color for warnings, highlights, and call-to-actions"
            />
            <ColorSample
              name="Sunny Yellow"
              className="bg-sunnyYellow"
              hex="#ffd700"
              description="Bright accent color for positive states and highlights"
            />
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Gradient Definitions</h2>

          {/* Main Brand Gradients */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Main Brand Gradients</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-dark-to-mid)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Dark to Mid Blue</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-dark-to-mid)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from Mid Blue (#5095cb) to Dark Blue (#002e64)</p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-mid-to-sky)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Mid to Sky Blue</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-mid-to-sky)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from Sky Blue (#a8dcf4) to Mid Blue (#5095cb)</p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-sky-to-ice)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Sky to Ice Blue</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-sky-to-ice)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from Ice Blue (#eaf3f9) to Sky Blue (#a8dcf4)</p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-orange-to-yellow)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Orange to Yellow</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-orange-to-yellow)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from Sunny Yellow (#ffd700) to Orange (#f7a600)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Gradients */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Product-Specific Gradients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-datev)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">DATEV Gradient</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-datev)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from #78dc3c to #009b87</p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-reisekosten)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Reisekosten Gradient</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-reisekosten)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from #d6ffff to #7bcfc9</p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-mahnwesen)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Mahnwesen Gradient</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-mahnwesen)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from #ff4100 to #980000</p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-peakship)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Peak Ship Gradient</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-peakship)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from #ffebc5 to #ffba00</p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-lokalisierung)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Lokalisierung Gradient</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-lokalisierung)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from #00bfbf to #003399</p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-abwesenheit)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Abwesenheit Gradient</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-abwesenheit)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from #65ffe8 to #00789e</p>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-32 w-full" style={{ background: 'var(--gradient-gsheet)' }}></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">GSheet Gradient</h4>
                  <p className="text-xs text-gray-500 mb-2">style={`{{ background: 'var(--gradient-gsheet)' }}`}</p>
                  <p className="text-xs text-gray-600">radial-gradient from #00b577 to #005f32</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Product-Specific Colors</h2>

          <ProductColorSection
            productName="DATEV"
            primaryHex="#009b87"
            secondaryHex="#78dc3c"
            primaryClass="bg-datev-primary"
            secondaryClass="bg-datev-secondary"
          />

          <ProductColorSection
            productName="Reisekosten"
            primaryHex="#7bcfc9"
            secondaryHex="#d6ffff"
            primaryClass="bg-reisekosten-primary"
            secondaryClass="bg-reisekosten-secondary"
          />

          <ProductColorSection
            productName="Mahnwesen"
            primaryHex="#980000"
            secondaryHex="#ff4100"
            primaryClass="bg-mahnwesen-primary"
            secondaryClass="bg-mahnwesen-secondary"
          />

          <ProductColorSection
            productName="PeakShip"
            primaryHex="#ffba00"
            secondaryHex="#ffebc5"
            primaryClass="bg-peakship-primary"
            secondaryClass="bg-peakship-secondary"
          />

          <ProductColorSection
            productName="Lokalisierung"
            primaryHex="#003399"
            secondaryHex="#00bfbf"
            primaryClass="bg-lokalisierung-primary"
            secondaryClass="bg-lokalisierung-secondary"
          />

          <ProductColorSection
            productName="Abwesenheit"
            primaryHex="#00789e"
            secondaryHex="#65ffe8"
            primaryClass="bg-abwesenheit-primary"
            secondaryClass="bg-abwesenheit-secondary"
          />

          <ProductColorSection
            productName="GSheet"
            primaryHex="#005f32"
            secondaryHex="#00b577"
            primaryClass="bg-gsheet-primary"
            secondaryClass="bg-gsheet-secondary"
          />
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Usage Examples</h2>
          <div className="space-y-8">

            {/* Text Colors */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Text Colors</h3>
              <div className="space-y-2">
                <p className="text-dark-blue">Dark Blue text (text-dark-blue)</p>
                <p className="text-sky-blue">Sky Blue text (text-sky-blue)</p>
                <p className="text-midBlue">Mid Blue text (text-midBlue)</p>
                <p className="text-orange">Orange text (text-orange)</p>
                <p className="text-sunnyYellow">Sunny Yellow text (text-sunnyYellow)</p>
              </div>
            </div>

            {/* Border Colors */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Border Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border-2 border-dark-blue p-4 rounded text-center text-sm">border-dark-blue</div>
                <div className="border-2 border-skyBlue p-4 rounded text-center text-sm">border-skyBlue</div>
                <div className="border-2 border-midBlue p-4 rounded text-center text-sm">border-midBlue</div>
                <div className="border-2 border-orange p-4 rounded text-center text-sm">border-orange</div>
              </div>
            </div>

            {/* Button Examples */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Button Examples</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-darkBlue text-white px-6 py-2 rounded hover:bg-mid-blue transition-colors">
                  Dark Blue Button
                </button>
                <button className="bg-sky-blue text-dark-blue px-6 py-2 rounded hover:bg-ice-blue transition-colors">
                  Sky Blue Button
                </button>
                <button className="bg-orange text-white px-6 py-2 rounded hover:bg-sunnyYellow hover:text-gray-800 transition-colors">
                  Orange Button
                </button>
                <button className="border-2 border-dark-blue text-dark-blue px-6 py-2 rounded hover:bg-dark-blue hover:text-white transition-colors">
                  Outline Button
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Information */}
        <section className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Information</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Available Utilities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Background:</strong> bg-darkBlue, bg-sky-blue, bg-mid-blue, etc.</li>
                <li><strong>Text:</strong> text-dark-blue, text-sky-blue, text-midBlue, etc.</li>
                <li><strong>Border:</strong> border-dark-blue, border-skyBlue, border-midBlue, etc.</li>
                <li><strong>Alpha variants:</strong> bg-darkBlue-40, bg-darkBlue-70, etc.</li>
                <li><strong>Gradients:</strong> bg-gradient-dark-to-mid, bg-gradient-mid-to-sky, bg-gradient-orange-to-yellow</li>
                <li><strong>Product colors:</strong> bg-datev-primary, text-peakship-secondary, etc.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Configuration</h3>
              <p className="text-sm text-gray-600 mb-4">
                All colors are configured in <code className="bg-gray-100 px-2 py-1 rounded text-xs">tailwind.config.ts</code>
                and are available as Tailwind utilities for backgrounds, text, and borders.
              </p>
              <p className="text-sm text-gray-600">
                Product-specific colors follow the naming convention:
                <code className="bg-gray-100 px-2 py-1 rounded text-xs ml-1">bg-[product]-[primary|secondary]</code>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}