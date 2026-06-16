import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Clock, Star, Leaf } from 'lucide-react';
import { companyInfo } from '../data/mock';

const stats = [
  { number:'200+', label:'Properties Serviced' },
  { number:'500+', label:'Cleanings Completed' },
  { number:'100%', label:'Client Satisfaction'  },
  { number:'6+',   label:'Services Offered'     },
];

const Hero = () => (
  <>
    <section className="relative min-h-screen bg-gradient-to-br from-[#14532d] via-[#166534] to-[#15803d] overflow-hidden flex items-center">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#84cc16]/15 blur-3xl" />
        <div className="absolute bottom-0 -left-28 w-80 h-80 rounded-full bg-[#f59e0b]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize:'44px 44px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">

            <div className="animate-fade-up inline-flex items-center gap-2 bg-[#84cc16]/20 border border-[#84cc16]/30 px-4 py-2 rounded-full mb-6">
              <Leaf className="text-[#84cc16]" size={14} />
              <span className="text-[#bbf7d0] text-sm font-semibold tracking-wide">Eco-Friendly · Available 24/7 across Adelaide</span>
            </div>

            {/* pb-2 fixes descender clipping on letters like 'g' */}
            <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] pb-2 mb-4">
              Professional
              <span className="block bg-gradient-to-r from-[#84cc16] to-[#bef264] bg-clip-text text-transparent">
                Cleaning Services
              </span>
              <span className="block text-white/70 text-3xl sm:text-4xl font-bold">in Adelaide</span>
            </h1>

            <p className="animate-fade-up delay-200 text-white/60 text-lg mb-8 max-w-lg mx-auto lg:mx-0 italic">
              "{companyInfo.tagline}"
            </p>

            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link to="/quotes"
                className="inline-flex items-center justify-center gap-2 bg-[#84cc16] text-[#14532d] px-8 py-4 rounded-full text-base font-extrabold hover:bg-[#65a30d] hover:text-white transition-all hover:scale-105 shadow-md shadow-black/20">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a href={`tel:${companyInfo.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all">
                <Phone size={18} /> {companyInfo.phone}
              </a>
            </div>

            <div className="animate-fade-up delay-400 flex flex-wrap justify-center lg:justify-start gap-5">
              {[
                { icon:Shield, label:'Fully Insured'  },
                { icon:Star,   label:'5-Star Rated'   },
                { icon:Leaf,   label:'Eco-Friendly'   },
                { icon:Clock,  label:'Flexible Hours' },
              ].map(({ icon:Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/60 text-sm">
                  <Icon className="text-[#84cc16]" size={15} /> {label}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="animate-fade-in delay-200 flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#84cc16]/15 rounded-3xl blur-3xl scale-110" />
              <img src={companyInfo.heroLogo} alt="Gurkhas Cleaning Services"
                className="relative w-64 sm:w-80 lg:w-96 h-auto rounded-3xl shadow-2xl object-cover border border-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L80 70C160 60 320 40 480 33C640 27 800 33 960 40C1120 47 1280 53 1360 57L1440 60V80H0Z" fill="#fef9f0"/>
        </svg>
      </div>
    </section>

    {/* Stats bar */}
    <section className="bg-[#fef9f0] py-10 border-b border-[#dcfce7]">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={s.label} className="animate-fade-up" style={{ animationDelay:`${i*80}ms` }}>
            <div className="font-display text-4xl font-extrabold text-[#166534]">{s.number}</div>
            <div className="text-gray-500 text-sm mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Hero;

