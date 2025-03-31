import React from 'react';
import { Wifi, Coffee, Tv, Wind } from 'lucide-react';

const rooms = [
  {
    title: 'Deluxe Double Room',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: 'From $120/night',
    description: 'Spacious room with a comfortable double bed, private balcony, and modern amenities.',
    amenities: ['Free Wi-Fi', 'Breakfast Included', 'Smart TV', 'Air Conditioning']
  },
  {
    title: 'Premium Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: 'From $180/night',
    description: 'Luxurious suite featuring a separate living area, king-size bed, and panoramic views.',
    amenities: ['Free Wi-Fi', 'Breakfast Included', 'Smart TV', 'Air Conditioning']
  },
  {
    title: 'Family Room',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: 'From $150/night',
    description: 'Perfect for families, featuring two double beds and extra space for comfort.',
    amenities: ['Free Wi-Fi', 'Breakfast Included', 'Smart TV', 'Air Conditioning']
  }
];

const amenityIcons = {
  'Free Wi-Fi': <Wifi size={20} />,
  'Breakfast Included': <Coffee size={20} />,
  'Smart TV': <Tv size={20} />,
  'Air Conditioning': <Wind size={20} />
};

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Accommodations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of comfortable and well-appointed rooms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{room.title}</h3>
                  <span className="text-primary font-medium">{room.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <span className="mr-2">{amenityIcons[amenity]}</span>
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="mt-6 w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;