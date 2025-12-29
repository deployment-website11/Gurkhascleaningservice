import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { companyInfo, navigation, footerLinks } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src={companyInfo.logo} 
              alt="Gurkhas Cleaning Services" 
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-white/70 mb-4 italic">
              "{companyInfo.tagline}"
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#c41e3a] rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#c41e3a] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#c41e3a] rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-white/70 hover:text-[#c41e3a] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-white/70 hover:text-[#c41e3a] transition-colors">Commercial Cleaning</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-[#c41e3a] transition-colors">Office Cleaning</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-[#c41e3a] transition-colors">End of Lease</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-[#c41e3a] transition-colors">Window Cleaning</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-[#c41e3a] transition-colors">Carpet Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${companyInfo.phoneRaw}`} className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone size={20} className="text-[#c41e3a] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail size={20} className="text-[#c41e3a] flex-shrink-0 mt-0.5" />
                  <span className="break-all">{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin size={20} className="text-[#c41e3a] flex-shrink-0 mt-0.5" />
                  <span>{companyInfo.address.street}, {companyInfo.address.suburb}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              {companyInfo.copyright}
            </p>
            <div className="flex gap-6">
              {footerLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
