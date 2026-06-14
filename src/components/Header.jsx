import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo, navigation } from '../data/mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1a2744] shadow-xl shadow-navy/30 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo — JPG fix: subtle pill background so it never looks bad on any bg */}
          <Link to="/" className="flex items-center">
            <div className={`transition-all duration-300 ${scrolled ? 'logo-on-dark' : 'logo-on-dark'}`}>
              <img
                src={companyInfo.logo}
                alt="Gurkhas Cleaning Services"
                className="h-11 sm:h-13 w-auto object-contain rounded-lg"
                style={{ maxWidth: '160px' }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-[#2563eb] text-white shadow-md shadow-blue-500/30'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="hidden lg:flex items-center gap-2 bg-[#f59e0b] text-gray-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#d97706] transition-colors shadow-md shadow-amber-400/30"
          >
            <Phone size={15} />
            <span>{companyInfo.phone}</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#1a2744] border border-white/10 rounded-2xl p-4 space-y-1 shadow-2xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  location.pathname === item.href
                    ? 'bg-[#2563eb] text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-[#f59e0b] text-gray-900 px-4 py-3 rounded-xl font-bold mt-2 text-sm"
            >
              <Phone size={16} /> Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
