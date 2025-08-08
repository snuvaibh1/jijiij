import React from 'react';
import PremiumHero from './components/PremiumHero';
import LuxuryFeatures from './components/LuxuryFeatures';
import PremiumStats from './components/PremiumStats';
import ElegantTestimonials from './components/ElegantTestimonials';
import LuxuryCTA from './components/LuxuryCTA';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <PremiumHero />
      <LuxuryFeatures />
      <PremiumStats />
      <ElegantTestimonials />
      <LuxuryCTA />
    </div>
  );
}

export default App;