import React from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Navigation,
  CheckCircle,
  Shield,
  Building,
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';

export const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4" />
            Região de Atendimento & Contato
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Onde Estamos e Onde Atendemos
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed">
            Sede própria em Arapongas com estrutura de veículos equipados para deslocamento rápido
            até a sua residência em toda a cidade e municípios vizinhos.
          </p>
        </div>

        {/* 2-Column Grid: Contact Card + Google Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              
              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Endereço Completo
                  </div>
                  <div className="font-heading font-bold text-white text-base leading-snug">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    CEP: {COMPANY_INFO.cep} | Arapongas - Paraná
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Telefone & WhatsApp
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="font-heading font-bold text-white text-lg hover:text-sky-400 transition-colors block"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <div className="text-xs text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Atendimento Online Ativo
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Horário de Funcionamento
                  </div>
                  <div className="font-heading font-bold text-white text-base">
                    {COMPANY_INFO.businessHours}
                  </div>
                  <div className="text-xs text-orange-400 font-medium mt-0.5">
                    {COMPANY_INFO.emergencyNote}
                  </div>
                </div>
              </div>

              {/* Cities Served List */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Cidades e Bairros Atendidos
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Arapongas (Todos os Bairros)', 'Rolândia', 'Apucarana', 'Sabaúdia', 'Região Metropolitana'].map(
                    (area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-slate-300 flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3 h-3 text-sky-400" />
                        {area}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-white/30 transition-all"
                >
                  <Navigation className="w-4 h-4 text-orange-400" />
                  <span>Como Chegar</span>
                </a>

                <a
                  href={getWhatsAppUrl("Olá! Gostaria de consultar se vocês atendem no meu bairro aqui na região de Arapongas.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Micro reassurance badge */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-center gap-3">
              <Shield className="w-5 h-5 text-sky-400 shrink-0" />
              <p className="text-xs text-slate-300">
                Você não precisa carregar seu eletrodoméstico. Nós vamos até o seu endereço!
              </p>
            </div>
          </div>

          {/* Right Column: Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl min-h-[380px] lg:min-h-[500px] flex flex-col relative bg-slate-900">
            <iframe
              title="Localização Jormaq Assistência Técnica em Arapongas PR"
              src={COMPANY_INFO.mapsEmbedUrl}
              className="w-full h-full min-h-[420px] lg:min-h-[520px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Overlay map badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-white">Jormaq Assistência Técnica</div>
                <div className="text-[11px] text-slate-400">{COMPANY_INFO.addressShort}</div>
              </div>
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shrink-0 transition-colors"
              >
                Abrir no Maps
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
