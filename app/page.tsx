import Button from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section style={{ background: 'var(--gradient-dark-to-mid)' }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Welcome to{" "}
              <span className="text-sky-blue">Alta Via Applications</span>
            </h1>
            <p className="mt-6 text-xl text-ice-blue max-w-3xl mx-auto">
              Delivering simplicity through innovative applications and digital solutions.
              We transform complex business challenges into elegant, user-friendly solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="filled"
                color="orange"
                size="lg"
                showArrow={true}
              >
                Explore Applications
              </Button>
              <Button
                variant="outlined"
                color="midBlue"
                size="lg"
              >
                Contact Us
              </Button>
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
              <div className="h-16 w-16 bg-ice-blue rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="h-8 w-8 bg-mid-blue rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Simple & Intuitive
              </h3>
              <p className="text-gray-600">
                Our applications are designed with simplicity at their core, ensuring ease of use without sacrificing powerful functionality.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <div className="h-16 w-16 bg-ice-blue rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="h-8 w-8 bg-mid-blue rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Scalable Solutions
              </h3>
              <p className="text-gray-600">
                Built to grow with your business, our solutions scale seamlessly from startup to enterprise level.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <div className="h-16 w-16 bg-ice-blue rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="h-8 w-8 bg-mid-blue rounded"></div>
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
            <Button
              variant="filled"
              color="midBlue"
              size="md"
              showArrow={true}
            >
              View Applications
            </Button>
            <Button
              variant="outlined"
              color="datev"
              size="md"
            >
              Browse Resources
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
