import { Plus_Jakarta_Sans, Newsreader, DM_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "QDelícia Frutas - Distribuição B2B",
  description: "Produção e distribuição de frutas, verduras e legumes em PE, AL, PB e RN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-pt-[5.5rem]">
      <body
        className={`${plusJakarta.variable} ${newsreader.variable} ${dmMono.variable} font-sans bg-qneutral-100 text-qneutral-900 antialiased selection:bg-qgreen-500/25 selection:text-qpurple-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
