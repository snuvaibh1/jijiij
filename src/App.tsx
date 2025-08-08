import React from 'react';
import PremiumHero from './components/PremiumHero';
import IntroSection from './components/IntroSection';
import CourseIntro from './components/CourseIntro';
import Curriculum from './components/Curriculum';
import WalkAwayWith from './components/WalkAwayWith';
import ForYouIf from './components/ForYouIf';
import Testimonials from './components/Testimonials';
import OfferStack from './components/OfferStack';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import LuxuryFeatures from './components/LuxuryFeatures';
import PremiumStats from './components/PremiumStats';
import ElegantTestimonials from './components/ElegantTestimonials';
import LuxuryCTA from './components/LuxuryCTA';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <PremiumHero />
      <IntroSection />
      <CourseIntro />
      <Curriculum />
      <WalkAwayWith />
      <ForYouIf />
      <Testimonials />
      <OfferStack />
      <Guarantee />
      <FinalCTA />
      <LuxuryFeatures />
      <PremiumStats />
      <ElegantTestimonials />
      <LuxuryCTA />
    </div>
  );
}

export default App;