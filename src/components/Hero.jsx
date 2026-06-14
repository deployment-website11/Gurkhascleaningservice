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
      <section className="relative min-h-screen bg-gradient-to-br from-[#0f1a2e] via-[#1a2744] to-[#1e3060] overflow-hidden flex items-center">
        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#2563eb]/15 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-[#f59e0b]/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.04]" />
          {/* Animated dot grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#2563eb]/20 border border-[#2563eb]/30 px-4 py-2 rounded-full mb-6">
                <Clock className="text-[#f59e0b]" size={14} />
                <span className="text-blue-300 text-sm font-semibold tracking-wide">Available 24 / 7 across Adelaide</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5">
                Professional
                <span className="block mt-1 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] bg-clip-text text-transparent">
                  Cleaning Services
                </span>
                <span className="block mt-1 text-white/75 text-3xl sm:text-4xl font-bold">in Adelaide</span>
              </h1>

              <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto lg:mx-0 italic">
                "{companyInfo.tagline}"
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link
                  to="/quotes"
                  className="inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#1d4ed8] transition-all hover:scale-105 shadow-xl shadow-blue-600/40"
                >
                  Get a Free Quote <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/15 transition-all"
                >
                  <Phone size={18} /> {companyInfo.phone}
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
                  <div key={label} className="flex items-center gap-2 text-white/65 text-sm">
                    <Icon className="text-[#f59e0b]" size={15} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero logo/image */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#2563eb]/25 rounded-3xl blur-3xl scale-110" />
                <img
                  src={companyInfo.heroLogo}
                  alt="Gurkhas Cleaning Services"
                  className="relative w-64 sm:w-80 lg:w-96 h-auto rounded-3xl shadow-2xl object-cover border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80L80 70C160 60 320 40 480 33C640 27 800 33 960 40C1120 47 1280 53 1360 57L1440 60V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-extrabold text-[#2563eb]">{s.number}</div>
              <div className="text-gray-500 text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;

