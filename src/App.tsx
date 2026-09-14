/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* 1. Header Fixo com Barra de Progresso e Glassmorphism */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. Hero com Parallax Real */}
        <Hero />

        {/* 3. Seção de Estatísticas / Banner Parallax */}
        <Stats />

        {/* 4. Seção de Serviços */}
        <Services />

        {/* 5. Seção de Diferenciais */}
        <Differentials />

        {/* 6. Seção de Depoimentos / Prova Social */}
        <Testimonials />

        {/* 7. Seção de Localização e Contato com Mapa */}
        <Location />

        {/* 8. Seção FAQ (Perguntas Frequentes) */}
        <FAQ />

        {/* 9. CTA Final */}
        <CTAFinal />
      </main>

      {/* 10. Footer (Rodapé) */}
      <Footer />

      {/* 11. Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
