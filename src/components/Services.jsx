import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Key, Briefcase, Sparkles, Layers, Home } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = { Building2, Key, Briefcase, Sparkles, Layers, Home };
const toSlug  = (name) => name.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');

const Services = () => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fef9f0]">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <span className="animate-fade-up inline-block bg-[#f7fee7] text-[#166534] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase border border-[#bbf7d0]">
          What We Offer
        </span>
        <h2 className="animate-fade-up delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Cleaning Solutions for Every Space
        </h2>
        <p className="animate-fade-up delay-200 text-gray-500 text-lg max-w-2xl mx-auto">
          From homes to offices — we bring the same pride and care to every single job.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Building2;
          const slug = toSlug(service.name);
          return (
            <div key={service.id}
              className="animate-fade-up group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#dcfce7]"
              style={{ animationDelay:`${i*70}ms` }}>
              <Link to={`/services/${slug}`} className="block relative h-48 overflow-hidden">
                <img src={service.image} alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14532d]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-[#84cc16] rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="text-[#14532d]" size={20} />
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-3">
                  <Link to={`/services/${slug}`}
                    className="inline-flex items-center gap-1.5 text-[#166534] font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={15} />
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

      <div className="text-center mt-12">
        <Link to="/services"
          className="animate-fade-up inline-flex items-center gap-2 border-2 border-[#166534] text-[#166534] px-8 py-3.5 rounded-full font-bold hover:bg-[#166534] hover:text-white transition-all">
          View All Services <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default Services;

