import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Briefcase, Clock, MapPin, DollarSign, MessageCircle } from 'lucide-react';

const EmploymentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    availability: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `*Job Application*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Experience:* ${formData.experience}%0A` +
      `*Availability:* ${formData.availability}%0A%0A` +
      `*Additional Info:*%0A${formData.message}%0A%0A` +
      `_Sent from gurkhascleaningservice.com.au_`;
    
    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/61414419421?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const benefits = [
    { icon: DollarSign, title: "Competitive Pay", desc: "Industry-leading rates with regular reviews" },
    { icon: Clock, title: "Flexible Hours", desc: "Various shifts to suit your lifestyle" },
    { icon: MapPin, title: "Local Work", desc: "Positions across Adelaide metro" },
    { icon: Briefcase, title: "Career Growth", desc: "Training and advancement opportunities" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f]">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Career Opportunities
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join a team that takes pride in their work. We're always looking for dedicated professionals.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-[#c41e3a]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-[#c41e3a]" size={28} />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">Apply Now</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 h-12 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience" className="text-gray-700 font-medium">Previous Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="mt-2 h-12 rounded-xl"
                    placeholder="e.g., 2 years commercial cleaning"
                  />
                </div>

                <div>
                  <Label htmlFor="availability" className="text-gray-700 font-medium">Availability</Label>
                  <Input
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="mt-2 h-12 rounded-xl"
                    placeholder="e.g., Weekdays, Evenings, Weekends"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Why do you want to join us?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 rounded-xl"
                  />
                </div>

                <Button type="submit" className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-semibold rounded-xl">
                  <MessageCircle size={20} className="mr-2" />
                  Apply via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmploymentPage;
