import React from 'react';

const WelcomeAbout = () => {
  return (
    <section className="min-h-[70vh] bg-gray-50 flex items-center py-16 lg:py-0 lg:px-10 xl:px-10">
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-30 items-center">
          
          {/* Left Column - Main Heading (First on mobile) */}
          <div className="text-center lg:text-center">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl xl:text-4xl font-light text-gray-800 leading-[0.9] tracking-tight leading-none md:px-20">
              Photographs
              Embedded with Light
              & Silence
            </h2>
            
            {/* Subtitle */}
            <p className="text-xs sm:text-base lg:text-xs text-gray-600 font-medium tracking-[0.2em] uppercase mt-12 lg:mt-16 leading-relaxed">
              Portrait and Lifestyle Photographer, Based in <br className="hidden sm:block" />
              Nigeria.
            </p>
          </div>

          {/* Right Column - Description Text */}
          <div className="pr-0 lg:pr-8 text-center lg:text-left">
            <p className="text-gray-700 text-sm sm:text-xl lg:text-sm leading-relaxed lg:leading-normal font-regular tracking-wide">
              Life is too short to live it on autopilot. When is the last time you truly allowed yourself to disconnect? Leave your thoughts, worries and devices at home, and simply let your mind wander around? Breathe deeply and reconnect with the simple joys of being present. Let curiosity guide your steps without a set destination. Rediscover the beauty in small, everyday moments. It's in these moments of stillness and clarity that you often find what truly matters — and where you truly find yourself.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeAbout;