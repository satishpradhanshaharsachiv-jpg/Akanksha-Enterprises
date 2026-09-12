import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { ENTERPRISE_DATA } from '../data/enterpriseData';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  const whatsappLink = `https://wa.me/91${ENTERPRISE_DATA.primaryPhone}?text=${encodeURIComponent(
    `नमस्कार, मला आकांक्षा इंटरप्राईजेस (छत्रपती संभाजीनगर) कडून कामासंदर्भात माहिती हवी आहे.`
  )}`;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${ENTERPRISE_DATA.geo.lat},${ENTERPRISE_DATA.geo.lng}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold mb-3">
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'mr' ? 'थेट संपर्क साधा' : 'Get in Touch'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            {lang === 'mr' ? 'आमच्याशी संपर्क साधा' : 'Contact Akanksha Enterprises'}
          </h2>

          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {lang === 'mr'
              ? 'कोणत्याही बांधकाम, दुरुस्ती, शासकीय पुरवठा किंवा सॉफ्टवेअर सेवेसाठी त्वरित संपर्क करा.'
              : 'Reach out to Shri Satish Ashok Pradhan for projects, consultations, and quotations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Details & Location */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                {lang === 'mr' ? 'कार्यालय व संपर्क माहिती' : 'Office & Contact Information'}
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">
                      {lang === 'mr' ? 'थेट मोबाईल क्रमांक' : 'Primary Phone Number'}
                    </span>
                    <a
                      href={`tel:+91${ENTERPRISE_DATA.primaryPhone}`}
                      className="text-base font-bold text-slate-900 hover:text-amber-700 transition-colors"
                    >
                      +91 {ENTERPRISE_DATA.primaryPhone}
                    </a>
                    <div className="mt-1 flex items-center gap-2">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 hover:bg-emerald-100"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">
                      {lang === 'mr' ? 'अधिकृत ईमेल' : 'Official Email'}
                    </span>
                    <a
                      href={`mailto:${ENTERPRISE_DATA.email}`}
                      className="text-sm font-semibold text-slate-800 hover:text-amber-700 transition-colors font-mono"
                    >
                      {ENTERPRISE_DATA.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">
                      {lang === 'mr' ? 'नोंदणीकृत कार्यालय पत्ता' : 'Registered Office Address'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {ENTERPRISE_DATA.address.doorNo}, {ENTERPRISE_DATA.address.street}, {ENTERPRISE_DATA.address.landmark}, {ENTERPRISE_DATA.address.city}, {ENTERPRISE_DATA.address.state} - {ENTERPRISE_DATA.address.pin}
                    </p>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:underline mt-1"
                    >
                      <MapPin className="w-3 h-3" />
                      <span>{lang === 'mr' ? 'Google Maps वर मार्ग पहा' : 'View Location on Google Maps'}</span>
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">
                      {lang === 'mr' ? 'कामकाजाची वेळ' : 'Business Hours'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      {lang === 'mr'
                        ? 'सोमवार ते शनिवार: सकाळी ९:०० ते रात्री ८:००'
                        : 'Monday - Saturday: 9:00 AM - 8:00 PM'}
                    </p>
                    <span className="text-[11px] text-slate-500 block">
                      {lang === 'mr' ? 'रविवार: पूर्व नियोजनानुसार' : 'Sunday: By Appointment'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge card */}
            <div className="bg-amber-100/60 border border-amber-300/80 rounded-2xl p-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-800 shrink-0" />
              <div className="text-xs text-amber-900">
                <span className="font-bold block">
                  {lang === 'mr' ? 'अधिकृत कंत्राटदार व सेवा पुरवठादार' : 'Government Certified Contractor'}
                </span>
                <span>
                  {lang === 'mr'
                    ? 'उद्यम नोंदणी क्र. UDYAM-MH-04-0147670 सह पूर्ण शासकीय पारदर्शकता.'
                    : 'Registered with MSME, Govt of India with verifiable certification.'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1 font-serif">
                {lang === 'mr' ? 'संदेश पाठवा' : 'Send a Quick Message'}
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                {lang === 'mr'
                  ? 'आम्हाला आपल्या कामाची माहिती कळवा, आम्ही लवकरच आपल्याशी संपर्क करू.'
                  : 'Drop your requirement, and we will get back to you promptly.'}
              </p>

              {sent ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900 font-serif">
                    {lang === 'mr' ? 'संदेश यशस्वीरित्या पाठवला!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {lang === 'mr'
                      ? 'धन्यवाद! आकांक्षा इंटरप्राईजेसकडून लवकरच आपल्याला कॉल केला जाईल.'
                      : 'Thank you! We will get in touch with you shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'mr' ? 'नाव (Full Name) *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'mr' ? 'आपले नाव प्रविष्ट करा' : 'Your name'}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'mr' ? 'मोबाईल नंबर (Mobile Number) *' : 'Mobile Number *'}
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
                      {lang === 'mr' ? 'संदेश किंवा कामाचा तपशील *' : 'Message or Project Details *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        lang === 'mr'
                          ? 'उदा. मला संभाजीनगर येथे नवीन घर बांधकामाचे किंवा दुरुस्तीचे काम करायचे आहे...'
                          : 'Describe your construction, repair, or software requirement...'
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'mr' ? 'संदेश पाठवा (Send Message)' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
