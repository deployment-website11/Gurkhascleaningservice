import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { companyInfo } from '../data/mock';

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-40 h-40 border-2 border-[#c41e3a] rotate-45"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 border-2 border-white rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready for a Spotless Space?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Get in touch today for a free, no-obligation quote. Let us show you the Gurkhas difference!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/quotes"
            className="inline-flex items-center justify-center gap-2 bg-[#c41e3a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#a01830] transition-all hover:scale-105"
          >
            Get Free Quote
            <ArrowRight size={20} />
          </Link>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a5f] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
          >
            <Phone size={20} />
            {companyInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
