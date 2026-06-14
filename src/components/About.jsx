import React from 'react';
import { CheckCircle, Award, Users, ThumbsUp } from 'lucide-react';
import { aboutContent, features } from '../data/mock';

const icons = [Award, Users, ThumbsUp, CheckCircle];

const About = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#fef3c7] text-[#d97706] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {aboutContent.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{aboutContent.paragraphs[0]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = icons[index] || CheckCircle;
            return (
              <div key={index}
                className="group relative bg-gray-50 hover:bg-[#1a2744] rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-navy/20 hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 bg-[#eff6ff] group-hover:bg-[#2563eb] rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="text-[#2563eb] group-hover:text-white transition-colors duration-300" size={26} />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#eff6ff] text-[#2563eb] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#f59e0b]" style={{ left: '16.66%', right: '16.66%' }} />
            {[
              { step: '01', title: 'Get a Quote',  desc: 'Fill out our quick form or call us. We respond usually within the hour.' },
              { step: '02', title: 'Book a Time',  desc: 'Pick a date and time that suits you. We confirm instantly and show up on time.' },
              { step: '03', title: 'We Clean',     desc: 'Our trained team arrives fully equipped and delivers spotless results, every time.' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center relative">
                <div className="w-24 h-24 rounded-full bg-[#1a2744] flex items-center justify-center mb-5 shadow-lg shadow-navy/20 z-10">
                  <span className="font-display text-2xl font-extrabold text-[#f59e0b]">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

