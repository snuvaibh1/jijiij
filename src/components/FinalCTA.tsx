import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: '#9EB384' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-3xl md:text-5xl font-bold mb-6 text-white"
          style={{ 
            fontFamily: 'Playfair Display, serif'
          }}
        >
          Heal Your Relationship With Food & Body — Starting Today
        </h2>
        
        <p 
          className="text-lg md:text-xl mb-8 text-white opacity-90"
          style={{ 
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          🔥 ₹4,999 Launch Price Ends When the Timer Hits Zero
        </p>
        
        {/* Countdown Timer */}
        <div className="mb-8">
          <div 
            className="inline-block p-4 rounded-2xl shadow-lg"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <div className="text-2xl md:text-3xl font-black text-yellow-300">
              2 Days 14:23:45
            </div>
          </div>
        </div>
        
        <button 
          className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ 
            backgroundColor: '#FFDDD2',
            color: '#2B3A55',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          👉 Yes, I Want to Break the Cycle
          <ArrowRight className="w-6 h-6" />
        </button>
        
        <div className="mt-8 text-white opacity-75">
          <p style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Join thousands of Indian women who have already started their healing journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;