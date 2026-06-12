import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { companyInfo, navigation, footerLinks } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#063d38] text-white">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={companyInfo.logo}
              alt="Gurkhas Cleaning Services"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm italic mb-5">
              "{companyInfo.tagline}"
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook,       href: 'https://www.facebook.com/profile.php?id=61583296716357' },
                { Icon: Instagram,      href: 'https://www.facebook.com/profile.php?id=61583296716357' },
                { Icon: MessageCircle,  href: `https://wa.me/${companyInfo.phoneRaw}` },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f59e0b] flex items-center justify-center transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base font-bold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-[#f59e0b] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-base font-bold mb-5 text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              {['Commercial Cleaning', 'Office Cleaning', 'End of Lease', 'Window Cleaning', 'Carpet Cleaning', 'Pressure Washing'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/60 hover:text-[#f59e0b] transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-bold mb-5 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${companyInfo.phoneRaw}`} className="flex items-start gap-3 text-white/60 hover:text-[#f59e0b] transition-colors">
                  <Phone size={18} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-white text-sm">{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-3 text-white/60 hover:text-[#f59e0b] transition-colors">
                  <Mail size={18} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-all">{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin size={18} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{companyInfo.address.street}, {companyInfo.address.suburb}</span>
                </div>
              </li>
              <li className="text-white/50 text-xs mt-2">
                Mon–Sat: 7am–7pm &nbsp;|&nbsp; Sun: 8am–4pm
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            {companyInfo.copyright}
          </p>
          <div className="flex gap-5">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white/40 hover:text-white text-xs transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${companyInfo.phoneRaw}?text=Hi, I'm interested in your cleaning services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>
    </footer>
  );
};

export default Footer;

