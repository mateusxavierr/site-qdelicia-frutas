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
    const mq = window.matchMedia("(min-width: 1024px)");
    let id: ReturnType<typeof setInterval>;
    const arm = () => {
      clearInterval(id);
      const ms = mq.matches ? 5000 : 9000;
      id = setInterval(() => {
        if (typeof document !== "undefined" && document.hidden) return;
        setOrder((prev) => [prev[1], prev[2], prev[0]]);
      }, ms);
    };
    arm();
    mq.addEventListener("change", arm);
    return () => {
      clearInterval(id);
      mq.removeEventListener("change", arm);
    };
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
      className="group/deck relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[400px] aspect-[4/5] mx-auto mt-8 lg:mt-0 mb-24 lg:mb-0 max-lg:translate-x-0 max-lg:-translate-y-3 lg:-translate-x-4 lg:-translate-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Halo discreto atrás do painel */}
      <div className="absolute -inset-10 max-lg:-inset-6 rounded-[3rem] bg-gradient-to-br from-qgreen-500/15 via-transparent to-qpurple-500/10 blur-2xl max-lg:blur-lg max-lg:opacity-70 -z-10 pointer-events-none" aria-hidden="true"></div>
      
      {CARDS.map((card, idx) => {
        const position = order.indexOf(idx);
        const isFront = position === 0;
        const isMiddle = position === 1;
        const isBack = position === 2;

        return (
          <div
            key={card.id}
            onClick={() => handleCardClick(idx)}
            className={`absolute top-0 left-0 h-full w-full cursor-pointer max-lg:origin-center lg:origin-top-left max-lg:transition-[transform,opacity] max-lg:duration-500 max-lg:ease-out lg:transition-all lg:duration-[900ms] lg:ease-[cubic-bezier(0.23,1,0.32,1)] group max-lg:[clip-path:none] max-lg:[-webkit-clip-path:none] lg:[clip-path:inset(0_round_2rem)] lg:[-webkit-clip-path:inset(0_round_2rem)]
              ${isFront ? "z-30 translate-x-0 translate-y-0 scale-100 opacity-100 lg:hover:-translate-y-2 lg:hover:-translate-x-1" : ""}
              ${isMiddle ? "z-20 max-lg:translate-x-4 max-lg:translate-y-4 max-lg:scale-[0.96] lg:translate-x-12 lg:translate-y-12 lg:scale-[0.95] opacity-[0.92] lg:hover:translate-x-12 lg:hover:translate-y-10" : ""}
              ${isBack ? "z-10 max-lg:translate-x-8 max-lg:translate-y-8 max-lg:scale-[0.92] lg:translate-x-24 lg:translate-y-24 lg:scale-[0.90] opacity-65 lg:hover:translate-x-24 lg:hover:translate-y-22" : ""}
            `}
          >
            {/* Shell sem transform: borda/sombra; cantos reforçados pelo clip-path no pai durante translate/scale */}
            <div
              className={`relative h-full w-full overflow-hidden rounded-[2rem] border backface-hidden transform-gpu
                ${isFront ? "border-white/20 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)]" : ""}
                ${isMiddle ? "border-white/10 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.6)] lg:hover:border-white/25" : ""}
                ${isBack ? "border-white/5 shadow-[0_10px_20px_-4px_rgba(0,0,0,0.4)]" : ""}
              `}
            >
              {/* Imagem de Fundo */}
              <div className="absolute inset-0 bg-[#1A1918]">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`h-full w-full object-cover max-lg:transition-none lg:transition-transform lg:duration-[1.5s] lg:ease-out ${isFront ? "scale-100" : "scale-[1.08] lg:group-hover:scale-[1.04]"}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>

              {/* Gradiente de Overlay Base */}
              <div className={`absolute inset-0 max-lg:transition-opacity max-lg:duration-500 lg:transition-opacity lg:duration-[900ms] ${isFront ? "opacity-100" : "opacity-90"}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-[#1A1918]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1918]/20 via-transparent to-transparent"></div>
              </div>

              {/* Conteúdo do Card */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                <div className={`transform max-lg:transition-[transform,opacity] max-lg:delay-75 max-lg:duration-500 lg:transition-all lg:delay-100 lg:duration-[900ms] ${isFront ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
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
                <div className="absolute inset-0 bg-[#1A1918]/30 max-lg:transition-none lg:transition-colors lg:duration-500 lg:group-hover:bg-transparent"></div>
              )}
              {isBack && (
                <div className="absolute inset-0 bg-[#1A1918]/70 max-lg:transition-none lg:transition-colors lg:duration-500 lg:group-hover:bg-[#1A1918]/50"></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
