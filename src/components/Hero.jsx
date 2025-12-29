import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-[#c41e3a] rotate-45"></div>
        <div className="absolute top-40 right-20 w-60 h-60 border-2 border-[#c41e3a] rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-48 h-48 border-2 border-[#c41e3a] rotate-45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Clock className="text-[#c41e3a]" size={16} />
              <span className="text-white/90 text-sm font-medium">Available 24/7</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional
              <span className="block text-[#c41e3a]">Cleaning Services</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 italic mb-4 font-light">
              "{companyInfo.tagline}"
            </p>
            
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Experience the difference with our dedicated team. We deliver exceptional cleaning with the discipline and pride that defines us.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                to="/quotes"
                className="inline-flex items-center justify-center gap-2 bg-[#c41e3a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#a01830] transition-all hover:scale-105 shadow-lg shadow-[#c41e3a]/30"
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

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="text-[#c41e3a]" size={20} />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="text-[#c41e3a]" size={20} />
                <span className="text-sm">Flexible Hours</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Star className="text-[#c41e3a]" size={20} />
                <span className="text-sm">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Logo */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#c41e3a]/20 rounded-full blur-3xl scale-110"></div>
              <img 
                src={companyInfo.heroLogo}
                alt="Gurkhas Cleaning Services"
                className="relative w-72 sm:w-80 lg:w-96 h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
