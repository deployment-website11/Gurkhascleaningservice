import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Key, Briefcase, Sparkles, Layers, Home } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Building2, Key, Briefcase, Sparkles, Layers, Home
};

const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            Professional Cleaning Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From offices to homes, we provide comprehensive cleaning services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <Link
                key={service.id}
                to="/services"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#c41e3a] rounded-lg flex items-center justify-center">
                        <Icon className="text-white" size={20} />
                      </div>
                      <h3 className="text-white font-bold text-lg">{service.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-[#c41e3a] font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={18} className="ml-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
