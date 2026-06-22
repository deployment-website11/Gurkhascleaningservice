import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  { question:'What areas do you service?', answer:'We service the entire Adelaide metropolitan area and surrounding suburbs — including the CBD, North Adelaide, Eastern, Western, and Southern suburbs.' },
  { question:'Are you fully insured?', answer:'Yes, fully insured with comprehensive public liability and workers compensation insurance. Certificates of currency available on request.' },
  { question:'What cleaning products do you use?', answer:'High-quality, eco-friendly products safe for your family, pets, and the environment. We can accommodate specific preferences on request.' },
  { question:'How do you ensure quality?', answer:'Regular inspections, ongoing staff training, and client feedback. Supervisors perform routine checks to maintain our high standards.' },
  { question:'Do you offer after-hours cleaning?', answer:'Yes — flexible scheduling including after-hours, early morning, and weekends to minimise disruption to your home or business.' },
  { question:'How do I get a quote?', answer:'Fill out our online form, call us, or send a WhatsApp message. We provide a detailed, transparent quote with no hidden fees.' },
  { question:"What's your cancellation policy?", answer:'We ask for 24 hours notice for cancellations. Please contact us as soon as possible if you need to reschedule.' },
  { question:'Do you provide equipment and supplies?', answer:'Yes — we bring all necessary cleaning equipment and supplies. Everything is professionally maintained for optimal results.' },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`animate-fade-up rounded-2xl border transition-all duration-300 overflow-hidden ${
      open ? 'border-[#1e1b4b] shadow-md shadow-indigo-100' : 'border-gray-100 bg-white hover:border-[#1e1b4b]/30'
    }`} style={{ animationDelay:`${index*50}ms` }}>
      <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)} aria-expanded={open}>
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${open ? 'bg-[#1e1b4b]' : 'bg-[#eef2ff]'}`}>
            <HelpCircle size={15} className={open ? 'text-white' : 'text-[#1e1b4b]'} />
          </div>
          <span className="font-display font-bold text-gray-900 text-sm sm:text-base">{faq.question}</span>
        </div>
        <ChevronDown size={20} className={`text-[#1e1b4b] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 text-sm leading-relaxed px-6 pb-6 pl-[68px]">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQsPage = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#12103a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#f97316]/12 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="animate-fade-up inline-block bg-[#f97316]/20 text-[#fdba74] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">Help Centre</span>
          <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] pb-2 mb-5">Frequently Asked Questions</h1>
          <p className="animate-fade-up delay-200 text-white/65 text-lg max-w-2xl mx-auto">Everything you need to know. Can't find an answer? Just reach out.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          </div>
          <div className="animate-fade-up mt-14 bg-[#1e1b4b] rounded-2xl p-8 text-center text-white">
            <h3 className="font-display text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-white/65 text-sm mb-6">We're happy to help. Reach out and we'll respond promptly.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] text-white px-7 py-3 rounded-full font-extrabold text-sm hover:bg-[#ea6c0a] transition-colors">
                Contact Us <ArrowRight size={15} />
              </Link>
              <Link to="/quotes"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FAQsPage;

