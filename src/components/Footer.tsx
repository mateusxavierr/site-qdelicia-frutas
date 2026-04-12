"use client";

import { Leaf } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-qneutral-900 text-white pt-24 pb-12 rounded-t-[2.5rem] relative overflow-hidden bg-pattern-grid-light border-t border-white/5 mt-auto">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-qpurple-500/8 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 border-b border-white/10 pb-16">
          
          {/* Logo e Descrição (Colunas 1-5) */}
          <div className="flex flex-col items-center text-center md:col-span-5 lg:col-span-4">
            <div className="mb-6 flex w-full justify-center">
              <Image
                src="/assets/brand/logo-qdelicia.png"
                alt="QDelícia Frutas"
                width={243}
                height={165}
                className="h-[3.75rem] w-auto max-w-[min(300px,85vw)] object-contain sm:h-16 sm:max-w-[320px] md:h-[4.5rem] md:max-w-[340px]"
              />
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-qneutral-400 font-sans">
              Produção e distribuição de frutas, verduras e legumes frescos no Nordeste, com frota própria e mais de 22 anos de história.
            </p>
            <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-qgreen-400">
              <Leaf className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Desde o campo até você
            </div>
          </div>
          
          {/* Navegação Rápida (Colunas 6-8) */}
          <div className="md:col-span-3 lg:col-span-4 lg:pl-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-qneutral-500 mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#produtos" className="text-sm text-qneutral-300 hover:text-qgreen-400 transition-colors">Produtos</a></li>
              <li><a href="#distribuicao" className="text-sm text-qneutral-300 hover:text-qgreen-400 transition-colors">Distribuição</a></li>
              <li><a href="#processo" className="text-sm text-qneutral-300 hover:text-qgreen-400 transition-colors">Qualidade</a></li>
              <li><a href="#quem-somos" className="text-sm text-qneutral-300 hover:text-qgreen-400 transition-colors">Nossa História</a></li>
              <li><a href="#orcamento" className="text-sm text-qneutral-300 hover:text-qgreen-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Contato Rápido (Colunas 9-12) */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-qneutral-500 mb-6">Unidades Operacionais</h4>
            
            <div className="mb-6">
              <span className="block text-sm font-semibold text-white mb-1">Recife / PE</span>
              <a href="tel:+558132521132" className="text-sm text-qneutral-400 hover:text-white transition-colors">(81) 3252-1132</a>
            </div>
            
            <div className="mb-6">
              <span className="block text-sm font-semibold text-white mb-1">São Vicente Férrer / PE</span>
              <a href="tel:+558136551198" className="text-sm text-qneutral-400 hover:text-white transition-colors">(81) 3655-1198</a>
            </div>
            
            <div>
              <span className="block text-sm font-semibold text-white mb-1">Comercial / WhatsApp</span>
              <a href="https://wa.me/5581998623166" className="text-sm text-qgreen-400 hover:text-qgreen-300 transition-colors font-semibold">(81) 99862-3166</a>
            </div>
          </div>
          
        </div>
        
        {/* Assinatura Final */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-qneutral-500 font-mono">
          <p>© {new Date().getFullYear()} QDelícia Frutas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:contato@qdeliciafrutas.com.br" className="hover:text-white transition-colors">contato@qdeliciafrutas.com.br</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
