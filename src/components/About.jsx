import React from 'react';
import { CheckCircle, Award, Users, ThumbsUp } from 'lucide-react';
import { aboutContent, features } from '../data/mock';

const About = () => {
  const icons = [Award, Users, ThumbsUp, CheckCircle];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c41e3a]/10 text-[#c41e3a] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            {aboutContent.heading}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {aboutContent.paragraphs[0]}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="group bg-gray-50 hover:bg-[#1e3a5f] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#c41e3a]/10 group-hover:bg-[#c41e3a] rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="text-[#c41e3a] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] group-hover:text-white mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
