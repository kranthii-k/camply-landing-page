import React from 'react';
import { FadeIn } from './FadeIn';

const ProblemCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              College is full of talented people.<br />
              <span className="text-slate-400 font-medium text-2xl md:text-3xl mt-2 block">But finding the right teammate feels impossible.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={100}>
            <ProblemCard 
              icon="😩"
              title="Screaming into the Void"
              description="You post in random WhatsApp groups and Discord servers, only to get ignored or replies from the wrong people."
            />
          </FadeIn>
          <FadeIn delay={200}>
            <ProblemCard 
              icon="😤"
              title="Forced Groupings"
              description="Hackathon teams are formed by who knows who, not who's best. Your grade or prize suffers."
            />
          </FadeIn>
          <FadeIn delay={300}>
            <ProblemCard 
              icon="😔"
              title="Dead Ideas"
              description="Your amazing startup or project idea dies because you can't find that one frontend dev or UI designer."
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
