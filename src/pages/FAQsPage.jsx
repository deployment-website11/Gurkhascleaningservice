import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We service the entire Adelaide metropolitan area and surrounding suburbs — including the CBD, North Adelaide, Eastern, Western, and Southern suburbs. Not sure if we cover your area? Just give us a call!"
  },
  {
    question: "Are you fully insured?",
    answer: "Yes, Gurkhas Cleaning Services is fully insured with comprehensive public liability and workers compensation insurance. We can provide certificates of currency upon request."
  },
  {
    question: "What cleaning products do you use?",
    answer: "We use high-quality, eco-friendly cleaning products that are safe for your family, pets, and the environment. We can also accommodate special requests if you have specific product preferences."
  },
  {
    question: "How do you ensure quality?",
    answer: "Quality is our top priority. We conduct regular inspections, gather client feedback, and provide ongoing training for our staff. Our supervisors perform routine checks to maintain our high standards."
  },
  {
    question: "Do you offer after-hours cleaning?",
    answer: "Absolutely! We offer flexible scheduling including after-hours, early morning, and weekend cleaning to minimise disruption to your business or home routine."
  },
  {
    question: "How do I get a quote?",
    answer: "Getting a quote is easy — fill out our online form, call us directly, or send us a WhatsApp message. We'll assess your needs and provide a detailed, transparent quote with no hidden fees."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We understand plans change. We simply ask for 24 hours' notice for cancellations. Please contact us as soon as possible if you need to reschedule."
  },
  {
    question: "Do you provide equipment and supplies?",
    answer: "Yes — we bring all necessary cleaning equipment, machinery, and supplies. Everything is professionally maintained for optimal results every time."
  },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open ? 'border-[#0d6e62] shadow-md' : 'border-gray-100 bg-white hover:border-[#0d6e62]/30'
      }`}
    >
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
            open ? 'bg-[#0d6e62]' : 'bg-[#e6f4f2]'
          }`}>
            <HelpCircle size={16} className={open ? 'text-white' : 'text-[#0d6e62]'} />
          </div>
          <span className="font-display font-bold text-gray-900 text-sm sm:text-base">
            {faq.question}
          </span>
        </div>
        <ChevronDown
          size={20}
          className={`text-[#0d6e62] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 text-sm leading-relaxed px-6 pb-6 pl-[68px]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Page Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#063d38] via-[#0d6e62] to-[#0a5750] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#f59e0b]/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block bg-[#f59e0b]/20 text-[#f59e0b] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
              Help Centre
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Everything you need to know about our cleaning services. Can't find an answer? Just reach out.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
          <div className="max-w-3xl mx-auto">

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>

            {/* Still have questions CTA */}
            <div className="mt-14 bg-[#0d6e62] rounded-2xl p-8 text-center text-white">
              <h3 className="font-display text-xl font-bold mb-2">Still have questions?</h3>
              <p className="text-white/70 text-sm mb-6">
                We're happy to help. Reach out and we'll get back to you promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-gray-900 px-7 py-3 rounded-full font-bold text-sm hover:bg-[#d97706] transition-colors"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
                <Link
                  to="/quotes"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors"
                >
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
};

export default FAQsPage;

