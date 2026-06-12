import React from 'react';
import { CheckCircle, Award, Users, ThumbsUp, Leaf } from 'lucide-react';
import { aboutContent, features } from '../data/mock';

const icons = [Award, Users, ThumbsUp, CheckCircle];

const About = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#fef3c7] text-[#d97706] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {aboutContent.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {aboutContent.paragraphs[0]}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = icons[index] || CheckCircle;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 hover:bg-[#0d6e62] rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Amber accent dot on hover */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-14 h-14 bg-[#e6f4f2] group-hover:bg-[#f59e0b] rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="text-[#0d6e62] group-hover:text-gray-900 transition-colors duration-300" size={26} />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/75 text-sm leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#e6f4f2] text-[#0d6e62] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#0d6e62] to-[#f59e0b]" style={{left:'16.66%', right:'16.66%'}} />

            {[
              { step: '01', title: 'Get a Quote',   desc: 'Fill out our quick form or call us directly. We respond fast — usually within the hour.' },
              { step: '02', title: 'Book a Time',   desc: 'Pick a date and time that suits you. We confirm instantly and show up on time.' },
              { step: '03', title: 'We Clean',      desc: 'Our trained team arrives fully equipped and delivers spotless results, every single time.' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center relative">
                <div className="w-24 h-24 rounded-full bg-[#0d6e62] flex items-center justify-center mb-5 shadow-lg shadow-teal-700/20 z-10">
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
