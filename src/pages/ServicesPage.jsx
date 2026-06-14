import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { services } from '../data/mock';
import { ArrowRight, Building2, Key, Briefcase, Sparkles, Layers, Home, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = { Building2, Key, Briefcase, Sparkles, Layers, Home };
const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f1a2e] via-[#1a2744] to-[#1e3060] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#2563eb]/15 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="inline-block bg-[#2563eb]/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">Our Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Professional Cleaning
              <span className="block bg-gradient-to-r from-[#2563eb] to-[#60a5fa] bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-white/65 text-lg max-w-2xl">
              From commercial spaces to residential properties — exceptional results delivered with precision and pride.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Building2;
                const slug = toSlug(service.name);
                return (
                  <div key={service.id} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                    <div className="relative h-52 overflow-hidden">
                      <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e]/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-11 h-11 bg-[#2563eb] rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/40">
                          <Icon className="text-white" size={22} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                      <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {['Professional equipment', 'Eco-friendly products', 'Satisfaction guaranteed'].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle size={14} className="text-[#2563eb] flex-shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <Link to={`/services/${slug}`}
                          className="inline-flex items-center gap-1.5 text-[#2563eb] font-bold text-sm hover:gap-3 transition-all">
                          View Details <ArrowRight size={15} />
                        </Link>
                        <Link to={`/quotes?service=${encodeURIComponent(service.name)}`}
                          className="ml-auto inline-flex items-center gap-1.5 bg-[#f59e0b] text-gray-900 px-4 py-2 rounded-full text-xs font-bold hover:bg-[#d97706] transition-colors">
                          Get Quote
                        </Link>
                      </div>
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

