import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage          from './pages/HomePage';
import ServicesPage      from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import QuotesPage        from './pages/QuotesPage';
import FAQsPage          from './pages/FAQsPage';
import EmploymentPage    from './pages/EmploymentPage';
import ContactPage       from './pages/ContactPage';

/* Scrolls to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"               element={<HomePage />} />
        <Route path="/services"       element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/quotes"         element={<QuotesPage />} />
        <Route path="/faqs"           element={<FAQsPage />} />
        <Route path="/employment"     element={<EmploymentPage />} />
        <Route path="/contact"        element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

