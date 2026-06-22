import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { services, companyInfo } from '../data/mock';
import { Phone, CheckCircle, MessageCircle, Sparkles } from 'lucide-react';

const QuotesPage = () => {
  const location    = useLocation();
  const preselected = new URLSearchParams(location.search).get('service') || '';
  const formRef     = useRef(null);

  const [formData, setFormData] = useState({ name:'', email:'', phone:'', service:preselected, message:'' });

  useEffect(() => {
    const svc = new URLSearchParams(location.search).get('service') || '';
    setFormData(prev => ({ ...prev, service:svc }));
    /* Scroll to form when arriving with a ?service= param */
    if (svc && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior:'smooth', block:'start' });
      }, 100);
    }
  }, [location.search]);

  const handleChange        = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleServiceChange = (v) => setFormData({ ...formData, service:v });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `*New Quote Request*%0A%0A +
      *Name:* ${formData.name}%0A +
      *Email:* ${formData.email}%0A +
      *Phone:* ${formData.phone}%0A +
      *Service:* ${formData.service}%0A +
      *Details:* ${formData.message}%0A%0A +
      _Sent from gurkhascleaningservice.com.au_`;
    window.open(`https://wa.me/61${companyInfo.phoneRaw}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#12103a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#f97316]/12 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="animate-fade-up inline-block bg-[#f97316]/20 text-[#fdba74] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
              Free Quote
            </span>
            <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] pb-2 mb-5">
              Get Your Free Quote
            </h1>
            <p className="animate-fade-up delay-200 text-white/65 text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll respond within the hour — no hidden fees.
            </p>
            {preselected && (
              <div className="animate-fade-up delay-300 inline-flex items-center gap-2 mt-5 bg-[#f97316]/20 border border-[#f97316]/30 px-5 py-2.5 rounded-full">
                <Sparkles className="text-[#f97316]" size={16} />
                <span className="text-[#fdba74] font-semibold text-sm">Enquiring about: {preselected}</span>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form — ref so we can scroll here when arriving from a service */}
              <div className="lg:col-span-3" ref={formRef}>
                <div className="animate-fade-up bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium text-sm">Full Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required
                          className="mt-2 h-12 rounded-xl border-gray-200 focus:border-[#1e1b4b]"
                          placeholder="John Smith" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium text-sm">Phone *</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                          className="mt-2 h-12 rounded-xl border-gray-200"
                          placeholder="0400 000 000" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                        className="mt-2 h-12 rounded-xl border-gray-200"
                        placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label className="text-gray-700 font-medium text-sm">Service Required *</Label>
                      <Select onValueChange={handleServiceChange} value={formData.service}>
                        <SelectTrigger className="mt-2 h-12 rounded-xl border-gray-200">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.id} value={s.name}>{s.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {formData.service && (
                        <p className="text-xs text-[#1e1b4b] mt-1.5 font-medium">✓ {formData.service} selected</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium text-sm">Additional Details</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                        className="mt-2 rounded-xl border-gray-200"
                        placeholder="Tell us about your space, frequency, or any special requirements..." />
                    </div>
                    <Button type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-base font-bold rounded-xl py-4 h-auto">
                      <MessageCircle size={19} className="mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="animate-fade-up delay-100 bg-[#1e1b4b] rounded-2xl p-8 text-white">
                  <h3 className="font-display text-xl font-bold mb-2">Prefer to Call?</h3>
                  <p className="text-white/65 text-sm mb-5">Speak directly with our team.</p>
                  <a href={`tel:${companyInfo.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-[#f97316] text-white px-6 py-3 rounded-full font-extrabold text-sm hover:bg-[#ea6c0a] transition-colors">
                    <Phone size={17} /> {companyInfo.phone}
                  </a>
                </div>
                <div className="animate-fade-up delay-200 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-5">What to Expect</h3>
                  <ul className="space-y-4">
                    {['Quick response via WhatsApp','Detailed, transparent pricing','No-obligation quote','Flexible scheduling options'].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="text-[#1e1b4b] flex-shrink-0 mt-0.5" size={17} />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuotesPage;

