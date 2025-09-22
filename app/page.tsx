export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-dark-to-mid text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Welcome to{" "}
              <span className="text-skyBlue">Alta Via Applications</span>
            </h1>
            <p className="mt-6 text-xl text-iceBlue max-w-3xl mx-auto">
              Delivering simplicity through innovative applications and digital solutions.
              We transform complex business challenges into elegant, user-friendly solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-darkBlue px-8 py-3 rounded-md font-semibold hover:bg-iceBlue transition-colors">
                Explore Applications
              </button>
              <button className="border border-skyBlue text-white px-8 py-3 rounded-md font-semibold hover:bg-midBlue transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Alta Via Applications?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on delivering simplicity without compromising on functionality or performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <div className="h-16 w-16 bg-iceBlue rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="h-8 w-8 bg-midBlue rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Simple & Intuitive
              </h3>
              <p className="text-gray-600">
                Our applications are designed with simplicity at their core, ensuring ease of use without sacrificing powerful functionality.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <div className="h-16 w-16 bg-iceBlue rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="h-8 w-8 bg-midBlue rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Scalable Solutions
              </h3>
              <p className="text-gray-600">
                Built to grow with your business, our solutions scale seamlessly from startup to enterprise level.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <div className="h-16 w-16 bg-iceBlue rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="h-8 w-8 bg-midBlue rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Our dedicated team provides comprehensive support and resources to ensure your success every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how Alta Via Applications can transform your business with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-darkBlue text-white px-8 py-3 rounded-md font-semibold hover:bg-midBlue transition-colors">
              View Applications
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors">
              Browse Resources
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Alta Via Applications</h3>
            <p className="text-gray-400 mb-4">Delivering Simplicity</p>
            <p className="text-sm text-gray-500">
              © 2024 Alta Via Applications. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
