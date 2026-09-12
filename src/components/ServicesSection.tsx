import React, { useState } from 'react';
import { HardHat, Wrench, Laptop, FileCheck, CheckCircle2, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { SERVICES_LIST, ENTERPRISE_DATA } from '../data/enterpriseData';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'construction' | 'it' | 'gov_contracts'>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-amber-700" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-700" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-700" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-emerald-700" />;
      default:
        return <HardHat className="w-6 h-6 text-amber-700" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold mb-3">
            <span>{lang === 'mr' ? 'अधिकृत व्यावसायिक सेवा' : 'Our Professional Verticals'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            {lang === 'mr' ? 'आकांक्षा इंटरप्राईजेसच्या प्रमुख सेवा' : 'Core Services & Solutions'}
          </h2>

          <p className="mt-3 text-slate-600 text-base">
            {lang === 'mr'
              ? 'स्थापत्य बांधकाम, स्ट्रक्चरल मेंटेनन्स ते आधुनिक सॉफ्टवेअर प्रोग्रामिंग पर्यंत सर्व सेवा अधिकृत सूक्ष्म उद्योग प्रमाणपत्रासह उपलब्ध.'
              : 'End-to-end civil construction, structural maintenance, and custom IT software programming backed by MSME certification.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              {lang === 'mr' ? 'सर्व सेवा (All)' : 'All Services'}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('construction')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === 'construction'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              {lang === 'mr' ? 'बांधकाम व मेंटेनन्स (Civil)' : 'Construction & Repair'}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('it')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === 'it'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              {lang === 'mr' ? 'सॉफ्टवेअर व आयटी (Software)' : 'Computer & IT (NIC 6201)'}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('gov_contracts')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === 'gov_contracts'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              {lang === 'mr' ? 'GeM व शासकीय कंत्राट' : 'GeM Portal Supply'}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                    {getIcon(service.icon)}
                  </div>
                  {service.nicCode && (
                    <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                      {service.nicCode}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                  {lang === 'mr' ? service.titleMr : service.titleEn}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {lang === 'mr' ? service.descriptionMr : service.descriptionEn}
                </p>

                {/* Features Bullet points */}
                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {(lang === 'mr' ? service.featuresMr : service.featuresEn).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectService(lang === 'mr' ? service.titleMr : service.titleEn)}
                  className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>{lang === 'mr' ? 'या कामासाठी कोटेशन मागवा' : 'Inquire / Get Quote'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`tel:+91${ENTERPRISE_DATA.primaryPhone}`}
                  className="p-2 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                  title="थेट कॉल करा"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Turnkey & Contract Terms */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-amber-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900 font-serif">
              {lang === 'mr'
                ? 'शासकीय व खाजगी कंत्राट तत्वावर (Contract Basis) कामांसाठी संपर्क'
                : 'Need Turnkey Contracting or Annual Maintenance (AMC)?'}
            </h4>
            <p className="text-sm text-slate-600 max-w-2xl">
              {lang === 'mr'
                ? 'आकांक्षा इंटरप्राईजेसकडे अधिकृत जीएसटी (GST), उद्योग आधार व स्टेट बँक ऑफ इंडिया खात्यासह पूर्ण पारदर्शक बिलिंग सुविधा उपलब्ध आहे.'
                : 'Full banking, GST, MSME compliance, and bank credentials with State Bank of India for seamless procurement.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:+91${ENTERPRISE_DATA.primaryPhone}`}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 {ENTERPRISE_DATA.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
