"use client";

import { MessageCircle, ArrowDown, Building2, ArrowRight, Leaf, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { HeroCards } from './HeroCards';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[90vh] pt-32 pb-40 flex flex-col justify-center bg-[#F8F9FA]">
      
      {/* Background Técnico (Atmosfera B2B) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      
      {/* Glows Estruturais e Limpos */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-qgreen-100/40 via-qpurple-50/20 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-qpurple-100/40 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          
          {/* Coluna da Esquerda (Conteúdo) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start pt-10 lg:pt-0">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-qneutral-900 shadow-sm mb-8 animate-[fadeSlideIn_0.75s_ease-out_0.05s_both]">
              <span className="flex items-center justify-center w-5 h-5 rounded-sm bg-white/10">
                <Building2 className="w-3 h-3 text-qgreen-400" />
              </span>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-white pr-2">
                Produção e distribuição de FLV
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-editorial text-[2.8rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05] tracking-tight text-qneutral-900 mb-6 drop-shadow-sm animate-[fadeSlideIn_0.85s_ease-out_0.12s_both]">
              O frescor do campo.<br/>
              <span className="text-qpurple-700 italic relative">
                A força do negócio.
              </span>
            </h1>

            {/* Subheadline Robust */}
            <p className="text-[1.125rem] md:text-[1.25rem] text-qneutral-600 max-w-[480px] leading-[1.6] mb-10 font-medium animate-[fadeSlideIn_0.85s_ease-out_0.22s_both]">
              Fornecemos frutas, verduras e legumes com alto padrão de qualidade para atacado, redes de supermercados e varejo selecionado em <strong className="text-qneutral-900 font-semibold">PE, AL, PB e RN</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto animate-[fadeSlideIn_0.85s_ease-out_0.32s_both]">
              
              {/* CTA 1: Pedir Orçamento */}
              <a 
                href="#orcamento"
                className="btn-glow-green relative px-8 py-4 rounded-full text-[15px] font-bold text-qneutral-900 inline-flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(133,194,38,0.25)] hover:shadow-[0_12px_30px_rgba(133,194,38,0.4)] transition-all duration-300 hover:-translate-y-[2px] group"
              >
                <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none [transform:translateZ(0)]">
                  <span className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-700 ease-out"></span>
                </span>
                <span className="relative z-10 tracking-[0.02em]">Pedir orçamento</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              {/* CTA 2: WhatsApp */}
              <a 
                href="https://wa.me/5581998623166?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-qgreen-200/60 bg-qgreen-50/80 text-qneutral-800 text-[15px] font-bold inline-flex items-center justify-center gap-3 hover:border-qgreen-300/80 hover:bg-qgreen-50 hover:text-qgreen-900 transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(133,194,38,0.15)] hover:-translate-y-[2px] group relative focus:outline-none focus:ring-2 focus:ring-qgreen-500/20 active:translate-y-0"
              >
                <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-qgreen-100/40 group-hover:bg-qgreen-200/50 transition-colors duration-300">
                  <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-qgreen-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-qgreen-500 border border-qgreen-50 group-hover:border-qgreen-100 transition-colors duration-300"></span>
                  </span>
                  <MessageCircle className="w-3.5 h-3.5 text-qgreen-600 group-hover:text-qgreen-700 transition-colors duration-300" />
                </span>
                <span className="tracking-[0.02em]">Falar no WhatsApp</span>
              </a>
            </div>

            {/* Micro Data */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-2 border-t border-qneutral-200/80 w-full max-w-lg animate-[fadeSlideIn_0.85s_ease-out_0.42s_both]">
              <div>
                <p className="text-[1.75rem] font-editorial font-bold text-qpurple-700 leading-none mb-1">5</p>
                <p className="text-[10px] text-qneutral-500 font-bold uppercase tracking-widest">Estados<br/>Atendidos</p>
              </div>
              <div>
                <p className="text-[1.75rem] font-editorial font-bold text-qgreen-600 flex items-baseline gap-0.5 leading-none mb-1">
                  100<span className="text-sm font-bold text-qgreen-600/80">%</span>
                </p>
                <p className="text-[10px] text-qneutral-500 font-bold uppercase tracking-widest">Logística<br/>Própria</p>
              </div>
              <div>
                <p className="text-[1.75rem] font-editorial font-bold text-qpurple-700 flex items-baseline gap-0.5 leading-none mb-1">
                  FLV
                </p>
                <p className="text-[10px] text-qneutral-500 font-bold uppercase tracking-widest">Mix<br/>Completo</p>
              </div>
            </div>
          </div>

          {/* Coluna da Direita (Stack Premium de Cards) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-center animate-[fadeSlideIn_1s_ease-out_0.2s_both] mt-12 lg:mt-0">
            <HeroCards />
          </div>
        </div>
      </div>

      {/* Scroll indicator - sutil */}
      <div className="absolute bottom-20 lg:bottom-28 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-[fadeSlideIn_1.5s_ease-out_1s_both]">
        <Link href="#produtos" className="flex flex-col items-center gap-2 text-sm font-semibold text-qneutral-400 hover:text-qpurple-600 transition-colors group">
          <ArrowDown className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500" />
        </Link>
      </div>
    </section>
  );
}
