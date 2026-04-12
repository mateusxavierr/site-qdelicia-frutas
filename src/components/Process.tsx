"use client";

import type { LucideIcon } from "lucide-react";
import { CheckCircle2, PackageCheck, ShieldCheck, Truck } from "lucide-react";

type Accent = "green" | "purple" | "featured";

type Step = {
  step: string;
  title: string;
  body: string;
  Icon: LucideIcon;
  accent: Accent;
  featured: boolean;
  rhythm: string;
  kicker?: string;
};

const STEPS: Step[] = [
  {
    step: "01",
    title: "Selecionamos os produtos",
    body: "Selecionamos cuidadosamente os melhores alimentos para não causar desperdícios e proporcionar aos nossos clientes economia de tempo e consequente redução de custos.",
    Icon: CheckCircle2,
    accent: "green",
    featured: false,
    rhythm: "md:mt-2 lg:mt-3",
    kicker: "Seleção cuidadosa",
  },
  {
    step: "02",
    title: "Embalamos cuidadosamente",
    body: "Os nossos alimentos são acondicionados com muito cuidado em monoblocos plásticos, que possuem um controle de qualidade e higiene extremamente rigoroso.",
    Icon: PackageCheck,
    accent: "featured",
    featured: true,
    rhythm: "md:-mt-0.5 lg:-mt-1",
  },
  {
    step: "03",
    title: "Entregamos rapidamente",
    body: "Os prazos de entrega são seguidos rigorosamente e todos os veículos são limpos e desinsetizados periodicamente.",
    Icon: Truck,
    accent: "purple",
    featured: false,
    rhythm: "md:mt-2 lg:mt-3",
    kicker: "Frota própria",
  },
];

function topAccentClass(accent: Accent, featured: boolean) {
  if (featured) {
    return "from-qgreen-500/[0.22] via-qpurple-500/[0.18] to-qgreen-500/[0.22]";
  }
  if (accent === "green") {
    return "from-qgreen-500/35 via-qgreen-400/15 to-transparent";
  }
  return "from-transparent via-qpurple-400/20 to-qpurple-500/35";
}

function stepLabelClass(accent: Accent) {
  if (accent === "green") return "text-qgreen-700/75";
  if (accent === "purple") return "text-qpurple-700/80";
  return "text-qneutral-500";
}

/** Card 2 = gradiente verde→roxo; card 1 = só verde; card 3 = só roxo. */
function processStepIconVisual(featured: boolean, accent: Accent, iconSize: string) {
  const motion = `${iconSize} mb-6 shrink-0 rounded-2xl p-px transition-transform duration-500 group-hover/process:scale-[1.03]`;

  if (featured) {
    return {
      outer: `${motion} bg-gradient-to-br from-qgreen-500 to-qpurple-600`,
      inner:
        "flex h-full w-full items-center justify-center rounded-[0.9375rem] bg-gradient-to-br from-qgreen-100/75 via-white to-qpurple-100/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.96)]",
      stroke: "url(#process-step-icon-gradient)",
    };
  }
  if (accent === "green") {
    return {
      outer: `${motion} bg-gradient-to-br from-qgreen-400 to-qgreen-700`,
      inner:
        "flex h-full w-full items-center justify-center rounded-[0.9375rem] bg-gradient-to-br from-qgreen-50/98 via-white to-qgreen-100/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.96)]",
      stroke: "#6A9B1E",
    };
  }
  return {
    outer: `${motion} bg-gradient-to-br from-qpurple-500 to-qpurple-800`,
    inner:
      "flex h-full w-full items-center justify-center rounded-[0.9375rem] bg-gradient-to-br from-qpurple-50/98 via-white to-qpurple-100/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.96)]",
    stroke: "#6A1B9A",
  };
}

export function Process() {
  return (
    <section
      id="processo"
      className="ds-section relative w-full overflow-hidden border-t border-qneutral-200 bg-qneutral-100 pt-12 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.42] dist-section-mesh"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 72% 52% at 18% 22%, rgba(133, 194, 38, 0.085) 0%, transparent 58%),
            radial-gradient(ellipse 58% 48% at 88% 12%, rgba(106, 27, 154, 0.07) 0%, transparent 52%),
            radial-gradient(ellipse 50% 40% at 48% 92%, rgba(106, 27, 154, 0.045) 0%, transparent 48%)
          `,
        }}
      />
      <div className="bg-pattern-dots pointer-events-none absolute inset-0 opacity-[0.28]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <svg width={0} height={0} className="pointer-events-none absolute" aria-hidden>
          <defs>
            <linearGradient id="process-step-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#85C226" />
              <stop offset="100%" stopColor="#6A1B9A" />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative">
          <header className="relative max-w-[40rem] text-center sm:max-w-[42rem] sm:text-left lg:max-w-[46rem]">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-qneutral-200/90 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md sm:mb-8">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-qgreen-600" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-qneutral-600 sm:text-[11px]">
                Qualidade desde a origem
              </span>
            </div>

            <h2 className="font-editorial mb-4 text-4xl font-medium leading-[1.08] tracking-tight text-qneutral-900 md:mb-5 md:text-5xl lg:text-[3.25rem]">
              Como
              <br />
              <span className="text-qpurple-700 italic">trabalhamos.</span>
            </h2>

            <p className="max-w-2xl border-l-2 border-qgreen-500/45 pl-5 text-base font-medium leading-[1.65] text-qneutral-600 md:pl-6 md:text-[1.0625rem]">
              Do campo à entrega, cada etapa é feita com cuidado e responsabilidade.
            </p>

            <div
              className="mt-10 h-px w-full max-w-2xl bg-gradient-to-r from-qgreen-500/25 via-qneutral-200/80 to-qpurple-500/20 sm:mt-11 lg:mt-12"
              aria-hidden="true"
            />
          </header>

          <div className="relative mt-10 lg:mt-12">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-[32%] hidden h-px md:block lg:left-[11%] lg:right-[11%]"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(133, 194, 38, 0.28) 24%, rgba(106, 27, 154, 0.22) 50%, rgba(133, 194, 38, 0.28) 76%, transparent 100%)",
              }}
            />

            <div className="grid gap-6 md:grid-cols-3 md:gap-6 lg:gap-7">
              {STEPS.map(({ step, title, body, Icon, accent, featured, rhythm, kicker }) => {
                const motion =
                  "group/process relative flex h-full flex-col rounded-[1.75rem] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

                const outerClass = featured
                  ? `${motion} ${rhythm} z-0 bg-gradient-to-br from-qgreen-500/[0.26] via-white to-qpurple-500/[0.3] p-px shadow-[0_22px_52px_-22px_rgba(106,27,154,0.15),0_8px_24px_-12px_rgba(133,194,38,0.07)] md:z-10 md:-translate-y-1 md:scale-[1.012]`
                  : `${motion} ${rhythm} card-premium border border-qneutral-200/90 bg-white shadow-[0_14px_44px_-22px_rgba(26,25,24,0.085)]`;

                const innerClass = featured
                  ? "relative flex h-full flex-col overflow-hidden rounded-[1.6875rem] bg-white px-8 pb-9 pt-8 lg:px-10 lg:pb-10 lg:pt-9"
                  : "relative flex h-full flex-col overflow-hidden rounded-[1.75rem] px-8 pb-9 pt-8 lg:px-9 lg:pb-10 lg:pt-9";

                const iconSize = featured ? "h-[4.125rem] w-[4.125rem]" : "h-[4rem] w-[4rem]";
                const iconVisual = processStepIconVisual(featured, accent, iconSize);

                return (
                  <div key={step} className={outerClass}>
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${topAccentClass(accent, featured)}`}
                      aria-hidden="true"
                    />
                    <div className={innerClass}>
                      <div
                        className={`mb-6 flex flex-wrap items-start justify-between gap-x-3 gap-y-2 ${featured || kicker ? "min-h-[2.25rem]" : ""}`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-[11px] font-semibold tabular-nums tracking-[0.14em] ${stepLabelClass(accent)}`}
                          >
                            {step}
                          </span>
                          <span
                            className={`h-1 w-7 shrink-0 rounded-full ${accent === "green" ? "bg-qgreen-500" : accent === "purple" ? "bg-qpurple-500" : "bg-gradient-to-r from-qgreen-500 to-qpurple-600"}`}
                            aria-hidden
                          />
                        </div>
                        {featured ? (
                          <span className="inline-flex rounded-full bg-gradient-to-r from-qgreen-500 to-qpurple-600 p-px shadow-[0_2px_12px_-4px_rgba(106,27,154,0.12)]">
                            <span className="inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-qpurple-900">
                              Embalagem e higiene
                            </span>
                          </span>
                        ) : kicker ? (
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] ${
                              accent === "green"
                                ? "border-qgreen-200/80 bg-qgreen-50/80 text-qgreen-900"
                                : "border-qpurple-200/70 bg-qpurple-50/70 text-qpurple-800"
                            }`}
                          >
                            {kicker}
                          </span>
                        ) : null}
                      </div>

                      <div className={iconVisual.outer}>
                        <div className={iconVisual.inner}>
                          <Icon
                            className={featured ? "h-8 w-8" : "h-[1.875rem] w-[1.875rem]"}
                            strokeWidth={featured ? 2 : 1.75}
                            stroke={iconVisual.stroke}
                            aria-hidden
                          />
                        </div>
                      </div>

                      <h3 className="font-editorial mb-3 text-[1.1875rem] font-medium leading-snug tracking-tight text-qneutral-900 sm:text-xl">
                        {title}
                      </h3>
                      <p className="text-sm leading-[1.65] text-qneutral-600">{body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
