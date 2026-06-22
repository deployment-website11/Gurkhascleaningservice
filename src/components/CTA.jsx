import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star, Quote } from 'lucide-react';
import { companyInfo } from '../data/mock';

const testimonials = [
  { name:'Sarah M.',  location:'Mawson Lakes',  text:"Absolutely spotless after our end-of-lease clean. Got the full bond back — couldn't be happier!", rating:5 },
  { name:'James T.',  location:'North Adelaide', text:'Punctual, professional, and incredibly thorough. Our office has never looked this good.',         rating:5 },
  { name:'Priya K.',  location:'Burnside',       text:'Reliable, friendly, and fairly priced. I now have them come every fortnight. Highly recommend!',  rating:5 },
];

const CTA = () => (
  <>
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="animate-fade-up inline-block bg-[#eef2ff] text-[#1e1b4b] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase border border-[#e0e7ff]">
            Client Stories
          </span>
          <h2 className="animate-fade-up delay-100 font-display text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div key={i}
              className="animate-fade-up bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow"
              style={{ animationDelay:`${i*80}ms` }}>
              <Quote className="text-[#f97316]" size={28} />
              <p className="text-gray-600 leading-relaxed text-sm flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#1e1b4b] flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.rating)].map((_,j) => (
                    <Star key={j} className="text-[#f97316] fill-[#f97316]" size={14} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1e1b4b] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#f97316]/12 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#f97316]/8 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="animate-fade-up inline-block bg-[#f97316]/20 text-[#fdba74] px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
          Ready to Book?
        </span>
        <h2 className="animate-fade-up delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
          Ready for a Spotless Space?
        </h2>
        <p className="animate-fade-up delay-200 text-white/65 text-lg mb-10 max-w-xl mx-auto">
          Get a free, no-obligation quote today. Adelaide's trusted cleaning crew is ready.
        </p>
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quotes"
            className="inline-flex items-center justify-center gap-2 bg-[#f97316] text-white px-9 py-4 rounded-full text-base font-extrabold hover:bg-[#ea6c0a] transition-all hover:scale-105 shadow-md shadow-black/20">
            Get a Free Quote <ArrowRight size={18} />
          </Link>
          <a href={`tel:${companyInfo.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-9 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all">
            <Phone size={18} /> {companyInfo.phone}
          </a>
        </div>
      </div>
    </section>
  </>
);

export default CTA;

