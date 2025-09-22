import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ressourcen",
  description: "Resources, documentation and support materials for our applications and services",
};

export default function RessourcenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ressourcen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive resources to help you get the most out of our applications and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Documentation & Guides
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Getting Started Guide
                  </h3>
                  <p className="text-gray-600">
                    Step-by-step instructions to help you get up and running quickly with our applications.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    API Documentation
                  </h3>
                  <p className="text-gray-600">
                    Complete API reference with examples and integration guidelines for developers.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Best Practices
                  </h3>
                  <p className="text-gray-600">
                    Learn industry best practices and recommendations for optimal application performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                    Download Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                    System Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need Support?
              </h3>
              <p className="text-blue-700 mb-4">
                Our support team is ready to help you with any questions or issues.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}