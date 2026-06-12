import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { services } from '../data/mock';
import { ArrowRight, Building2, Key, Briefcase, Sparkles, Layers, Home, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = { Building2, Key, Briefcase, Sparkles, Layers, Home };

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Page Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#063d38] via-[#0d6e62] to-[#0a5750] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#f59e0b]/10 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="inline-block bg-[#f59e0b]/20 text-[#f59e0b] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Professional Cleaning
              <span className="block text-[#f59e0b]">Solutions</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              From commercial spaces to residential properties — exceptional results delivered with precision and pride.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Building2;
                return (
                  <div
                    key={service.id}
                    className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#063d38]/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-11 h-11 bg-[#f59e0b] rounded-xl flex items-center justify-center">
                          <Icon className="text-gray-900" size={22} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                      <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {['Professional equipment', 'Eco-friendly products', 'Satisfaction guaranteed'].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle size={15} className="text-[#0d6e62] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/quotes"
                        className="inline-flex items-center gap-1.5 text-[#0d6e62] font-bold text-sm group-hover:gap-3 transition-all"
                      >
                        Get Quote <ArrowRight size={16} />
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

