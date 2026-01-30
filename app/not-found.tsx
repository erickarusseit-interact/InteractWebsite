import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
      <div className="text-center px-6">
        
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-violet-500/30 to-violet-600/10 rounded-2xl flex items-center justify-center mx-auto border border-white/10 backdrop-blur-sm">
            <svg className="w-12 h-12 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-6xl font-bold mb-4">404</h1>
      
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          Die angeforderte Seite konnte nicht gefunden werden. Möglicherweise wurde sie verschoben oder existiert nicht mehr.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
          >
            Zur Startseite
          </Link>
          <Link 
            href="/Kontakt" 
            className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Kontakt
          </Link>
        </div>

        {/* Additional Info */}
        <p className="text-neutral-500 text-sm mt-8">
          Fehlercode: 404 - Seite nicht gefunden
        </p>
      </div>
    </div>
  );
}
