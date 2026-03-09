import React from 'react';
import { FadeIn } from './FadeIn';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Already used by students from top colleges</h2>
          </div>
        </FadeIn>

        <div className="flex justify-center">
            <FadeIn delay={150}>
                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-orange-500 shadow-xl max-w-2xl text-left relative">
                    <div className="absolute top-8 right-8 text-6xl text-slate-700/30 font-serif leading-none">"</div>
                    <p className="text-xl text-slate-300 italic mb-8 relative z-10">
                        "Found my hackathon team in under 10 mins. We matched perfectly on skills—I handled React, they built the entire backend in Python. We ended up winning 2nd place at XYZ Hackathon!"
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-slate-700">🏆</div>
                        <div>
                        <p className="text-white font-bold">@alex_dev</p>
                        <p className="text-orange-400 text-sm font-medium">NIT Trichy</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
