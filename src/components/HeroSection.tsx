import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Award, Hammer, Laptop, FileCheck2, CheckCircle2, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { ENTERPRISE_DATA } from '../data/enterpriseData';

interface HeroSectionProps {
  lang: Language;
  onOpenQuote: () => void;
  onViewCertificate: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenQuote,
  onViewCertificate,
}) => {
  const whatsappMessage = encodeURIComponent(
    `नमस्कार सतीश सर, मला आकांक्षा इंटरप्राईजेसच्या कामाबद्दल माहिती हवी आहे.`
  );

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Subtle architectural grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Subtext, Badges & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>
                {lang === 'mr'
                  ? 'भारत सरकार MSME उद्योग नोंदणीकृत • UDYAM-MH-04-0147670'
                  : 'Govt. of India MSME Registered • UDYAM-MH-04-0147670'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {lang === 'mr' ? (
                  <>
                    विश्वासार्ह <span className="text-amber-700 underline decoration-amber-300 decoration-wavy decoration-2">बांधकाम व मेंटेनन्स</span> तसेच आधुनिक आयटी सोल्यूशन्स
                  </>
                ) : (
                  <>
                    Quality <span className="text-amber-700">Civil Construction</span>, Building Repairs & Custom IT Services
                  </>
                )}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700">
                {lang === 'mr'
                  ? 'आकांक्षा इंटरप्राईजेस (SP Construction समूह)'
                  : 'Akanksha Enterprises (Unit of SP Construction)'}
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              {lang === 'mr'
                ? 'छत्रपती संभाजीनगर (औरंगाबाद) येथे २०१८ पासून निवासी व व्यावसायिक इमारत बांधकाम, नूतनीकरण, गळती दुरुस्ती, कंत्राट कामे तसेच सानुकूल सॉफ्टवेअर प्रोग्रामिंग व GeM पुरवठा क्षेत्रात अग्रगण्य आणि विश्वासार्ह नाव.'
                : 'Providing certified construction, building alterations, waterproofing, repair contracts, and custom computer programming solutions in Chhatrapati Sambhajinagar (Aurangabad) since 2018.'}
            </p>

            {/* Key feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'mr' ? 'शासकीय नोंदणीकृत सूक्ष्म उद्योग (Micro Enterprise)' : 'Official Registered Micro Enterprise'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'mr' ? 'सिव्हिल बांधकाम व मेंटेनन्स (NIC 41002)' : 'Civil Alteration & Maintenance (NIC 41002)'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'mr' ? 'कॉम्प्युटर प्रोग्रामिंग व सॉफ्टवेअर (NIC 6201)' : 'Computer Programming & IT (NIC 6201)'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'mr' ? 'GeM पोर्टल नोंदणीकृत पुरवठादार' : 'GeM Portal Registered Supplier'}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>{lang === 'mr' ? 'मोफत कोटेशन मिळवा' : 'Request Quotation'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:+91${ENTERPRISE_DATA.primaryPhone}`}
                className="px-5 py-3.5 rounded-xl bg-white border-2 border-slate-300 hover:border-amber-600 text-slate-800 hover:text-amber-700 font-bold text-sm transition-all flex items-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>{lang === 'mr' ? 'थेट संपर्क साधा' : 'Call Now'}</span>
              </a>

              <a
                href={`https://wa.me/91${ENTERPRISE_DATA.primaryPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Verified Business Identity Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200/90 relative">
              {/* Header inside card */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      {lang === 'mr' ? 'अधिकृत उद्योग ओळख' : 'Government Accredited Entity'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 font-serif">
                    {ENTERPRISE_DATA.brandNameMr}
                  </h3>
                  <p className="text-xs text-slate-500">{ENTERPRISE_DATA.brandName} • Unit 3</p>
                </div>
                <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-amber-700" />
                </div>
              </div>

              {/* Verified Details Rows */}
              <div className="space-y-3.5 py-4 text-sm">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-slate-500 text-xs">
                    {lang === 'mr' ? 'उद्योग नोंदणी क्रमांक:' : 'Udyam Registration:'}
                  </span>
                  <span className="font-mono font-bold text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-900 border border-slate-200">
                    {ENTERPRISE_DATA.udyamNumber}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-2">
                  <span className="text-slate-500 text-xs">
                    {lang === 'mr' ? 'संस्थापक / मालक:' : 'Proprietor:'}
                  </span>
                  <span className="font-semibold text-slate-900 text-xs text-right">
                    {lang === 'mr' ? ENTERPRISE_DATA.ownerNameMr : ENTERPRISE_DATA.ownerName}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-2">
                  <span className="text-slate-500 text-xs">
                    {lang === 'mr' ? 'उद्योग श्रेणी:' : 'Enterprise Category:'}
                  </span>
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-xs">
                    Micro Enterprise (सूक्ष्म उद्योग)
                  </span>
                </div>

                <div className="flex justify-between items-start gap-2">
                  <span className="text-slate-500 text-xs">
                    {lang === 'mr' ? 'नोंदणी तारीख:' : 'Incorporated Date:'}
                  </span>
                  <span className="font-medium text-slate-800 text-xs">
                    04/12/2018 (६+ वर्षांचा अनुभव)
                  </span>
                </div>

                <div className="flex justify-between items-start gap-2">
                  <span className="text-slate-500 text-xs">
                    {lang === 'mr' ? 'पत्ता / कार्यक्षेत्र:' : 'Location:'}
                  </span>
                  <span className="font-medium text-slate-800 text-xs text-right max-w-[200px]">
                    सिपेट कॉलेज परिसर, छत्रपती संभाजीनगर (४३१००३)
                  </span>
                </div>
              </div>

              {/* Three Service Badges preview */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Hammer className="w-4 h-4 mx-auto text-amber-700 mb-1" />
                  <span className="text-[11px] font-semibold text-slate-800 block leading-tight">
                    {lang === 'mr' ? 'बांधकाम' : 'Civil Work'}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Laptop className="w-4 h-4 mx-auto text-blue-700 mb-1" />
                  <span className="text-[11px] font-semibold text-slate-800 block leading-tight">
                    {lang === 'mr' ? 'आयटी / सॉफ्टवेअर' : 'Software'}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <FileCheck2 className="w-4 h-4 mx-auto text-emerald-700 mb-1" />
                  <span className="text-[11px] font-semibold text-slate-800 block leading-tight">
                    {lang === 'mr' ? 'शासकीय कंत्राट' : 'GeM Supply'}
                  </span>
                </div>
              </div>

              {/* Action: Open Certificate Modal */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={onViewCertificate}
                  className="w-full py-2.5 px-3 rounded-lg border border-amber-500/50 bg-amber-50/50 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>
                    {lang === 'mr'
                      ? 'अधिकृत उद्योग आधार प्रमाणपत्र तपशील पहा'
                      : 'View Government Udyam Certificate Details'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
