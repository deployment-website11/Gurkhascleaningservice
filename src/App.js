import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import QuotesPage from './pages/QuotesPage';
import FAQsPage from './pages/FAQsPage';
import EmploymentPage from './pages/EmploymentPage';
import ContactPage from './pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/employment" element={<EmploymentPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </PageTransition>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;

