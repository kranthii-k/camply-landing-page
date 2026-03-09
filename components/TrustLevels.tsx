import React from 'react';
import { FadeIn } from './FadeIn';

const Badge: React.FC<{ icon: string; title: string; subtitle: string; colorClass: string; borderClass: string }> = ({ icon, title, subtitle, colorClass, borderClass }) => (
  <div className={`bg-slate-800/40 p-6 rounded-2xl border flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 ${borderClass}`}>
    <div className="text-5xl mb-4 filter drop-shadow-md">{icon}</div>
    <h3 className={`text-xl font-bold mb-1 ${colorClass}`}>{title}</h3>
    <p className="text-slate-400 text-sm">{subtitle}</p>
  </div>
);

const TrustLevels: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The More You Build,<br className="hidden md:block" />
              <span className="text-amber-500">The More You're Trusted.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Your trust score grows with every successful collaboration, post, and team contribution. Prove you're a reliable teammate.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <FadeIn delay={100}>
            <Badge 
              icon="🥉"
              title="BRONZE"
              subtitle="New member exploring the community"
              colorClass="text-amber-700"
              borderClass="border-amber-700/30 hover:border-amber-700/70"
            />
          </FadeIn>
          <FadeIn delay={200}>
            <Badge 
              icon="🥈"
              title="SILVER"
              subtitle="Active collaborator and poster"
              colorClass="text-slate-300"
              borderClass="border-slate-400/30 hover:border-slate-400/70"
            />
          </FadeIn>
          <FadeIn delay={300}>
            <Badge 
              icon="🥇"
              title="GOLD"
              subtitle="Proven, highly-rated teammate"
              colorClass="text-yellow-400"
              borderClass="border-yellow-400/30 hover:border-yellow-400/70 shadow-[0_0_15px_rgba(250,204,21,0.1)] hover:shadow-[0_0_25px_rgba(250,204,21,0.2)]"
            />
          </FadeIn>
          <FadeIn delay={400}>
            <Badge 
              icon="💎"
              title="PLATINUM"
              subtitle="Top 1% elite community leader"
              colorClass="text-cyan-300"
              borderClass="border-cyan-300/40 hover:border-cyan-300/80 shadow-[0_0_20px_rgba(103,232,249,0.15)] hover:shadow-[0_0_30px_rgba(103,232,249,0.3)]"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default TrustLevels;
