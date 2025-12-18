import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-background border-b border-secondary/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary rounded-sm flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-secondary-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="font-heading text-5xl lg:text-7xl uppercase tracking-tight text-secondary mb-8 leading-none">
          SIGNBRIDGE
        </h1>

        <nav className="flex flex-wrap gap-8 lg:gap-12">
          <Link
            to="/"
            className={`font-heading text-lg uppercase tracking-wide transition-colors ${
              isActive('/') 
                ? 'text-secondary border-b-2 border-secondary pb-1' 
                : 'text-secondary/60 hover:text-secondary'
            }`}
          >
            HOME
          </Link>
          <Link
            to="/gestures"
            className={`font-heading text-lg uppercase tracking-wide transition-colors ${
              isActive('/gestures') 
                ? 'text-secondary border-b-2 border-secondary pb-1' 
                : 'text-secondary/60 hover:text-secondary'
            }`}
          >
            GESTURES
          </Link>
          <Link
            to="/use-cases"
            className={`font-heading text-lg uppercase tracking-wide transition-colors ${
              isActive('/use-cases') 
                ? 'text-secondary border-b-2 border-secondary pb-1' 
                : 'text-secondary/60 hover:text-secondary'
            }`}
          >
            USE CASES
          </Link>
          <Link
            to="/about"
            className={`font-heading text-lg uppercase tracking-wide transition-colors ${
              isActive('/about') 
                ? 'text-secondary border-b-2 border-secondary pb-1' 
                : 'text-secondary/60 hover:text-secondary'
            }`}
          >
            ABOUT
          </Link>
        </nav>

        <div className="mt-6 text-right">
          <p className="font-paragraph text-base text-secondary">
            AI-Powered Communication Platform
          </p>
        </div>
      </div>
    </header>
  );
}
