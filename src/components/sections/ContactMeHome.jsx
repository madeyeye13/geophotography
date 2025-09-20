import React from 'react';

const ContactMeHome = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center justify-center text-center px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 mb-8 md:mb-10 lg:mb-12">
          Beyond Photography, It's Geo
        </h2>
        
        {/* Button */}
        <button className="relative overflow-hidden bg-black text-white px-6 py-3 md:px-8 md:py-3 lg:px-8 lg:py-3 text-sm md:text-base font-medium transition-all duration-300 hover:text-black group">
          <span className="relative z-10">Get In Touch</span>
          <div className="absolute inset-0 bg-gray-400 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></div>
        </button>
      </div>
    </section>
  );
};

export default ContactMeHome;