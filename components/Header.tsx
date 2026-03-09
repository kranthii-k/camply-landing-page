import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <span>🏕️</span>
          <span>
            camply<span className="text-orange-400">.</span>
          </span>
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#features" onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-300 hover:text-orange-400 font-medium transition-colors duration-300">Features</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-300 hover:text-orange-400 font-medium transition-colors duration-300">How It Works</a>
          <a href="https://beta.camply.live/login" className="text-slate-300 hover:text-orange-400 font-medium transition-colors duration-300">Login</a>
        </nav>
        <div className="flex items-center">
          <a
            href="https://beta.camply.live/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-0.5"
          >
            Get Started <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;