import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Products } from '@/components/Products';
import { Distribution } from '@/components/Distribution';
import { Process } from '@/components/Process';
import { About } from '@/components/About';
import { Events } from '@/components/Events';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="relative z-10 flex flex-col">
        <Hero />

        {/* 2. Barra de Credibilidade */}
        <section className="bg-transparent pb-14 pt-8 lg:pt-10 relative px-6 lg:px-12 -mt-20 lg:-mt-24 z-20">
          <div className="max-w-[1400px] mx-auto bg-qearth-ink rounded-[1.5rem] md:rounded-[2rem] border border-qneutral-800 shadow-[0_20px_40px_rgb(0,0,0,0.12)] overflow-hidden relative group">
            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-qgreen-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none transition-opacity duration-700 group-hover:opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-qpurple-500/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
            
            <div className="relative z-10 py-10 md:py-14">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 divide-x-0 md:divide-x divide-white/10 text-center">
                
                <div className="flex flex-col items-center justify-center px-4 group">
                  <span className="text-[2.5rem] font-editorial font-bold text-white mb-1 group-hover:-translate-y-1 transition-transform">22+</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-qneutral-400">Anos de Mercado</span>
                </div>
                
                <div className="flex flex-col items-center justify-center px-4 group">
                  <span className="text-[2.5rem] font-editorial font-bold text-qgreen-400 mb-1 group-hover:-translate-y-1 transition-transform">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-qneutral-400">Logística Própria</span>
                </div>
                
                <div className="flex flex-col items-center justify-center px-4 group">
                  <span className="text-[2.5rem] font-editorial font-bold text-white mb-1 group-hover:-translate-y-1 transition-transform">FLV</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-qneutral-400">Mix Completo</span>
                </div>
                
                <div className="flex flex-col items-center justify-center px-4 group">
                  <span className="text-[2.5rem] font-editorial font-bold text-qpurple-400 mb-1 group-hover:-translate-y-1 transition-transform">5</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-qneutral-400">Estados Atendidos</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        <Products />
        <Distribution />
        <Process />
        <About />
        <Events />
        <Contact />

      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
