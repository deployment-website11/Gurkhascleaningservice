import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Clock, Star, Leaf } from 'lucide-react';
import { companyInfo } from '../data/mock';

const stats = [
  { number: '200+', label: 'Properties Serviced' },
  { number: '500+', label: 'Cleanings Completed' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '6+',   label: 'Services Offered' },
];

const Hero = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#063d38] via-[#0d6e62] to-[#0a5750] overflow-hidden flex items-center">

        {/* Subtle geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#f59e0b]/10 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left animate-fade-up">

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-[#f59e0b]/20 border border-[#f59e0b]/30 px-4 py-2 rounded-full mb-6">
                <Clock className="text-[#f59e0b]" size={15} />
                <span className="text-[#f59e0b] text-sm font-semibold tracking-wide">Available 24 / 7 across Adelaide</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5">
                Professional
                <span className="block mt-1 text-[#f59e0b]">Cleaning Services</span>
                <span className="block mt-1 text-white/80 text-3xl sm:text-4xl lg:text-5xl font-bold">in Adelaide</span>
              </h1>

              <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0 italic">
                "{companyInfo.tagline}"
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link
                  to="/quotes"
                  className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-gray-900 px-8 py-4 rounded-full text-base font-bold hover:bg-[#d97706] transition-all hover:scale-105 shadow-lg shadow-amber-500/30"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all"
                >
                  <Phone size={18} />
                  {companyInfo.phone}
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {[
                  { icon: Shield, label: 'Fully Insured' },
                  { icon: Star,   label: '5-Star Rated' },
                  { icon: Leaf,   label: 'Eco-Friendly' },
                  { icon: Clock,  label: 'Flexible Hours' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-white/80 text-sm">
                    <Icon className="text-[#f59e0b]" size={16} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo/image */}
            <div className="flex-1 flex justify-center animate-fade-in delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f59e0b]/20 rounded-3xl blur-3xl scale-110" />
                <img
                  src={companyInfo.heroLogo}
                  alt="Gurkhas Cleaning Services"
                  className="relative w-64 sm:w-80 lg:w-96 h-auto rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80L80 70C160 60 320 40 480 33C640 27 800 33 960 40C1120 47 1280 53 1360 57L1440 60V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-extrabold text-[#0d6e62]">{s.number}</div>
              <div className="text-gray-500 text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;

