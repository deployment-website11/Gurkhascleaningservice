import React from 'react';
import { CheckCircle, Award, Users, ThumbsUp } from 'lucide-react';
import { aboutContent, features } from '../data/mock';

const icons = [Award, Users, ThumbsUp, CheckCircle];

const About = () => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="animate-fade-up inline-block bg-[#fff7ed] text-[#f97316] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase border border-[#fed7aa]">
          Why Choose Us
        </span>
        <h2 className="animate-fade-up delay-100 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          {aboutContent.heading}
        </h2>
        <p className="animate-fade-up delay-200 text-gray-500 text-lg max-w-2xl mx-auto">
          {aboutContent.paragraphs[0]}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => {
          const Icon = icons[i] || CheckCircle;
          return (
            <div key={i}
              className="animate-fade-up group bg-gray-50 hover:bg-[#1e1b4b] rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay:`${i*80}ms` }}>
              <div className="w-14 h-14 bg-[#eef2ff] group-hover:bg-[#f97316] rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon className="text-[#1e1b4b] group-hover:text-white transition-colors duration-300" size={26} />
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
          <span className="animate-fade-up inline-block bg-[#eef2ff] text-[#1e1b4b] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-wide uppercase border border-[#e0e7ff]">
            Our Process
          </span>
          <h2 className="animate-fade-up delay-100 font-display text-3xl sm:text-4xl font-extrabold text-gray-900">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 h-0.5 bg-gradient-to-r from-[#1e1b4b] to-[#f97316]"
            style={{ left:'16.66%', right:'16.66%' }} />
          {[
            { step:'01', title:'Get a Quote', desc:'Fill out our quick form or call us. We usually respond within the hour.' },
            { step:'02', title:'Book a Time', desc:'Pick a date that suits you. We confirm instantly and arrive on time.' },
            { step:'03', title:'We Clean',    desc:'Our trained team arrives fully equipped and delivers spotless results.' },
          ].map((item, i) => (
            <div key={item.step}
              className="animate-fade-up flex flex-col items-center text-center relative"
              style={{ animationDelay:`${i*100}ms` }}>
              <div className="w-24 h-24 rounded-full bg-[#1e1b4b] flex items-center justify-center mb-5 shadow-md z-10">
                <span className="font-display text-2xl font-extrabold text-[#f97316]">{item.step}</span>
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

export default About;

