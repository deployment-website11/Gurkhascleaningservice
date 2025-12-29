import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import QuotesPage from './pages/QuotesPage';
import FAQsPage from './pages/FAQsPage';
import EmploymentPage from './pages/EmploymentPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/employment" element={<EmploymentPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
