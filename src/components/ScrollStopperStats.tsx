import React, { useState, useEffect, useRef } from 'react';
import { Zap, TrendingUp, Users, Target } from 'lucide-react';

const ScrollStopperStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [stats, setStats] = useState({
    women: 0,
    success: 0,
    weight: 0,
    confidence: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Trigger glitch effect
          setTimeout(() => setGlitchActive(true), 500);
          setTimeout(() => setGlitchActive(false), 2000);
          
          // Animate stats
          const animateStats = () => {
            let womenCount = 0;
            let successCount = 0;
            let weightCount = 0;
            let confidenceCount = 0;
            
            const interval = setInterval(() => {
              if (womenCount < 2847) womenCount += 23;
              if (successCount < 94) successCount += 1;
              if (weightCount < 12) weightCount += 0.2;
              if (confidenceCount < 89) confidenceCount += 1;
              
              setStats({
                women: Math.min(womenCount, 2847),
                success: Math.min(successCount, 94),
                weight: Math.min(weightCount, 12),
                confidence: Math.min(confidenceCount, 89)
              });
              
              if (womenCount >= 2847 && successCount >= 94 && weightCount >= 12 && confidenceCount >= 89) {
                clearInterval(interval);
              }
            }, 50);
          };
          
          setTimeout(animateStats, 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-yellow-600/20 to-red-600/20 animate-pulse"></div>
        {/* Lightning effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-transparent transition-opacity duration-100 ${glitchActive ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Glitch Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className={`inline-block ${glitchActive ? 'animate-pulse' : ''}`}>
            <h2 
              className={`text-5xl md:text-7xl font-black mb-6 ${glitchActive ? 'text-red-400' : 'text-white'} transition-colors duration-100`}
              style={{ 
                fontFamily: 'Playfair Display, serif',
                textShadow: glitchActive ? '0 0 20px #ef4444, 2px 2px 0px #f59e0b, -2px -2px 0px #ef4444' : '0 4px 20px rgba(0,0,0,0.8)'
              }}
            >
              BREAKTHROUGH RESULTS
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-600 to-red-600 px-8 py-4 rounded-full inline-block">
            <p className="text-white text-xl md:text-2xl font-bold">
              🔥 LIVE DATA FROM OUR COMMUNITY 🔥
            </p>
          </div>
        </div>

        {/* Stats Grid with Dramatic Styling */}
        <div className="grid md:grid-cols-4 gap-6">
          
          {/* Women Transformed */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 hover:scale-110 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
              <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4 relative z-10" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2 relative z-10">
                {Math.floor(stats.women).toLocaleString()}
              </div>
              <p className="text-yellow-200 font-bold text-lg relative z-10">
                Women Transformed
              </p>
              <div className="text-xs text-red-200 mt-2 relative z-10">
                And counting...
              </div>
            </div>
          </div>

          {/* Success Rate */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-8 rounded-3xl shadow-2xl border-4 border-red-400 hover:scale-110 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
              <Target className="w-12 h-12 text-red-300 mx-auto mb-4 relative z-10" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2 relative z-10">
                {Math.floor(stats.success)}%
              </div>
              <p className="text-red-200 font-bold text-lg relative z-10">
                Success Rate
              </p>
              <div className="text-xs text-yellow-200 mt-2 relative z-10">
                vs 23% industry average
              </div>
            </div>
          </div>

          {/* Average Weight Loss */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="bg-gradient-to-br from-red-700 to-yellow-700 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 hover:scale-110 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
              <TrendingUp className="w-12 h-12 text-yellow-300 mx-auto mb-4 relative z-10" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2 relative z-10">
                {stats.weight.toFixed(1)}kg
              </div>
              <p className="text-yellow-200 font-bold text-lg relative z-10">
                Avg. Weight Loss
              </p>
              <div className="text-xs text-red-200 mt-2 relative z-10">
                In first 90 days
              </div>
            </div>
          </div>

          {/* Confidence Boost */}
          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="bg-gradient-to-br from-yellow-700 to-red-700 p-8 rounded-3xl shadow-2xl border-4 border-red-400 hover:scale-110 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
              <Zap className="w-12 h-12 text-red-300 mx-auto mb-4 relative z-10" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2 relative z-10">
                {Math.floor(stats.confidence)}%
              </div>
              <p className="text-red-200 font-bold text-lg relative z-10">
                Confidence Boost
              </p>
              <div className="text-xs text-yellow-200 mt-2 relative z-10">
                Self-reported improvement
              </div>
            </div>
          </div>
        </div>

        {/* Dramatic Call-Out */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 max-w-4xl mx-auto animate-pulse">
            <h3 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              🚨 THESE NUMBERS ARE GROWING EVERY DAY 🚨
            </h3>
            <p 
              className="text-xl text-white font-semibold"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Join the movement that's actually working for Indian women
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStopperStats;