import React from 'react';
import {
  Wrench,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Instagram,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'FAQ', href: '#faq' },
  ];

  const servicesList = [
    'Conserto de Geladeiras',
    'Manutenção de Máquinas de Lavar',
    'Manutenção de Ar-Condicionado',
    'Conserto de Fogões e Cooktops',
    'Conserto de Lava-Louças',
    'Conserto de Micro-ondas',
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 font-body">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg border border-sky-400/30">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white tracking-tight leading-none">
                  JORMAQ
                </span>
                <span className="text-xs text-sky-400 font-medium tracking-wider uppercase leading-snug">
                  Assistência Técnica Especializada
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Referência em conserto e manutenção de eletrodomésticos da linha branca e ar-condicionado
              em Arapongas e região. Atendimento ágil em domicílio com garantia formal por escrito.
            </p>

            {/* Live Operational Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-emerald-400">Atendimento Ativo:</span>
              <span>{COMPANY_INFO.businessHours}</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Principais Serviços
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesList.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Contato Direto
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-white hover:text-sky-300 font-semibold transition-colors text-xs sm:text-sm"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da Jormaq.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold text-xs sm:text-sm"
                >
                  WhatsApp: {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  {COMPANY_INFO.emergencyNote}
                </span>
              </div>
            </div>

            {/* Social Icons Strip */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppUrl("Olá! Vim pelo site da Jormaq.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center text-slate-300 transition-colors"
                aria-label="WhatsApp da empresa"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`https://instagram.com/${COMPANY_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:text-pink-400 flex items-center justify-center text-slate-300 transition-colors"
                aria-label="Instagram da empresa"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 hover:text-sky-400 flex items-center justify-center text-slate-300 transition-colors"
                aria-label="Ligar para a empresa"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados. Arapongas - PR.
          </p>
          <p className="flex items-center gap-2">
            <span>Atendimento Domiciliar Especializado com Garantia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
