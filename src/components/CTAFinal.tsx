import React from 'react';
import { MessageSquare, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteData';

export const CTAFinal: React.FC = () => {
  const ctaMessage = "Olá! Meu eletrodoméstico apresentou problema. Como faço para agendar um técnico?";

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-blue-900 via-slate-950 to-blue-950 text-white border-t border-sky-500/20">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-72 h-72 bg-sky-500/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Urgency Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
          <Clock className="w-4 h-4 animate-pulse text-orange-400" />
          Atendimento Rápido em Arapongas e Região
        </div>

        {/* Big Persuasive Headline */}
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 max-w-3xl mx-auto">
          Seu eletrodoméstico quebrou?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            Resolva hoje mesmo!
          </span>
        </h2>

        {/* Short Subtitle */}
        <p className="font-body text-base sm:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl mx-auto">
          Não passe mais aperto com geladeira desligada ou roupa acumulada. Agende a visita técnica
          no conforto da sua casa com diagnóstico seguro e garantia formal.
        </p>

        {/* Main CTA Button with Pulsing Shadow */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <a
            id="cta-final-whatsapp"
            href={getWhatsAppUrl(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-[0_0_50px_rgba(234,88,12,0.4)] hover:shadow-[0_0_70px_rgba(234,88,12,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
          >
            <MessageSquare className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            <span>Falar com Técnico no WhatsApp</span>
            <ArrowRight className="w-6 h-6 text-white/90 group-hover:translate-x-1.5 transition-transform" />
          </a>

          {/* Trust Text Below Button */}
          <p className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Atendimento ágil pelo WhatsApp. Resposta em poucos minutos.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="pt-10 mt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Garantia Formal por Escrito</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            <span>Peças Genuínas de Fábrica</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Horário de Visita Agendado</span>
          </div>
        </div>

      </div>
    </section>
  );
};
