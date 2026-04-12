"use client";

import React, { useState, useEffect } from 'react';
import { Truck, Leaf, Briefcase } from 'lucide-react';

const CARDS = [
  {
    id: 1,
    pillar: "Logística",
    title: "Distribuição Inteligente",
    description: "Entregas roteirizadas com frota climatizada para todo o Nordeste.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    icon: Truck,
    iconColor: "text-qgreen-600"
  },
  {
    id: 2,
    pillar: "Seleção e Cuidado",
    title: "Seleção e Rastreabilidade",
    description: "Controle rigoroso de qualidade desde a colheita até o seu negócio.",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80",
    icon: Leaf,
    iconColor: "text-qpurple-600"
  },
  {
    id: 3,
    pillar: "Atendimento",
    title: "Atendimento Direto",
    description: "Atendimento próximo para pedidos rápidos e grandes volumes.",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800&q=80",
    icon: Briefcase,
    iconColor: "text-qgreen-600"
  }
];

export function HeroCards() {
  const [order, setOrder] = useState([0, 1, 2]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setOrder(prev => [prev[1], prev[2], prev[0]]);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleCardClick = (idx: number) => {
    const position = order.indexOf(idx);
    if (position === 0) return;
    if (position === 1) {
      setOrder([order[1], order[2], order[0]]);
    } else if (position === 2) {
      setOrder([order[2], order[0], order[1]]);
    }
  };

  return (
    <div 
      className="group/deck relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px] aspect-[4/5] mx-auto mt-8 lg:mt-0 mb-24 lg:mb-0 -translate-x-2 sm:-translate-x-4 -translate-y-2 sm:-translate-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Halo discreto atrás do painel */}
      <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-qgreen-500/15 via-transparent to-qpurple-500/10 blur-2xl -z-10 pointer-events-none" aria-hidden="true"></div>
      
      {CARDS.map((card, idx) => {
        const position = order.indexOf(idx);
        const isFront = position === 0;
        const isMiddle = position === 1;
        const isBack = position === 2;
        
        const Icon = card.icon;

        return (
          <div 
            key={card.id}
            onClick={() => handleCardClick(idx)}
            className={`absolute top-0 left-0 w-full h-full rounded-[2rem] overflow-hidden border transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer origin-top-left group
              ${isFront ? 'z-30 translate-x-0 translate-y-0 scale-100 opacity-100 border-white/20 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)] hover:-translate-y-2 hover:-translate-x-1' : ''}
              ${isMiddle ? 'z-20 translate-x-10 sm:translate-x-12 translate-y-10 sm:translate-y-12 scale-[0.95] opacity-[0.92] border-white/10 hover:border-white/25 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.6)] hover:translate-x-10 sm:hover:translate-x-12 hover:translate-y-8 sm:hover:translate-y-10' : ''}
              ${isBack ? 'z-10 translate-x-20 sm:translate-x-24 translate-y-20 sm:translate-y-24 scale-[0.90] opacity-65 border-white/5 shadow-[0_10px_20px_-4px_rgba(0,0,0,0.4)] hover:translate-x-20 sm:hover:translate-x-24 hover:translate-y-18 sm:hover:translate-y-22' : ''}
            `}
          >
            {/* Imagem de Fundo */}
            <div className="absolute inset-0 bg-[#1A1918]">
               <img
                 src={card.image}
                 alt={card.title}
                 className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${isFront ? 'scale-100' : 'scale-[1.08] group-hover:scale-[1.04]'}`}
                 loading={idx === 0 ? "eager" : "lazy"}
                 decoding="async"
               />
            </div>
            
            {/* Gradiente de Overlay Base */}
            <div className={`absolute inset-0 transition-opacity duration-[900ms] ${isFront ? 'opacity-100' : 'opacity-90'}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-[#1A1918]/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1918]/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Conteúdo do Card */}
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between">
              {/* Top area */}
              <div className="flex justify-start">
                <span className={`inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1918] shadow-sm transition-all duration-[900ms] delay-100 transform
                  ${isFront ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                  <Icon className={`w-3.5 h-3.5 ${card.iconColor}`} />
                  {card.pillar}
                </span>
              </div>
              
              {/* Bottom area */}
              <div className={`transition-all duration-[900ms] delay-100 transform ${isFront ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-[1.5rem] sm:text-[1.875rem] font-editorial font-medium text-white mb-2.5 sm:mb-3 leading-[1.15] drop-shadow-md">
                  {card.title}
                </h3>
                <p className="text-[0.875rem] sm:text-[0.9375rem] text-white/80 leading-relaxed font-normal max-w-[95%]">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Overlay interativo para cartas de trás */}
            {isMiddle && (
               <div className="absolute inset-0 bg-[#1A1918]/30 group-hover:bg-transparent transition-colors duration-500"></div>
            )}
            {isBack && (
               <div className="absolute inset-0 bg-[#1A1918]/70 group-hover:bg-[#1A1918]/50 transition-colors duration-500"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
