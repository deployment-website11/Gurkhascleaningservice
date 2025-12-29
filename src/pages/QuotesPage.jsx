import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { services, companyInfo } from '../data/mock';
import { Phone, CheckCircle, Send } from 'lucide-react';

const QuotesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f]">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Free Quote
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-green-500" size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Thank You!</h3>
                      <p className="text-gray-600">We've received your request and will contact you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-2 h-12 rounded-xl"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-2 h-12 rounded-xl"
                            placeholder="0400 000 000"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2 h-12 rounded-xl"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <Label className="text-gray-700 font-medium">Service Required *</Label>
                        <Select onValueChange={handleServiceChange} value={formData.service}>
                          <SelectTrigger className="mt-2 h-12 rounded-xl">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.name}>
                                {service.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-700 font-medium">Additional Details</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="mt-2 rounded-xl"
                          placeholder="Tell us about your cleaning requirements..."
                        />
                      </div>

                      <Button type="submit" className="w-full h-14 bg-[#c41e3a] hover:bg-[#a01830] text-white text-lg font-semibold rounded-xl">
                        <Send size={20} className="mr-2" />
                        Submit Request
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Prefer to Call?</h3>
                  <p className="text-white/80 mb-6">Speak directly with our team for immediate assistance.</p>
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-[#c41e3a] px-6 py-3 rounded-full font-semibold hover:bg-[#a01830] transition-colors"
                  >
                    <Phone size={20} />
                    {companyInfo.phone}
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">What to Expect</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#c41e3a] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-600">Response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#c41e3a] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-600">Detailed, transparent pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#c41e3a] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-600">No obligation quote</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#c41e3a] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-600">Flexible scheduling options</span>
                    </li>
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
