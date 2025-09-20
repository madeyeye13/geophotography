import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: '/image/himage01.jpg', indicator: '1/3', buttonText: 'Geo Ibadan', buttonHref: '/geo-ibadan' },
    { image: '/image/himage2.jpg', indicator: '2/3', buttonText: 'Geo Ile-Ife', buttonHref: '/geo-ile-ife' },
    { image: '/image/himage3.jpg', indicator: '3/3', buttonText: 'Geo UK', buttonHref: '/geo-uk' }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[100vh] lg:h-[120vh] overflow-hidden">
      {/* Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end lg:justify-center h-full px-4 pb-20 lg:pb-0 text-center text-white">
        <div className="max-w-4xl">
          {/* Main heading */}
          <h1 className="text-4xl md:text-4xl lg:text-5xl lg:px-40 font-medium mb-4 leading-tight">
            Welcome to Geo Photography
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
            Choose a branch
          </p>
          
          {/* Button with sliding background effect */}
          <div className="mb-12">
            <a
              href={slides[currentSlide].buttonHref}
              className="relative inline-block px-8 py-3 md:px-12 md:py-4 text-base md:text-lg font-semibold text-black bg-white transition-colors duration-300 overflow-hidden group hover:text-white"
            >
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">{slides[currentSlide].buttonText}</span>
              {/* Sliding background */}
              <div className="absolute inset-0 bg-gray-600 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
            </a>
          </div>
          
          {/* Border line */}
          <div className="w-full h-px bg-white opacity-60 mx-auto mb-8"></div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center space-x-8">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="p-2 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Previous slide"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path d="M22.0003 12.9999L22.0004 11L8.41421 11V5.58582L2 12L8.41421 18.4142L8.41421 13L22.0003 12.9999Z"></path>
              </svg>
            </button>
            
            {/* Slide indicator */}
            <span className="text-sm md:text-base font-medium">
              {slides[currentSlide].indicator}
            </span>
            
            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="p-2 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Next slide"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path d="M1.99974 12.9999L1.9996 11L15.5858 11V5.58582L22 12L15.5858 18.4142V13L1.99974 12.9999Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;