"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  image: string;
  variations?: string[];
}

const products: Product[] = [
  {
    id: 'banana',
    name: 'Banana',
    image: '/assets/frutas/banana.png',
    variations: ['Prata', 'Nanica', 'D\'água', 'Terra']
  },
  {
    id: 'mamao',
    name: 'Mamão',
    image: '/assets/frutas/mamao.png',
    variations: ['Formosa', 'Papaya']
  },
  {
    id: 'melao',
    name: 'Melão',
    image: '/assets/frutas/melao.png',
    variations: ['Amarelo', 'Pele de Sapo']
  },
  {
    id: 'melancia',
    name: 'Melancia',
    image: '/assets/frutas/melancia.png',
  },
  {
    id: 'uva',
    name: 'Uva',
    image: '/assets/frutas/uva.png',
  },
  {
    id: 'pera',
    name: 'Pera',
    image: '/assets/frutas/pera.png',
  },
  {
    id: 'goiaba',
    name: 'Goiaba',
    image: '/assets/frutas/goiaba.png',
  },
  {
    id: 'abacaxi',
    name: 'Abacaxi',
    image: '/assets/frutas/abacaxi.png',
  },
  {
    id: 'laranja',
    name: 'Laranja',
    image: '/assets/frutas/laranja.png',
    variations: ['Pera', 'Lima']
  },
  {
    id: 'maca',
    name: 'Maçã',
    image: '/assets/frutas/maca.png',
  },
  {
    id: 'hidroponicos',
    name: 'Hidropônicos',
    image: '/assets/frutas/hidroponico.png',
    variations: ['Crespa', 'Roxa', 'Lisa', 'Americana']
  },
  {
    id: 'tomate',
    name: 'Tomate Suit Grape',
    image: '/assets/frutas/tomate.png',
  }
];

export function Products() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, hasVariations: boolean) => {
    if (!hasVariations) return;
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="produtos" className="relative w-full bg-[#FCFCFC] py-16 sm:py-24 overflow-hidden border-t border-qneutral-200/60">
      
      {/* 1. FUNDO / AMBIENTAÇÃO - Estrutura visual sutil */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid muito discreto, quase fantasma */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '64px 64px' }}
        />
        
        {/* Manchas suaves (Roxo e Verde) de forma pontual */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-qpurple-200/15 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-qgreen-200/10 rounded-full blur-[90px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-white/80 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        
        {/* Linhas editoriais finas e fantasmagóricas */}
        <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-qneutral-200/40 to-transparent" />
        <div className="absolute right-6 lg:right-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-qneutral-200/40 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <header className="mb-12 md:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-qneutral-200 shadow-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-qpurple-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-qneutral-600">Nosso Catálogo</span>
          </div>
          <h2 className="font-editorial text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-medium text-qneutral-900 leading-[1.1] mb-5 relative">
            <span className="relative z-10">Frescor direto</span> <br className="hidden md:block" />
            <span className="text-qpurple-700 italic relative z-10">do campo</span>
            <div className="absolute -bottom-1 md:bottom-1 left-0 right-0 h-2.5 md:h-3 bg-qpurple-100/50 -z-0 -rotate-1" />
          </h2>
          <p className="text-[1rem] md:text-[1.125rem] text-qneutral-500 max-w-2xl leading-relaxed">
            Uma linha completa de frutas, verduras e legumes selecionados com cuidado desde a origem. Qualidade garantida para abastecer o seu negócio.
          </p>
        </header>

        {/* 2. GRID B2B PREMIUM - Mais alinhado, consistente e escaneável */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 sm:gap-x-4 sm:gap-y-8 lg:gap-x-4 lg:gap-y-10">
          {products.map((product) => {
            const hasVariations = !!product.variations && product.variations.length > 0;
            const isExpanded = expandedId === product.id;

            return (
              <div 
                key={product.id} 
                className={`produto-item relative flex flex-col items-center group ${hasVariations ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={() => toggleExpand(product.id, hasVariations)}
              >
                {/* Plataforma Invisível / Hover state refinado */}
                <div className="absolute inset-0 -mx-2 -my-3 bg-white rounded-[1.5rem] opacity-0 group-hover:opacity-100 group-hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-transparent group-hover:border-qneutral-200/50 transition-all duration-500 -z-10" />

                {/* Container de imagem padronizado - Alinhamento rigoroso */}
                <div className="relative w-full h-[100px] sm:h-[130px] lg:h-[160px] mb-2 flex flex-col justify-end items-center">
                  
                  {/* Microbase permanente para aterrar a fruta no grid */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-qneutral-200/60 rounded-[100%] blur-[2px] transition-all duration-500 group-hover:w-28 group-hover:bg-qneutral-300/80 group-hover:blur-[4px]" />
                  
                  {/* Imagem aterrada ao fundo do container */}
                  <div className="relative w-full h-[90%] transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-2 group-hover:scale-[1.05]">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-contain object-bottom drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-500" 
                    />
                  </div>
                </div>
                
                {/* 3. INFORMAÇÕES - Comunicação clara de interação */}
                <div className="flex flex-col items-center text-center w-full z-10 mt-1">
                  <p className="font-editorial text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] font-medium text-qneutral-900 transition-colors duration-300 group-hover:text-qpurple-700 mb-1.5">
                    {product.name}
                  </p>
                  
                  {/* Indicador de Status / Interatividade - Micro chip elegante */}
                  {hasVariations ? (
                    <div className={`flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full border transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${
                      isExpanded 
                        ? 'border-qpurple-200 bg-qpurple-50 text-qpurple-700' 
                        : 'border-qneutral-200/80 bg-white text-qneutral-500 group-hover:border-qpurple-200 group-hover:text-qpurple-600 group-hover:shadow-[0_2px_4px_rgba(0,0,0,0.04)]'
                    }`}>
                      <span className="text-[10px] sm:text-[11px] font-medium tracking-wide">
                        {product.variations!.length} Opções
                      </span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-[2px]'}`} />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full border border-transparent text-qneutral-400 transition-all duration-300 group-hover:border-qneutral-200/60 group-hover:text-qneutral-500 group-hover:bg-white/60">
                      <span className="text-[10px] sm:text-[11px] font-medium tracking-wide">
                        1 Opção
                      </span>
                      <div className="w-1 h-1 rounded-full bg-qneutral-300 group-hover:bg-qneutral-400 transition-colors" />
                    </div>
                  )}
                  
                  {/* Variações (Expandível) */}
                  {hasVariations && (
                    <div className={`overflow-hidden transition-all duration-[500ms] ease-[cubic-bezier(0.33,1,0.68,1)] w-full ${isExpanded ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0 m-0'}`}>
                      <div className="flex flex-wrap justify-center gap-1.5 pb-1">
                        {product.variations!.map((v) => (
                          <span key={v} className="inline-flex items-center text-[10px] sm:text-[11px] font-medium text-qneutral-600 bg-white border border-qneutral-200/80 px-2.5 py-1 rounded-md transition-colors hover:bg-qpurple-50 hover:text-qpurple-700 hover:border-qpurple-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
