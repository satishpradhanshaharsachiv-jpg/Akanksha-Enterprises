import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, FileText, ExternalLink, QrCode, Copy, Check, Printer } from 'lucide-react';
import { Language } from '../types';
import { ENTERPRISE_DATA, ENTERPRISE_UNITS } from '../data/enterpriseData';

interface UdyamVerificationProps {
  lang: Language;
}

export const UdyamVerificationCard: React.FC<UdyamVerificationProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'units' | 'nic'>('overview');

  const handleCopyUdyam = () => {
    navigator.clipboard.writeText(ENTERPRISE_DATA.udyamNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="udyam" className="py-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {lang === 'mr'
                ? 'भारत सरकार सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय'
                : 'Ministry of Micro, Small and Medium Enterprises, Govt. of India'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-serif">
            {lang === 'mr'
              ? 'अधिकृत उद्योग नोंदणी प्रमाणपत्र (Udyam Certificate)'
              : 'Official Udyam Registration & Enterprise Verification'}
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'mr'
              ? 'आकांक्षा इंटरप्राईजेस (Akanksha Enterprises) ही केंद्र शासनाच्या MSME विभागांतर्गत अधिकृत नोंदणीकृत सूक्ष्म उद्योग संस्था असून पारदर्शक व खात्रीशीर कामाची हमी देते.'
              : 'Akanksha Enterprises is an officially recognized Micro Enterprise under the Ministry of MSME, adhering to government standards of quality and service.'}
          </p>
        </div>

        {/* Certificate Display Card */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl backdrop-blur">
          {/* Certificate Top Ribbon */}
          <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/40">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-amber-100 font-semibold block">
                  GOVERNMENT OF INDIA • भारत सरकार
                </span>
                <span className="text-base sm:text-lg font-bold text-white">
                  UDYAM REGISTRATION CERTIFICATE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-slate-900/60 rounded-lg px-3 py-1.5 flex items-center gap-2 border border-amber-300/30">
                <span className="text-xs text-amber-200 font-medium">Udyam No:</span>
                <span className="font-mono font-bold text-sm text-white tracking-wider">
                  {ENTERPRISE_DATA.udyamNumber}
                </span>
                <button
                  type="button"
                  onClick={handleCopyUdyam}
                  className="p-1 hover:bg-white/10 rounded transition-colors text-amber-300"
                  title="Copy Udyam Number"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href="https://udyamregistration.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-slate-900 hover:bg-amber-50 transition-colors shadow-xs"
              >
                <span>Verify on Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Navigation Tabs inside certificate */}
          <div className="border-b border-slate-700 px-6 pt-3 flex gap-4 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-2 border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'mr' ? 'नोंदणी मुख्य माहिती' : 'Certificate Overview'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('units')}
              className={`pb-3 px-2 border-b-2 transition-colors ${
                activeTab === 'units'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'mr' ? 'नोंदणीकृत युनिट्स (३ शाखा)' : 'Registered Units (3)'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('nic')}
              className={`pb-3 px-2 border-b-2 transition-colors ${
                activeTab === 'nic'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'mr' ? 'उद्योग वर्गीकरण (NIC Codes)' : 'Classification Codes'}
            </button>
          </div>

          {/* Tab Content 1: Overview */}
          {activeTab === 'overview' && (
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Field */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                  <span className="text-xs text-slate-400 block mb-1">
                    {lang === 'mr' ? 'उद्योगाचे नाव (Enterprise Name):' : 'Name of Enterprise:'}
                  </span>
                  <span className="text-base font-bold text-white block">
                    {ENTERPRISE_DATA.legalName}
                  </span>
                  <span className="text-xs text-amber-400 mt-1 block">
                    Unit: {ENTERPRISE_DATA.brandName} (आकांक्षा इंटरप्राईजेस)
                  </span>
                </div>

                {/* Field */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                  <span className="text-xs text-slate-400 block mb-1">
                    {lang === 'mr' ? 'उद्योजक / मालक (Owner Name):' : 'Owner / Entrepreneur:'}
                  </span>
                  <span className="text-base font-bold text-white block">
                    {ENTERPRISE_DATA.ownerName}
                  </span>
                  <span className="text-xs text-slate-300 mt-1 block">
                    {ENTERPRISE_DATA.ownerNameMr}
                  </span>
                </div>

                {/* Field */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                  <span className="text-xs text-slate-400 block mb-1">
                    {lang === 'mr' ? 'उद्योग वर्गवारी (Type of Enterprise):' : 'Type of Enterprise:'}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      MICRO (सूक्ष्म)
                    </span>
                    <span className="text-xs text-slate-300">
                      {ENTERPRISE_DATA.category} Category
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Mfg & Services
                  </span>
                </div>

                {/* Field */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                  <span className="text-xs text-slate-400 block mb-1">
                    {lang === 'mr' ? 'नोंदणी तारीख (Date of Registration):' : 'Registration Date:'}
                  </span>
                  <span className="text-sm font-semibold text-white block">
                    Incorporated: {ENTERPRISE_DATA.incorporationDate}
                  </span>
                  <span className="text-xs text-slate-300 block mt-0.5">
                    Udyam Date: {ENTERPRISE_DATA.udyamRegistrationDate}
                  </span>
                </div>

                {/* Field */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                  <span className="text-xs text-slate-400 block mb-1">
                    {lang === 'mr' ? 'उद्योग कार्यक्षेत्र व पत्ता:' : 'Registered Premises:'}
                  </span>
                  <span className="text-xs text-slate-200 block leading-relaxed">
                    {ENTERPRISE_DATA.address.doorNo}, {ENTERPRISE_DATA.address.street}, {ENTERPRISE_DATA.address.landmark}, {ENTERPRISE_DATA.address.city} - {ENTERPRISE_DATA.address.pin}
                  </span>
                </div>

                {/* Field */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                  <span className="text-xs text-slate-400 block mb-1">
                    {lang === 'mr' ? 'शासकीय पोर्टल जोडणी:' : 'Govt Portal Integration:'}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>GeM Portal (Government e-Market) Registered</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>TReDS Portal Registered</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick verification strip */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900/40 border border-slate-700/50 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <QrCode className="w-8 h-8 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-white font-semibold block">
                      {lang === 'mr' ? 'डिजिटल पडताळणी उपलब्ध' : 'Verified QR Code Authentication'}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      District Industries Centre: Aurangabad (Chhatrapati Sambhajinagar) • MSME-DFO Mumbai
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-3 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{lang === 'mr' ? 'प्रत प्रिंट करा' : 'Print Info'}</span>
                  </button>
                  <a
                    href={`tel:+91${ENTERPRISE_DATA.primaryPhone}`}
                    className="px-3 py-1.5 rounded bg-amber-600 hover:bg-amber-700 text-white font-bold"
                  >
                    {lang === 'mr' ? 'थेट फोन करा' : 'Call Office'}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Units */}
          {activeTab === 'units' && (
            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-xs text-slate-300">
                {lang === 'mr'
                  ? 'सदर उद्योग प्रमाणपत्रांतर्गत नोंदणीकृत असलेल्या ३ अधिकृत शाखा व युनिट्स खालीलप्रमाणे आहेत:'
                  : 'Official business units registered under Udyam certificate UDYAM-MH-04-0147670:'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ENTERPRISE_UNITS.map((unit) => (
                  <div
                    key={unit.id}
                    className={`p-5 rounded-xl border ${
                      unit.id === 'unit-3'
                        ? 'bg-amber-950/30 border-amber-500/50 ring-1 ring-amber-500/30'
                        : 'bg-slate-900/60 border-slate-700/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-amber-400">
                        Unit {unit.unitNumber}
                      </span>
                      {unit.id === 'unit-3' && (
                        <span className="text-[10px] uppercase font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                          Primary Website Unit
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {unit.name}
                    </h4>
                    <p className="text-xs text-amber-200 font-medium mb-2">
                      {unit.marathiName}
                    </p>
                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {unit.address}
                    </p>
                    <div className="pt-2 border-t border-slate-700/50 text-xs">
                      <span className="text-slate-400 block text-[11px]">
                        {lang === 'mr' ? 'प्रमुख कार्यक्षेत्र:' : 'Specialization:'}
                      </span>
                      <span className="text-slate-200 font-medium">
                        {lang === 'mr' ? unit.focusMr : unit.focus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content 3: NIC Codes */}
          {activeTab === 'nic' && (
            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-xs text-slate-300">
                {lang === 'mr'
                  ? 'राष्ट्रीय उद्योग वर्गीकरण (National Industry Classification Code) नुसार अधिकृत सेवा:'
                  : 'Authorized activities under National Industry Classification (NIC):'}
              </p>

              <div className="space-y-3">
                {/* NIC Code 1 */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                      NIC 41 - Construction of Building (41002)
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      Manufacturing / Civil Operations
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Activities relating to alteration, addition, repair, maintenance carried out on own-account basis or on a fee or contract basis.
                  </h4>
                  <p className="text-xs text-slate-300">
                    {lang === 'mr'
                      ? 'इमारतींची दुरुस्ती, वाढीव बांधकाम (Addition/Alteration), वॉटरप्रूफिंग, मेंटेनन्स तसेच स्वतःच्या किंवा कंत्राट (ठेकेदारी) तत्वावरील कामे.'
                      : 'Comprehensive building maintenance, renovation, repair, structural alterations, executed on fee or contract terms.'}
                  </p>
                </div>

                {/* NIC Code 2 */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                      NIC 62 - Computer programming, consultancy (62011)
                    </span>
                    <span className="text-xs font-semibold text-blue-400">
                      Services Sector
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Writing, modifying, testing of computer program to meet the needs of a particular client.
                  </h4>
                  <p className="text-xs text-slate-300">
                    {lang === 'mr'
                      ? 'ग्राहकांच्या गरजेनुसार सानुकूल (Custom) सॉफ्टवेअर तयार करणे, बदल करणे, टेस्टिंग, तांत्रिक कन्सल्टन्सी व कॉम्प्युटर सेवा.'
                      : 'Tailored software programming, application adaptation, testing workflows, and computer IT consulting.'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
