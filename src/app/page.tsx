export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Main Hello World Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            Welcome to your beautiful Next.js application
          </p>
          
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            This is a simple yet elegant Hello World page built with modern web technologies.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto">
          <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-sm flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full opacity-75"></div>
          </div>
          <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-sm flex items-center justify-center">
            <div className="w-8 h-8 bg-purple-500 rounded-full opacity-75"></div>
          </div>
          <div className="h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg shadow-sm flex items-center justify-center">
            <div className="w-8 h-8 bg-indigo-500 rounded-full opacity-75"></div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-sm text-gray-500">
          <p>Built with Next.js, React, and Tailwind CSS</p>
        </footer>
      </div>
    </main>
  )
}