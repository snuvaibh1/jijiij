import React from "react";

const PremiumHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold">FORGE YOUR CHAMPION LEGACY</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Build your dream physique with cinematic transformation journeys and live updates.
        </p>
      </div>

      {/* Background video or image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <style jsx>{`
        section {
          font-family: "Glacial Indifference", sans-serif;
        }
      `}</style>
    </section>
  );
};

export default PremiumHero;
