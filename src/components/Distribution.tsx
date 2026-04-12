"use client";

import { Phone, MapPin, Globe, ArrowRight, Truck } from "lucide-react";
import { asset } from "@/lib/assetPath";
import { NordesteDistributionMap } from "./NordesteDistributionMap";

export function Distribution() {
  return (
    <section
      id="distribuicao"
      className="ds-section relative w-full overflow-hidden border-t border-qneutral-200 bg-qneutral-100 pt-24 pb-12 lg:pt-32 lg:pb-12"
    >
      {/* Ambiente DS7: malha suave + halos (sem competir com o conteúdo) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55] dist-section-mesh"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 72% 52% at 18% 22%, rgba(133, 194, 38, 0.09) 0%, transparent 58%),
            radial-gradient(ellipse 58% 48% at 88% 12%, rgba(106, 27, 154, 0.07) 0%, transparent 52%),
            radial-gradient(ellipse 50% 40% at 55% 92%, rgba(106, 27, 154, 0.05) 0%, transparent 48%)
          `,
        }}
      />
      <div className="bg-pattern-dots pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-qgreen-500/[0.06] blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-[360px] w-[360px] rounded-full bg-qpurple-500/[0.05] blur-[90px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Topo editorial */}
        <header className="dist-animate-rise mb-14 max-w-3xl text-center sm:mb-16 sm:text-left lg:mb-[4.25rem]">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-qneutral-200/90 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md sm:mb-8">
            <Truck className="h-3.5 w-3.5 text-qpurple-600" aria-hidden />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-qneutral-600 sm:text-[11px]">
              Distribuição & logística
            </span>
          </div>
          <h2 className="font-editorial mb-5 text-4xl font-medium leading-[1.08] tracking-tight text-qneutral-900 md:text-5xl lg:text-[3.35rem]">
            Logística regional, <br />
            <span className="text-qpurple-700 italic">distribuição de ponta.</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-qneutral-600 md:text-xl">
            Nossa frota própria garante entrega programada no prazo e na temperatura correta. Saiba onde estamos
            presentes.
          </p>
        </header>

        {/* Módulo escuro — cobertura */}
        <div className="dist-animate-rise dist-animate-rise-delay-1 mb-12 lg:mb-16">
          <div className="group/cov relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-qearth-ink shadow-[0_24px_56px_-18px_rgba(0,0,0,0.42)]">
            <div
              className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
              style={{ backgroundImage: `url(${asset("/assets/noise.png")})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
            <div className="absolute right-0 top-0 h-[min(100%,420px)] w-[420px] -translate-y-1/3 translate-x-1/4 rounded-full bg-qgreen-500/[0.11] blur-[88px] transition-opacity duration-1000 group-hover/cov:opacity-90" />
            <div className="absolute bottom-0 left-0 h-[320px] w-[320px] translate-y-1/3 -translate-x-1/4 rounded-full bg-qpurple-500/[0.12] blur-[72px]" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

            <div className="relative z-10 grid items-center gap-10 py-10 pl-8 pr-8 md:gap-12 md:px-10 lg:grid-cols-12 lg:gap-0 lg:py-12 lg:pl-12 lg:pr-14">
              <div className="text-center lg:col-span-7 lg:text-left">
                <div className="mb-5 flex justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                    <span className="dist-live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-qgreen-400" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-qgreen-400 sm:text-[11px]">
                      Cobertura direta
                    </span>
                  </span>
                </div>
                <p className="font-editorial flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-[2.35rem] font-medium leading-none tracking-tight text-white sm:text-[3.25rem] md:text-[3.75rem] lg:justify-start">
                  <span className="dist-animate-rise dist-animate-rise-delay-1 inline-block">PE</span>
                  <span className="text-white/25 font-light sm:mx-0.5">·</span>
                  <span className="dist-animate-rise dist-animate-rise-delay-2 inline-block">PB</span>
                  <span className="text-white/25 font-light sm:mx-0.5">·</span>
                  <span className="dist-animate-rise dist-animate-rise-delay-3 inline-block">RN</span>
                  <span className="text-white/25 font-light sm:mx-0.5">·</span>
                  <span className="dist-animate-rise dist-animate-rise-delay-4 inline-block">AL</span>
                  <span className="text-white/25 font-light sm:mx-0.5">·</span>
                  <span className="dist-animate-rise dist-animate-rise-delay-5 inline-block">BA</span>
                </p>
              </div>

              <div className="relative text-center lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12 lg:text-left">
                <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-white/25 to-transparent lg:hidden" />
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-white/45">Resumo operacional</p>
                <p className="mt-3 text-base font-medium leading-relaxed text-white/75 sm:text-[1.0625rem]">
                  Operação centralizada no Nordeste com rotas diárias estruturadas para garantir o frescor que a sua
                  operação exige.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-5 lg:items-stretch">
          <div className="dist-animate-rise dist-animate-rise-delay-2 flex min-h-[280px] flex-col lg:col-span-7 lg:row-span-2 lg:row-start-1 lg:h-full lg:min-h-0 lg:self-stretch">
            <div className="group/dist-map relative flex min-h-0 flex-1 flex-col lg:min-h-0">
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-qgreen-500/[0.22] via-qgreen-500/[0.06] to-qpurple-500/[0.2] opacity-90 blur-3xl transition duration-[1.1s] ease-out group-hover/dist-map:opacity-100"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute -right-6 top-10 hidden h-40 w-40 rounded-full border border-qneutral-200/50 sm:block" aria-hidden="true" />

              <div className="relative flex min-h-0 flex-1 flex-col rounded-[1.75rem] border border-qneutral-200/90 bg-gradient-to-br from-white via-white to-qneutral-50 p-[3px] shadow-[0_24px_60px_-22px_rgba(26,25,24,0.14)] transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/dist-map:-translate-y-0.5 group-hover/dist-map:shadow-[0_28px_64px_-20px_rgba(26,25,24,0.16)] lg:min-h-0">
                <div className="flex min-h-0 flex-1 flex-col rounded-[1.625rem] bg-white p-2.5 sm:p-3 lg:min-h-0">
                  <div className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-[1.35rem] border border-qneutral-200/80 bg-[#E8E4DC] lg:min-h-0">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.28]"
                      aria-hidden="true"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(26, 25, 24, 0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 25, 24, 0.032) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.025]"
                      style={{
                        backgroundImage:
                          "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />

                    <div
                      className="pointer-events-none absolute -right-6 top-4 h-[19rem] w-[19rem] rounded-full bg-qpurple-500/[0.24] blur-[96px]"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute right-8 top-16 h-48 w-48 rounded-full bg-qpurple-400/[0.38] blur-[64px]"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute -left-6 bottom-4 h-[18rem] w-[18rem] rounded-full bg-qgreen-500/[0.22] blur-[96px]"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute bottom-10 left-8 h-52 w-52 rounded-full bg-qgreen-400/[0.34] blur-[60px]"
                      aria-hidden="true"
                    />

                    {/* Respiro: 1 célula da grade (28px); mapa em cover + object-left */}
                    <div className="pointer-events-none absolute inset-[28px] min-h-0 overflow-hidden">
                      <NordesteDistributionMap className="h-full w-full min-h-0" />
                    </div>

                    <div className="pointer-events-none absolute left-5 top-5">
                      <div className="glass-panel rounded-2xl border border-white/95 px-3.5 py-2.5 shadow-[0_8px_28px_rgba(26,25,24,0.06)]">
                        <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-qneutral-500">
                          Foco regional
                        </span>
                        <span className="mt-0.5 block text-[13px] font-semibold text-qneutral-800">
                          Nordeste · hub em PE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="card-premium dist-animate-rise dist-animate-rise-delay-3 relative flex flex-col overflow-visible rounded-[1.75rem] border border-qneutral-200/90 bg-white p-8 shadow-[0_12px_40px_-18px_rgba(26,25,24,0.08)] sm:p-9 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:w-full lg:self-start">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-qpurple-100/50 blur-3xl" />
              <header className="relative z-10 mb-5 border-b border-qneutral-100 pb-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-qpurple-100/80 bg-gradient-to-br from-qpurple-50 to-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <MapPin className="h-5 w-5 text-qpurple-600" aria-hidden />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-qneutral-400">Infraestrutura</p>
                    <h3 className="font-editorial mt-1.5 text-[1.45rem] font-medium leading-tight text-qneutral-900 sm:text-2xl">
                      Polos base
                    </h3>
                  </div>
                </div>
                <p className="relative z-10 mt-4 text-sm leading-relaxed text-qneutral-600">
                  Unidades posicionadas para rapidez e capilaridade nas entregas diretas.
                </p>
              </header>

              <div className="relative z-10 mt-6 space-y-3">
                <div className="group/pole flex gap-4 rounded-2xl border border-qneutral-200/80 bg-qneutral-50/80 p-4 transition-all duration-300 hover:border-qpurple-200/70 hover:bg-white hover:shadow-[0_12px_32px_-16px_rgba(106,27,154,0.12)]">
                  <div className="mt-1.5 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-qpurple-500 shadow-[0_0_0_4px_rgba(106,27,154,0.08)] transition-all duration-300 group-hover/pole:shadow-[0_0_0_6px_rgba(106,27,154,0.14)]" />
                  </div>
                  <div>
                    <span className="mb-0.5 block text-[15px] font-semibold text-qneutral-900">Recife / PE</span>
                    <a
                      href="tel:+558132521132"
                      className="inline-flex items-center gap-1.5 text-sm text-qneutral-500 transition-colors hover:text-qpurple-700"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden /> (81) 3252-1132
                    </a>
                  </div>
                </div>

                <div className="group/pole flex gap-4 rounded-2xl border border-qneutral-200/80 bg-qneutral-50/80 p-4 transition-all duration-300 hover:border-qpurple-200/70 hover:bg-white hover:shadow-[0_12px_32px_-16px_rgba(106,27,154,0.12)]">
                  <div className="mt-1.5 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-qpurple-500 shadow-[0_0_0_4px_rgba(106,27,154,0.08)] transition-all duration-300 group-hover/pole:shadow-[0_0_0_6px_rgba(106,27,154,0.14)]" />
                  </div>
                  <div>
                    <span className="mb-0.5 block text-[15px] font-semibold text-qneutral-900">São Vicente Férrer / PE</span>
                    <a
                      href="tel:+558136551198"
                      className="inline-flex items-center gap-1.5 text-sm text-qneutral-500 transition-colors hover:text-qpurple-700"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden /> (81) 3655-1198
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="card-premium group/nat dist-animate-rise dist-animate-rise-delay-3 relative flex flex-col overflow-hidden rounded-[1.75rem] border border-qneutral-200/90 bg-white p-8 shadow-[0_12px_40px_-18px_rgba(26,25,24,0.08)] sm:p-9 lg:col-span-5 lg:col-start-8 lg:row-start-2">
              <div className="pointer-events-none absolute -right-6 top-0 h-36 w-36 rounded-full bg-qneutral-100/80 blur-2xl transition-colors duration-500 group-hover/nat:bg-qpurple-50/60" />
              <header className="relative z-10 mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-qneutral-200/90 bg-gradient-to-br from-qneutral-50 to-white shadow-inner">
                  <Globe className="h-5 w-5 text-qneutral-600 transition-colors duration-300 group-hover/nat:text-qpurple-600" aria-hidden />
                </div>
                <span className="inline-flex shrink-0 items-center rounded-full border border-qneutral-200/80 bg-qneutral-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-qneutral-500 sm:text-[10px]">
                  Parceiros nacionais
                </span>
              </header>
              <h3 className="font-editorial relative z-10 mb-2 text-[1.3rem] font-medium text-qneutral-900 sm:text-[1.4rem]">
                Abrangência nacional
              </h3>
              <p className="relative z-10 text-sm leading-relaxed text-qneutral-600">
                Além da frota direta, contamos com distribuidores parceiros para entregar o padrão QDelícia em todo o
                território brasileiro.
              </p>
            </article>
        </div>

        {/* Fechamento premium */}
        <div className="dist-animate-rise dist-animate-rise-delay-4 mt-10 sm:mt-12 lg:mt-14">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-qneutral-200/90 bg-gradient-to-b from-white via-white to-qneutral-50 px-8 py-9 shadow-[0_24px_56px_-24px_rgba(26,25,24,0.12)] sm:px-10 sm:py-10 md:px-14">
            <div className="pointer-events-none absolute inset-0 bg-pattern-dots opacity-40" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-qgreen-500/[0.07] blur-[72px]" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-qpurple-500/[0.06] blur-[64px]" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-qneutral-400">Próximo passo</p>
              <h3 className="font-editorial mt-3 text-3xl font-medium leading-[1.12] tracking-tight text-qneutral-900 md:text-[2.125rem]">
                Pronto para <span className="text-qpurple-700 italic">abastecer</span> sua operação?
              </h3>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-qneutral-600 md:text-[1.0625rem]">
                Consulte disponibilidade do mix completo e condições especiais para atacadistas e redes de varejo.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="#orcamento"
                  className="group/cta btn-glow-purple inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[15px] font-bold shadow-[0_8px_28px_-6px_rgba(106,27,154,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Falar com a gente
                  <ArrowRight className="ml-0.5 h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
