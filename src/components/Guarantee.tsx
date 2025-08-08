import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee = () => {
  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: 'white' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#9EB384' }}
          >
            <Shield className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h2 
          className="text-3xl md:text-5xl font-bold mb-8"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          🔐 7-Day 100% Money-Back Guarantee
        </h2>
        
        <div 
          className="p-8 rounded-2xl"
          style={{ backgroundColor: '#FFDDD2' }}
        >
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              color: '#2B3A55' 
            }}
          >
            Try it for 7 days. If it doesn't help you feel in control around food, get a full refund. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;