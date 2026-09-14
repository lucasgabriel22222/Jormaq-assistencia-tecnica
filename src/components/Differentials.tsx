import React from 'react';
import { Home, Award, ShieldCheck, Clock, CircleDollarSign, Zap, Check } from 'lucide-react';
import { DIFFERENTIALS, getWhatsAppUrl } from '../data/siteData';

export const Differentials: React.FC = () => {
  const getDiffIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-7 h-7 text-sky-400" />;
      case 'Award':
        return <Award className="w-7 h-7 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-emerald-400" />;
      case 'CircleDollarSign':
        return <CircleDollarSign className="w-7 h-7 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-orange-400" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-blue-400" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-sky-400" />;
    }
  };

  return (
    <section id="diferenciais" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            Por que escolher a Jormaq
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Diferenciais Que Fazem a Diferença na Sua Casa
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed">
            Eliminamos qualquer incerteza ou insegurança. Nosso foco é oferecer um serviço ágil, limpo,
            honesto e com comprovação técnica formal.
          </p>
        </div>

        {/* 6 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {DIFFERENTIALS.map((item, idx) => (
            <div
              key={item.id}
              className="group p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-950/30 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-300 shadow-md">
                  {getDiffIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-400">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Padrão de qualidade garantido</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-blue-950/80 border border-blue-500/30 rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div>
            <h4 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              Precisa de um técnico hoje mesmo em Arapongas?
            </h4>
            <p className="font-body text-sm text-slate-300">
              Converse diretamente com nossa equipe no WhatsApp e agende seu horário preferido.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de saber a disponibilidade de técnico para atendimento hoje em Arapongas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 shadow-lg shadow-orange-600/30 hover:scale-105 active:scale-100 transition-all duration-200"
          >
            Consultar Disponibilidade
          </a>
        </div>

      </div>
    </section>
  );
};
