import React from 'react';
import { FadeIn } from './FadeIn';

const CTABanner: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
            Stop searching.<br />
            <span className="text-orange-500">Start building.</span>
          </h2>
          <div className="flex flex-col items-center justify-center">
            <a 
              href="https://beta.camply.live/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 text-xl shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transform hover:-translate-y-1 block max-w-md mx-auto w-full sm:w-auto"
            >
              Join the Beta Today
            </a>
            <p className="text-slate-400 mt-6 font-medium">
              Beta is live. No waitlist. Sign up in 30 seconds.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTABanner;
