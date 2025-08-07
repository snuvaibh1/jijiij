import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign, Heart } from 'lucide-react';

const PainPointSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    money: 0,
    time: 0,
    attempts: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters
          const animateCounter = (key: keyof typeof counters, target: number, increment: number) => {
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: current }));
            }, 50);
          };

          animateCounter('money', 45000, 500);
          animateCounter('time', 8, 1);
          animateCounter('attempts', 23, 1);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-yellow-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Shocking Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-full mb-8 animate-pulse">
            <AlertTriangle className="w-6 h-6" />
            <span className="font-bold text-lg">THE HIDDEN COST OF DOING NOTHING</span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Every Day You Wait, You're Losing...
          </h2>
        </div>

        {/* Cost Visualization Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Money Lost */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-3xl shadow-2xl border-4 border-red-400 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <DollarSign className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
                <div className="text-5xl font-black text-white mb-4">
                  ₹{counters.money.toLocaleString()}
                </div>
                <p className="text-xl font-bold text-yellow-200 mb-2">
                  Wasted on Failed Diets
                </p>
                <p className="text-red-200 text-sm">
                  Average Indian woman spends this much on diet programs, gym memberships, and supplements that don't work
                </p>
              </div>
            </div>
          </div>

          {/* Time Lost */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <Clock className="w-16 h-16 text-red-300 mx-auto mb-4" />
                <div className="text-5xl font-black text-white mb-4">
                  {counters.time} Years
                </div>
                <p className="text-xl font-bold text-red-200 mb-2">
                  Stuck in the Cycle
                </p>
                <p className="text-yellow-200 text-sm">
                  Time you could have spent living freely, confidently, and happily in your body
                </p>
              </div>
            </div>
          </div>

          {/* Emotional Cost */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="bg-gradient-to-br from-red-700 to-yellow-700 p-8 rounded-3xl shadow-2xl border-4 border-red-400 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <Heart className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
                <div className="text-5xl font-black text-white mb-4">
                  {counters.attempts}
                </div>
                <p className="text-xl font-bold text-yellow-200 mb-2">
                  Failed Attempts
                </p>
                <p className="text-red-200 text-sm">
                  Each failure chips away at your self-worth and makes the next attempt harder
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dramatic Warning */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <TrendingDown className="w-12 h-12 text-white animate-bounce" />
              <h3 
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Cycle Only Gets Worse
              </h3>
              <TrendingDown className="w-12 h-12 text-white animate-bounce" />
            </div>
            <p 
              className="text-xl md:text-2xl text-white font-semibold leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Every failed diet makes you trust yourself less. Every binge makes you feel more ashamed. 
              Every "Monday restart" gets harder than the last.
            </p>
            <div className="mt-6 text-yellow-200 text-lg font-bold animate-pulse">
              ⚠️ The longer you wait, the deeper the patterns become ⚠️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;