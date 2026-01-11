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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Message*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A%0A` +
      `*Message:*%0A${formData.message}%0A%0A` +
      `_Sent from gurkhascleaningservice.com.au_`;
    
    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/61414419421?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: companyInfo.phone, href: `tel:${companyInfo.phoneRaw}` },
    { icon: Mail, label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: MapPin, label: "Location", value: `${companyInfo.address.street}, ${companyInfo.address.suburb}`, href: null },
    { icon: Clock, label: "Hours", value: "Available 24/7", href: null }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f]">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out and we'll respond as soon as we can.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">Contact Information</h2>
                
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c41e3a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-[#c41e3a]" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#1e3a5f] font-semibold hover:text-[#c41e3a] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#1e3a5f] font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* WhatsApp Direct Button */}
                <div className="mt-8 p-6 bg-[#25D366]/10 rounded-2xl">
                  <h3 className="font-bold text-[#1e3a5f] mb-2">Quick Contact</h3>
                  <p className="text-gray-600 text-sm mb-4">Message us directly on WhatsApp for fastest response!</p>
                  <a
                    href="https://wa.me/61414419421?text=Hi,%20I'm%20interested%20in%20your%20cleaning%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-10">
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2 h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2 h-12 rounded-xl"
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
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-2 h-12 rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-2 rounded-xl"
                      />
                    </div>

                    <Button type="submit" className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-semibold rounded-xl">
                      <MessageCircle size={20} className="mr-2" />
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
