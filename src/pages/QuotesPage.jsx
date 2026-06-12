import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { services, companyInfo } from '../data/mock';
import { Phone, CheckCircle, MessageCircle } from 'lucide-react';

const QuotesPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleServiceChange = (value) => setFormData({ ...formData, service: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Quote Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}%0A%0A_Sent from gurkhascleaningservice.com.au_`;
    window.open(`https://wa.me/61414419421?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Page Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#063d38] via-[#0d6e62] to-[#0a5750]">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block bg-[#f59e0b]/20 text-[#f59e0b] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
              Free Quote
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-5">
              Get Your Free Quote
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll respond within the hour with a clear, honest quote.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium text-sm">Full Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2 h-12 rounded-xl border-gray-200" placeholder="John Smith" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium text-sm">Phone *</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-2 h-12 rounded-xl border-gray-200" placeholder="0400 000 000" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2 h-12 rounded-xl border-gray-200" placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label className="text-gray-700 font-medium text-sm">Service Required *</Label>
                      <Select onValueChange={handleServiceChange} value={formData.service} required>
                        <SelectTrigger className="mt-2 h-12 rounded-xl border-gray-200">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.id} value={s.name}>{s.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium text-sm">Additional Details</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="mt-2 rounded-xl border-gray-200" placeholder="Tell us about your cleaning requirements..." />
                    </div>
                    <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-base font-bold rounded-xl py-4 h-auto">
                      <MessageCircle size={19} className="mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-[#0d6e62] rounded-2xl p-8 text-white">
                  <h3 className="font-display text-xl font-bold mb-3">Prefer to Call?</h3>
                  <p className="text-white/70 text-sm mb-5">Speak directly with our team for immediate help.</p>
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-[#f59e0b] text-gray-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-[#d97706] transition-colors"
                  >
                    <Phone size={18} />
                    {companyInfo.phone}
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-5">What to Expect</h3>
                  <ul className="space-y-4">
                    {[
                      'Quick response via WhatsApp',
                      'Detailed, transparent pricing',
                      'No-obligation quote',
                      'Flexible scheduling options',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="text-[#0d6e62] flex-shrink-0 mt-0.5" size={18} />
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

