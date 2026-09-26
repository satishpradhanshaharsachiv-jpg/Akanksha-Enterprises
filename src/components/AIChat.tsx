import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';

interface AIChatProps {
  lang: 'mr' | 'en';
}

export const AIChat: React.FC<AIChatProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: lang === 'mr' 
        ? 'नमस्कार! मी आकांक्षा इंटरप्राईजेसचा एआय सहाय्यक आहे. मी तुम्हाला कशी मदत करू?' 
        : 'Hello! I am the AI assistant for Akanksha Enterprises. How can I help you today?'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setLoading(true);

    try {
      // इथे आपण थेट गुगल जेमिनी एआयला मेसेज पाठवत आहोत
      const apiKey = "AIzaSyCYcah2g3Ut8syKKawbzspvFUL-XBnBjtA"; // तुमची ॲपमधील की
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `User asks about Akanksha Enterprises (Civil construction, software, Udyam registered): ${userMessage}. Please reply simply in ${lang === 'mr' ? 'Marathi' : 'English'}.` }] }]
        })
      });

      const data = await response.json();
      const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || (lang === 'mr' ? 'क्षमस्व, उत्तर मिळण्यात अडचण आली.' : 'Sorry, encountered an issue.');

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'bot', text: lang === 'mr' ? 'तांत्रिक अडचण आली आहे.' : 'Technical error occurred.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-5 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white p-3.5 rounded-full shadow-lg flex items-center gap-2 transition-all"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="font-bold text-sm hidden sm:inline">{lang === 'mr' ? 'एआय चॅट' : 'AI Chat'}</span>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 flex flex-col h-[450px] overflow-hidden">
          {/* Header */}
          <div className="bg-amber-700 text-white p-3.5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-bold text-sm">{lang === 'mr' ? 'आकांक्षा एआय सहाय्यक' : 'Akanksha AI Assistant'}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-slate-200">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Box */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-50 text-sm">
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-amber-700" /></div>}
                <div className={`p-2.5 rounded-xl max-w-[75%] ${msg.sender === 'user' ? 'bg-amber-600 text-white rounded-br-none' : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'}`}>
                  {msg.text}
                </div>
                {msg.sender === 'user' && <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center shrink-0"><User className="w-4 h-4 text-slate-700" /></div>}
              </div>
            ))}
            {loading && <div className="text-xs text-slate-500 italic text-center">टाइप करत आहे... (Typing...)</div>}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-2.5 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === 'mr' ? 'तुमचा प्रश्न इथे लिहा...' : 'Type your question...'}
              className="flex-1 px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-amber-600"
            />
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
