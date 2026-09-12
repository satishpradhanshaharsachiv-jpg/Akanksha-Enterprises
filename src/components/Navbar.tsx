import React, { useState } from 'react';
import { Phone, MessageSquare, ShieldCheck, Menu, X, Building2 } from 'lucide-react';
import { Language } from '../types';
import { ENTERPRISE_DATA } from '../data/enterpriseData';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelMr: 'मुख्यपृष्ठ', labelEn: 'Home' },
    { href: '#services', labelMr: 'आमच्या सेवा', labelEn: 'Services' },
    { href: '#udyam', labelMr: 'उद्योग प्रमाणपत्र', labelEn: 'Udyam Certificate' },
    { href: '#units', labelMr: 'शाखा व युनिट्स', labelEn: 'Units' },
    { href: '#contact', labelMr: 'संपर्क', labelEn: 'Contact' },
  ];

  const whatsappMessage = encodeURIComponent(
    `नमस्कार, मला आकांक्षा इंटरप्राईजेस (Akanksha Enterprises) कडून बांधकाम / सेवा संदर्भात माहिती हवी आहे.`
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
      {/* Top micro bar with Official MSME Notification */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <ShieldCheck className="w-3 h-3 mr-1 text-emerald-400" />
              MSME उद्योग क्र: {ENTERPRISE_DATA.udyamNumber}
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">
              {lang === 'mr' ? 'शासकीय मान्यताप्राप्त सूक्ष्म उद्योग • संभाजीनगर' : 'Govt. of India Registered Micro Enterprise • Chhatrapati Sambhajinagar'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:+91${ENTERPRISE_DATA.primaryPhone}`}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 {ENTERPRISE_DATA.primaryPhone}</span>
            </a>
            <div className="flex items-center bg-slate-800 rounded p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={() => setLang('mr')}
                className={`px-2 py-0.5 text-[11px] font-medium rounded transition-all ${
                  lang === 'mr'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="मराठी भाषा निवडा"
              >
                मराठी
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-[11px] font-medium rounded transition-all ${
                  lang === 'en'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-serif">
                  {lang === 'mr' ? 'आकांक्षा इंटरप्राईजेस' : 'Akanksha Enterprises'}
                </span>
                <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-100 text-amber-900 border border-amber-300">
                  MSME
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {lang === 'mr'
                  ? 'बांधकाम, मेंटेनन्स व आयटी सोल्यूशन्स'
                  : 'Civil Construction, Maintenance & IT Services'}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 transition-colors"
              >
                {lang === 'mr' ? link.labelMr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`https://wa.me/91${ENTERPRISE_DATA.primaryPhone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-amber-600 text-white hover:bg-amber-700 shadow-sm hover:shadow transition-all"
            >
              {lang === 'mr' ? 'कोटेशन मिळवा' : 'Request Quote'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-800"
              >
                {lang === 'mr' ? link.labelMr : link.labelEn}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 px-4 text-center rounded-lg font-bold text-sm bg-amber-600 text-white hover:bg-amber-700 shadow-xs"
            >
              {lang === 'mr' ? 'कोटेशन मिळवा (Request Quote)' : 'Get Instant Quotation'}
            </button>
            <a
              href={`https://wa.me/91${ENTERPRISE_DATA.primaryPhone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center rounded-lg font-semibold text-sm bg-emerald-600 text-white flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp वर संपर्क साधा</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
