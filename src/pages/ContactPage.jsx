import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { companyInfo } from '../data/mock';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `*New Contact Message*%0A%0A +
      *Name:* ${formData.name}%0A +
      *Email:* ${formData.email}%0A +
      *Phone:* ${formData.phone}%0A +
      *Subject:* ${formData.subject}%0A%0A +
      *Message:*%0A${formData.message}%0A%0A +
      _Sent from gurkhascleaningservice.com.au_`;
    window.open(`https://wa.me/61${companyInfo.phoneRaw}?text=${msg}`, '_blank');
  };

  const contactInfo = [
    { icon:Phone,  label:'Phone',    value:companyInfo.phone,  href:`tel:${companyInfo.phoneRaw}` },
    { icon:Mail,   label:'Email',    value:companyInfo.email,  href:`mailto:${companyInfo.email}` },
    { icon:MapPin, label:'Location', value:`${companyInfo.address.street}, ${companyInfo.address.suburb}`, href:null },
    { icon:Clock,  label:'Hours',    value:'Available 24/7',   href:null },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#14532d] via-[#166534] to-[#15803d] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#84cc16]/15 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="animate-fade-up inline-block bg-[#84cc16]/20 text-[#bef264] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
              Get In Touch
            </span>
            <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] pb-2 mb-5">
              Contact Us
            </h1>
            <p className="animate-fade-up delay-200 text-white/65 text-lg max-w-2xl mx-auto">
              Have questions? We'd love to hear from you — reach out and we'll respond promptly.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fef9f0]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Contact info */}
              <div className="lg:col-span-2 space-y-5">
                <h2 className="animate-fade-up font-display text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                {contactInfo.map((item, i) => (
                  <div key={i} className="animate-fade-up flex items-start gap-4" style={{ animationDelay:`${i*60}ms` }}>
                    <div className="w-12 h-12 bg-[#dcfce7] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-[#166534]" size={21} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 font-semibold hover:text-[#166534] transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-semibold text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* WhatsApp card */}
                <div className="animate-fade-up delay-300 mt-6 p-6 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl">
                  <h3 className="font-display font-bold text-gray-900 mb-1">Quick Response</h3>
                  <p className="text-gray-500 text-sm mb-4">Message us on WhatsApp for the fastest reply!</p>
                  <a href={`https://wa.me/61${companyInfo.phoneRaw}?text=Hi,%20I'm%20interested%20in%20your%20cleaning%20services.`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors text-sm">
                    <MessageCircle size={17} /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="animate-fade-up delay-100 bg-white rounded-2xl shadow-sm border border-[#dcfce7] p-6 sm:p-10">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium text-sm">Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required
                          className="mt-2 h-12 rounded-xl border-gray-200 focus:border-[#166534]" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium text-sm">Phone</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange}
                          className="mt-2 h-12 rounded-xl border-gray-200" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                        className="mt-2 h-12 rounded-xl border-gray-200" />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-700 font-medium text-sm">Subject *</Label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                        className="mt-2 h-12 rounded-xl border-gray-200" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium text-sm">Message *</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                        className="mt-2 rounded-xl border-gray-200" />
                    </div>
                    <Button type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-base font-bold rounded-xl py-4 h-auto">
                      <MessageCircle size={19} className="mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
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

export default ContactPage;

