import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Briefcase, Clock, MapPin, DollarSign, MessageCircle, CheckCircle } from 'lucide-react';

const benefits = [
  { icon:DollarSign, title:'Competitive Pay',  desc:'Industry-leading rates with regular performance reviews.' },
  { icon:Clock,      title:'Flexible Hours',   desc:'Morning, evening, and weekend shifts to suit your lifestyle.' },
  { icon:MapPin,     title:'Local Work',       desc:'Positions available across the Adelaide metro area.' },
  { icon:Briefcase,  title:'Career Growth',    desc:'Ongoing training and clear paths for advancement.' },
];
const perks = ['Friendly, supportive team','All equipment provided','Paid training for new starters','Work close to home','Consistent, reliable hours','Culture of pride and respect'];

const EmploymentPage = () => {
  const [formData, setFormData] = useState({ name:'', email:'', phone:'', experience:'', availability:'', message:'' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `*Job Application*%0A%0A +
      *Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A +
      *Experience:* ${formData.experience}%0A*Availability:* ${formData.availability}%0A%0A +
      *About Me:*%0A${formData.message}%0A%0A_Sent from gurkhascleaningservice.com.au_`;
    window.open(`https://wa.me/61414419421?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#12103a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#f97316]/12 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="animate-fade-up inline-block bg-[#f97316]/20 text-[#fdba74] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">Join Our Team</span>
            <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] pb-2 mb-5">Career Opportunities</h1>
            <p className="animate-fade-up delay-200 text-white/65 text-lg max-w-2xl mx-auto">
              We're always looking for dedicated, hardworking people who take pride in doing a great job. Sound like you?
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="animate-fade-up inline-block bg-[#eef2ff] text-[#1e1b4b] px-4 py-1.5 rounded-full text-sm font-bold mb-3 tracking-wide uppercase border border-[#e0e7ff]">Why Work With Us</span>
              <h2 className="animate-fade-up delay-100 font-display text-3xl sm:text-4xl font-extrabold text-gray-900">What You'll Get</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {benefits.map((b, i) => (
                <div key={i}
                  className="animate-fade-up group bg-gray-50 hover:bg-[#1e1b4b] rounded-2xl p-7 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ animationDelay:`${i*80}ms` }}>
                  <div className="w-14 h-14 bg-[#eef2ff] group-hover:bg-[#f97316] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <b.icon className="text-[#1e1b4b] group-hover:text-white transition-colors duration-300" size={26} />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">{b.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/75 text-sm transition-colors duration-300">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="animate-fade-up bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-6 text-center">More Reasons to Join</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <CheckCircle size={17} className="text-[#1e1b4b] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="animate-fade-up inline-block bg-[#fff7ed] text-[#f97316] px-4 py-1.5 rounded-full text-sm font-bold mb-3 tracking-wide uppercase border border-[#fed7aa]">Apply Now</span>
              <h2 className="animate-fade-up delay-100 font-display text-3xl font-extrabold text-gray-900">Submit Your Application</h2>
              <p className="animate-fade-up delay-200 text-gray-500 mt-2 text-sm">Fill out the form and we'll reach out via WhatsApp.</p>
            </div>
            <div className="animate-fade-up bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium text-sm">Full Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="mt-2 h-12 rounded-xl border-gray-200 focus:border-[#1e1b4b]" placeholder="Your full name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                      className="mt-2 h-12 rounded-xl border-gray-200" placeholder="you@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium text-sm">Phone *</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                      className="mt-2 h-12 rounded-xl border-gray-200" placeholder="0400 000 000" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="experience" className="text-gray-700 font-medium text-sm">Previous Experience</Label>
                  <Input id="experience" name="experience" value={formData.experience} onChange={handleChange}
                    className="mt-2 h-12 rounded-xl border-gray-200" placeholder="e.g. 2 years commercial cleaning" />
                </div>
                <div>
                  <Label htmlFor="availability" className="text-gray-700 font-medium text-sm">Availability</Label>
                  <Input id="availability" name="availability" value={formData.availability} onChange={handleChange}
                    className="mt-2 h-12 rounded-xl border-gray-200" placeholder="e.g. Weekdays, Evenings, Weekends" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium text-sm">Why do you want to join us?</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                    className="mt-2 rounded-xl border-gray-200" placeholder="Tell us a bit about yourself..." />
                </div>
                <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-base font-bold rounded-xl py-4 h-auto">
                  <MessageCircle size={19} className="mr-2" /> Apply via WhatsApp
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

