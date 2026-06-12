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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={companyInfo.logo}
              alt="Gurkhas Cleaning Services"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-[#0d6e62] text-white'
                    : scrolled
                      ? 'text-gray-700 hover:bg-[#e6f4f2] hover:text-[#0d6e62]'
                      : 'text-white hover:bg-white/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="hidden lg:flex items-center gap-2 bg-[#f59e0b] text-gray-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#d97706] transition-colors shadow-sm"
          >
            <Phone size={16} />
            <span>{companyInfo.phone}</span>
          </a>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  location.pathname === item.href
                    ? 'bg-[#0d6e62] text-white'
                    : 'text-gray-700 hover:bg-[#e6f4f2] hover:text-[#0d6e62]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-[#f59e0b] text-gray-900 px-4 py-3 rounded-xl font-bold mt-2"
            >
              <Phone size={18} />
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

