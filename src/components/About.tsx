import React from 'react';
import { Star, Award, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About GKAT Resort
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience exceptional comfort and value at our 3-star resort, where cleanliness and hospitality meet modern amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-block p-3 bg-primary rounded-full text-white mb-4">
              <Star size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Top Value</h3>
            <p className="text-gray-600">
              Exceptional amenities and service at competitive rates
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-block p-3 bg-primary rounded-full text-white mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Comfort</h3>
            <p className="text-gray-600">
              Luxurious rooms designed for your ultimate relaxation
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-block p-3 bg-primary rounded-full text-white mb-4">
              <ThumbsUp size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Perfect Location</h3>
            <p className="text-gray-600">
              Conveniently located near attractions and dining options
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;