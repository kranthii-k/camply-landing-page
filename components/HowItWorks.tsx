import React from 'react';
import { FadeIn } from './FadeIn';

const Step: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center relative z-10">
    <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-orange-500 flex items-center justify-center text-2xl font-bold text-orange-400 mb-6 shadow-lg shadow-orange-500/20">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 max-w-sm">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">How Camply Works</h2>
            <p className="text-xl text-slate-400">Stop searching. Start building in 3 simple steps.</p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Main Line connecting the steps (Desktop) */}
          <div className="hidden md:block absolute top-[2rem] left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-slate-700 via-orange-500/50 to-slate-700 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            <FadeIn delay={150}>
              <Step 
                number={1}
                title="Create Profile"
                description="Add your skills, your college, and what you're looking for. Make your dev identity stand out."
              />
            </FadeIn>
            <FadeIn delay={300}>
              <Step 
                number={2}
                title="Get Matched"
                description="Our algorithm instantly finds students who complement your profile and share your goals."
              />
            </FadeIn>
            <FadeIn delay={450}>
              <Step 
                number={3}
                title="Build Together"
                description="Form a team, chat in real-time, and ship your hackathon idea or startup project."
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
