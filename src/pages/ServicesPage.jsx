import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { services } from '../data/mock';
import { ArrowRight, Building2, Key, Briefcase, Sparkles, Layers, Home, CheckCircle } from 'lucide-react';

const iconMap = { Building2, Key, Briefcase, Sparkles, Layers, Home };
const toSlug  = n => n.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');

const ServicesPage = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      {/* Page hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#14532d] via-[#166534] to-[#15803d] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#84cc16]/15 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="animate-fade-up inline-block bg-[#84cc16]/20 text-[#bef264] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">Our Services</span>
          <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] pb-2 mb-5">
            Professional Cleaning
            <span className="block bg-gradient-to-r from-[#84cc16] to-[#bef264] bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="animate-fade-up delay-200 text-white/65 text-lg max-w-2xl">
            Exceptional results for every space — delivered with discipline, pride, and eco-friendly products.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fef9f0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Building2;
              const slug = toSlug(service.name);
              return (
                <div key={service.id}
                  className="animate-fade-up group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#dcfce7] hover:-translate-y-1"
                  style={{ animationDelay:`${i*70}ms` }}>
                  <div className="relative h-52 overflow-hidden">
                    <img src={service.image} alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14532d]/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-11 h-11 bg-[#84cc16] rounded-xl flex items-center justify-center">
                        <Icon className="text-[#14532d]" size={22} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-5">
                      {['Eco-friendly products','Professional equipment','Satisfaction guaranteed'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle size={14} className="text-[#166534] flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Link to={`/services/${slug}`}
                        className="inline-flex items-center gap-1.5 text-[#166534] font-bold text-sm hover:gap-3 transition-all">
                        View Details <ArrowRight size={15} />
                      </Link>
                      <Link to={`/quotes?service=${encodeURIComponent(service.name)}`}
                        className="ml-auto inline-flex items-center bg-[#84cc16] text-[#14532d] px-4 py-2 rounded-full text-xs font-extrabold hover:bg-[#65a30d] hover:text-white transition-colors">
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

export default ServicesPage;

