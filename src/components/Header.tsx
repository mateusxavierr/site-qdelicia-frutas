"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { MessageCircle, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { href: "#produtos", sectionId: "produtos", label: "Produtos" },
  { href: "#distribuicao", sectionId: "distribuicao", label: "Distribuição" },
  { href: "#quem-somos", sectionId: "quem-somos", label: "Quem Somos" },
  { href: "#orcamento", sectionId: "orcamento", label: "Contato" },
] as const;

const SCROLL_OFFSET = 88;

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative inline-flex px-0.5 py-2 text-[13px] font-medium tracking-[0.06em] transition-colors duration-300 ease-out",
        active
          ? "text-qneutral-900"
          : "text-qneutral-600 hover:text-qneutral-900"
      )}
    >
      <span className="relative z-10">{label}</span>
      {/* Hover: traço refinado */}
      <span
        aria-hidden
        className={clsx(
          "pointer-events-none absolute bottom-0 left-0 right-0 mx-auto h-px max-w-full origin-center rounded-full bg-qneutral-900/25 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          active ? "scale-x-0 opacity-0" : "scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
        )}
      />
      {/* Ativo: assinatura roxa curta */}
      <span
        aria-hidden
        className={clsx(
          "pointer-events-none absolute -bottom-px left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-qpurple-600 to-qpurple-500 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          active ? "scale-100 opacity-100" : "scale-90 opacity-0"
        )}
      />
    </Link>
  );
}

export function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.sectionId);

    const update = () => {
      setScrolled(window.scrollY > 10);

      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= SCROLL_OFFSET) current = id;
      }
      setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out",
        scrolled
          ? "border-qneutral-200/80 bg-white/90 shadow-[0_10px_32px_-14px_rgba(26,25,24,0.1)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/82"
          : "border-qneutral-200/55 bg-gradient-to-b from-white/94 via-[#FDFCFA]/90 to-[#F9F8F6]/86 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(26,25,24,0.03)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/78"
      )}
    >
      {/* Linha de assinatura muito sutil na base */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-qpurple-600/[0.07] to-transparent"
        aria-hidden
      />

      <div
        className={clsx(
          "mx-auto flex min-h-[5rem] max-w-[1400px] items-center justify-between gap-4 px-6 lg:grid lg:min-h-[5.25rem] lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8 lg:pl-16 lg:pr-12"
        )}
      >
        <div className="flex min-w-0 justify-start lg:justify-center lg:pl-1">
          <Link href="#hero" className="group inline-flex shrink-0 items-center py-1">
            <Image
              src="/assets/brand/logo-qdelicia.png"
              alt="QDelícia Frutas"
              width={243}
              height={165}
              priority
              className="h-[3.15rem] w-auto max-w-[min(236px,50vw)] object-contain object-center transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.03] sm:h-14 sm:max-w-[248px]"
            />
          </Link>
        </div>

        <nav
          className="hidden items-center gap-9 lg:flex lg:justify-self-center xl:gap-10"
          aria-label="Seções principais"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.sectionId}
              href={item.href}
              label={item.label}
              active={activeSection === item.sectionId}
            />
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2.5 sm:gap-3 lg:justify-self-end">
          <a
            href="https://wa.me/5581998623166?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center gap-2 rounded-full border border-qgreen-200/55 bg-qgreen-50/75 px-4 py-2 text-[13px] font-semibold tracking-[0.03em] text-qneutral-800 shadow-sm transition-all duration-300 hover:border-qgreen-300/70 hover:bg-qgreen-50 hover:text-qgreen-900 hover:shadow-[0_4px_14px_rgba(133,194,38,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-qgreen-500/25 md:inline-flex"
          >
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-qgreen-100/50 transition-colors duration-300 hover:bg-qgreen-200/45">
              <MessageCircle className="h-3 w-3 text-qgreen-600" aria-hidden />
            </span>
            WhatsApp
          </a>

          <Link
            href="#orcamento"
            className="group/orc btn-glow-green relative inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2 text-[13px] font-semibold tracking-[0.04em] text-qneutral-900 shadow-[0_2px_10px_rgba(133,194,38,0.14)] transition-[box-shadow,transform] duration-300 hover:!translate-y-0 hover:shadow-[0_6px_18px_rgba(133,194,38,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-qgreen-500/30 sm:gap-2 sm:px-5 sm:py-2 sm:text-sm"
          >
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full [transform:translateZ(0)]">
              <span className="absolute top-0 -left-[100%] h-full w-[55%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-22deg] transition-all duration-700 ease-out group-hover/orc:left-[200%]" />
            </span>
            <span className="relative z-10">Orçamento</span>
            <ArrowRight
              className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover/orc:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
