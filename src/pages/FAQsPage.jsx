import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We service the entire Adelaide metropolitan area and surrounding suburbs. This includes CBD, North Adelaide, Eastern suburbs, Western suburbs, and Southern suburbs."
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
    answer: "Quality is our priority. We conduct regular inspections, gather client feedback, and provide ongoing training for our staff. Our supervisors perform routine checks to maintain our high standards."
  },
  {
    question: "Do you offer after-hours cleaning?",
    answer: "Yes! We offer flexible scheduling including after-hours, early morning, and weekend cleaning services to minimize disruption to your business or home life."
  },
  {
    question: "How do I get a quote?",
    answer: "Getting a quote is easy! Fill out our online form, call us at 0414 419 421, or email Gurkhascleaning9672@gmail.com. We'll arrange a time to assess your needs and provide a detailed quote."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We understand plans change. We request 24 hours notice for cancellations. Please contact us as soon as possible if you need to reschedule."
  },
  {
    question: "Do you provide equipment and supplies?",
    answer: "Yes, we bring all necessary cleaning equipment, machinery, and supplies. Our equipment is professionally maintained for optimal cleaning results."
  }
];

const FAQsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f]">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Help Center
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our cleaning services.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-2xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-[#1e3a5f] font-semibold hover:no-underline py-5 gap-4">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="text-[#c41e3a] flex-shrink-0" size={20} />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;
