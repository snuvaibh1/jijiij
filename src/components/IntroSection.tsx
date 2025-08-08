import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-3xl md:text-5xl font-bold mb-8"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          You're Not Broken.{' '}
          <span style={{ color: '#9EB384' }}>
            You Just Need the Right Path.
          </span>
        </h2>
        
        <div 
          className="text-lg md:text-xl leading-relaxed space-y-6 max-w-3xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            color: '#2B3A55' 
          }}
        >
          <p>
            If you've been stuck in the cycle of starting, failing, and blaming yourself…
          </p>
          <p className="font-semibold">
            It's not your willpower. It's the method.
          </p>
          <p>
            This is the first program designed specifically for Indian women that addresses emotional eating, body image, and real-life consistency — not just calories & workouts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;