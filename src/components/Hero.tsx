import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, AlertTriangle, TrendingDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counter for shocking statistics
    const interval = setInterval(() => {
      setCurrentStat(prev => {
        if (prev < 847) return prev + 7;
        return 847;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Premium Green Background with 3D Elements */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, #2D5016 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #3E6B1F 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #4A7C23 0%, transparent 50%),
            linear-gradient(135deg, #1a2e0a 0%, #2D5016 25%, #3E6B1F 50%, #4A7C23 75%, #2D5016 100%)
          `
        }}
      >
        {/* Floating 3D Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating orbs */}
          <div 
            className="absolute w-96 h-96 rounded-full opacity-10 animate-float-slow"
            style={{
              background: 'linear-gradient(45deg, #4A7C23, #3E6B1F)',
              top: '10%',
              left: '10%',
              filter: 'blur(40px)',
              animation: 'float-slow 20s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-64 h-64 rounded-full opacity-15 animate-float-medium"
            style={{
              background: 'linear-gradient(135deg, #3E6B1F, #2D5016)',
              top: '60%',
              right: '15%',
              filter: 'blur(30px)',
              animation: 'float-medium 15s ease-in-out infinite reverse'
            }}
          />
          
          {/* Geometric shapes */}
          <div 
            className="absolute w-32 h-32 opacity-20 animate-rotate-slow"
            style={{
              top: '20%',
              right: '20%',
              background: 'linear-gradient(45deg, transparent, #4A7C23, transparent)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              animation: 'rotate-slow 25s linear infinite'
            }}
          />
          <div 
            className="absolute w-24 h-24 opacity-25 animate-pulse"
            style={{
              bottom: '30%',
              left: '15%',
              background: 'linear-gradient(90deg, #3E6B1F, #4A7C23)',
              borderRadius: '20%',
              animation: 'pulse-glow 8s ease-in-out infinite'
            }}
          />
          
          {/* Particle system */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-30"
              style={{
                background: `linear-gradient(45deg, #4A7C23, #3E6B1F)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, transparent 0%, rgba(45, 80, 22, 0.1) 50%, rgba(45, 80, 22, 0.2) 100%)
            `
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Cinematic Opening Animation */}
          <div className={`transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            
            {/* Premium Alert Banner */}
            <div className="mb-8 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-2xl animate-bounce backdrop-blur-sm border border-red-400/30">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold text-sm md:text-base">BREAKING: 73% of Indian Women Quit Their Health Goals in 30 Days</span>
            </div>

            {/* Premium Cinematic Headline */}
            <h1 
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 25%, #FFA500 50%, #FF8C00 75%, #D4AF37 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                animation: 'text-glow 3s ease-in-out infinite alternate'
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
            
            {/* Premium Subheadline */}
            <div className="mb-6 md:mb-8">
              <p 
                className="text-base md:text-xl lg:text-2xl mb-4 leading-relaxed max-w-4xl mx-auto text-white/90"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                Break the Loop of Diet → Binge → Guilt
              </p>
              <p 
                className="text-sm md:text-lg lg:text-xl font-semibold"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                (Without Willpower or Self-Hate)
              </p>
            </div>
          </div>

          {/* Premium Statistics Card */}
          <div className={`mb-6 md:mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div 
              className="p-6 md:p-8 rounded-3xl shadow-2xl border backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
                borderColor: 'rgba(212, 175, 55, 0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="text-center">
                <div 
                  className="text-4xl md:text-6xl font-black mb-4"
                  style={{
                    background: 'linear-gradient(45deg, #D4AF37, #FFD700)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  {currentStat}
                </div>
                <p className="text-lg md:text-xl font-bold text-white mb-2">
                  Indian Women Started Diets This Week
                </p>
                <div className="flex items-center justify-center gap-2 text-yellow-300">
                  <TrendingDown className="w-5 h-5" />
                  <span className="text-sm md:text-base font-semibold">Only 23% Will Still Be Trying Next Month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium VSL Container */}
          <div className={`mb-6 md:mb-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div 
              className="relative aspect-video rounded-3xl shadow-2xl overflow-hidden group cursor-pointer hover:shadow-3xl transition-all duration-500 border-2 backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.8) 0%, rgba(62, 107, 31, 0.6) 100%)',
                borderColor: 'rgba(212, 175, 55, 0.4)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              {/* Premium overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%, rgba(255, 165, 0, 0.1) 100%)'
                }}
              />
              
              {/* Luxury Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border"
                  style={{ 
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 100%)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8)'
                  }}
                >
                  <div 
                    className="w-0 h-0 ml-1"
                    style={{
                      borderLeft: '12px solid #2D5016',
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent'
                    }}
                  />
                </div>
              </div>
              
              {/* Premium Video Title */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                style={{
                  background: 'linear-gradient(to top, rgba(45, 80, 22, 0.9) 0%, transparent 100%)'
                }}
              >
                <h3 
                  className="text-white text-base md:text-xl font-bold mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                  }}
                >
                  🔥 How Sarah Broke Her 10-Year Binge Cycle
                </h3>
                <p 
                  className="text-sm md:text-base font-semibold"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  The exact emotional healing process that changed everything
                </p>
              </div>
              
              {/* Duration Badge */}
              <div 
                className="absolute top-4 right-4 px-3 py-1 text-sm font-bold rounded-full backdrop-blur-sm border"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#2D5016',
                  borderColor: 'rgba(212, 175, 55, 0.3)'
                }}
              >
                12:34
              </div>
            </div>
          </div>
          
          {/* Premium CTA Button */}
          <div className={`mb-4 md:mb-6 transform transition-all duration-1000 delay-1500 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <button 
              className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-10 md:py-4 text-base md:text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full max-w-sm md:w-auto overflow-hidden backdrop-blur-sm border"
              style={{ 
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 100%)',
                color: '#2D5016',
                borderColor: 'rgba(212, 175, 55, 0.3)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)'
                }}
              />
              <span className="relative z-10">👉 JOIN NOW – JUST ₹4,999</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Premium Trust Indicators */}
          <div className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-xs md:text-sm transform transition-all duration-1000 delay-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-4 h-4" style={{ color: '#4A7C23' }} />
              <span style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}>
                100% Online
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-4 h-4" style={{ color: '#4A7C23' }} />
              <span style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}>
                Lifetime Access
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-4 h-4" style={{ color: '#4A7C23' }} />
              <span style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}>
                Made for Indian Women
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Premium CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.25; 
            transform: scale(1);
            box-shadow: 0 0 20px rgba(74, 124, 35, 0.3);
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.1);
            box-shadow: 0 0 40px rgba(74, 124, 35, 0.6);
          }
        }
        
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-10px) translateX(5px); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-5px) translateX(-5px); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-15px) translateX(3px); 
            opacity: 0.7;
          }
        }
        
        @keyframes text-glow {
          0% { 
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
          }
          100% { 
            filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.6));
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;