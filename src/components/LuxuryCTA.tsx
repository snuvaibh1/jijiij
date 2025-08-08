import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Crown, Shield, Zap, CheckCircle } from 'lucide-react';

const LuxuryCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Track mouse movement for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const benefits = [
    {
      icon: <Crown className="w-6 h-6" />,
      text: "Binge Emergency Toolkit (₹1,499 value)"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Weekly Emotional Check-In Worksheets (₹999 value)"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "30-Min Masterclass: Stop Weekend Overeating (₹2,499 value)"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #111111 25%, #1a1a1a 50%, #111111 75%, #000000 100%)
        `
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            filter: 'blur(60px)',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-25 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            bottom: '15%',
            right: '15%',
            filter: 'blur(50px)',
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.05}px, ${-mousePosition.y * 0.05}px)`
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-drift ${10 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Main CTA Content */}
        <div className={`transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Premium Badge */}
          <div className="mb-8">
            <div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-md border hover:scale-105 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%)',
                borderColor: 'rgba(34, 197, 94, 0.4)',
                boxShadow: '0 15px 35px rgba(34, 197, 94, 0.3)'
              }}
            >
              <Crown className="w-6 h-6 text-yellow-400" />
              <span className="text-white font-bold text-lg tracking-wide">EXCLUSIVE OFFER</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Headline */}
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
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
            TODAY'S
            <br />
            <span className="text-white">EXCLUSIVE OFFER</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            One-Time Payment: ₹4,999 (Save ₹4,000 – Normally ₹8,999)
            <span className="text-green-400 font-semibold"> Limited time only!</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className={`grid md:grid-cols-3 gap-6 mb-12 transform transition-all duration-1500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-15 opacity-0'}`}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 p-6 rounded-2xl backdrop-blur-md border hover:scale-105 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
                borderColor: 'rgba(34, 197, 94, 0.2)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="text-green-400">
                {benefit.icon}
              </div>
              <span className="text-white font-semibold">
                {benefit.text}
              </span>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
          ))}
        </div>

        {/* Main CTA Button */}
        <div className={`mb-8 transform transition-all duration-1500 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <button 
            className="group relative px-16 py-8 rounded-3xl font-black text-2xl md:text-3xl overflow-hidden backdrop-blur-md border hover:scale-105 transition-all duration-700"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
              borderColor: 'rgba(34, 197, 94, 0.6)',
              boxShadow: '0 25px 50px rgba(34, 197, 94, 0.4)',
              color: '#000000'
            }}
          >
            {/* Animated Background Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-4">
              YES! I'M READY TO HEAL – ENROLL NOW
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-500" />
            </span>

            {/* Glow Effect */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                boxShadow: 'inset 0 0 50px rgba(255, 255, 255, 0.2), 0 0 100px rgba(34, 197, 94, 0.6)'
              }}
            />
          </button>
        </div>

        {/* Secondary Actions */}
        <div className={`flex flex-col md:flex-row items-center justify-center gap-6 mb-12 transform transition-all duration-1500 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <button 
            className="group px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-md border hover:scale-105 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
              borderColor: 'rgba(34, 197, 94, 0.3)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
              color: '#22c55e'
            }}
          >
            <span className="flex items-center gap-3">
              7-Day Money-Back Guarantee
              <div className="w-2 h-2 bg-green-400 rounded-full group-hover:animate-pulse" />
            </span>
          </button>

          <button 
            className="group px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-md border hover:scale-105 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
              borderColor: 'rgba(34, 197, 94, 0.3)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
              color: '#ffffff'
            }}
          >
            <span className="flex items-center gap-3">
              Instant Access on Payment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className={`transform transition-all duration-1500 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <div 
            className="inline-block p-6 rounded-2xl backdrop-blur-md border"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.04) 100%)',
              borderColor: 'rgba(34, 197, 94, 0.2)',
              boxShadow: '0 15px 30px rgba(34, 197, 94, 0.1)'
            }}
          >
            <p className="text-gray-300 text-lg mb-2">
              <span className="text-green-400 font-bold">Total Value: ₹13,996</span> - You Pay Today: ₹4,999
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Works on mobile, tablet, and desktop</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>Instant access on payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes particle-drift {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-30px) translateX(15px) scale(1.2); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-15px) translateX(-10px) scale(0.8); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-40px) translateX(8px) scale(1.1); 
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

export default LuxuryCTA;