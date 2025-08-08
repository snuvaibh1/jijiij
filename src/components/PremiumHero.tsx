import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const PremiumHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background with Gradient Mesh */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #111111 25%, #1a1a1a 50%, #111111 75%, #000000 100%)
          `
        }}
      />

      {/* Floating Glass Elements - Exactly 3 as requested */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glass Element 1 - Top Right */}
        <div 
          className="glass-float-1 absolute w-96 h-64 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            boxShadow: '0 25px 50px rgba(34, 197, 94, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            top: '10%',
            right: '5%',
            animation: 'float-slow 20s ease-in-out infinite'
          }}
        />
        
        {/* Glass Element 2 - Middle Left */}
        <div 
          className="glass-float-2 absolute w-80 h-80 rounded-full"
          style={{
            background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.08) 0%, rgba(34, 197, 94, 0.04) 100%)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(16, 185, 129, 0.15)',
            boxShadow: '0 30px 60px rgba(16, 185, 129, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            top: '40%',
            left: '8%',
            animation: 'float-medium 15s ease-in-out infinite reverse'
          }}
        />
        
        {/* Glass Element 3 - Bottom Center */}
        <div 
          className="glass-float-3 absolute w-72 h-48 rounded-2xl"
          style={{
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.06) 0%, rgba(16, 185, 129, 0.08) 100%)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(34, 197, 94, 0.18)',
            boxShadow: '0 20px 40px rgba(34, 197, 94, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
            bottom: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'float-fast 12s ease-in-out infinite'
          }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${8 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Premium Badge */}
        <div className={`mb-8 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-md border hover:scale-105 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
              borderColor: 'rgba(34, 197, 94, 0.3)',
              boxShadow: '0 10px 30px rgba(34, 197, 94, 0.2)'
            }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-semibold text-lg tracking-wide">PREMIUM EXPERIENCE</span>
          </div>
        </div>

        {/* Cinematic Headline */}
        <div className={`mb-8 transform transition-all duration-2000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-6"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              background: 'linear-gradient(135deg, #ffffff 0%, #22c55e 25%, #10b981 50%, #ffffff 75%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 40px rgba(34, 197, 94, 0.3)',
              letterSpacing: '-0.02em'
            }}
          >
            <span className="block mb-1">You're Not Lazy.</span>
            <span className="block text-white mb-1" style={{ textShadow: '0 4px 20px rgba(255,255,255,0.2)' }}>
              You're Just Trapped
            </span>
            <span className="block">
              in the Cycle.
            </span>
          </h1>
        </div>

        {/* Premium Subtitle */}
        <div className={`mb-12 transform transition-all duration-2000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-15 opacity-0'}`}>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Discover the pinnacle of digital luxury with our 
            <span className="text-green-400 font-medium"> premium transformation system</span> designed for the most discerning individuals.
          </p>
        </div>

        {/* Premium Video Container */}
        <div className={`mb-12 max-w-5xl mx-auto transform transition-all duration-2000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div 
            className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer backdrop-blur-md border hover:scale-105 transition-all duration-700"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(34, 197, 94, 0.1) 100%)',
              borderColor: 'rgba(34, 197, 94, 0.3)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 100px rgba(34, 197, 94, 0.1)'
            }}
          >
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
            
            {/* Luxury Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center backdrop-blur-md border group-hover:scale-110 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)',
                  borderColor: 'rgba(34, 197, 94, 0.4)',
                  boxShadow: '0 15px 35px rgba(34, 197, 94, 0.3)'
                }}
              >
                <Play className="w-8 h-8 text-green-400 ml-1" fill="currentColor" />
              </div>
            </div>
            
            {/* Video Title */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-2xl font-bold mb-2">
                🔥 How Sarah Broke Her 10-Year Binge Cycle
              </h3>
              <p className="text-green-400 text-lg font-medium">
                The exact emotional healing process that changed everything
              </p>
            </div>
            
            {/* Duration Badge */}
            <div 
              className="absolute top-6 right-6 px-4 py-2 rounded-full backdrop-blur-md border text-sm font-semibold"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                borderColor: 'rgba(34, 197, 94, 0.3)',
                color: '#22c55e'
              }}
            >
              12:34
            </div>
          </div>
        </div>

        {/* Premium CTA Buttons */}
        <div className={`flex flex-col md:flex-row items-center justify-center gap-6 mb-8 transform transition-all duration-2000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Primary CTA */}
          <button 
            className="group relative px-12 py-6 rounded-2xl font-bold text-xl overflow-hidden backdrop-blur-md border hover:scale-105 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
              borderColor: 'rgba(34, 197, 94, 0.5)',
              boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)',
              color: '#000000'
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              👉 JOIN NOW – JUST ₹4,999
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Secondary CTA */}
          <button 
            className="group px-12 py-6 rounded-2xl font-bold text-xl backdrop-blur-md border hover:scale-105 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
              borderColor: 'rgba(34, 197, 94, 0.3)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
              color: '#22c55e'
            }}
          >
            <span className="flex items-center gap-3">
              Break the Loop of Diet → Binge → Guilt
              (Without Willpower or Self-Hate)
            </span>
          </button>
        </div>

        {/* Urgency Banner */}
        <div className={`mb-4 md:mb-6 transform transition-all duration-1000 delay-1700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <div 
            className="p-4 md:p-6 rounded-2xl shadow-2xl border backdrop-blur-sm max-w-2xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 69, 0, 0.1) 0%, rgba(255, 140, 0, 0.05) 100%)',
              borderColor: 'rgba(255, 69, 0, 0.3)',
              boxShadow: '0 15px 35px rgba(255, 69, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            <div className="text-center">
              <p className="text-lg md:text-xl font-bold text-white mb-2">
                ⚡ Special Launch Offer Ends In:
              </p>
              <div className="text-2xl md:text-3xl font-black text-yellow-300 mb-2">
                2 Days 14:23:45
              </div>
              <p className="text-sm md:text-base text-orange-200">
                💡 Price will increase to ₹7,999 after the timer ends.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`flex flex-wrap items-center justify-center gap-8 text-sm transform transition-all duration-2000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          {[
            'Made for Indian Women',
            'Lifetime Access',
            'Expert Support',
            'Satisfaction Guaranteed'
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-20px) rotate(1deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-10px) rotate(-1deg); 
            opacity: 0.7;
          }
          75% { 
            transform: translateY(-30px) rotate(0.5deg); 
            opacity: 0.9;
          }
        }
        
        @keyframes float-medium {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.5;
          }
          33% { 
            transform: translateY(-15px) rotate(-2deg) scale(1.05); 
            opacity: 0.7;
          }
          66% { 
            transform: translateY(-25px) rotate(1deg) scale(0.95); 
            opacity: 0.8;
          }
        }
        
        @keyframes float-fast {
          0%, 100% { 
            transform: translateX(-50%) translateY(0px) rotate(0deg); 
            opacity: 0.4;
          }
          20% { 
            transform: translateX(-50%) translateY(-12px) rotate(1deg); 
            opacity: 0.6;
          }
          40% { 
            transform: translateX(-50%) translateY(-8px) rotate(-0.5deg); 
            opacity: 0.8;
          }
          60% { 
            transform: translateX(-50%) translateY(-18px) rotate(0.8deg); 
            opacity: 0.7;
          }
          80% { 
            transform: translateX(-50%) translateY(-5px) rotate(-1deg); 
            opacity: 0.9;
          }
        }
        
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) scale(1.2); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-10px) translateX(-8px) scale(0.8); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-25px) translateX(5px) scale(1.1); 
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumHero;