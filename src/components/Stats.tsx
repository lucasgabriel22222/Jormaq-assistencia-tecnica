import React, { useState, useEffect, useRef } from 'react';
import { Wrench, Clock, Star, CheckCircle, ShieldCheck, Award } from 'lucide-react';
import { STATS } from '../data/siteData';

export const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setScrollYOffset(rect.top);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-sky-400" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-orange-400" />;
      case 'Star':
        return <Star className="w-6 h-6 text-amber-400 fill-amber-400" />;
      case 'CheckCircle':
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="estatisticas"
      className="relative py-20 bg-slate-950 overflow-hidden text-white border-y border-white/10"
    >
      {/* Secondary Parallax Background with differentiated scroll speed */}
      <div
        className="absolute inset-0 w-full h-[140%] -top-[20%] pointer-events-none will-change-transform opacity-25"
        style={{
          transform: `translateY(${-scrollYOffset * 0.15}px)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80"
          alt="Oficina técnica e manutenção de eletrodomésticos"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
      </div>

      {/* Dark overlay & accent glow */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Central Impact Phrase */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Nossa Missão
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            Devolver o conforto, a segurança e a tranquilidade ao seu lar sem dor de cabeça
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed">
            Sabemos o quanto uma geladeira que para de refrigerar ou uma lavadora travada desorganiza
            a rotina da sua família. Por isso, aliamos conhecimento técnico de ponta, honestidade no
            orçamento e agilidade no atendimento domiciliar.
          </p>
        </div>

        {/* 4 Stat Cards Grid with Dark Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-sky-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Card top row with icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                  {getIcon(stat.iconName)}
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-sky-400 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              {/* Big Number */}
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-400 transition-all">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-base font-semibold text-sky-300 mb-2 font-heading">
                {stat.label}
              </div>

              {/* Descriptive detail */}
              <p className="text-xs text-slate-300 leading-relaxed font-body">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
