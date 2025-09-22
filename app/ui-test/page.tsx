"use client";

import Button from "@/components/ui/Button";

const colors = ['midBlue', 'orange', 'datev', 'lokalisierung', 'mahnwesen'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export default function UITestPage() {
  const handleButtonClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Button Component System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Alta Via Applications button component with all variants,
            colors, sizes, and interactive states using the established color system.
          </p>
        </div>

        {/* Size Showcase */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Button Sizes</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex flex-wrap items-center gap-6">
              <Button
                variant="filled"
                color="midBlue"
                size="sm"
                onClick={() => handleButtonClick('Small')}
              >
                Small Button
              </Button>
              <Button
                variant="filled"
                color="midBlue"
                size="md"
                onClick={() => handleButtonClick('Medium')}
              >
                Medium Button
              </Button>
              <Button
                variant="filled"
                color="midBlue"
                size="lg"
                onClick={() => handleButtonClick('Large')}
              >
                Large Button
              </Button>
            </div>
          </div>
        </section>

        {/* Color Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Color Variants</h2>

          {/* Filled Buttons */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Filled Buttons</h3>
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                  <Button
                    key={`filled-${color}`}
                    variant="filled"
                    color={color}
                    size="md"
                    onClick={() => handleButtonClick(`Filled ${color}`)}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)} Button
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Outlined Buttons */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Outlined Buttons</h3>
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                  <Button
                    key={`outlined-${color}`}
                    variant="outlined"
                    color={color}
                    size="md"
                    onClick={() => handleButtonClick(`Outlined ${color}`)}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)} Button
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Arrow Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Buttons with Arrow Icons</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Filled with Arrows */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Filled with Arrows</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="space-y-4">
                  {colors.map((color) => (
                    <Button
                      key={`filled-arrow-${color}`}
                      variant="filled"
                      color={color}
                      size="md"
                      showArrow={true}
                      onClick={() => handleButtonClick(`Filled ${color} with arrow`)}
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Outlined with Arrows */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Outlined with Arrows</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="space-y-4">
                  {colors.map((color) => (
                    <Button
                      key={`outlined-arrow-${color}`}
                      variant="outlined"
                      color={color}
                      size="md"
                      showArrow={true}
                      onClick={() => handleButtonClick(`Outlined ${color} with arrow`)}
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Size and Arrow Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Size and Arrow Combinations</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="space-y-6">
              {sizes.map((size) => (
                <div key={size} className="flex flex-wrap items-center gap-4">
                  <div className="w-20 text-sm font-medium text-gray-600 capitalize">
                    {size}:
                  </div>
                  <Button
                    variant="filled"
                    color="midBlue"
                    size={size}
                    onClick={() => handleButtonClick(`${size} filled`)}
                  >
                    Button
                  </Button>
                  <Button
                    variant="filled"
                    color="midBlue"
                    size={size}
                    showArrow={true}
                    onClick={() => handleButtonClick(`${size} filled with arrow`)}
                  >
                    With Arrow
                  </Button>
                  <Button
                    variant="outlined"
                    color="orange"
                    size={size}
                    onClick={() => handleButtonClick(`${size} outlined`)}
                  >
                    Outlined
                  </Button>
                  <Button
                    variant="outlined"
                    color="orange"
                    size={size}
                    showArrow={true}
                    onClick={() => handleButtonClick(`${size} outlined with arrow`)}
                  >
                    Outlined Arrow
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disabled States */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Disabled States</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex flex-wrap gap-4">
              <Button
                variant="filled"
                color="midBlue"
                size="md"
                disabled={true}
              >
                Disabled Filled
              </Button>
              <Button
                variant="outlined"
                color="orange"
                size="md"
                disabled={true}
              >
                Disabled Outlined
              </Button>
              <Button
                variant="filled"
                color="datev"
                size="md"
                disabled={true}
                showArrow={true}
              >
                Disabled with Arrow
              </Button>
            </div>
          </div>
        </section>

        {/* Product-Specific Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Product-Specific Button Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* DATEV Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">DATEV Integration</h3>
              <div className="space-y-3">
                <Button
                  variant="filled"
                  color="datev"
                  size="md"
                  showArrow={true}
                  onClick={() => handleButtonClick('DATEV Export')}
                >
                  Export to DATEV
                </Button>
                <Button
                  variant="outlined"
                  color="datev"
                  size="sm"
                  onClick={() => handleButtonClick('DATEV Settings')}
                >
                  DATEV Settings
                </Button>
              </div>
            </div>

            {/* Mahnwesen Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mahnwesen</h3>
              <div className="space-y-3">
                <Button
                  variant="filled"
                  color="mahnwesen"
                  size="md"
                  showArrow={true}
                  onClick={() => handleButtonClick('Send Reminder')}
                >
                  Send Reminder
                </Button>
                <Button
                  variant="outlined"
                  color="mahnwesen"
                  size="sm"
                  onClick={() => handleButtonClick('View Reminders')}
                >
                  View All
                </Button>
              </div>
            </div>

            {/* Lokalisierung Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lokalisierung</h3>
              <div className="space-y-3">
                <Button
                  variant="filled"
                  color="lokalisierung"
                  size="md"
                  showArrow={true}
                  onClick={() => handleButtonClick('Translate')}
                >
                  Translate
                </Button>
                <Button
                  variant="outlined"
                  color="lokalisierung"
                  size="sm"
                  onClick={() => handleButtonClick('Language Settings')}
                >
                  Languages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Interactive Demo</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              Click any button to see console output and test interactions.
              All buttons include proper focus states, hover effects, and accessibility features.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="filled"
                color="midBlue"
                size="lg"
                showArrow={true}
                onClick={() => alert('Primary action triggered!')}
              >
                Primary Action
              </Button>
              <Button
                variant="outlined"
                color="orange"
                size="md"
                onClick={() => alert('Secondary action triggered!')}
              >
                Secondary Action
              </Button>
              <Button
                variant="filled"
                color="datev"
                size="sm"
                showArrow={true}
                onClick={() => alert('DATEV action triggered!')}
              >
                DATEV Action
              </Button>
            </div>
          </div>
        </section>

        {/* Technical Information */}
        <section className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Information</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Component Props</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-sm text-gray-700 overflow-x-auto">
{`interface ButtonProps {
  variant: 'filled' | 'outlined';
  color: 'midBlue' | 'orange' | 'datev'
        | 'lokalisierung' | 'mahnwesen';
  size: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ <strong>5 Color variants</strong> using existing color system</li>
                <li>✅ <strong>3 Size options</strong> with proper scaling</li>
                <li>✅ <strong>2 Style variants</strong> (filled & outlined)</li>
                <li>✅ <strong>Optional arrow icons</strong> using Lucide React</li>
                <li>✅ <strong>Hover & focus states</strong> with smooth transitions</li>
                <li>✅ <strong>Disabled state support</strong> with visual feedback</li>
                <li>✅ <strong>Accessibility features</strong> (focus rings, ARIA)</li>
                <li>✅ <strong>TypeScript support</strong> with full type safety</li>
                <li>✅ <strong>Consistent design</strong> matching color system</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}