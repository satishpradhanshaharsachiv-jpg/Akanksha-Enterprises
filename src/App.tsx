import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { UdyamVerificationCard } from './components/UdyamVerificationCard';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { UnitsSection } from './components/UnitsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuotationModal } from './components/QuotationModal';
import { CertificateModal } from './components/CertificateModal';
import { Language } from './types';
import { ENTERPRISE_DATA } from './data/enterpriseData';
import { Phone, MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('mr');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleOpenQuoteWithService = (serviceName: string) => {
    setPreselectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `नमस्कार सतीश सर, मला आकांक्षा इंटरप्राईजेस (छत्रपती संभाजीनगर) कडून कामासंदर्भात माहिती हवी आहे.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* Primary Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenQuote={() => {
          setPreselectedService('');
          setQuoteModalOpen(true);
        }}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          lang={lang}
          onOpenQuote={() => {
            setPreselectedService('');
            setQuoteModalOpen(true);
          }}
          onViewCertificate={() => setCertModalOpen(true)}
        />

        {/* Core Services Section */}
        <ServicesSection
          lang={lang}
          onSelectService={handleOpenQuoteWithService}
        />

        {/* Official Udyam Registration Breakdown */}
        <UdyamVerificationCard lang={lang} />

        {/* Work Standards & Showcase */}
        <PortfolioShowcase
          lang={lang}
          onOpenQuote={() => {
            setPreselectedService('');
            setQuoteModalOpen(true);
          }}
        />

        {/* Enterprise Units & Leadership */}
        <UnitsSection lang={lang} />

        {/* Contact & Map Section */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenCertificate={() => setCertModalOpen(true)}
        onOpenQuote={() => {
          setPreselectedService('');
          setQuoteModalOpen(true);
        }}
      />

      {/* Floating Action Buttons for quick mobile access */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* WhatsApp floating button */}
        <a
          href={`https://wa.me/91${ENTERPRISE_DATA.primaryPhone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        {/* Direct Call floating button */}
        <a
          href={`tel:+91${ENTERPRISE_DATA.primaryPhone}`}
          className="w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          title="Call Now"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="w-9 h-9 rounded-full bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center shadow-md hover:bg-slate-800 transition-all text-xs"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Modals */}
      <QuotationModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        lang={lang}
        preselectedService={preselectedService}
      />

      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
