import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star, Quote } from 'lucide-react';
import { companyInfo } from '../data/mock';

const testimonials = [
  { name: 'Sarah M.', location: 'Mawson Lakes', text: 'Absolutely spotless after our end-of-lease clean. Got our full bond back — couldn\'t be happier!', rating: 5 },
  { name: 'James T.', location: 'North Adelaide', text: 'Punctual, professional, and incredibly thorough. Our office has never looked better.', rating: 5 },
  { name: 'Priya K.', location: 'Burnside',      text: 'Reliable, friendly, and fairly priced. I now have them come every fortnight. Highly recommend!', rating: 5 },
];

const CTA = () => {
  return (
    <>
      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#eff6ff] text-[#2563eb] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
              Client Stories
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <Quote className="text-[#f59e0b]" size={28} />
                <p className="text-gray-600 leading-relaxed text-sm flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#1a2744] flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="text-[#f59e0b] fill-[#f59e0b]" size={14} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a2744] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2563eb]/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#f59e0b]/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#f59e0b]/20 text-[#f59e0b] px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
            Ready to Book?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Ready for a Spotless Space?
          </h2>
          <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. Adelaide's trusted cleaning crew is ready to transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white px-9 py-4 rounded-full text-base font-bold hover:bg-[#1d4ed8] transition-all hover:scale-105 shadow-xl shadow-blue-600/40"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/15 text-white px-9 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all"
            >
              <Phone size={18} /> {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;

