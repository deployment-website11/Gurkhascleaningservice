import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { services } from '../data/mock';
import { ArrowRight, Building2, Key, Briefcase, Sparkles, Layers, Home, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Building2, Key, Briefcase, Sparkles, Layers, Home
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-60 h-60 border-2 border-[#c41e3a] rotate-45"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional Cleaning
              <span className="block text-[#c41e3a]">Solutions</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              From commercial spaces to residential properties, we deliver exceptional cleaning services with pride and precision.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Building2;
                return (
                  <div 
                    key={service.id}
                    className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-[#c41e3a] rounded-xl flex items-center justify-center">
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-[#c41e3a]" />
                          Professional equipment
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-[#c41e3a]" />
                          Eco-friendly products
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-[#c41e3a]" />
                          Satisfaction guaranteed
                        </li>
                      </ul>
                      <Link
                        to="/quotes"
                        className="inline-flex items-center text-[#c41e3a] font-semibold hover:gap-3 transition-all"
                      >
                        Get Quote <ArrowRight size={18} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
