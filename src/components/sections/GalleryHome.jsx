import React, { useState } from 'react';

const GalleryHome = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources
  const images = [
    '/image/gimage1.jpg',
    '/image/gimage2.jpg',
    '/image/gimage3.jpg',
    '/image/gimage4.jpg',
    '/image/gimage5.jpg',
    '/image/gimage6.jpg',
    '/image/gimage7.jpg',
    '/image/gimage8.jpg',
    '/image/gimage9.jpg'
  ];

  const openModal = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="w-full bg-white">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
        {images.map((src, index) => (
          <div key={index} className="w-full relative overflow-hidden group">
            {/* Original Image */}
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-48 md:h-56 lg:h-100 object-cover cursor-pointer transition-opacity duration-300 hover:opacity-90"
              onClick={() => openModal(src, index)}
            />
            {/* Sliding Duplicate Image */}
            <img
              src={src}
              alt={`Gallery image ${index + 1} overlay`}
              className={`absolute inset-0 w-full h-48 md:h-56 lg:h-100 object-cover cursor-pointer transition-transform duration-500 ease-out ${
                index % 4 === 0 
                  ? 'transform -translate-y-full group-hover:translate-y-0' // Slide from top
                  : index % 4 === 1 
                  ? 'transform -translate-x-full group-hover:translate-x-0' // Slide from left
                  : index % 4 === 2
                  ? 'transform translate-y-full group-hover:translate-y-0' // Slide from bottom
                  : 'transform translate-x-full group-hover:translate-x-0' // Slide from right
              }`}
              onClick={() => openModal(src, index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-[10000] p-2 text-black hover:text-gray-600 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"/>
            </svg>
          </button>

          {/* Previous Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-[10000] p-2 text-black hover:text-gray-600 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"/>
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-4 z-[10000] p-2 text-black hover:text-gray-600 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"/>
            </svg>
          </button>

          {/* Modal Image */}
          <div className="max-w-[95vw] max-h-[95vh] lg:max-w-[30vw] lg:max-h-[40vh] flex items-center justify-center px-16">
            <img
              src={selectedImage}
              alt="Selected gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryHome;