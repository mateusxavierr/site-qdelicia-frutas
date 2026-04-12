"use client";

import React, { useState, useEffect } from 'react';
import { asset } from '@/lib/assetPath';

const CARDS = [
  {
    id: 1,
    title: "Distribuição Inteligente",
    description: "Entregas roteirizadas com frota climatizada para todo o Nordeste.",
    image: asset("/assets/hero-cards/distribuicao-caminhao.jpg"),
  },
  {
    id: 2,
    title: "Seleção e Rastreabilidade",
    description: "Controle rigoroso de qualidade desde a colheita até o seu negócio.",
    image: asset("/assets/hero-cards/selecao-rastreabilidade.jpg"),
  },
  {
    id: 3,
    title: "Atendimento Direto",
    description: "Atendimento próximo para pedidos rápidos e grandes volumes.",
    image: asset("/assets/hero-cards/atendimento-direto.jpg"),
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

        return (
          <div
            key={card.id}
            onClick={() => handleCardClick(idx)}
            className={`absolute top-0 left-0 h-full w-full cursor-pointer origin-top-left transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group [clip-path:inset(0_round_2rem)] [-webkit-clip-path:inset(0_round_2rem)]
              ${isFront ? "z-30 translate-x-0 translate-y-0 scale-100 opacity-100 hover:-translate-y-2 hover:-translate-x-1" : ""}
              ${isMiddle ? "z-20 translate-x-10 translate-y-10 scale-[0.95] opacity-[0.92] hover:translate-x-10 hover:translate-y-8 sm:translate-x-12 sm:translate-y-12 sm:hover:translate-x-12 sm:hover:translate-y-10" : ""}
              ${isBack ? "z-10 translate-x-20 translate-y-20 scale-[0.90] opacity-65 hover:translate-x-20 hover:translate-y-18 sm:translate-x-24 sm:translate-y-24 sm:hover:translate-x-24 sm:hover:translate-y-22" : ""}
            `}
          >
            {/* Shell sem transform: borda/sombra; cantos reforçados pelo clip-path no pai durante translate/scale */}
            <div
              className={`relative h-full w-full overflow-hidden rounded-[2rem] border backface-hidden transform-gpu
                ${isFront ? "border-white/20 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)]" : ""}
                ${isMiddle ? "border-white/10 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.6)] hover:border-white/25" : ""}
                ${isBack ? "border-white/5 shadow-[0_10px_20px_-4px_rgba(0,0,0,0.4)]" : ""}
              `}
            >
              {/* Imagem de Fundo */}
              <div className="absolute inset-0 bg-[#1A1918]">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`h-full w-full object-cover transition-transform duration-[1.5s] ease-out ${isFront ? "scale-100" : "scale-[1.08] group-hover:scale-[1.04]"}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>

              {/* Gradiente de Overlay Base */}
              <div className={`absolute inset-0 transition-opacity duration-[900ms] ${isFront ? "opacity-100" : "opacity-90"}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-[#1A1918]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1918]/20 via-transparent to-transparent"></div>
              </div>

              {/* Conteúdo do Card */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                <div className={`transform transition-all delay-100 duration-[900ms] ${isFront ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                  <h3 className="mb-2.5 font-editorial text-[1.5rem] font-medium leading-[1.15] text-white drop-shadow-md sm:mb-3 sm:text-[1.875rem]">
                    {card.title}
                  </h3>
                  <p className="max-w-[95%] text-[0.875rem] font-normal leading-relaxed text-white/80 sm:text-[0.9375rem]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Overlay interativo para cartas de trás */}
              {isMiddle && (
                <div className="absolute inset-0 bg-[#1A1918]/30 transition-colors duration-500 group-hover:bg-transparent"></div>
              )}
              {isBack && (
                <div className="absolute inset-0 bg-[#1A1918]/70 transition-colors duration-500 group-hover:bg-[#1A1918]/50"></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
