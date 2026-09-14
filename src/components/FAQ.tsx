import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, MessageSquare } from 'lucide-react';
import { FAQS, getWhatsAppUrl } from '../data/siteData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900 text-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            Tire Suas Dúvidas
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Perguntas Frequentes
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed">
            Respostas diretas e transparentes sobre visitas em domicílio, garantia, orçamentos e prazos.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 mb-14">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-950 border-sky-500/50 shadow-xl shadow-sky-950/20'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 font-body text-sm sm:text-base leading-relaxed border-t border-slate-800/80 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Support Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 to-blue-950/60 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="font-body text-slate-400 text-sm">
              Nossa equipe técnica atende diretamente no WhatsApp para tirar qualquer dúvida na hora.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre o conserto do meu eletrodoméstico.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 shadow-md shadow-orange-600/30 shrink-0 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com um Técnico</span>
          </a>
        </div>

      </div>
    </section>
  );
};
