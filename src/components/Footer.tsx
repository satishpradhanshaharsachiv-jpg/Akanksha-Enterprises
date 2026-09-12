import React from 'react';
import { Building2, ShieldCheck, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Language } from '../types';
import { ENTERPRISE_DATA, ENTERPRISE_UNITS } from '../data/enterpriseData';

interface FooterProps {
  lang: Language;
  onOpenCertificate: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenCertificate,
  onOpenQuote,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-bold text-white font-serif block">
                  {lang === 'mr' ? 'आकांक्षा इंटरप्राईजेस' : 'Akanksha Enterprises'}
                </span>
                <span className="text-[11px] text-amber-400 font-semibold block">
                  Unit of {ENTERPRISE_DATA.legalName}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'mr'
                ? 'शासकीय नोंदणीकृत सूक्ष्म उद्योग. दर्जेदार स्थापत्य बांधकाम, इमारत मेंटेनन्स, गळती दुरुस्ती व आधुनिक कॉम्प्युटर प्रोग्रॅमिंग सोल्यूशन्स.'
                : 'Government registered Micro Enterprise. Delivering quality building works, civil renovation, waterproofing, and custom software programming.'}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs hover:border-amber-400 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>UDYAM-MH-04-0147670</span>
              </button>
            </div>
          </div>

          {/* Core Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              {lang === 'mr' ? 'प्रमुख सेवा' : 'Our Services'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {lang === 'mr' ? 'इमारत बांधकाम व आरसीसी कामे' : 'Civil Building Construction'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {lang === 'mr' ? 'दुरुस्ती, नूतनीकरण व मेंटेनन्स' : 'Repair, Alteration & Maintenance'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {lang === 'mr' ? 'वॉटरप्रूफिंग व सिपेज निवारण' : 'Waterproofing & Structural Repairs'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {lang === 'mr' ? 'कॉम्प्युटर प्रोग्रामिंग व सॉफ्टवेअर' : 'Computer Programming (NIC 6201)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {lang === 'mr' ? 'GeM व शासकीय पुरवठा' : 'GeM Portal Supply & Tenders'}
                </a>
              </li>
            </ul>
          </div>

          {/* Units / Operating centers */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              {lang === 'mr' ? 'उद्योग शाखा (Units)' : 'Operational Units'}
            </h4>
            <div className="space-y-2.5 text-xs">
              {ENTERPRISE_UNITS.map((u) => (
                <div key={u.id} className="border-b border-slate-800/80 pb-2">
                  <span className="font-semibold text-slate-200 block">{u.name}</span>
                  <span className="text-[11px] text-slate-400 block">{u.location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              {lang === 'mr' ? 'संपर्क व पत्ता' : 'Contact & Office'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {ENTERPRISE_DATA.address.doorNo}, {ENTERPRISE_DATA.address.street}, {ENTERPRISE_DATA.address.landmark}, {ENTERPRISE_DATA.address.city} - {ENTERPRISE_DATA.address.pin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:+91${ENTERPRISE_DATA.primaryPhone}`} className="hover:text-amber-400">
                  +91 {ENTERPRISE_DATA.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${ENTERPRISE_DATA.email}`} className="hover:text-amber-400 font-mono">
                  {ENTERPRISE_DATA.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full py-2 px-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs transition-colors"
              >
                {lang === 'mr' ? 'कोटेशन मिळवा' : 'Request a Quote'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-[11px]">
          <div>
            <span>
              © {new Date().getFullYear()} {ENTERPRISE_DATA.brandName} ({ENTERPRISE_DATA.brandNameMr}). All Rights Reserved.
            </span>
            <span className="block sm:inline sm:ml-2 text-slate-500">
              Proprietor: {ENTERPRISE_DATA.ownerName}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>District Industries Centre: Aurangabad</span>
            <span>•</span>
            <span>Government of India MSME</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
