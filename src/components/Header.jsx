import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo, navigation } from '../data/mock';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    /* fixed + z-50 = always on top while scrolling */
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#14532d] shadow-lg shadow-black/20 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="logo-pill">
              <img
                src={companyInfo.logo}
                alt="Gurkhas Cleaning Services"
                className="h-11 sm:h-12 w-auto object-contain rounded-lg"
                style={{ maxWidth:'155px' }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-[#84cc16] text-[#14532d]'
                    : 'text-white/85 hover:bg-white/15 hover:text-white'
                }`}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <a href={`tel:${companyInfo.phoneRaw}`}
            className="hidden lg:flex items-center gap-2 bg-[#84cc16] text-[#14532d] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#65a30d] hover:text-white transition-colors shadow-md">
            <Phone size={15} /> {companyInfo.phone}
          </a>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#14532d] border border-white/10 rounded-2xl p-4 space-y-1 shadow-2xl">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  location.pathname === item.href
                    ? 'bg-[#84cc16] text-[#14532d]'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}>
                {item.name}
              </Link>
            ))}
            <a href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-[#84cc16] text-[#14532d] px-4 py-3 rounded-xl font-bold mt-2 text-sm">
              <Phone size={16} /> Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

