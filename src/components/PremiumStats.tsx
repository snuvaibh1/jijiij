import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const PremiumStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    users: 0,
    satisfaction: 0,
    performance: 0,
    awards: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalStats = {
    users: 50000,
    satisfaction: 99,
    performance: 300,
    awards: 25
  };

  const statItems = [
    {
      icon: <Users className="w-8 h-8" />,
      value: stats.users.toLocaleString(),
      suffix: '+',
      label: 'Premium Users',
      description: 'Trust our platform worldwide'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: stats.satisfaction,
      suffix: '%',
      label: 'Satisfaction Rate',
      description: 'Exceptional user experience'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: stats.performance,
      suffix: '%',
      label: 'Performance Boost',
      description: 'Faster than competitors'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: stats.awards,
      suffix: '+',
      label: 'Industry Awards',
      description: 'Recognition for excellence'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;
          
          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            setStats({
              users: Math.floor(finalStats.users * easeOutQuart),
              satisfaction: Math.floor(finalStats.satisfaction * easeOutQuart),
              performance: Math.floor(finalStats.performance * easeOutQuart),
              awards: Math.floor(finalStats.awards * easeOutQuart)
            });
            
            if (currentStep >= steps) {
              clearInterval(timer);
              setStats(finalStats);
            }
          }, stepDuration);
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
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)'
      }}
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
        
        {/* Floating Orbs */}
        <div 
          className="absolute w-64 h-64 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            filter: 'blur(30px)'
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-25 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            bottom: '15%',
            left: '15%',
            filter: 'blur(25px)',
            animationDelay: '1s'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 
            className="text-5xl md:text-7xl font-black mb-8"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #22c55e 25%, #10b981 50%, #ffffff 75%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.02em'
            }}
          >
            PROVEN EXCELLENCE
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to delivering exceptional results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-30 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Stat Card */}
              <div 
                className="relative p-8 rounded-3xl backdrop-blur-md border text-center overflow-hidden hover:scale-105 transition-all duration-700"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
                  borderColor: 'rgba(34, 197, 94, 0.2)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Icon */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div 
                    className="p-4 rounded-2xl backdrop-blur-md border group-hover:scale-110 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                      borderColor: 'rgba(34, 197, 94, 0.3)',
                      boxShadow: '0 10px 20px rgba(34, 197, 94, 0.2)'
                    }}
                  >
                    <div className="text-green-400">
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                {/* Stat Value */}
                <div className="relative z-10 mb-4">
                  <div 
                    className="text-5xl md:text-6xl font-black mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #22c55e 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {item.value}{item.suffix}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-500">
                    {item.label}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    boxShadow: 'inset 0 0 50px rgba(34, 197, 94, 0.1), 0 0 50px rgba(34, 197, 94, 0.1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transform transition-all duration-1500 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div 
            className="inline-block p-8 rounded-3xl backdrop-blur-md border"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
              borderColor: 'rgba(34, 197, 94, 0.3)',
              boxShadow: '0 25px 50px rgba(34, 197, 94, 0.2)'
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Join the Elite Community
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              Experience the difference that premium quality makes. Your success is our commitment.
            </p>
            <button 
              className="px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-md border hover:scale-105 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                borderColor: 'rgba(34, 197, 94, 0.5)',
                boxShadow: '0 15px 30px rgba(34, 197, 94, 0.3)',
                color: '#000000'
              }}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default PremiumStats;