import React from 'react';
import { FadeIn } from './FadeIn';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 md:pt-36 md:pb-40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Find Your Tribe.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
                Build Your Dream Team.
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={150}>
            <p className="max-w-2xl mx-auto lg:mx-0 text-xl font-medium text-slate-400 mb-10 leading-relaxed">
              Camply connects college students by skills, interests and goals, so you never build alone.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://camply.live/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-1 text-center"
              >
                Get Started Free
              </a>
              <a 
                href="#how-it-works"
                onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg border border-slate-700 hover:border-slate-500 text-center"
              >
                See How It Works
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Visual Content: Animated Matching Card */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <FadeIn delay={400}>
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-md mx-auto">
              {/* Card 1: Backend Developer */}
              <div className="absolute top-10 right-4 md:right-0 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-5 shadow-2xl w-64 md:w-72 transform rotate-6 animate-[float_6s_ease-in-out_infinite] z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg border-2 border-slate-700">JS</div>
                  <div>
                    <h3 className="text-white font-semibold flex items-center gap-1">John S. <span className="text-blue-400 text-xs px-2 py-0.5 rounded-full bg-blue-400/10">Backend</span></h3>
                    <p className="text-slate-400 text-sm">Python, Node.js</p>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs text-slate-300 bg-slate-700/50 px-2 py-1 rounded-md">Looking for Frontend</span>
                </div>
                <div className="h-10 bg-slate-700/30 rounded-lg w-full flex items-center px-4 overflow-hidden relative">
                   <div className="w-1/2 h-full bg-blue-500/20 absolute left-0"></div>
                   <span className="text-xs text-blue-300 z-10 font-medium">95% Match Potential</span>
                </div>
              </div>

              {/* Card 2: Frontend Developer */}
              <div className="absolute bottom-10 left-4 md:left-0 bg-slate-800/90 backdrop-blur-sm border border-orange-500/40 rounded-2xl p-5 shadow-2xl shadow-orange-500/10 w-64 md:w-72 transform -rotate-3 animate-[float_7s_ease-in-out_infinite_reverse] z-30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg border-2 border-slate-700">AM</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold">Alice M.</h3>
                      <span className="text-orange-400 text-xs px-2 py-0.5 rounded-full bg-orange-400/10 border border-orange-400/20">Frontend</span>
                    </div>
                    <p className="text-slate-400 text-sm">React, UI/UX</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold text-orange-400 bg-orange-400/10 border border-orange-400/20 px-2 py-1 rounded-md">Perfect Match! 🎯</span>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                  Connect & Build
                </button>
              </div>

              {/* Connecting elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-dashed border-orange-500/30 rounded-full animate-[spin_10s_linear_infinite] z-10 hidden md:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-slate-700 rounded-full z-0 hidden md:block"></div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;