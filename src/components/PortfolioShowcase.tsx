import React from 'react';
import { CheckCircle2, ShieldAlert, Award, Hammer, HardHat } from 'lucide-react';
import { Language } from '../types';

interface PortfolioShowcaseProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ lang, onOpenQuote }) => {
  const projects = [
    {
      titleMr: 'निवासी व व्यावसायिक आरसीसी बांधकाम',
      titleEn: 'Residential & Commercial RCC Construction',
      tagMr: 'नवीन बांधकाम',
      tagEn: 'New Construction',
      descMr: 'मजबूत पाया, दर्जेदार आरसीसी फ्रेम, विटांचे बांधकाम, प्लास्टर आणि आधुनिक फिनिशिंगसह संपूर्ण इमारत उभारणी.',
      descEn: 'Earthquake-resistant RCC framing, superior quality brickwork, precise external/internal plastering, and turnkey finish.',
      highlight: 'Turnkey Execution',
    },
    {
      titleMr: 'इमारत स्ट्रक्चरल दुरुस्ती व नूतनीकरण',
      titleEn: 'Building Structural Renovation & Repairs',
      tagMr: 'दुरुस्ती व नूतनीकरण',
      tagEn: 'Renovation & Repair',
      descMr: 'क्रॅक रिपेअर, कॉलम जॅकेटिंग, स्लॅब दुरुस्ती, फ्लोअरिंग बदलणे आणि रंगकामासह जुन्या इमारतींचे संपूर्ण पुनरुज्जीवन.',
      descEn: 'Crack rehabilitation, column jacketing, slab repair, floor tiles replacement, and exterior weather-coat painting.',
      highlight: 'NIC 41002 Standard',
    },
    {
      titleMr: 'टेरेस व बेसमेंट वॉटरप्रूफिंग सोल्यूशन्स',
      titleEn: 'Terrace & Basement Waterproofing Systems',
      tagMr: 'गळती निवारण',
      tagEn: 'Waterproofing',
      descMr: 'पावसाळ्यातील छताची गळती, भिंतींचा ओलावा (Dampness) व सिपेजवर खात्रीशीर केमिकल कोटिंग व पॉलिमर ट्रीटमेंट.',
      descEn: 'Guaranteed chemical coating, polymer membrane treatment, and elastomeric waterproofing for terraces and wet areas.',
      highlight: 'Zero Leakage Guarantee',
    },
    {
      titleMr: 'सानुकूल सॉफ्टवेअर व ऑफिस आयटी ऑटोमेशन',
      titleEn: 'Custom Software & IT Automation Workflows',
      tagMr: 'संगणक व सॉफ्टवेअर',
      tagEn: 'Software & IT',
      descMr: 'ग्राहकांच्या गरजेनुसार बिलिंग, इन्व्हेंटरी आणि वर्कफ्लो सॉफ्टवेअर प्रोग्रामिंग (NIC 62011), टेस्टिंग व कन्सल्टन्सी.',
      descEn: 'Bespoke billing software, local inventory automation, client workflow adaptation, testing, and technical advisory.',
      highlight: 'NIC 62011 Compliant',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold mb-2">
              <Hammer className="w-3.5 h-3.5 text-amber-700" />
              <span>{lang === 'mr' ? 'कामकाज व गुणवत्ता' : 'Execution & Workmanship'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif">
              {lang === 'mr' ? 'कामाचे प्रमुख पैलू व कार्यपद्धती' : 'Work Standards & Project Capabilities'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenQuote}
            className="self-start md:self-auto px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shadow-xs"
          >
            {lang === 'mr' ? 'आपल्या कामासाठी चर्चा करा' : 'Consult for Your Project'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                    {lang === 'mr' ? proj.tagMr : proj.tagEn}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">
                    {proj.highlight}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 font-serif">
                  {lang === 'mr' ? proj.titleMr : proj.titleEn}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'mr' ? proj.descMr : proj.descEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{lang === 'mr' ? 'वेळेत पूर्णतेची खात्री' : 'Quality Assured Delivery'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
