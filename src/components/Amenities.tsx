import React from 'react';
import { Wifi, Car, Clock, Utensils, Home, Trees, Coffee, MapPin } from 'lucide-react';

const amenities = [
  {
    icon: <Wifi className="w-6 h-6" />,
    title: 'Free Wi-Fi',
    description: 'High-speed internet access throughout the resort'
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: 'Free Parking',
    description: 'Secure on-site parking for all guests'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 Front Desk',
    description: 'Round-the-clock assistance for your needs'
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: 'Restaurant & Bar',
    description: 'Fine dining and refreshing beverages'
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Balcony/Terrace',
    description: 'Private outdoor space with scenic views'
  },
  {
    icon: <Trees className="w-6 h-6" />,
    title: 'Garden Area',
    description: 'Peaceful garden for relaxation'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Breakfast Service',
    description: 'Daily breakfast with takeaway option'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Prime Location',
    description: 'Close to local attractions and dining'
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resort Amenities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enjoy our comprehensive range of facilities and services designed for your comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg transition-transform hover:scale-105"
            >
              <div className="text-primary mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;