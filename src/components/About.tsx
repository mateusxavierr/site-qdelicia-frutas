"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const YOUTUBE_VIDEO_ID = "oDEzUfK-iU8";
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1`;
const VIDEO_THUMB_YT = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
const ORIGEM_BG = "/assets/about/historia-origem-bg.png";

export function About() {
  const [videoOpen, setVideoOpen] = useState(false);
  // Poster: thumb do YouTube. Capa própria: coloque public/assets/about/historia-video-cover.jpg e use estado + preload.
  const posterSrc = VIDEO_THUMB_YT;
  const isYoutubePoster = posterSrc === VIDEO_THUMB_YT;
  const titleId = useId();

  const closeVideo = useCallback(() => setVideoOpen(false), []);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [videoOpen, closeVideo]);

  return (
    <section
      id="quem-somos"
      className="ds-section relative w-full overflow-hidden border-t border-qneutral-200 bg-qneutral-100 py-20 lg:py-24"
    >
      {/* Camada de origem: foto de campo com blur leve, máscara de fade nas bordas e overlay institucional */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_96%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_96%,transparent_100%)]"
        >
          <div className="absolute inset-0 scale-[1.06]">
            <Image
              src={ORIGEM_BG}
              alt=""
              fill
              className="object-cover object-[center_38%] blur-[1px] saturate-[0.92] brightness-[1.04] contrast-[0.98] sm:blur-[1.5px]"
              sizes="100vw"
              priority={false}
            />
          </div>
        </div>
        {/* Wash mais leve para a foto aparecer sem perder leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6f7f4]/[0.62] via-[#f4f3f1]/[0.52] to-[#eef0ec]/[0.68]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.42] via-white/[0.18] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-qneutral-100/45 via-transparent to-qneutral-100/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_20%_42%,rgba(255,255,255,0.28)_0%,transparent_55%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.18] dist-section-mesh"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 12% 28%, rgba(133, 194, 38, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 92% 18%, rgba(106, 27, 154, 0.05) 0%, transparent 50%)
          `,
        }}
      />
      <div className="bg-pattern-dots pointer-events-none absolute inset-0 z-[1] opacity-[0.08]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-5">
            <h2 className="font-editorial mb-5 text-4xl font-medium leading-[1.08] tracking-tight text-qneutral-900 md:text-5xl lg:mb-6 lg:text-[3.05rem] [text-shadow:0_1px_0_rgba(255,255,255,0.92),0_0_24px_rgba(255,255,255,0.45)]">
              Nossa
              <br />
              <span className="text-qpurple-700 italic">história.</span>
            </h2>

            <p className="max-w-md text-base leading-[1.65] text-qneutral-800 md:text-[1.0625rem] [text-shadow:0_1px_0_rgba(255,255,255,0.75),0_0_20px_rgba(255,255,255,0.35)]">
              Foi em São Vicente Férrer, há mais de 22 anos, que começou a nossa história: plantando e colhendo, de forma artesanal, bananas e uvas. A boa qualidade dos nossos produtos nos levou à comercialização e distribuição na região metropolitana do Recife.
              <br />
              <br />
              Com o passar dos anos, expandimos nossa atuação e ampliamos o mix de produtos, trabalhando com frutas, verduras e hortaliças. Hoje atendemos diretamente Pernambuco, Paraíba, Rio Grande do Norte, Alagoas e Bahia — e chegamos a outros estados por meio dos nossos distribuidores.
            </p>

            <div className="relative mt-7 max-w-lg overflow-hidden rounded-2xl border border-qneutral-200/90 bg-white/95 px-5 py-4 shadow-[0_12px_36px_-18px_rgba(26,25,24,0.12)] ring-1 ring-white/90 backdrop-blur-[3px]">
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-qgreen-500 to-qpurple-600"
                aria-hidden
              />
              <p className="pl-3 font-editorial text-[1.65rem] font-medium leading-none tracking-tight md:text-[1.85rem]">
                <span className="bg-gradient-to-r from-qgreen-700 to-qpurple-800 bg-clip-text text-transparent">22+</span>{" "}
                <span className="text-qneutral-800">anos</span>
              </p>
              <p className="mt-2.5 pl-3 text-sm leading-snug text-qneutral-600">
                Mais de duas décadas plantando, colhendo e entregando com qualidade.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-xl lg:mx-0 lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-qgreen-500/[0.12] via-transparent to-qpurple-500/[0.1] opacity-90 blur-2xl"
                aria-hidden
              />
              <div className="relative rounded-[1.75rem] border border-qneutral-200/90 bg-gradient-to-br from-white via-white to-qneutral-50 p-[3px] shadow-[0_24px_60px_-22px_rgba(26,25,24,0.16)] ring-1 ring-white/70">
                <div className="overflow-hidden rounded-[1.625rem] bg-qearth-ink">
                  <div className="relative aspect-video">
                    <Image
                      src={posterSrc}
                      alt="Capa do vídeo institucional QDelícia Frutas"
                      fill
                      className={
                        isYoutubePoster
                          ? "object-cover object-center [filter:blur(6px)_brightness(0.32)_saturate(0.55)_contrast(1.05)] [transform:scale(1.14)]"
                          : "object-cover object-center"
                      }
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      unoptimized
                      priority={false}
                    />
                    {/* Camadas suaves — sem noise (evita aspecto granulado). */}
                    <div
                      className={
                        isYoutubePoster
                          ? "absolute inset-0 bg-qearth-ink/45"
                          : "absolute inset-0 bg-qearth-ink/25"
                      }
                      aria-hidden
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-qearth-ink/55 via-transparent to-transparent"
                      aria-hidden
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"
                      aria-hidden
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-qgreen-950/25 via-transparent to-qpurple-950/30"
                      aria-hidden
                    />

                    <div className="absolute inset-0 flex flex-col">
                      <div className="flex flex-1 items-center justify-center px-6 pt-10 pb-4">
                        <button
                          type="button"
                          onClick={() => setVideoOpen(true)}
                          className="group/play relative flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-visible rounded-full transition-transform duration-300 hover:scale-[1.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-qgreen-400 sm:h-[5rem] sm:w-[5rem]"
                          aria-haspopup="dialog"
                          aria-expanded={videoOpen}
                        >
                          <span
                            className="absolute inset-0 rounded-full bg-gradient-to-br from-qgreen-400 via-white to-qpurple-600 p-[2.5px] shadow-[0_24px_56px_-8px_rgba(0,0,0,0.75),0_0_48px_-12px_rgba(133,194,38,0.25)]"
                            aria-hidden
                          >
                            <span className="flex h-full w-full items-center justify-center rounded-full border border-white/40 bg-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.04)] backdrop-blur-sm" />
                          </span>
                          <Play
                            className="relative z-10 ml-1 h-7 w-7 fill-[#5a157d] drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)] sm:h-[2rem] sm:w-[2rem]"
                            strokeWidth={0}
                            aria-hidden
                          />
                          <span className="sr-only">Reproduzir vídeo institucional</span>
                        </button>
                      </div>

                      <div className="relative px-5 pb-5 pt-8 text-center sm:px-8 sm:pb-6">
                        <div
                          className="pointer-events-none absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-black/95 via-black/88 to-transparent"
                          aria-hidden
                        />
                        <div className="relative">
                          <p
                            id={titleId}
                            className="font-editorial text-lg font-medium leading-snug tracking-tight text-white sm:text-xl [text-shadow:0_2px_16px_rgba(0,0,0,0.85)]"
                          >
                            Trajetória e propósito QDelícia
                          </p>
                          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
                            Vídeo institucional · ~2 min
                          </p>
                          <div className="mx-auto mt-4 flex max-w-lg flex-col items-center gap-1 border-t border-white/15 pt-4 sm:flex-row sm:justify-center sm:gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-qgreen-400 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
                              Institucional
                            </span>
                            <span className="hidden h-3 w-px bg-white/25 sm:block" aria-hidden />
                            <span className="text-center text-[11px] font-medium leading-snug text-white/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.85)]">
                              Origem, operação e compromisso com o cliente
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {videoOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-qearth-ink/75 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo institucional QDelícia Frutas"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Fechar vídeo"
            onClick={closeVideo}
          />
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_32px_80px_-20px_rgba(0,0,0,0.6)]">
            <button
              type="button"
              onClick={closeVideo}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={YOUTUBE_EMBED}
                title="Vídeo institucional QDelícia Frutas"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
