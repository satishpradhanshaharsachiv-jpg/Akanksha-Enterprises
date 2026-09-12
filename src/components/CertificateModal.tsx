import React from 'react';
import { X, ShieldCheck, Printer, CheckCircle, ExternalLink, Building2, MapPin, Landmark } from 'lucide-react';
import { Language } from '../types';
import { ENTERPRISE_DATA, ENTERPRISE_UNITS } from '../data/enterpriseData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-150">
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-bold">
                {lang === 'mr' ? 'उद्योग नोंदणी प्रमाणपत्र तपशील' : 'Udyam Registration Certificate'}
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                {ENTERPRISE_DATA.udyamNumber}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Print Certificate View"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable Certificate Representation */}
        <div className="overflow-y-auto p-6 space-y-6 text-sm">
          {/* Certificate Header Emblem Representation */}
          <div className="text-center border-b border-slate-200 pb-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 block">
              भारत सरकार • GOVERNMENT OF INDIA
            </span>
            <span className="text-xs text-slate-600 block">
              सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय (Ministry of MSME)
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 mt-2 font-serif tracking-tight">
              UDYAM REGISTRATION CERTIFICATE
            </h2>
            <div className="mt-2 inline-block bg-amber-50 text-amber-900 border border-amber-300 font-mono font-bold px-4 py-1 rounded-full text-xs">
              UDYAM REGISTRATION NUMBER: {ENTERPRISE_DATA.udyamNumber}
            </div>
          </div>

          {/* Key Facts Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-semibold text-slate-600 w-1/3">
                    {lang === 'mr' ? 'उद्योगाचे नाव' : 'Name of Enterprise'}
                  </td>
                  <td className="p-3 font-bold text-slate-900">
                    {ENTERPRISE_DATA.legalName} (Primary Unit: {ENTERPRISE_DATA.brandName})
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-600">
                    {lang === 'mr' ? 'उद्योजकाचे नाव' : 'Owner Name'}
                  </td>
                  <td className="p-3 font-bold text-slate-900">
                    {ENTERPRISE_DATA.ownerName} ({ENTERPRISE_DATA.ownerNameMr})
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-semibold text-slate-600">
                    {lang === 'mr' ? 'उद्योग वर्गवारी व स्वरूप' : 'Type of Enterprise'}
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                      MICRO (सूक्ष्म उद्योग)
                    </span>
                    <span className="ml-2 text-slate-600">Major Activity: MANUFACTURING & SERVICES</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-600">
                    {lang === 'mr' ? 'स्थापना व नोंदणी तारीख' : 'Date of Incorporation'}
                  </td>
                  <td className="p-3 text-slate-900">
                    <span className="font-semibold">{ENTERPRISE_DATA.incorporationDate}</span> (Udyam Reg: {ENTERPRISE_DATA.udyamRegistrationDate})
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-semibold text-slate-600">
                    {lang === 'mr' ? 'अधिकृत नोंदणी पत्ता' : 'Official Address'}
                  </td>
                  <td className="p-3 text-slate-800 leading-relaxed">
                    {ENTERPRISE_DATA.address.doorNo}, {ENTERPRISE_DATA.address.street}, {ENTERPRISE_DATA.address.landmark}, {ENTERPRISE_DATA.address.city}, Maharashtra, Pin: {ENTERPRISE_DATA.address.pin}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold text-slate-600">
                    {lang === 'mr' ? 'अधिकृत संपर्क व ईमेल' : 'Official Contact & Email'}
                  </td>
                  <td className="p-3 text-slate-900 font-mono">
                    Mobile: +91 {ENTERPRISE_DATA.primaryPhone} | Email: {ENTERPRISE_DATA.email}
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-semibold text-slate-600">
                    {lang === 'mr' ? 'बँक तपशील' : 'Bank Details'}
                  </td>
                  <td className="p-3 text-slate-900">
                    {ENTERPRISE_DATA.bankDetails.bankName} (IFSC: {ENTERPRISE_DATA.bankDetails.ifsc})
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Units Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {lang === 'mr' ? 'नोंदणीकृत शाखा व युनिट्स (Unit Details)' : 'Registered Operational Units'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {ENTERPRISE_UNITS.map((u) => (
                <div key={u.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                  <span className="font-bold text-slate-900 block">{u.name}</span>
                  <span className="text-amber-800 font-medium block">{u.marathiName}</span>
                  <span className="text-slate-500 block text-[11px] mt-1">{u.location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NIC Classification Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {lang === 'mr' ? 'अधिकृत उद्योग कोड (NIC Codes)' : 'National Industry Classification'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900">NIC 41002 (Manufacturing/Construction): </span>
                <span className="text-slate-600">
                  Activities relating to alteration, addition, repair, maintenance carried out on own-account basis or on a fee or contract basis.
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900">NIC 62011 (Services): </span>
                <span className="text-slate-600">
                  Writing, modifying, testing of computer program to meet the needs of a particular client.
                </span>
              </div>
            </div>
          </div>

          {/* Verification Authorities */}
          <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div>
              <span>District Industries Centre: </span>
              <strong className="text-slate-800">Aurangabad (Maharashtra)</strong>
            </div>
            <div>
              <span>MSME-DFO: </span>
              <strong className="text-slate-800">Mumbai (Maharashtra)</strong>
            </div>
            <a
              href="https://udyamregistration.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:underline font-bold flex items-center gap-1"
            >
              <span>Verify on Government Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 rounded-b-2xl flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors"
          >
            {lang === 'mr' ? 'बंद करा' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
