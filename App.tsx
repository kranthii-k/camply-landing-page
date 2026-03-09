import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemStatement from './components/ProblemStatement';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import TrustLevels from './components/TrustLevels';
import SocialProof from './components/SocialProof';
import PricingSection from './components/PricingSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-300 antialiased selection:bg-orange-300 selection:text-orange-900 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProblemStatement />
        <FeaturesSection />
        <HowItWorks />
        <TrustLevels />
        <SocialProof />
        <PricingSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;