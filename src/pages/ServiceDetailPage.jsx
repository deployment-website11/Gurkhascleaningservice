import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { services, companyInfo } from '../data/mock';
import { ArrowRight, CheckCircle, Phone, ArrowLeft, Building2, Key, Briefcase, Sparkles, Layers, Home } from 'lucide-react';

const iconMap = { Building2, Key, Briefcase, Sparkles, Layers, Home };

// Extra detail per service
const serviceDetails = {
  'commercial-cleaning': {
    tagline: 'Keeping your business spotless, every day.',
    includes: [
      'Daily, weekly or fortnightly scheduling',
      'Vacuuming, mopping and surface sanitisation',
      'Bathroom and kitchen deep cleaning',
      'Bin removal and recycling management',
      'Window and glass cleaning',
      'Lobby and reception polishing',
    ],
    why: 'A clean workplace boosts staff morale, impresses clients and ensures compliance with hygiene standards. We work around your hours to cause zero disruption.',
  },
  'end-of-lease': {
    tagline: 'Get your full bond back — guaranteed.',
    includes: [
      'Full property deep clean top to bottom',
      'Oven, stovetop and rangehood cleaning',
      'Bathroom and toilet scrubbing',
      'Inside window and track cleaning',
      'Skirting boards, light switches and door frames',
      'Carpet steam cleaning (on request)',
    ],
    why: 'Our end-of-lease cleans are specifically designed to meet real estate agent standards — so you walk out with your bond in your pocket.',
  },
  'office-cleaning': {
    tagline: 'A professional office deserves a professional clean.',
    includes: [
      'Desk, chair and workstation sanitisation',
      'Kitchen and breakroom cleaning',
      'Bathroom maintenance and restocking',
      'Vacuuming and mopping all floor areas',
      'Bin liners replaced throughout',
      'Entry, corridors and meeting rooms',
    ],
    why: 'Clean offices reduce sick days, improve focus and create a positive first impression for every visitor or client who walks through the door.',
  },
  'window-cleaning': {
    tagline: 'Crystal-clear windows, inside and out.',
    includes: [
      'Interior and exterior window cleaning',
      'Screen and frame wiping',
      'Sliding door and glass panel cleaning',
      'Hard water stain and streak removal',
      'High-reach windows (equipment provided)',
      'Suitable for homes and commercial buildings',
    ],
    why: 'Clean windows let in more natural light, improving the look and feel of any space. We use professional equipment to achieve streak-free results every time.',
  },
  'carpet-cleaning': {
    tagline: 'Deep clean that brings your carpets back to life.',
    includes: [
      'Hot water extraction (steam cleaning)',
      'Pre-treatment of stains and high-traffic areas',
      'Deodorising and sanitising treatment',
      'Suitable for all carpet types and fibres',
      'Dries within 2–4 hours',
      'Removes allergens, dust mites and bacteria',
    ],
    why: 'Regular professional carpet cleaning extends carpet life by years, removes embedded dirt invisible to the eye, and dramatically improves indoor air quality.',
  },
  'residential-cleaning': {
    tagline: 'Come home to a spotless house, every time.',
    includes: [
      'Full kitchen clean including appliances',
      'Bathroom and toilet scrubbing',
      'Vacuuming and mopping all floors',
      'Dusting furniture, shelves and blinds',
      'Bed making and linen change (on request)',
      'Flexible fortnightly or weekly visits',
    ],
    why: 'Let us handle the cleaning so you can spend your time on what matters most. Consistent, reliable, and tailored to how you like your home.',
  },
};

// Convert service name to URL slug
const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => toSlug(s.name) === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32">
          <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">Service not found</h1>
          <Link to="/services" className="text-[#2563eb] font-semibold hover:underline">← Back to Services</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Building2;

  // Other services (exclude current)
  const otherServices = services.filter((s) => toSlug(s.name) !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Hero */}
        <section
          className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: url(`${service.image}`) }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a2e]/92 via-[#1a2744]/88 to-[#1e3060]/80" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#2563eb]/15 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{service.name}</span>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-[#2563eb] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/40">
                    <Icon className="text-white" size={26} />
                  </div>
                  <span className="bg-[#f59e0b]/20 text-[#f59e0b] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                    Our Services
                  </span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                  {service.name}
                </h1>
                <p className="text-white/70 text-xl mb-8 max-w-xl">{detail.tagline}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/quotes?service=${encodeURIComponent(service.name)}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1d4ed8] transition-all hover:scale-105 shadow-xl shadow-blue-600/40"
                  >
                    Get a Free Quote <ArrowRight size={18} />
                  </Link>
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                  >
                    <Phone size={18} /> {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main */}
              <div className="lg:col-span-2 space-y-10">

                {/* Description */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">About this Service</h2>
                  <p className="text-gray-500 leading-relaxed">{service.description}</p>
                  <p className="text-gray-500 leading-relaxed mt-4">{detail.why}</p>
                </div>

                {/* What's Included */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {detail.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#eff6ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={14} className="text-[#2563eb]" />
                        </div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="space-y-6">

                {/* CTA card */}
                <div className="bg-[#1a2744] rounded-2xl p-7 text-white">
                  <h3 className="font-display text-xl font-bold mb-2">Ready to Book?</h3>
                  <p className="text-white/65 text-sm mb-6">Get a free, no-obligation quote today. We respond within the hour.</p>
                  <Link
                    to={`/quotes?service=${encodeURIComponent(service.name)}`}
                    className="block text-center bg-[#f59e0b] text-gray-900 px-6 py-3.5 rounded-full font-bold hover:bg-[#d97706] transition-colors mb-3"
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors text-sm"
                  >
                    <Phone size={16} /> {companyInfo.phone}
                  </a>
                </div>

                {/* Other services */}
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                  <h3 className="font-display text-base font-bold text-gray-900 mb-4">Other Services</h3>
                  <div className="space-y-3">
                    {otherServices.map((s) => {
                      const OtherIcon = iconMap[s.icon] || Building2;
                      return (
                        <Link
                          key={s.id}
                          to={`/services/${toSlug(s.name)}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#eff6ff] transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#eff6ff] group-hover:bg-[#2563eb] flex items-center justify-center transition-colors flex-shrink-0">
                            <OtherIcon size={16} className="text-[#2563eb] group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm group-hover:text-[#2563eb] transition-colors">{s.name}</span>
                          <ArrowRight size={14} className="text-gray-300 group-hover:text-[#2563eb] ml-auto transition-colors" />
                        </Link>
                      );
                    })}
                    <Link
                      to="/services"
                      className="flex items-center gap-1.5 text-[#2563eb] font-semibold text-sm pt-2 hover:gap-3 transition-all"
                    >
                      View all services <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-12">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#2563eb] text-sm font-medium transition-colors"
              >
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

