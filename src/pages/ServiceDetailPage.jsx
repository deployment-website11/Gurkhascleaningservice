import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { services, companyInfo } from '../data/mock';
import { ArrowRight, CheckCircle, Phone, ArrowLeft, Building2, Key, Briefcase, Sparkles, Layers, Home } from 'lucide-react';

const iconMap = { Building2, Key, Briefcase, Sparkles, Layers, Home };
const toSlug  = n => n.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');

const serviceDetails = {
  'commercial-cleaning': {
    tagline: 'Keeping your business spotless, every day.',
    includes: ['Daily, weekly or fortnightly scheduling','Vacuuming, mopping and surface sanitisation','Bathroom and kitchen deep cleaning','Bin removal and recycling management','Window and glass cleaning','Lobby and reception polishing'],
    why: 'A clean workplace boosts staff morale, impresses clients, and ensures hygiene compliance. We work around your hours to cause zero disruption.',
  },
  'end-of-lease': {
    tagline: 'Get your full bond back — guaranteed.',
    includes: ['Full property deep clean top to bottom','Oven, stovetop and rangehood cleaning','Bathroom and toilet scrubbing','Inside window and track cleaning','Skirting boards, light switches and door frames','Carpet steam cleaning (on request)'],
    why: 'Our end-of-lease cleans are specifically designed to meet real estate agent standards — so you walk out with your bond in hand.',
  },
  'office-cleaning': {
    tagline: 'A professional office deserves a professional clean.',
    includes: ['Desk, chair and workstation sanitisation','Kitchen and breakroom cleaning','Bathroom maintenance and restocking','Vacuuming and mopping all floor areas','Bin liners replaced throughout','Entry, corridors and meeting rooms'],
    why: 'Clean offices reduce sick days, improve focus and create a positive first impression for every visitor.',
  },
  'window-cleaning': {
    tagline: 'Crystal-clear windows, inside and out.',
    includes: ['Interior and exterior window cleaning','Screen and frame wiping','Sliding door and glass panel cleaning','Hard water stain and streak removal','High-reach windows (equipment provided)','Suitable for homes and commercial buildings'],
    why: 'Clean windows let in more natural light, improving the look and feel of any space. Streak-free results, every time.',
  },
  'carpet-cleaning': {
    tagline: 'Deep clean that brings your carpets back to life.',
    includes: ['Hot water extraction (steam cleaning)','Pre-treatment of stains and high-traffic areas','Deodorising and sanitising treatment','Suitable for all carpet types','Dries within 2–4 hours','Removes allergens, dust mites and bacteria'],
    why: 'Regular professional carpet cleaning extends carpet life, removes embedded dirt, and dramatically improves indoor air quality.',
  },
  'residential-cleaning': {
    tagline: 'Come home to a spotless house, every time.',
    includes: ['Full kitchen clean including appliances','Bathroom and toilet scrubbing','Vacuuming and mopping all floors','Dusting furniture, shelves and blinds','Bed making and linen change (on request)','Flexible fortnightly or weekly visits'],
    why: 'Let us handle the cleaning so you can spend time on what matters. Consistent, reliable, and tailored to your home.',
  },
};

const ServiceDetailPage = () => {
  const { slug }  = useParams();
  const navigate  = useNavigate();
  const service   = services.find((s) => toSlug(s.name) === slug);
  const detail    = serviceDetails[slug];

  if (!service || !detail) return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">Service not found</h1>
        <Link to="/services" className="text-[#1e1b4b] font-semibold hover:underline">← Back to Services</Link>
      </main>
      <Footer />
    </div>
  );

  const Icon          = iconMap[service.icon] || Building2;
  const otherServices = services.filter((s) => toSlug(s.name) !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/*
          Hero uses a dark overlay dark enough so the always-solid navbar
          doesn't clash — navbar is bg-[#1e1b4b]/90 regardless of scroll.
        */}
        <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage:`url(${service.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#12103a]/95 via-[#1e1b4b]/90 to-[#312e81]/85" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="animate-fade-up flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{service.name}</span>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="animate-fade-up w-14 h-14 bg-[#f97316] rounded-2xl flex items-center justify-center shadow-md">
                <Icon className="text-white" size={26} />
              </div>
              <span className="animate-fade-up inline-block bg-[#f97316]/20 text-[#fdba74] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                Our Services
              </span>
            </div>
            <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] pb-2 mb-4">
              {service.name}
            </h1>
            <p className="animate-fade-up delay-200 text-white/70 text-xl mb-8 max-w-xl">{detail.tagline}</p>
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
              <Link to={`/quotes?service=${encodeURIComponent(service.name)}`}
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] text-white px-8 py-4 rounded-full font-extrabold hover:bg-[#ea6c0a] transition-all hover:scale-105 shadow-md shadow-black/20">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a href={`tel:${companyInfo.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
                <Phone size={18} /> {companyInfo.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="animate-fade-up bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">About this Service</h2>
                  <p className="text-gray-500 leading-relaxed">{service.description}</p>
                  <p className="text-gray-500 leading-relaxed mt-4">{detail.why}</p>
                </div>
                <div className="animate-fade-up delay-100 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {detail.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#eef2ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={13} className="text-[#1e1b4b]" />
                        </div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="animate-fade-up bg-[#1e1b4b] rounded-2xl p-7 text-white">
                  <h3 className="font-display text-xl font-bold mb-2">Ready to Book?</h3>
                  <p className="text-white/65 text-sm mb-6">Free, no-obligation quote. We respond within the hour.</p>
                  <Link to={`/quotes?service=${encodeURIComponent(service.name)}`}
                    className="block text-center bg-[#f97316] text-white px-6 py-3.5 rounded-full font-extrabold hover:bg-[#ea6c0a] transition-colors mb-3">
                    Get a Free Quote
                  </Link>
                  <a href={`tel:${companyInfo.phoneRaw}`}
                    className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors text-sm">
                    <Phone size={16} /> {companyInfo.phone}
                  </a>
                </div>

                <div className="animate-fade-up delay-100 bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                  <h3 className="font-display text-base font-bold text-gray-900 mb-4">Other Services</h3>
                  <div className="space-y-3">
                    {otherServices.map((s) => {
                      const OtherIcon = iconMap[s.icon] || Building2;
                      return (
                        <Link key={s.id} to={`/services/${toSlug(s.name)}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#eef2ff] transition-colors group">
                          <div className="w-9 h-9 rounded-lg bg-[#eef2ff] group-hover:bg-[#1e1b4b] flex items-center justify-center transition-colors flex-shrink-0">
                            <OtherIcon size={16} className="text-[#1e1b4b] group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm group-hover:text-[#1e1b4b] transition-colors">{s.name}</span>
                          <ArrowRight size={14} className="text-gray-300 group-hover:text-[#1e1b4b] ml-auto transition-colors" />
                        </Link>
                      );
                    })}
                    <Link to="/services"
                      className="flex items-center gap-1.5 text-[#1e1b4b] font-semibold text-sm pt-2 hover:gap-3 transition-all">
                      View all services <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1e1b4b] text-sm font-medium transition-colors">
                <ArrowLeft size={16} /> Back
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;

