import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/5581998623166?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] flex items-center h-14 bg-qgreen-50/90 backdrop-blur-xl border border-qgreen-200/60 rounded-full shadow-[0_8px_30px_-6px_rgba(133,194,38,0.15)] hover:shadow-[0_14px_40px_-8px_rgba(133,194,38,0.25)] hover:border-qgreen-300/80 hover:bg-qgreen-50 hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group focus:outline-none focus:ring-2 focus:ring-qgreen-500/20"
      aria-label="Falar no WhatsApp"
    >
      {/* Texto Expansível (Desliza suavemente, integrado ao botão como um todo) */}
      <div className="overflow-hidden max-w-0 group-hover:max-w-[180px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center h-full">
        <span className="pl-6 pr-1.5 text-[14.5px] font-bold text-qneutral-800 group-hover:text-qgreen-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          Falar com a gente
        </span>
      </div>

      {/* Ícone Container (Totalmente integrado na cápsula verde) */}
      <div className="relative flex items-center justify-center w-14 h-14 shrink-0 transition-transform duration-500">
        
        {/* Fundo sutil do ícone - apenas um micro-contraste verde translúcido */}
        <div className="absolute inset-[6px] rounded-full bg-qgreen-100/40 group-hover:bg-qgreen-200/50 transition-colors duration-500"></div>

        {/* Indicador de Status (Ping Online) - Menor e mais integrado com borda esverdeada */}
        <span className="absolute top-[12px] right-[12px] flex h-2.5 w-2.5 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-qgreen-400 opacity-75 duration-1000"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-qgreen-500 border-2 border-qgreen-50 group-hover:border-qgreen-100 transition-colors duration-500"></span>
        </span>
        
        {/* Ícone do WhatsApp verde */}
        <MessageCircle className="w-5 h-5 text-qgreen-600 group-hover:text-qgreen-700 transition-all duration-500 relative z-10 group-hover:scale-[1.05]" />
      </div>
    </a>
  );
}
