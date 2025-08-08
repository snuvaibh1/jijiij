import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ElegantTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Aarti S.",
      role: "Age 33",
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "I used to eat every time I felt stressed. Now, I feel in control and lighter — not just in my body, but in my mind.",
      rating: 5,
      company: "Verified Student"
    },
    {
      name: "Sneha R.",
      role: "Age 27",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "This isn't another diet. It healed my relationship with food and myself. I finally understand why I was stuck in that cycle.",
      rating: 5,
      company: "Verified Student"
    },
    {
      name: "Priya M.",
      role: "Age 29",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "For the first time in years, I can enjoy food without guilt. This course gave me tools I never knew I needed.",
      rating: 5,
      company: "Verified Student"
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

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #111111 0%, #000000 50%, #111111 100%)'
      }}
    >
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-5 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
            top: '20%',
            left: '5%',
            filter: 'blur(50px)'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-8 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
            filter: 'blur(45px)',
            animationDelay: '3s'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
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
              CLIENT TESTIMONIALS
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
            WHAT OUR STUDENTS SAY
          </h2>
        </div>

        {/* Main Testimonial Display */}
        <div className={`relative transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div 
            className="relative p-12 md:p-16 rounded-3xl backdrop-blur-md border overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
              borderColor: 'rgba(34, 197, 94, 0.2)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-green-400 opacity-20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-yellow-400 fill-current mx-1" 
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote 
                className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-12 max-w-4xl mx-auto"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-6">
                <div 
                  className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-400/30"
                  style={{
                    boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <img 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-green-400 font-semibold mb-1">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full backdrop-blur-md border hover:scale-110 transition-all duration-300"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                borderColor: 'rgba(34, 197, 94, 0.3)'
              }}
            >
              <ChevronLeft className="w-6 h-6 text-green-400" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full backdrop-blur-md border hover:scale-110 transition-all duration-300"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                borderColor: 'rgba(34, 197, 94, 0.3)'
              }}
            >
              <ChevronRight className="w-6 h-6 text-green-400" />
            </button>

            {/* Animated Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer" />
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-12 space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                currentTestimonial === index 
                  ? 'bg-green-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              style={{
                boxShadow: currentTestimonial === index ? '0 0 20px rgba(34, 197, 94, 0.6)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Additional Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl backdrop-blur-md border cursor-pointer transition-all duration-500 ${
                currentTestimonial === index 
                  ? 'scale-105 opacity-100' 
                  : 'opacity-60 hover:opacity-80'
              }`}
              style={{
                background: currentTestimonial === index 
                  ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(34, 197, 94, 0.02) 100%)',
                borderColor: currentTestimonial === index 
                  ? 'rgba(34, 197, 94, 0.4)' 
                  : 'rgba(255, 255, 255, 0.1)',
                boxShadow: currentTestimonial === index 
                  ? '0 20px 40px rgba(34, 197, 94, 0.2)' 
                  : '0 10px 20px rgba(0, 0, 0, 0.3)'
              }}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h5 className="text-white font-semibold">{testimonial.name}</h5>
                  <p className="text-green-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.content.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ElegantTestimonials;