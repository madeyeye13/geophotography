import React from 'react';

const AboutGeo = () => {
  return (
    <section className="w-full">
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden">
        {/* Image */}
        <div className="w-full h-full md:h-80 bg-gray-200">
          <img 
            src="/image/himage5.jpg"
            alt="Photography" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Container */}
        <div className="w-full px-6 py-8 md:px-8 md:py-12" style={{ backgroundColor: '#e5e5db' }}>
          <h2 className="text-sm md:text-base text-gray-600 mb-4 font-light tracking-wide">
            Helping brands since 2018
          </h2>
          
          <h3 className="text-3xl md:text-3xl font-medium text-gray-800 mb-6 leading-tight">
            Welcome To Geo Photography
          </h3>
          
          <p className="text-gray-700 text-base md:text-base leading-relaxed mb-8">
            Established in 2018, Geo Photography is a professional photography company with branches in Ibadan and Ile-Ife, and a growing presence in the United Kingdom through freelance services. We specialize in a wide range of photography solutions, including maternity shoots, personal portraits, and comprehensive event coverage. Over the years, we have worked with individuals and brands to create compelling visual stories that enhance personal memories and strengthen brand identities.
          </p>
          
          <button className="relative overflow-hidden bg-black text-white px-8 py-3 text-sm md:text-base font-medium transition-all duration-300 hover:text-black group">
            <span className="relative z-10">Read More</span>
            <div className="absolute inset-0 bg-gray-400 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></div>
          </button>
        </div>
      </div>

      {/* Desktop Layout (1024px and above) */}
      <div className="hidden lg:flex h-screen max-h-[600px] min-h-[500px] lg:px-20 gap-10" style={{ backgroundColor: '#f9fafb' }}>
        {/* Image - Left Side */}
        <div className="w-1/2 h-full">
          <img 
            src="/image/himage5.jpg" 
            alt="Photography" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Container - Right Side */}
        <div className="w-1/2 h-full flex flex-col justify-center px-12 xl:px-16" style={{ backgroundColor: '#e5e5db' }}>
          <div className='mt-24 mb-24'>
            <h2 className="text-sm text-gray-600 mb-2 font-light tracking-wide">
            Helping brands since 2019
          </h2>
          
          <h3 className="text-4xl xl:text-4xl font-medium text-gray-800 mb-4 leading-tight">
            Welcome To Geo Photography
          </h3>
          
          <p className="text-gray-700 text-base xl:text-sm leading-relaxed mb-8 max-w-lg">
            Established in 2018, Geo Photography is a professional photography company with branches in Ibadan and Ile-Ife, and a growing presence in the United Kingdom through freelance services. We specialize in a wide range of photography solutions, including maternity shoots, personal portraits, and comprehensive event coverage. Over the years, we have worked with individuals and brands to create compelling visual stories that enhance personal memories and strengthen brand identities.
          </p>
          
          <button className="relative overflow-hidden bg-black text-white px-6 py-2 text-sm font-medium transition-all duration-300 hover:text-black group w-fit">
            <span className="relative z-10">Read More</span>
            <div className="absolute inset-0 bg-gray-400 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></div>
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGeo;