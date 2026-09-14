import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultMessage = "Olá! Preciso de ajuda com meu eletrodoméstico em Arapongas. Poderiam me atender?";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:block transition-all duration-300 origin-right ${
          isHovered
            ? 'opacity-100 scale-100 translate-x-0'
            : 'opacity-0 scale-95 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-2 rounded-xl bg-slate-900/95 text-white text-xs font-semibold shadow-2xl border border-white/10 whitespace-nowrap backdrop-blur-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Precisa de ajuda rápida? Fale no WhatsApp</span>
        </div>
      </div>

      {/* Pulsing Trigger Button */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Fale com a Jormaq no WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Pulsing ring waves */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        <span className="absolute -inset-0.5 rounded-full bg-emerald-400/30 animate-pulse pointer-events-none" />

        {/* WhatsApp message icon */}
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
