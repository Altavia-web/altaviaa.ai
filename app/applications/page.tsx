import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications",
  description: "Overview of our application solutions and services",
};

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Applications Overview
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of application solutions designed to deliver simplicity and efficiency to your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="h-6 w-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Web Applications
            </h3>
            <p className="text-gray-600">
              Custom web applications built with modern technologies for optimal performance and user experience.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="h-6 w-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Mobile Solutions
            </h3>
            <p className="text-gray-600">
              Native and cross-platform mobile applications that deliver seamless experiences across all devices.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="h-6 w-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Enterprise Systems
            </h3>
            <p className="text-gray-600">
              Scalable enterprise solutions designed to streamline your business processes and improve productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}