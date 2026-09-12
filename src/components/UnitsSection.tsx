import React from 'react';
import { Building, MapPin, User, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { ENTERPRISE_UNITS, ENTERPRISE_DATA } from '../data/enterpriseData';

interface UnitsSectionProps {
  lang: Language;
}

export const UnitsSection: React.FC<UnitsSectionProps> = ({ lang }) => {
  return (
    <section id="units" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3 border border-slate-200">
            <Building className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'mr' ? 'उद्योगाचे अधिकृत युनिट्स' : 'Registered Operating Units'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif">
            {lang === 'mr' ? 'उद्योग शाखा व कार्यक्षेत्र' : 'Units & Network in Chhatrapati Sambhajinagar'}
          </h2>

          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {lang === 'mr'
              ? 'उद्योग नोंदणीनुसार (UDYAM-MH-04-0147670) कार्यरत असलेल्या ३ अधिकृत शाखा'
              : 'Official operational units recognized under Udyam Certificate UDYAM-MH-04-0147670'}
          </p>
        </div>

        {/* Units Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENTERPRISE_UNITS.map((unit) => (
            <div
              key={unit.id}
              className={`rounded-2xl p-6 border transition-all ${
                unit.id === 'unit-3'
                  ? 'bg-amber-50/50 border-amber-300 shadow-md ring-1 ring-amber-300'
                  : 'bg-slate-50/60 border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold bg-white text-slate-800 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                  UNIT 0{unit.unitNumber}
                </span>
                {unit.id === 'unit-3' ? (
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                    {lang === 'mr' ? 'मुख्य संकेतस्थळ' : 'Flagship Unit'}
                  </span>
                ) : (
                  <span className="text-[11px] font-medium text-slate-500">
                    {lang === 'mr' ? 'सहयोगी युनिट' : 'Allied Unit'}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-serif">
                {unit.name}
              </h3>
              <p className="text-xs text-amber-800 font-semibold mb-3">
                {unit.marathiName}
              </p>

              <div className="space-y-2.5 text-xs text-slate-600 mb-5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {unit.address} (पिन: {unit.pincode})
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-xs">
                <span className="text-slate-500 font-medium block mb-1">
                  {lang === 'mr' ? 'विशेष कार्यक्षेत्र:' : 'Core Responsibility:'}
                </span>
                <span className="text-slate-800 font-bold">
                  {lang === 'mr' ? unit.focusMr : unit.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Callout */}
        <div className="mt-10 max-w-2xl mx-auto p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">
              {lang === 'mr' ? 'संस्थापक व अधिकृत स्वाक्षरीकार' : 'Proprietor & Authorized Signatory'}
            </span>
            <span className="text-base font-bold text-white block mt-0.5">
              {lang === 'mr' ? ENTERPRISE_DATA.ownerNameMr : ENTERPRISE_DATA.ownerName}
            </span>
            <span className="text-xs text-slate-300 block mt-0.5">
              {lang === 'mr'
                ? 'छत्रपती संभाजीनगर येथे मागील ६+ वर्षांपासून निरंतर विश्वासार्ह सेवा.'
                : 'Delivering trusted building and engineering services in Sambhajinagar since 2018.'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
