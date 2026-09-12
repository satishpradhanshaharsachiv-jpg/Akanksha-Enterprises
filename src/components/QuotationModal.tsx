import React, { useState } from 'react';
import { X, Send, Calculator, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { Language } from '../types';
import { ENTERPRISE_DATA } from '../data/enterpriseData';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedService?: string;
}

export const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedService = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'civil');
  const [area, setArea] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppText = () => {
    const serviceName =
      service === 'civil'
        ? 'इमारत बांधकाम (Civil Construction)'
        : service === 'repair'
        ? 'दुरुस्ती व नूतनीकरण (Repair & Renovation)'
        : service === 'waterproofing'
        ? 'वॉटरप्रूफिंग व सिपेज काम (Waterproofing)'
        : service === 'it'
        ? 'कॉम्प्युटर प्रोग्रामिंग व सॉफ्टवेअर (IT Services)'
        : 'GeM व शासकीय पुरवठा (Government Supply)';

    return encodeURIComponent(
      `*नवीन कोटेशन चौकशी (Akanksha Enterprises)*\n` +
      `👤 नाव: ${name || 'ग्राहक'}\n` +
      `📞 फोन: ${phone || 'उपलब्ध नाही'}\n` +
      `🏗️ सेवा: ${serviceName}\n` +
      (area ? `📐 अंदाजे क्षेत्रफळ: ${area} चौ.फूट (sq.ft)\n` : '') +
      (notes ? `📝 कामाचा तपशील: ${notes}\n` : '') +
      `📍 संदर्भ: अधिकृत वेबसाईट`
    );
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setArea('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-150">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  {lang === 'mr' ? 'मोफत कोटेशन व अंदाजपत्रक' : 'Request Free Quotation'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'mr'
                    ? 'कामाचा तपशील भरा, आम्ही त्वरित अचूक अंदाज देऊ'
                    : 'Fill details for an accurate cost estimation'}
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mt-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'mr' ? 'आपले नाव *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'mr' ? 'उदा. राहुल शिंदे' : 'e.g. Rahul Shinde'}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'mr' ? 'मोबाईल नंबर *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="8668235395"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'mr' ? 'सेवेचा प्रकार *' : 'Select Service *'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                >
                  <option value="civil">
                    {lang === 'mr' ? 'इमारत बांधकाम (Civil Construction)' : 'Civil Building Construction'}
                  </option>
                  <option value="repair">
                    {lang === 'mr' ? 'दुरुस्ती, नूतनीकरण व मेंटेनन्स' : 'Repair, Alteration & Renovation'}
                  </option>
                  <option value="waterproofing">
                    {lang === 'mr' ? 'वॉटरप्रूफिंग व सिपेज निवारण' : 'Waterproofing & Leakage'}
                  </option>
                  <option value="it">
                    {lang === 'mr' ? 'सॉफ्टवेअर प्रोग्रामिंग व आयटी कन्सल्टन्सी' : 'Software & Computer Programming'}
                  </option>
                  <option value="gem">
                    {lang === 'mr' ? 'GeM व शासकीय कंत्राट पुरवठा' : 'GeM Portal & Public Supply'}
                  </option>
                </select>
              </div>

              {(service === 'civil' || service === 'repair' || service === 'waterproofing') && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'mr' ? 'अंदाजे क्षेत्रफळ (चौ.फूट / Sq.Ft)' : 'Estimated Area (Sq.Ft)'}
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="उदा. 1200 sq.ft"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'mr' ? 'कामाचे संक्षिप्त स्वरूप' : 'Brief Work Requirements'}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    lang === 'mr'
                      ? 'कामाचे ठिकाण, आवश्यक साहित्य किंवा विशिष्ट गरजा नमूद करा...'
                      : 'Provide site location, project schedule, or specific notes...'
                  }
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/91${ENTERPRISE_DATA.primaryPhone}?text=${generateWhatsAppText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'mr' ? 'WhatsApp वर त्वरित कोटेशन पाठवा' : 'Send Request via WhatsApp'}</span>
                </a>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'mr' ? 'वेबसाईटवरून पाठवा (Submit Online)' : 'Submit Online Request'}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-serif">
              {lang === 'mr' ? 'चौकशी यशस्वीरित्या नोंदवली गेली!' : 'Inquiry Submitted Successfully!'}
            </h3>

            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              {lang === 'mr'
                ? `धन्यवाद ${name}! आकांक्षा इंटरप्राईजेस (Shri Satish Pradhan) लवकरच ${phone} वर संपर्क साधून अंदाजपत्रक सादर करतील.`
                : `Thank you ${name}! Akanksha Enterprises will contact you at ${phone} with project estimation.`}
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
              <span className="font-semibold block">त्वरित माहितीसाठी थेट संपर्क:</span>
              <a href={`tel:+91${ENTERPRISE_DATA.primaryPhone}`} className="text-amber-700 font-bold text-sm block mt-1">
                📞 +91 {ENTERPRISE_DATA.primaryPhone}
              </a>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 rounded-lg bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition-colors"
            >
              {lang === 'mr' ? 'बंद करा' : 'Done'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
