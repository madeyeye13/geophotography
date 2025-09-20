import React, { useState, useEffect, useRef } from 'react';

const PricingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  
  const plans = [
    {
      name: "Commercial",
      description: "Professional photography services for businesses, products, and corporate events with high-quality deliverables.",
      price: "₦450,000",
      includes: [
        "Professional photoshoot session",
        "High-resolution edited images",
        "Commercial usage rights",
        "Brand consultation",
        "Online gallery access",
        "Print-ready files"
      ]
    },
    {
      name: "Portrait",
      description: "Personal portrait sessions capturing your unique personality with artistic flair and professional lighting.",
      price: "₦85,000",
      includes: [
        "1-2 hour portrait session",
        "Professional lighting setup",
        "15+ edited high-res images",
        "Personal consultation",
        "Online gallery",
        "Basic retouching included"
      ]
    },
    {
      name: "Event Coverage",
      description: "Comprehensive event photography covering weddings, parties, and special occasions with complete documentation.",
      price: "₦250,000",
      includes: [
        "Full event coverage (8+ hours)",
        "Multiple photographers",
        "500+ edited images",
        "Online gallery sharing",
        "USB drive with all photos",
        "Same-day preview shots"
      ]
    },
    {
      name: "Rent Studio",
      description: "Professional studio space rental with complete lighting equipment and backdrops for your creative projects.",
      price: "₦15,000/hour",
      includes: [
        "Professional lighting equipment",
        "Various backdrop options",
        "Camera equipment available",
        "Changing room access",
        "Props and accessories",
        "Technical support included"
      ]
    }
  ];

  // Auto-advance for mobile only
  useEffect(() => {
    startAutoAdvance();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoAdvance = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % plans.length);
    }, 6000);
  };

  const stopAutoAdvance = () => {
    clearInterval(intervalRef.current);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e) => {
    stopAutoAdvance();
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX.current - endX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    isDragging.current = false;
    setTimeout(startAutoAdvance, 1000);
  };

  const handleArrowClick = (direction) => {
    stopAutoAdvance();
    if (direction === 'next') {
      goToNext();
    } else {
      goToPrevious();
    }
    setTimeout(startAutoAdvance, 1000);
  };

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-6">
            Our Pricing
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose from our comprehensive photography packages designed to meet your specific needs. 
            Each plan offers professional quality and exceptional value for your investment.
          </p>
        </div>

        {/* Mobile Carousel (lg:hidden) */}
        <div className="lg:hidden">
          {/* Mobile Card Container */}
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {plans.map((plan, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="border-2 border-gray-300 bg-white">
                    {/* Plan Header */}
                    <div className="bg-gray-500 text-white py-6 px-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-center">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Description */}
                      <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="mb-6">
                        <span className="text-2xl md:text-3xl font-bold text-gray-800">
                          {plan.price}
                        </span>
                      </div>

                      {/* What it includes */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-4 tracking-wide">
                          WHAT IT INCLUDES
                        </h4>
                        <div className="border-t border-gray-400 mb-4"></div>
                        
                        {/* Inclusions List */}
                        <div className="space-y-0">
                          {plan.includes.map((item, itemIndex) => (
                            <div key={itemIndex}>
                              <p className="text-sm md:text-base text-gray-600 py-3">
                                {item}
                              </p>
                              {itemIndex < plan.includes.length - 1 && (
                                <div className="border-b border-gray-300"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Book Now Button - Mobile Friendly */}
                      <button 
                        className="w-full relative overflow-hidden bg-black text-white py-3 px-6 text-base font-medium transition-all duration-500 hover:text-black active:text-black focus:text-black group"
                        style={{
                          WebkitTapHighlightColor: 'transparent'
                        }}
                      >
                        <span className="relative z-10">Book Now</span>
                        <div className="absolute inset-0 bg-gray-400 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 group-active:translate-x-0 group-focus:translate-x-0"></div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows - Mobile Friendly */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => handleArrowClick('prev')}
              className="p-3 text-gray-700 hover:text-black active:text-black transition-colors duration-200"
              style={{
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"/>
              </svg>
            </button>
            <button
              onClick={() => handleArrowClick('next')}
              className="p-3 text-gray-700 hover:text-black active:text-black transition-colors duration-200"
              style={{
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"/>
              </svg>
            </button>
          </div>

          {/* Mobile Progress Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  stopAutoAdvance();
                  setCurrentIndex(index);
                  setTimeout(startAutoAdvance, 1000);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                style={{
                  WebkitTapHighlightColor: 'transparent'
                }}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border-2 border-gray-400 bg-white">
              {/* Plan Header */}
              <div className="bg-gray-500 text-white py-6 px-6">
                <h3 className="text-xl md:text-2xl font-semibold text-center">
                  {plan.name}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                </div>

                {/* What it includes */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 tracking-wide">
                    WHAT IT INCLUDES
                  </h4>
                  <div className="border-t border-gray-400 mb-4"></div>
                  
                  {/* Inclusions List */}
                  <div className="space-y-0">
                    {plan.includes.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <p className="text-sm md:text-base text-gray-600 py-3">
                          {item}
                        </p>
                        {itemIndex < plan.includes.length - 1 && (
                          <div className="border-b border-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Now Button - Desktop Mobile Friendly */}
                <button 
                  className="w-full relative overflow-hidden bg-black text-white py-3 px-6 text-base font-medium transition-all duration-500 hover:text-black active:text-black focus:text-black group"
                  style={{
                    WebkitTapHighlightColor: 'transparent'
                  }}
                >
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-gray-400 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 group-active:translate-x-0 group-focus:translate-x-0"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;