import React from 'react';

const Footer = () => {
  const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <footer className="w-full bg-gray-50 text-gray-800">
      {/* Main Footer Content */}
      <div className="px-6 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Mobile Layout (< 728px) */}
          <div className="block md:hidden">
            {/* Logo */}
            <div className="text-center mb-8">
              <img 
                src={asset("image/logo2.png")} 
                alt="Geo Photography" 
                className="h-4 mx-auto mb-4"
              />
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Capturing life's precious moments since 2018. Professional photography services across Nigeria and the UK.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">Quick Links</h4>
              <div className="flex flex-col items-center space-y-3">
                <a href="/about" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors text-sm">About Us</a>
                <a href="/services" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors text-sm">Services</a>
                <a href="/gallery" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors text-sm">Gallery</a>
                <a href="/pricing" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors text-sm">Pricing</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors text-sm">Contact</a>
              </div>
            </div>

            {/* Locations */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">Our Locations</h4>
              <div className="flex flex-col items-center space-y-3">
                <a href="/geo-ibadan" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors text-sm">Geo Ibadan</a>
                <a href="/geo-ile-ife" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors text-sm">Geo Ile-Ife</a>
                <a href="/geo-uk" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors text-sm">Geo UK</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">Get In Touch</h4>
              <div className="text-center space-y-2">
                <p className="text-gray-600 text-sm">info@geophotography.com</p>
                <p className="text-gray-600 text-sm">+234 808 123 4567</p>
                <p className="text-gray-600 text-sm">+44 7123 456 789</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.118.112.222.085.345-.09.375-.292 1.199-.333 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.534.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Tablet Layout (728px - 1023px) */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-8 mb-12">
              {/* Left Column - Logo & Description */}
              <div>
                <img 
                  src={asset("image/logo2.png")} 
                  alt="Geo Photography" 
                  className="h-6 mb-6"
                />
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Capturing life's precious moments since 2018. Professional photography services across Nigeria and the UK.
                </p>
                
                {/* Social Media */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.118.112.222.085.345-.09.375-.292 1.199-.333 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.534.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Links & Contact */}
              <div className="grid grid-cols-2 gap-8">
                {/* Quick Links & Locations */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-6">Quick Links</h4>
                  <div className="space-y-4">
                    <a href="/about" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">About Us</a>
                    <a href="/services" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Services</a>
                    <a href="/gallery" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Gallery</a>
                    <a href="/pricing" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Pricing</a>
                    <a href="/contact" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Contact</a>
                  </div>

                  <h4 className="font-semibold text-gray-800 mb-6 mt-8">Our Locations</h4>
                  <div className="space-y-4">
                    <a href="/geo-ibadan" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Geo Ibadan</a>
                    <a href="/geo-ile-ife" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Geo Ile-Ife</a>
                    <a href="/geo-uk" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Geo UK</a>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-6">Get In Touch</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 font-medium">Email</p>
                      <a href="mailto:info@geophotography.com" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">info@geophotography.com</a>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Nigeria</p>
                      <a href="tel:+2348081234567" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">+234 808 123 4567</a>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">United Kingdom</p>
                      <a href="tel:+447123456789" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">+44 7123 456 789</a>
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-800 mb-4">Stay Updated</h4>
                    <div className="flex">
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className="flex-1 px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-500"
                      />
                      <button 
                        className="px-6 py-2 bg-gray-800 text-white text-sm hover:bg-gray-700 active:bg-gray-700 transition-colors"
                        style={{
                          WebkitTapHighlightColor: 'transparent'
                        }}
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout (1024px+) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-12 mb-16">
              {/* Company Info */}
              <div className="col-span-2">
                <img 
                  src={asset("image/logo2.png")} 
                  alt="Geo Photography" 
                  className="h-6 mb-6"
                />
                <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
                  Capturing life's precious moments since 2018. Professional photography services across Nigeria and the UK. We specialize in creating compelling visual stories that enhance personal memories and strengthen brand identities.
                </p>
                
                {/* Social Media */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-6">Quick Links</h4>
                <div className="space-y-4">
                  <a href="/about" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">About Us</a>
                  <a href="/services" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Services</a>
                  <a href="/gallery" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Gallery</a>
                  <a href="/pricing" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Pricing</a>
                  <a href="/contact" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Contact</a>
                </div>

                <h4 className="font-semibold text-gray-800 mb-6 mt-8">Our Locations</h4>
                <div className="space-y-4">
                  <a href="/geo-ibadan" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Geo Ibadan</a>
                  <a href="/geo-ile-ife" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Geo Ile-Ife</a>
                  <a href="/geo-uk" className="block text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Geo UK</a>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-6">Get In Touch</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-800 font-medium mb-2">Email</p>
                    <a href="mailto:info@geophotography.com" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">info@geophotography.com</a>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium mb-2">Nigeria</p>
                    <a href="tel:+2348081234567" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">+234 808 123 4567</a>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium mb-2">United Kingdom</p>
                    <a href="tel:+447123456789" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">+44 7123 456 789</a>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Stay Updated</h4>
                  <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter for photography tips and updates.</p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-1 px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-500"
                    />
                    <button 
                      className="px-6 py-3 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 active:bg-gray-700 transition-colors"
                      style={{
                        WebkitTapHighlightColor: 'transparent'
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="px-6 py-6 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-sm">
                  © 2024 Geo Photography. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Made with ❤️ by{' '}
                  <a 
                    href="https://wa.link/0u8y3r" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
                  >
                    Bezalel Concept
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
                <a href="/privacy" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Terms of Service</a>
                <a href="/cookies" className="text-gray-600 hover:text-gray-800 active:text-gray-800 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;