import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Star, Mouse, ChevronDown, Award } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';

export const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroWhatsAppMsg = "Olá! Vim pelo site e gostaria de agendar uma visita técnica para meu eletrodoméstico.";

  const scrollToServices = () => {
    const el = document.querySelector('#servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-slate-950 pt-20 pb-16"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-[125%] -top-[10%] pointer-events-none will-change-transform"
        style={{
          transform: `translateY(${offsetY * 0.25}px)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85"
          alt="Técnico especialista em conserto de eletrodomésticos"
          className="w-full h-full object-cover object-center opacity-45 scale-105"
        />
      </div>

      {/* Dark Multi-Directional Gradient Overlays for High Contrast Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
        <div className="max-w-3xl text-left">
          
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-sky-300 text-xs sm:text-sm font-medium mb-6 shadow-lg backdrop-blur-md">
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">5.0</span>
            </span>
            <span className="text-slate-400">|</span>
            <span>Arapongas e Região</span>
            <span className="text-slate-400">|</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Atendimento em Domicílio
            </span>
          </div>

          {/* Main H1 Headline (3-4 lines with focal words highlighted in vibrant orange) */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Conserto Rápido de Eletrodomésticos no{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              Conforto da Sua Casa
            </span>{' '}
            com Garantia Formal
          </h1>

          {/* Subtitle (1-2 lines emphasizing speed, transparency, and certified technicians) */}
          <p className="font-body text-base sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
            Geladeira parada, lavadora vazando ou ar-condicionado sem gelar? Nossos técnicos
            certificados realizam o diagnóstico e o conserto no mesmo dia com peças originais e preço justo.
          </p>

          {/* Primary CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              id="hero-cta-whatsapp"
              href={getWhatsAppUrl(heroWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-2xl shadow-orange-600/40 hover:shadow-orange-500/60 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              <span>Solicitar Visita Técnica Agora</span>
              <ArrowRight className="w-5 h-5 text-white/90 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              type="button"
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-white/25 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <span>Ver Serviços Atendidos</span>
            </button>
          </div>

          {/* Key Bullet Points / Micro Proof */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Peças 100% Originais</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
              <Award className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Garantia por Escrito</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sem Taxa Escondida</span>
            </div>
          </div>

        </div>
      </div>

      {/* Animated Scroll Indicator at bottom center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[11px] font-medium tracking-widest text-slate-400 uppercase">
          Role para ver mais
        </span>
        <div className="flex flex-col items-center">
          <Mouse className="w-4 h-4 text-sky-400" />
          <ChevronDown className="w-4 h-4 text-orange-400 animate-bounce -mt-0.5" />
        </div>
      </div>
    </section>
  );
};
