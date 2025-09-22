export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Alta Via Applications
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center bg-gray-50" role="main">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Hello Alta Via Applications
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to your new Next.js 14 website with TypeScript and Tailwind CSS
          </p>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            © 2024 Alta Via Applications. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
