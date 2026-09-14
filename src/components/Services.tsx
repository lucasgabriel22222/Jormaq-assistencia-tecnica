import React from 'react';
import {
  Snowflake,
  RotateCw,
  Wind,
  Flame,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES, BRANDS_LIST, getWhatsAppUrl } from '../data/siteData';

export const Services: React.FC = () => {
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Refrigerator':
        return <Snowflake className="w-5 h-5 text-white" />;
      case 'WashingMachine':
        return <RotateCw className="w-5 h-5 text-white" />;
      case 'Fan':
        return <Wind className="w-5 h-5 text-white" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'Radio':
        return <Zap className="w-5 h-5 text-white" />;
      default:
        return <Zap className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            Especialidades Jormaq
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Assistência Técnica Completa em Arapongas
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed">
            Consertos em domicílio realizados por especialistas qualificados. Diagnosticamos com exatidão,
            trocamos apenas o necessário com peças genuínas e garantimos o funcionamento perfeito.
          </p>
        </div>

        {/* 3-Column Desktop Grid / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-950/50"
            >
              {/* Card Image Header with Zoom Effect */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Urgency Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-white/20 text-white text-xs font-semibold backdrop-blur-md shadow-md">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    {service.badge}
                  </span>
                </div>

                {/* Floating Themed Icon in Gradient */}
                <div className="absolute -bottom-4 right-6 z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/40 border border-white/20 group-hover:rotate-6 transition-transform duration-300">
                  {renderServiceIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Service Title */}
                  <h3 className="font-heading text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="font-body text-sm text-slate-300 mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Common Pain Points Solved */}
                  <div className="mb-5 bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-400 mb-2 uppercase tracking-wide">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Problemas Frequentes Resolvidos</span>
                    </div>
                    <ul className="space-y-1.5">
                      {service.commonIssues.slice(0, 3).map((issue, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-orange-500 font-bold shrink-0">•</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits & Guarantees */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-sky-400 mb-2 uppercase tracking-wide">
                      Garantias do Serviço
                    </div>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA: Request Quote on WhatsApp */}
                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 shadow-lg shadow-orange-600/20 group-hover:shadow-orange-500/40 active:scale-[0.98] transition-all duration-200 mt-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Solicitar Orçamento</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Multibrand Support Strip */}
        <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-1">
                Compatibilidade Total
              </span>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                Peças originais e suporte para as principais marcas do Brasil
              </h4>
            </div>

            {/* Brand Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
              {BRANDS_LIST.map((brand) => (
                <span
                  key={brand}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 tracking-wide hover:text-white hover:border-sky-500/50 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
