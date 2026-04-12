"use client";

import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Contact() {
  return (
    <section
      id="orcamento"
      className="relative w-full overflow-hidden border-t border-qneutral-200 bg-qneutral-100 py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 8% 0%, rgba(106, 27, 154, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 92% 100%, rgba(133, 194, 38, 0.055) 0%, transparent 50%)
          `,
        }}
      />
      <div className="bg-pattern-dots pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Topo: fechamento comercial */}
        <header className="mb-12 max-w-3xl lg:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-qpurple-200/70 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-qpurple-600" aria-hidden />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-qpurple-800">
              Fale Conosco
            </span>
          </div>
          <h2 className="font-editorial text-[1.75rem] font-medium leading-[1.12] tracking-tight text-qneutral-900 sm:text-[2rem] md:text-[2.25rem] lg:text-[2.4rem]">
            Entre em{" "}
            <span className="text-qpurple-700 italic">contato.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-qneutral-600 md:text-[1.0625rem]">
            Escolha como prefere falar com a gente — respondemos rápido para pedidos, orçamentos e dúvidas.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:gap-x-16">
          {/* Coluna esquerda: canais diretos */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-qpurple-800/75">
              Contato direto
            </p>

            <a
              href="https://wa.me/5581998623166?text=Olá!%20Gostaria%20de%20falar%20com%20o%20comercial%20para%20cotar%20produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-qgreen-300/75 bg-gradient-to-br from-qgreen-50 via-white to-qgreen-100/35 p-5 shadow-[0_14px_40px_-24px_rgba(26,25,24,0.12)] transition-[border-color,box-shadow] duration-300 hover:border-qgreen-400/90 hover:shadow-[0_18px_44px_-20px_rgba(133,194,38,0.22)] sm:p-[1.35rem]"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-qgreen-500/90 via-qgreen-400 to-qgreen-600/85"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-qgreen-400/15 blur-2xl"
                aria-hidden
              />
              <div className="relative flex items-center justify-between gap-3.5">
                <div className="flex min-w-0 items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-qgreen-500 to-qgreen-600 text-white shadow-md ring-2 ring-white/90 ring-offset-0">
                    <MessageCircle className="h-[1.25rem] w-[1.25rem]" aria-hidden strokeWidth={2.25} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-sans text-base font-bold leading-snug tracking-tight text-qneutral-900 sm:text-[1.0625rem]">
                      WhatsApp
                    </h3>
                    <p className="mt-1 text-sm font-semibold leading-snug text-qgreen-800">
                      (81) 99862-3166
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-qneutral-600">
                      Canal principal para cotação rápida e acompanhamento do pedido.
                    </p>
                  </div>
                </div>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-qgreen-600 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </div>
            </a>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-3.5">
              <a
                href="tel:+558132521132"
                className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-qneutral-200/90 bg-white p-5 shadow-sm transition-[border-color,box-shadow] hover:border-qgreen-300/65 hover:shadow-[0_14px_36px_-20px_rgba(133,194,38,0.14)] sm:p-[1.35rem]"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-qgreen-500/40 to-transparent"
                  aria-hidden
                />
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-qgreen-100/95 text-qgreen-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65)] ring-1 ring-qgreen-200/60 transition-[background-color,ring-color] group-hover:bg-qgreen-100 group-hover:ring-qgreen-300/70">
                  <Phone className="h-[1.25rem] w-[1.25rem]" aria-hidden strokeWidth={2.25} />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-qgreen-800/70">
                    Recife / PE
                  </p>
                  <p className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-qneutral-900">
                    (81) 3252-1132
                  </p>
                </div>
              </a>
              <a
                href="tel:+558136551198"
                className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-qneutral-200/90 bg-white p-5 shadow-sm transition-[border-color,box-shadow] hover:border-qgreen-300/65 hover:shadow-[0_14px_36px_-20px_rgba(133,194,38,0.14)] sm:p-[1.35rem]"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-qgreen-500/40 to-transparent"
                  aria-hidden
                />
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-qgreen-100/95 text-qgreen-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65)] ring-1 ring-qgreen-200/60 transition-[background-color,ring-color] group-hover:bg-qgreen-100 group-hover:ring-qgreen-300/70">
                  <Phone className="h-[1.25rem] w-[1.25rem]" aria-hidden strokeWidth={2.25} />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-qgreen-800/70">
                    S. Vicente Férrer / PE
                  </p>
                  <p className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-qneutral-900">
                    (81) 3655-1198
                  </p>
                </div>
              </a>
            </div>

            <a
              href="mailto:contato@qdeliciafrutas.com.br"
              className="group relative flex items-center justify-between gap-3.5 overflow-hidden rounded-2xl border border-qneutral-200/90 bg-white p-5 shadow-sm transition-[border-color,box-shadow] hover:border-qpurple-200/80 hover:shadow-[0_14px_36px_-20px_rgba(106,27,154,0.08)] sm:p-[1.35rem]"
            >
              <div
                className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-qpurple-500/35 to-transparent"
                aria-hidden
              />
              <div className="flex min-w-0 items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-qpurple-100/90 text-qpurple-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65)] ring-1 ring-qpurple-200/55 transition-[background-color,ring-color] group-hover:bg-qpurple-100 group-hover:ring-qpurple-300/60">
                  <Mail className="h-[1.25rem] w-[1.25rem]" aria-hidden strokeWidth={2.25} />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-qpurple-800/75">
                      E-mail
                  </p>
                  <p className="break-all text-[0.9375rem] font-semibold leading-snug tracking-tight text-qneutral-900">
                    contato@qdeliciafrutas.com.br
                  </p>
                </div>
              </div>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-qneutral-400 transition-colors group-hover:text-qpurple-600"
                aria-hidden
              />
            </a>

            <p className="flex items-start gap-2 text-xs leading-relaxed text-qneutral-500">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-qpurple-600/70" aria-hidden />
              Atendemos atacadistas, supermercados, feiras e varejo no Nordeste.
            </p>
          </div>

          {/* Coluna direita: orçamento */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[1.75rem] border border-qneutral-200/90 bg-white p-7 shadow-[0_24px_56px_-28px_rgba(26,25,24,0.14)] sm:p-9">
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-[1.75rem] bg-gradient-to-b from-qgreen-500 to-qpurple-600"
                aria-hidden
              />
              <div className="pl-1 sm:pl-2">
                <h3 className="font-editorial text-2xl font-medium tracking-tight text-qneutral-900 md:text-[1.75rem]">
                  Solicite seu <span className="text-qgreen-700 italic">orçamento</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-qneutral-600">
                  Envie os dados da sua operação. Retornamos com proposta comercial e condições de
                  fornecimento.
                </p>

                <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label
                      htmlFor="orcamento-empresa"
                      className="mb-1.5 block border-l-2 border-qgreen-500/35 pl-2.5 text-sm font-semibold text-qneutral-800"
                    >
                      Nome e empresa
                    </label>
                    <input
                      type="text"
                      id="orcamento-empresa"
                      name="empresa"
                      autoComplete="organization"
                      className="w-full rounded-xl border border-qneutral-300 bg-qneutral-50 px-4 py-3 text-sm text-qneutral-900 outline-none transition-[border-color,box-shadow] placeholder:text-qneutral-400 focus:border-qgreen-600/85 focus:shadow-[0_0_0_3px_rgba(133,194,38,0.12)] focus:ring-0"
                      placeholder="Ex.: João Silva — Mercado / distribuidora"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="orcamento-email"
                      className="mb-1.5 block border-l-2 border-qgreen-500/35 pl-2.5 text-sm font-semibold text-qneutral-800"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="orcamento-email"
                      name="email"
                      autoComplete="email"
                      className="w-full rounded-xl border border-qneutral-300 bg-qneutral-50 px-4 py-3 text-sm text-qneutral-900 outline-none transition-[border-color,box-shadow] placeholder:text-qneutral-400 focus:border-qgreen-600/85 focus:shadow-[0_0_0_3px_rgba(133,194,38,0.12)] focus:ring-0"
                      placeholder="comercial@suaempresa.com.br"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="orcamento-necessidade"
                      className="mb-1.5 block border-l-2 border-qgreen-500/35 pl-2.5 text-sm font-semibold text-qneutral-800"
                    >
                      O que você precisa cotar?
                    </label>
                    <textarea
                      id="orcamento-necessidade"
                      name="necessidade"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-qneutral-300 bg-qneutral-50 px-4 py-3 text-sm text-qneutral-900 outline-none transition-[border-color,box-shadow] placeholder:text-qneutral-400 focus:border-qgreen-600/85 focus:shadow-[0_0_0_3px_rgba(133,194,38,0.12)] focus:ring-0"
                      placeholder="Mix (FLV), volume estimado, frequência, cidade de entrega…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-glow-green relative mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-qneutral-900 shadow-[0_4px_16px_rgba(133,194,38,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-px hover:shadow-[0_8px_22px_rgba(133,194,38,0.28)]"
                  >
                    Enviar pedido de orçamento
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
