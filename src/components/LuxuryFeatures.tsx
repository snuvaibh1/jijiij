import React, { useState, useEffect, useRef } from 'react';
import { Zap, Shield, Crown, Sparkles, ArrowRight } from 'lucide-react';

const LuxuryFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Crown className="w-12 h-12" />,
      title: "Premium Excellence",
      description: "Crafted with meticulous attention to detail and uncompromising quality standards.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Performance",
      description: "Experience blazing-fast results with our cutting-edge optimization technology.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Absolute Security",
      description: "Your data is protected by military-grade encryption and advanced security protocols.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Exclusive Access",
      description: "Join an elite community with access to premium features and priority support.",
      gradient: "from-pink-400 to-rose-500"
    }
  ];

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

    // Auto-rotate active feature
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #111111 50%, #000000 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
            top: '20%',
            left: '10%',
            filter: 'blur(40px)'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            bottom: '20%',
            right: '15%',
            filter: 'blur(35px)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span 
              className="inline-block px-6 py-3 rounded-full text-sm font-semibold tracking-wider backdrop-blur-md border"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                borderColor: 'rgba(34, 197, 94, 0.3)',
                color: '#22c55e'
              }}
            >
              PREMIUM FEATURES
            </span>
          </div>
          
          <h2 
            className="text-5xl md:text-7xl font-black mb-8"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #22c55e 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.02em'
            }}
          >
            LUXURY REDEFINED
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the pinnacle of digital excellence with features designed for the most demanding users.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-30 opacity-0'
              } ${activeFeature === index ? 'scale-105' : 'hover:scale-105'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              {/* Feature Card */}
              <div 
                className="relative p-8 rounded-3xl backdrop-blur-md border overflow-hidden transition-all duration-700"
                style={{
                  background: activeFeature === index 
                    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(34, 197, 94, 0.02) 100%)',
                  borderColor: activeFeature === index 
                    ? 'rgba(34, 197, 94, 0.4)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: activeFeature === index 
                    ? '0 25px 50px rgba(34, 197, 94, 0.2)' 
                    : '0 15px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Animated Background Gradient */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${feature.gradient}`}
                  style={{ 
                    background: `linear-gradient(135deg, ${
                      activeFeature === index ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
                    } 0%, transparent 100%)`,
                    filter: 'blur(20px)'
                  }}
                />
                
                {/* Icon */}
                <div 
                  className="relative z-10 mb-6 text-green-400 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    filter: activeFeature === index ? 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))' : 'none'
                  }}
                >
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-500">
                    {feature.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform duration-500">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Active Indicator */}
              {activeFeature === index && (
                <div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-400 rounded-full"
                  style={{
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)'
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Feature Navigation Dots */}
        <div className="flex justify-center mt-16 space-x-4">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                activeFeature === index 
                  ? 'bg-green-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              style={{
                boxShadow: activeFeature === index ? '0 0 15px rgba(34, 197, 94, 0.6)' : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryFeatures;