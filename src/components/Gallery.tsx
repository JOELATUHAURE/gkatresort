import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Resort Exterior'
  },
  {
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Luxury Suite'
  },
  {
    url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Restaurant'
  },
  {
    url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Bar Lounge'
  },
  {
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Garden View'
  },
  {
    url: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Terrace'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our beautiful resort and facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="absolute inset-0 h-full w-full object-cover transition-transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].caption}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {images[selectedImage].caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;