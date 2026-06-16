import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { companyInfo, navigation, footerLinks } from '../data/mock';

const toSlug = n => n.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');

const Footer = () => (
  <footer className="bg-[#14532d] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="logo-pill inline-block mb-4">
            <img src={companyInfo.logo} alt="Gurkhas Cleaning Services"
              className="h-12 w-auto object-contain rounded-lg" style={{ maxWidth:'150px' }} />
          </div>
          <p className="text-white/50 text-sm italic mb-5">"{companyInfo.tagline}"</p>
          <div className="flex gap-3">
            {[
              { Icon:Facebook,      href:'#' },
              { Icon:Instagram,     href:'#' },
              { Icon:MessageCircle, href:`https://wa.me/61${companyInfo.phoneRaw}` },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#84cc16] hover:text-[#14532d] flex items-center justify-center transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-base font-bold mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-white/50 hover:text-[#84cc16] text-sm transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-base font-bold mb-5">Services</h3>
          <ul className="space-y-3 text-sm">
            {['Commercial Cleaning','Office Cleaning','End of Lease','Window Cleaning','Carpet Cleaning','Residential Cleaning'].map((s) => (
              <li key={s}>
                <Link to={`/services/${toSlug(s)}`} className="text-white/50 hover:text-[#84cc16] transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-base font-bold mb-5">Contact</h3>
          <ul className="space-y-4">
            <li>
              <a href={`tel:${companyInfo.phoneRaw}`} className="flex items-start gap-3 hover:text-[#84cc16] transition-colors">
                <Phone size={17} className="text-[#84cc16] flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-sm">{companyInfo.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-3 text-white/50 hover:text-[#84cc16] transition-colors">
                <Mail size={17} className="text-[#84cc16] flex-shrink-0 mt-0.5" />
                <span className="text-sm break-all">{companyInfo.email}</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-white/50">
                <MapPin size={17} className="text-[#84cc16] flex-shrink-0 mt-0.5" />
                <span className="text-sm">{companyInfo.address.street}, {companyInfo.address.suburb}</span>
              </div>
            </li>
            <li className="text-white/35 text-xs">Mon–Sat: 7am–7pm &nbsp;|&nbsp; Sun: 8am–4pm</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-white/35 text-xs">{companyInfo.copyright}</p>
        <div className="flex gap-5">
          {footerLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-white/35 hover:text-white text-xs transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* WhatsApp float */}
    <a href={`https://wa.me/61${companyInfo.phoneRaw}?text=Hi,%20I'm%20interested%20in%20your%20cleaning%20services.`}
      target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
      <MessageCircle size={26} className="text-white" fill="white" />
    </a>
  </footer>
);

export default Footer;

