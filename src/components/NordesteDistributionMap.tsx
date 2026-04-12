"use client";

import Image from "next/image";

const MAP_SRC = "/assets/maps/mapa-distribuicao.png";
const MAP_W = 1024;
const MAP_H = 1024;

export function NordesteDistributionMap({ className }: { className?: string }) {
  return (
    <div
      className={`relative h-full w-full min-h-0 min-w-0 overflow-hidden rounded-2xl ${className ?? ""}`}
    >
      <Image
        src={MAP_SRC}
        alt="Mapa da distribuição QDelícia no Nordeste: Pernambuco como base e rotas para os estados atendidos"
        width={MAP_W}
        height={MAP_H}
        sizes="(max-width: 1024px) 90vw, 720px"
        className="h-full w-full min-h-full min-w-full rounded-2xl object-cover object-left [filter:contrast(1.08)_saturate(1.06)]"
        unoptimized
      />
    </div>
  );
}
