import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/siteData';

export const Testimonials: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" />
            O Que Dizem Nossos Clientes
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Avaliação Máxima 5.0 no Google
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed">
            Mais de 30 famílias e empresas em Arapongas e região confiaram seus eletrodomésticos
            aos cuidados da Jormaq e comprovaram nossa seriedade.
          </p>

          {/* Google Score Summary Banner */}
          <div className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-2xl font-black text-white">{COMPANY_INFO.googleRating}</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div className="text-xs text-slate-300 text-left">
              <div className="font-semibold text-white">Google Avaliações</div>
              <div className="text-slate-400">{COMPANY_INFO.googleReviewCount} avaliações 100% positivas</div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative p-7 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-950 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Decorative quote mark in corner */}
              <div className="absolute top-6 right-6 text-slate-800 pointer-events-none">
                <Quote className="w-8 h-8 opacity-40 text-sky-400" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-body text-slate-300 text-sm italic leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Client Info & Verification */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-md shrink-0">
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-heading font-semibold text-sm text-white truncate">
                    {t.name}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Avaliação do Google</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
