"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

const presencePhotos = [
  {
    id: 1,
    image: "/assets/eventos/maior.jpg",
    alt: "QDelícia Frutas — destaque na operação",
  },
  {
    id: 2,
    image: "/assets/eventos/menor.jpg",
    alt: "Registro da operação QDelícia",
  },
  {
    id: 3,
    image: "/assets/eventos/menor2.jpg",
    alt: "Registro da operação QDelícia",
  },
  {
    id: 4,
    image: "/assets/eventos/menor3.jpg",
    alt: "Registro da operação QDelícia",
  },
  {
    id: 5,
    image: "/assets/eventos/menor4.jpg",
    alt: "Registro da operação QDelícia",
  },
  {
    id: 6,
    image: "/assets/eventos/menor5.jpg",
    alt: "Registro da operação QDelícia",
  },
  {
    id: 7,
    image: "/assets/eventos/menor6.jpg",
    alt: "Registro da operação QDelícia",
  },
  {
    id: 8,
    image: "/assets/eventos/medio.jpg",
    alt: "QDelícia Frutas — presença no varejo",
  },
] as const;

function PhotoFrame({
  children,
  className,
  anchor,
}: {
  children: ReactNode;
  className?: string;
  anchor?: boolean;
}) {
  const radius = anchor
    ? "rounded-[1.25rem] lg:rounded-[1.35rem]"
    : "rounded-[1.05rem] lg:rounded-[1.15rem]";
  return (
    <div
      className={`group/frame relative min-h-0 overflow-hidden bg-qneutral-200/80 shadow-[0_14px_36px_-20px_rgba(26,25,24,0.13)] ring-1 ring-qneutral-200/50 transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_20px_44px_-18px_rgba(26,25,24,0.17)] hover:ring-qneutral-300/55 ${radius} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function GridImage({
  src,
  alt,
  sizes,
  className,
  scaleHover = "lg:group-hover/frame:scale-[1.03]",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  scaleHover?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={`object-cover transition-[transform,filter] duration-700 ease-out group-hover/frame:brightness-[1.03] ${scaleHover} ${className ?? ""}`}
    />
  );
}

export function Events() {
  const [hero, ...secondary] = presencePhotos;
  const [s0, s1, s2, s3, s4, s5, s6] = secondary;

  return (
    <section
      id="presenca"
      className="relative w-full overflow-hidden border-t border-qneutral-200 bg-qneutral-100 py-14 lg:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 68% 48% at 20% 20%, rgba(133, 194, 38, 0.055) 0%, transparent 55%),
            radial-gradient(ellipse 52% 42% at 88% 75%, rgba(106, 27, 154, 0.045) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <header className="mb-6 max-w-xl sm:mb-7 lg:mb-8">
          <div className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-qneutral-200/90 bg-white/85 px-3.5 py-1.5 shadow-sm backdrop-blur-md sm:px-4 sm:py-2">
            <Camera className="h-3.5 w-3.5 shrink-0 text-qgreen-600" aria-hidden />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-qneutral-600 sm:text-[11px]">
              Na operação
            </span>
          </div>
          <h2 className="font-editorial text-[1.65rem] font-medium leading-[1.12] tracking-tight text-qneutral-900 sm:text-3xl md:text-[2rem] lg:text-[2.15rem]">
            Nossa <span className="text-qpurple-700 italic">presença.</span>
          </h2>
          <p className="mt-2.5 max-w-lg text-xs leading-relaxed text-qneutral-600 sm:text-sm">
            Registros do nosso dia a dia — da produção à entrega, com o cuidado de sempre.
          </p>
        </header>

        {/*
          Desktop: 4×3 — âncora 2×2, 4 módulos médios, base com 3 pesos (2 estreitas + 1 mais larga).
          Altura do mosaico limitada para manter a seção compacta.
        */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:h-[min(34vw,360px)] lg:max-h-[380px] lg:grid-cols-4 lg:grid-rows-3 lg:gap-2.5 lg:gap-x-3">
          <PhotoFrame
            anchor
            className="col-span-2 aspect-[16/11] min-h-[11.5rem] sm:min-h-[12.5rem] sm:aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-0"
          >
            <GridImage
              src={hero.image}
              alt={hero.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </PhotoFrame>

          <PhotoFrame className="aspect-[5/4] min-h-[6.5rem] sm:min-h-[7.25rem] lg:col-start-3 lg:row-start-1 lg:aspect-auto lg:min-h-0">
            <GridImage src={s0.image} alt={s0.alt} sizes="(max-width: 1024px) 50vw, 25vw" />
          </PhotoFrame>
          <PhotoFrame className="aspect-[5/4] min-h-[6.5rem] sm:min-h-[7.25rem] lg:col-start-4 lg:row-start-1 lg:aspect-auto lg:min-h-0">
            <GridImage src={s1.image} alt={s1.alt} sizes="(max-width: 1024px) 50vw, 25vw" />
          </PhotoFrame>
          <PhotoFrame className="aspect-[5/4] min-h-[6.5rem] sm:min-h-[7.25rem] lg:col-start-3 lg:row-start-2 lg:aspect-auto lg:min-h-0">
            <GridImage src={s2.image} alt={s2.alt} sizes="(max-width: 1024px) 50vw, 25vw" />
          </PhotoFrame>
          <PhotoFrame className="aspect-[5/4] min-h-[6.5rem] sm:min-h-[7.25rem] lg:col-start-4 lg:row-start-2 lg:aspect-auto lg:min-h-0">
            <GridImage src={s3.image} alt={s3.alt} sizes="(max-width: 1024px) 50vw, 25vw" />
          </PhotoFrame>

          <PhotoFrame className="aspect-[5/4] min-h-[6.25rem] sm:min-h-[7rem] lg:col-start-1 lg:row-start-3 lg:aspect-auto lg:min-h-0">
            <GridImage
              src={s4.image}
              alt={s4.alt}
              sizes="(max-width: 1024px) 50vw, 25vw"
              scaleHover="lg:group-hover/frame:scale-[1.04]"
            />
          </PhotoFrame>
          <PhotoFrame className="aspect-[5/4] min-h-[6.25rem] sm:min-h-[7rem] lg:col-start-2 lg:row-start-3 lg:aspect-auto lg:min-h-0">
            <GridImage src={s5.image} alt={s5.alt} sizes="(max-width: 1024px) 50vw, 25vw" />
          </PhotoFrame>
          <PhotoFrame className="col-span-2 aspect-[21/10] min-h-[6.75rem] sm:min-h-[7.5rem] lg:col-span-2 lg:col-start-3 lg:row-start-3 lg:aspect-auto lg:min-h-0">
            <GridImage
              src={s6.image}
              alt={s6.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-center"
              scaleHover="lg:group-hover/frame:scale-[1.02]"
            />
          </PhotoFrame>
        </div>
      </div>
    </section>
  );
}
