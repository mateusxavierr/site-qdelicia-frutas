# Arquitetura do Novo Site — QDelícia Frutas — V3

**Versão:** 3.0 — Foco máximo em conversão B2B
**Data:** 10/04/2026
**Premissa central:** O site existe para gerar contato. Especificamente via WhatsApp e telefone. Cada decisão estrutural serve a esse objetivo. Ponto.

---

---

# 1. Decisão Estratégica Principal

## O site deve ser: ONE PAGE

Não híbrido. Não múltiplas páginas. Uma única página.

### Por quê

O comprador B2B de FLV tem um fluxo de decisão previsível e curto:

1. A empresa vende o que eu preciso?
2. Ela atende minha região?
3. Parece confiável?
4. Como eu contato agora?

Essas quatro perguntas são respondidas em uma única página bem construída. Página separada de produtos adiciona um clique desnecessário — e cada clique a mais é uma taxa de abandono a mais. Para um site cujo objetivo é gerar um WhatsApp ou uma ligação, isso não se justifica.

### O argumento contra página de produtos separada

A V2 propôs uma página de produtos separada. A justificativa era organização e categorização. O problema é que organização não converte — contato converte. O catálogo do QDelícia não é extenso o suficiente para precisar de uma página própria. Frutas, legumes e verduras com imagens e nomes cabem em uma seção da home, com um CTA direto após cada grupo. Criar uma página separada para isso é adicionar arquitetura sem ganho de conversão.

**Regra usada para esta decisão:** Se a informação que está na página separada pode ser consumida em menos de 30 segundos de scroll na home, ela não precisa de página separada.

### Exceção permitida

Se no futuro o catálogo crescer a ponto de ter dezenas de SKUs com especificações por item, uma página de produtos se justifica. Com o conteúdo atual — categorias gerais com imagens — não se justifica.

### Estrutura final do site

```
Um único domínio. Uma única página. Todas as seções na home.
```

O menu é composto apenas de âncoras que rolam para seções da mesma página.

---

---

# 2. O que muda da V2 para a V3

## O que deve ser REMOVIDO

| Item removido | Motivo |
|---|---|
| Página separada de Produtos | Adiciona fricção sem ganho de conversão |
| Página separada "Sobre" | Conteúdo cabe em 1 parágrafo na home |
| "Produtos" no menu levando para outra página | Inexiste a página — remove-se o link |
| Galeria de 3 fotos de "Nossa História" na home | Alonga sem converter |
| "Eventos" como item de menu | Evento virou faixa de credibilidade, não seção navegável |

## O que deve ser REBAIXADO

| Item rebaixado | Nova posição/status |
|---|---|
| Formulário | Seção secundária, menor, abaixo dos contatos diretos — título "Prefere deixar uma mensagem?" |
| "Quem Somos" | Mantido compacto — 1 parágrafo + vídeo, sem destaque excessivo |
| Blog | Totalmente fora da navegação (posts de teste apenas) |

## O que deve SUBIR DE PRIORIDADE

| Item | Motivo |
|---|---|
| WhatsApp | Canal principal de conversão — aparece no hero, após produtos, após distribuição, no CTA final e como botão flutuante |
| Telefone | Segundo canal — visível no header, no hero, após distribuição e no bloco de contatos |
| Produtos (catálogo na home) | Responde "você tem o que eu preciso?" — deve vir antes de institucional |
| Distribuição | Responde "você atende minha região?" — objeção mais urgente que história da empresa |

## O que deve MUDAR DE POSIÇÃO

| Item | Posição V2 | Posição V3 |
|---|---|---|
| Distribuição | 6ª seção (após Quem Somos e Processo) | 4ª seção (antes de Processo e Quem Somos) |
| Produtos | 3ª seção | 3ª seção — mas agora inline na home, não link para página externa |
| Formulário | Protagonista da seção Contato | Secundário, abaixo dos contatos diretos |

## O que deve GANHAR MAIS DESTAQUE

- WhatsApp: de flutuante apenas → presente em header, hero, após produtos, após distribuição, CTA final E flutuante
- Telefone: número visível e clicável em pelo menos 4 pontos da página
- Produtos: categorias nomeadas com imagem, CTA por grupo dentro da seção
- Distribuição: objeção geográfica resolvida antes da história da empresa

## O que deve PERDER DESTAQUE

- Formulário: de seção protagonista para bloco secundário menor
- História longa: de dois parágrafos para um parágrafo único compacto
- Eventos: de faixa de credibilidade — mantida, mas apenas como strip passivo sem item de menu

---

---

# 3. Nova Arquitetura da Home V3

Esta é a ordem definitiva. Não há alternativa. Esta sequência responde as 4 perguntas do comprador B2B na ordem em que ele as faz.

```
1.  Hero
2.  Barra de credibilidade
3.  Produtos (catálogo inline)
4.  Distribuição
5.  Processo de qualidade
6.  Quem Somos (compacto)
7.  Faixa de credibilidade — Eventos
8.  CTA final agressivo
9.  Contatos diretos (WhatsApp + telefone + e-mail)
10. Formulário secundário
11. Rodapé
```

### Lógica da sequência

| Posição | Seção | Pergunta que responde |
|---|---|---|
| 1 | Hero | "O que essa empresa faz? Como eu contato agora?" |
| 2 | Credibilidade | "Posso confiar minimamente nela para continuar lendo?" |
| 3 | Produtos | "Ela vende o que eu preciso?" |
| 4 | Distribuição | "Ela atende minha região?" |
| 5 | Processo | "Como ela trabalha? Ela é confiável operacionalmente?" |
| 6 | Quem Somos | "Quem são essas pessoas? Têm história real?" |
| 7 | Eventos | "Eles existem de verdade no mercado?" |
| 8 | CTA final | "Quero contatar agora" |
| 9 | Contatos diretos | "Qual o número? Qual o WhatsApp?" |
| 10 | Formulário | "Prefiro deixar mensagem escrita" |
| 11 | Rodapé | Navegação e dados institucionais |

---

---

# 4. Wireframe em ASCII da Home V3

```
╔══════════════════════════════════════════════════════════════════════════╗
║  HEADER (fixo / sticky — presente em 100% do scroll)                     ║
║                                                                          ║
║  [Logo QDelícia]    [Produtos][Distribuição][Quem Somos][Contato]        ║
║                                    [☎ (81) 3252-1132]  [💬 WHATSAPP ▶]  ║
╚══════════════════════════════════════════════════════════════════════════╝

                                                    ┌────────────────────┐
                                                    │   💬 WhatsApp      │  ← flutuante
                                                    │   (fixo no scroll) │    canto dir.
                                                    └────────────────────┘

════════════════════════════════════════════════════════════════════════════
 [1] HERO — tela cheia, acima da dobra
 Fundo: imagem/vídeo de produtos ou operação (full viewport)
════════════════════════════════════════════════════════════════════════════

 ┌────────────────────────────────────────────────────────────────────┐
 │                                                                    │
 │   [HEADLINE PRINCIPAL — proposta de valor direta]                  │
 │   [Subtítulo — quem somos + onde atuamos]                         │
 │                                                                    │
 │   ┌──────────────────────────┐  ┌──────────────────────────┐      │
 │   │  💬 FALAR NO WHATSAPP    │  │  ☎ LIGAR: (81)3252-1132  │      │
 │   │  (botão verde, grande)   │  │  (botão contornado)      │      │
 │   └──────────────────────────┘  └──────────────────────────┘      │
 │                                                                    │
 │   [↓ Ver nossos produtos]  ← link de scroll, menor, abaixo        │
 │                                                                    │
 └────────────────────────────────────────────────────────────────────┘

════════════════════════════════════════════════════════════════════════════
 [2] BARRA DE CREDIBILIDADE — banda fina, fundo contrastante
════════════════════════════════════════════════════════════════════════════

 ┌──────────────┐  ┌───────────────────┐  ┌──────────────┐  ┌──────────────┐
 │   22+ anos   │  │  5 estados        │  │  Mix         │  │  Entrega     │
 │   de mercado │  │  atendidos        │  │  completo    │  │  pontual e   │
 │              │  │  diretamente      │  │  FLV         │  │  higienizada │
 └──────────────┘  └───────────────────┘  └──────────────┘  └──────────────┘

════════════════════════════════════════════════════════════════════════════
 [3] PRODUTOS — âncora: #produtos | Grid 4×3 | 12 cards com interação
════════════════════════════════════════════════════════════════════════════

 [Título: NOSSOS PRODUTOS]
 [Subtítulo descritivo breve]

 ── DESKTOP: 4 colunas × 3 linhas ───────────────────────────────────────

 ESTADO PADRÃO (repouso):

 ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
 │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │
 │             │ │             │ │             │ │             │
 │  Banana  ▾  │ │   Mamão  ▾  │ │   Melão  ▾  │ │   Melancia  │
 └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

 ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
 │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │
 │             │ │             │ │             │ │             │
 │     Uva     │ │    Pera     │ │   Goiaba    │ │   Abacaxi   │
 └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

 ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
 │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │
 │             │ │             │ │             │ │             │
 │  Laranja ▾  │ │    Maçã     │ │ Hidropôn. ▾ │ │   Tomate    │
 │             │ │             │ │             │ │ Sweet Grape │
 └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

 ▾ = card possui variações — indicador discreto no canto inferior do nome

 ─────────────────────────────────────────────────────────────────────
 ESTADO HOVER (cursor sobre o card):

 ┌──────────────────────────────┐
 │  [Imagem — zoom 105% suave]  │  ← img: transform scale(1.05)
 │                              │  ← card: transform scale(1.04)
 │  Banana                  ▾  │  ← sombra elevada (box-shadow lg)
 │  ─────────────────────────  │  ← linha separadora aparece no hover
 │  [💬 Solicitar]             │  ← label CTA: opacity 0→1, translateY
 └──────────────────────────────┘
    transição: 220ms ease-out em tudo

 ─────────────────────────────────────────────────────────────────────
 ESTADO EXPANDIDO (clique em card com variações — ex: Banana):

 O painel de variações abre inline abaixo da linha do card clicado,
 empurrando o restante do grid para baixo. Animação: max-height + opacity.

 ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
 │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │
 │  Banana  ▴  │ │  Mamão   ▾  │ │  Melão   ▾  │ │  Melancia   │
 └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
 ┌──────────────────────────────────────────────────────────────────┐
 │  VARIAÇÕES — BANANA                             [✕ fechar]      │
 │                                                                  │
 │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
 │  │ [Imagem] │  │ [Imagem] │  │ [Imagem] │  │ [Imagem] │        │
 │  │  Banana  │  │  Banana  │  │  Banana  │  │  Banana  │        │
 │  │  Prata   │  │  Nanica  │  │  D'água  │  │  Terra   │        │
 │  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
 │                                                                  │
 │      [💬 Solicitar via WhatsApp]   [☎ (81) 3252-1132]           │
 └──────────────────────────────────────────────────────────────────┘
 ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
 │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │ │  [Imagem]   │
 │     Uva     │ │    Pera     │ │   Goiaba    │ │   Abacaxi   │
 └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
 ... continua

 Variações por produto (com painel):
   Banana      → Prata, Nanica, D'água, Terra (a confirmar com cliente)
   Mamão       → 2 variedades (a nomear com cliente)
   Melão       → 2 variedades (a nomear com cliente)
   Laranja     → 2 variedades (a nomear com cliente)
   Hidropônicos→ Alface Crespa, Alface Roxa, Alface Lisa, Alface Americana

 ─────────────────────────────────────────────────────────────────────
 CTA GLOBAL DA SEÇÃO (abaixo do grid, sempre visível):

        [💬 Solicitar via WhatsApp]   [☎ Ligar: (81) 3252-1132]

 ─────────────────────────────────────────────────────────────────────
 TABLET (768–1024px): 3 colunas × 4 linhas

 ┌──────────┐ ┌──────────┐ ┌──────────┐
 │  Banana  │ │  Mamão   │ │  Melão   │
 ├──────────┤ ├──────────┤ ├──────────┤
 │ Melancia │ │   Uva    │ │   Pera   │
 ├──────────┤ ├──────────┤ ├──────────┤
 │  Goiaba  │ │  Abacaxi │ │  Laranja │
 ├──────────┤ ├──────────┤ ├──────────┤
 │   Maçã   │ │ Hidropôn.│ │ T.Sweet  │
 └──────────┘ └──────────┘ └──────────┘

 ─────────────────────────────────────────────────────────────────────
 MOBILE (<768px): 2 colunas × 6 linhas

 ┌──────────┐ ┌──────────┐
 │  Banana  │ │  Mamão   │
 ├──────────┤ ├──────────┤
 │  Melão   │ │ Melancia │
 ├──────────┤ ├──────────┤
 │   Uva    │ │   Pera   │
 ├──────────┤ ├──────────┤
 │  Goiaba  │ │  Abacaxi │
 ├──────────┤ ├──────────┤
 │  Laranja │ │   Maçã   │
 ├──────────┤ ├──────────┤
 │ Hidropôn.│ │ T. Sweet │
 └──────────┘ └──────────┘

 No mobile: hover não se aplica. O tap abre o painel de variações
 diretamente (sem estado intermediário de hover).

════════════════════════════════════════════════════════════════════════════
 [4] DISTRIBUIÇÃO — âncora: #distribuicao
════════════════════════════════════════════════════════════════════════════

 [Título: DISTRIBUIÇÃO]

 ┌─────────────────────────────────────┐  ┌─────────────────────────────────┐
 │                                     │  │  Atendemos diretamente:         │
 │  [Mapa de cobertura geográfica]     │  │  PE • PB • RN • AL • BA         │
 │                                     │  │  + distribuidores nacionais      │
 │                                     │  │                                 │
 │                                     │  │  📍 Recife/PE                   │
 │                                     │  │  ☎ (81) 3252-1132 (clicável)    │
 │                                     │  │                                 │
 │                                     │  │  📍 São Vicente Férrer/PE       │
 │                                     │  │  ☎ (81) 3655-1198 (clicável)    │
 └─────────────────────────────────────┘  └─────────────────────────────────┘

 ╔══════════════════════════════════════════════════════════════════════════╗
 ║  CTA PÓS-DISTRIBUIÇÃO (banda imediata abaixo do mapa)                   ║
 ║                                                                         ║
 ║  [Headline curto: atendemos sua região?]                                ║
 ║  [💬 FALAR NO WHATSAPP ▶]         [☎ LIGAR AGORA ▶]                    ║
 ╚══════════════════════════════════════════════════════════════════════════╝

════════════════════════════════════════════════════════════════════════════
 [5] PROCESSO DE QUALIDADE — âncora: #processo
════════════════════════════════════════════════════════════════════════════

 [Título: COMO TRABALHAMOS]

 ┌───────────────────┐  ──▶  ┌───────────────────┐  ──▶  ┌───────────────────┐
 │     [Ícone]       │       │     [Ícone]       │       │     [Ícone]       │
 │  SELECIONAMOS     │       │  EMBALAMOS        │       │  ENTREGAMOS       │
 │  OS PRODUTOS      │       │  CUIDADOSAMENTE   │       │  RAPIDAMENTE      │
 │                   │       │                   │       │                   │
 │  [Descrição]      │       │  [Descrição]      │       │  [Descrição]      │
 └───────────────────┘       └───────────────────┘       └───────────────────┘

════════════════════════════════════════════════════════════════════════════
 [6] QUEM SOMOS — âncora: #quem-somos (compacto)
════════════════════════════════════════════════════════════════════════════

 ┌────────────────────────────────────┐  ┌──────────────────────────────────┐
 │  [Título: NOSSA HISTÓRIA]          │  │  [Vídeo institucional incorporado]│
 │                                    │  │  youtube.com/oDEzUfK-iU8         │
 │  [1 parágrafo compacto:            │  │                                  │
 │   origem, 22 anos, crescimento,    │  │                                  │
 │   cobertura nacional]              │  │                                  │
 └────────────────────────────────────┘  └──────────────────────────────────┘

════════════════════════════════════════════════════════════════════════════
 [7] FAIXA DE CREDIBILIDADE — EVENTOS (strip passivo)
════════════════════════════════════════════════════════════════════════════

 [Label: NOSSA PRESENÇA]
 ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  →  [scroll ou carousel]
 │Foto 1│ │Foto 2│ │Foto 3│ │Foto 4│
 └──────┘ └──────┘ └──────┘ └──────┘

════════════════════════════════════════════════════════════════════════════
 [8] CTA FINAL AGRESSIVO (banda de conversão — cor da marca)
════════════════════════════════════════════════════════════════════════════

 ╔══════════════════════════════════════════════════════════════════════════╗
 ║                                                                         ║
 ║   [Headline de chamada forte]                                           ║
 ║   [Subtexto de apoio]                                                   ║
 ║                                                                         ║
 ║   ┌─────────────────────────────┐  ┌─────────────────────────────┐      ║
 ║   │  💬 FALAR NO WHATSAPP       │  │  ☎ LIGAR: (81) 3252-1132    │      ║
 ║   │  (botão maior, primário)    │  │  (botão secundário)         │      ║
 ║   └─────────────────────────────┘  └─────────────────────────────┘      ║
 ║                                                                         ║
 ╚══════════════════════════════════════════════════════════════════════════╝

════════════════════════════════════════════════════════════════════════════
 [9] CONTATOS DIRETOS — âncora: #contato
════════════════════════════════════════════════════════════════════════════

 [Título: FALE CONOSCO]

 ┌──────────────────────────────────────────────────────────────────────┐
 │                                                                      │
 │  💬 WhatsApp: [número] (clicável)                                    │
 │                                                                      │
 │  ☎ (81) 3252-1132 — Recife/PE (clicável)                            │
 │  ☎ (81) 3655-1198 — São Vicente Férrer/PE (clicável)                │
 │  📱 (81) 99862-3166 (clicável)                                       │
 │                                                                      │
 │  ✉ contato@qdeliciafrutas.com.br (clicável)                         │
 │                                                                      │
 │  📍 Recife/PE    📍 São Vicente Férrer/PE                           │
 │                                                                      │
 └──────────────────────────────────────────────────────────────────────┘

════════════════════════════════════════════════════════════════════════════
 [10] FORMULÁRIO SECUNDÁRIO
════════════════════════════════════════════════════════════════════════════

 [Título secundário: "Prefere deixar uma mensagem? Preencha abaixo."]

 ┌──────────────────────────────────────────┐
 │  Nome: [______________________________]  │
 │  Email: [_____________________________]  │
 │  Mensagem: [_________________________]   │
 │             [_________________________]  │
 │                  [ENVIAR MENSAGEM ▶]     │
 └──────────────────────────────────────────┘

════════════════════════════════════════════════════════════════════════════
 RODAPÉ
════════════════════════════════════════════════════════════════════════════

 ╔══════════════════════════════════════════════════════════════════════════╗
 ║  [Logo]  [Links âncora]  [☎ Contatos]  [Redes sociais]  [© QDelícia]   ║
 ╚══════════════════════════════════════════════════════════════════════════╝
```

---

---

# 5. Prioridade de Canais de Conversão

## Hierarquia definitiva:

```
1º  💬 WhatsApp
2º  ☎  Telefone
3º  ✉  Formulário
```

## Por que essa hierarquia faz sentido para FLV B2B

**WhatsApp em primeiro:** O comprador B2B de alimentos no Nordeste brasileiro não quer preencher formulário. Ele quer mandar uma mensagem e receber resposta rápida. O WhatsApp é o canal onde a negociação real acontece — pedidos, volumes, preços, datas de entrega. Eliminar atrito entre a intenção de compra e o primeiro contato é o que define se o visitante vira lead ou não.

**Telefone em segundo:** Para compradores que preferem resolver por voz — perfil comum em feiras, mercados e distribuidores menores. O telefone também transmite credibilidade ("existe uma pessoa real do outro lado"). Números clicáveis em mobile são CTAs tão poderosos quanto botões.

**Formulário em terceiro:** O formulário serve compradores que chegam fora do horário comercial, que preferem texto formal, ou que querem deixar dados sem interação imediata. É canal válido, mas não deve receber protagonismo visual porque tem a maior fricção dos três e a menor taxa de conversão imediata.

**Regra de ouro:** Nunca esconder WhatsApp e telefone atrás de formulário. O formulário pode existir, mas não pode ser a única ou principal porta de entrada visível.

---

---

# 6. Estrutura Detalhada de Cada Seção

---

## Elemento Global: WhatsApp Flutuante

**Objetivo:** CTA de conversão presente em 100% do scroll, independente de qualquer seção.

**Posição:** Canto inferior direito, z-index máximo, todas as páginas.

**Elementos:**
- Ícone verde do WhatsApp
- Badge de atenção opcional (ex: pulsação suave ou label "Fale Conosco")
- Link direto para conversa no WhatsApp com número pré-configurado

**Regra:** Este elemento NUNCA deve ser ocultado por outros elementos da página.

---

## Seção 1: Header (fixo)

**Objetivo:** Acesso imediato ao WhatsApp e telefone sem depender de scroll. Navegação enxuta.

**Posição:** Sticky, topo da página, 100% do scroll.

**Elementos — da esquerda para a direita:**
1. Logo (esquerda)
2. Menu âncora central — apenas 4 itens: [Produtos] [Distribuição] [Quem Somos] [Contato]
3. Telefone principal clicável (direita)
4. Botão [💬 WHATSAPP] em destaque (direita, mais visível que o telefone)

**Decisão:** WhatsApp fica no header, não apenas como botão flutuante. Os dois canais precisam estar acessíveis sem scroll desde o primeiro segundo.

**Função na conversão:** Quem já decidiu que quer contatar não precisa rolar a página. O WhatsApp no header captura essa intenção imediata.

---

## Seção 2: Hero

**Objetivo:** Comunicar em menos de 4 segundos o que a empresa faz e oferecer dois caminhos de contato imediato.

**Posição:** Primeira seção visível após o header. Ocupa 100% da viewport (acima da dobra).

**Elementos e ordem:**
1. Imagem ou vídeo de fundo (produtos frescos, operação, campo — imagem de impacto real)
2. Overlay escuro suave para legibilidade
3. Headline principal — proposta de valor clara e direta (lado esquerdo ou centro)
4. Subtítulo complementar (abaixo do headline)
5. Botão primário: [💬 FALAR NO WHATSAPP] — verde, grande, lado esquerdo
6. Botão secundário: [☎ LIGAR: (81) 3252-1132] — contornado, ao lado do primário
7. Link de scroll: [↓ Ver nossos produtos] — menor, abaixo dos botões

**Layout:**
- Textos alinhados à esquerda (ou centralizados em mobile)
- Botão WhatsApp sempre maior e mais visível que o botão de telefone
- Link de scroll não deve competir visualmente com os CTAs — tipografia menor, sem destaque

**Conteúdo reaproveitado do site antigo:**
- Base para subtítulo: "Produção e distribuição de frutas, verduras e legumes em PE, AL, PB e RN"

**Função na conversão:** Dupla captura acima da dobra — quem clica no WhatsApp vira lead imediatamente. Quem prefere ligar também pode. Quem ainda não decidiu continua scrollando.

**Ligação com a próxima seção:** Scroll para barra de credibilidade — confirmação rápida de que vale a pena continuar.

---

## Seção 3: Barra de Credibilidade

**Objetivo:** Entregar 4 atributos de confiança em menos de 5 segundos, sem exigir leitura.

**Posição:** Imediatamente abaixo do hero. Banda horizontal estreita.

**Elementos — 4 blocos em linha:**
1. Ícone + "22+ anos de mercado"
2. Ícone + "5 estados atendidos diretamente"
3. Ícone + "Mix completo: frutas, legumes e verduras"
4. Ícone + "Entrega pontual e higienizada"

**Layout:** 4 colunas iguais. Ícone acima, dado em destaque, label abaixo. 2×2 em mobile.

**Nota:** Todos os 4 atributos existem no site atual — nenhum foi inventado.

**Função na conversão:** O visitante acaba de ver o hero. Antes de rolar para os produtos, ele precisa de um sinal rápido de que a empresa é real e estabelecida. Esses 4 blocos entregam isso sem exigir leitura de parágrafos.

---

## Seção 4: Produtos (grid 4×3 com interação — inline na home)

**Objetivo:** Responder "você vende o que eu preciso?" com o máximo de clareza visual e mínimo de cliques. Mostrar o mix completo sem virar e-commerce. Gerar contato contextual por produto de interesse.

**Posição:** Terceira seção — antes de qualquer conteúdo institucional. O comprador B2B quer ver o portfólio antes de ler a história da empresa.

---

### Catálogo definitivo — 12 cards em grid 4×3

| Posição | Produto | Tem variações? |
|---|---|---|
| 1 | Banana | Sim — várias opções (a nomear com cliente) |
| 2 | Mamão | Sim — 2 opções |
| 3 | Melão | Sim — 2 opções |
| 4 | Melancia | Não |
| 5 | Uva | Não |
| 6 | Pera | Não |
| 7 | Goiaba | Não |
| 8 | Abacaxi | Não |
| 9 | Laranja | Sim — 2 opções |
| 10 | Maçã | Não |
| 11 | Hidropônicos | Sim — Alface Crespa, Roxa, Lisa, Americana |
| 12 | Tomate Suit Grape | Não |

---

### Estrutura de cada card (estado padrão)

- Imagem do produto (proporção quadrada ou 4:3, foto real)
- Nome do produto em texto abaixo da imagem
- Ícone ▾ discreto no canto inferior direito para os que têm variações
- Sem preço, sem quantidade, sem especificação técnica — não é e-commerce

---

### Comportamento de hover (desktop)

O hover deve ser elegante e percebido como premium — sem exagero.

**O que acontece ao passar o cursor sobre um card:**
1. O card inteiro sobe levemente: `transform: scale(1.04)`
2. A imagem dentro do card faz um zoom independente: `transform: scale(1.08)` — mais suave que o card
3. A sombra do card aumenta: de shadow-sm para shadow-xl
4. Uma linha separadora fina aparece entre imagem e nome
5. Um label de CTA surge abaixo do nome com fade-in: "💬 Solicitar" — opacidade de 0 a 1 com leve deslocamento vertical (`translateY: 4px → 0`)
6. Todos os outros cards recebem opacidade reduzida (0.75) — foco no card ativo

**Transição:** 220ms `ease-out` em todas as propriedades. Nada de bounce, nada de flip, nada de efeito artístico.

---

### Comportamento de clique

**Clique em card SEM variações (ex: Melancia):**
- Abre diretamente o WhatsApp com mensagem pré-configurada mencionando o produto
- Ou scroll suave até o bloco de contatos com o produto pré-selecionado no campo de mensagem (a definir na implementação)

**Clique em card COM variações (ex: Banana):**
- Abre um painel inline expandido abaixo da linha do card, empurrando o grid para baixo
- Animação do painel: `max-height: 0 → 320px` + `opacity: 0 → 1` com `ease-out 280ms`
- O card clicado recebe borda de destaque e ícone ▴ (invertido, indicando aberto)
- Apenas um painel pode estar aberto por vez — clicar em outro fecha o anterior

**Conteúdo do painel expandido:**
- Título: "VARIAÇÕES — [NOME DO PRODUTO]" + botão [✕ fechar]
- Grid de miniaturas das variações: imagem + nome de cada variação
- CTA do painel: dois botões lado a lado:
  - [💬 Solicitar via WhatsApp] — primário
  - [☎ (81) 3252-1132] — secundário, clicável

---

### CTAs da seção

**Por painel de variações:** [💬 Solicitar via WhatsApp] + [☎ Ligar] — contextuais, dentro do painel expandido

**Global da seção (abaixo do grid completo):**
- [💬 Solicitar produtos via WhatsApp] — primário
- [☎ Ligar: (81) 3252-1132] — secundário

**Regra:** Cada ponto de interesse (cada painel aberto) tem seu próprio CTA. Não forçar o visitante a rolar até o final da página para contatar após ver um produto específico.

---

### Responsividade

| Breakpoint | Colunas | Linhas | Comportamento hover |
|---|---|---|---|
| Desktop (>1024px) | 4 | 3 | Completo conforme descrito |
| Tablet (768–1024px) | 3 | 4 | Hover simplificado — apenas scale e sombra |
| Mobile (<768px) | 2 | 6 | Sem hover — tap abre painel diretamente |

**Mobile:** No toque, o comportamento de hover não se aplica. O tap em card sem variações abre o WhatsApp. O tap em card com variações expande o painel inline. O CTA dentro do painel é clicável diretamente no mobile.

---

### Coerência com a arquitetura V3

Esta seção mantém todos os princípios da V3:
- Sem página separada: o catálogo completo vive inline na home
- WhatsApp como canal primário em cada ponto de ação
- Sem atrito: o visitante vê o produto e tem CTA imediato, sem navegar para outra página
- Sem e-commerce: não há preço, carrinho, quantidade ou checkout — apenas visualização e contato

**Função na conversão:** A combinação de grid visual claro + painel de variações no clique + CTA contextual por produto resolve dois problemas ao mesmo tempo: mostra o mix completo de forma organizada e gera o contato exatamente no momento em que o visitante identifica o produto que precisa.

**Ligação com a próxima seção:** Após ver o portfólio, a próxima objeção do comprador B2B é geográfica — a seção de Distribuição a resolve imediatamente a seguir.

---

### Direção técnica de implementação front-end

**Layout:**
```css
.produtos-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .produtos-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .produtos-grid { grid-template-columns: repeat(2, 1fr); }
}
```

**Hover do card:**
```css
.produto-card {
  transition: transform 220ms ease-out, box-shadow 220ms ease-out;
  overflow: hidden;
  cursor: pointer;
}

.produto-card:hover {
  transform: scale(1.04);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.produto-card img {
  transition: transform 220ms ease-out;
}

.produto-card:hover img {
  transform: scale(1.08);
}

.produto-card .cta-label {
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}

.produto-card:hover .cta-label {
  opacity: 1;
  transform: translateY(0);
}

/* Defoca os cards não ativos */
.produtos-grid:has(.produto-card:hover) .produto-card:not(:hover) {
  opacity: 0.75;
  transition: opacity 200ms ease-out;
}
```

**Painel de variações (expansão inline):**
```css
.variacoes-painel {
  grid-column: 1 / -1; /* ocupa a linha inteira do grid */
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 280ms ease-out, opacity 240ms ease-out;
}

.variacoes-painel.aberto {
  max-height: 400px;
  opacity: 1;
}
```

**JavaScript (vanilla — sem dependência de biblioteca):**
- Event listener no clique do card
- Toggle da classe `.aberto` no painel correspondente
- Fecha o painel anterior antes de abrir o novo (accordion behavior)
- `will-change: transform` nos cards para GPU acceleration

**Performance:**
- Apenas CSS transitions — sem JS para animações de hover
- `will-change: transform` apenas nos cards (não em todos os elementos)
- Imagens em formato WebP com lazy loading a partir do segundo row
- Painel de variações renderizado no HTML mas oculto via CSS — sem geração dinâmica de DOM

---

## Seção 5: Distribuição

**Objetivo:** Resolver a objeção geográfica — "você entrega onde eu estou?" — e capturar o visitante no momento em que ele confirma que sim.

**Posição:** Quarta seção — imediatamente após produtos. Esse é o momento crítico: o visitante já sabe que a empresa tem o que precisa. A próxima pergunta é se atende sua região. Quem confirmar que sim está próximo de converter.

**Elementos e ordem:**
1. Título: "DISTRIBUIÇÃO"
2. Bloco esquerdo (65%): mapa de cobertura geográfica (imagem existente)
3. Bloco direito (35%):
   - Lista de estados: PE • PB • RN • AL • BA
   - Linha: "e via distribuidores em todo o Brasil"
   - Unidade Recife/PE: (81) 3252-1132 (clicável)
   - Unidade São Vicente Férrer/PE: (81) 3655-1198 (clicável)
4. CTA pós-distribuição: banda imediatamente abaixo do mapa:
   - Headline curto (espaço estrutural)
   - [💬 FALAR NO WHATSAPP] — primário
   - [☎ LIGAR AGORA] — secundário

**Por que o CTA vem aqui:** Após confirmar cobertura, o visitante está no pico de intenção. Sem CTA neste momento, ele continua scrollando e o momento passa. Com CTA aqui, a conversão acontece no instante de maior motivação.

**Função na conversão:** Confirmação de alcance + captura imediata no pico de intenção. É o segundo ponto de maior probabilidade de conversão do site (depois do hero).

---

## Seção 6: Processo de Qualidade

**Objetivo:** Reduzir objeção operacional do comprador B2B — "eles são confiáveis na entrega?"

**Posição:** Quinta seção — após produtos e distribuição. Funciona como justificativa para a escolha, não como argumento de abertura.

**Elementos e ordem:**
1. Título: "COMO TRABALHAMOS" (ou "PROCESSO DE QUALIDADE")
2. Três blocos lado a lado com setas de conexão:
   - Ícone + SELECIONAMOS OS PRODUTOS + descrição existente
   - Ícone + EMBALAMOS CUIDADOSAMENTE + descrição existente
   - Ícone + ENTREGAMOS RAPIDAMENTE + descrição existente

**Layout:** Três colunas iguais, ícone centralizado no topo de cada coluna, setas conectoras entre blocos.

**Decisão:** Sem CTA nesta seção. O processo é argumento de confiança, não ponto de captura. O CTA seguinte vem mais abaixo — após o comprador já ter lido a história.

**Conteúdo preservado do site antigo:** Todas as três descrições existentes devem ser mantidas integralmente.

**Função na conversão:** Responde a objeção "como sei que vão entregar direito?" sem precisar de depoimento. O processo descrito é a prova operacional de confiabilidade.

---

## Seção 7: Quem Somos (compacto)

**Objetivo:** Humanizar a empresa e ancorar credibilidade emocional com o mínimo de espaço necessário.

**Posição:** Sexta seção. Aparece depois de produtos, distribuição e processo — não é obstáculo entre o visitante e a informação comercial.

**Elementos e ordem:**
1. Título: "NOSSA HISTÓRIA"
2. 1 parágrafo compacto (fusão dos 2 parágrafos existentes):
   - Origem em São Vicente Ferrer
   - 22 anos de mercado
   - Início artesanal, crescimento, expansão para Recife e para 5 estados
   - Presença nacional via distribuidores
3. Vídeo incorporado ao lado (YouTube: https://youtu.be/oDEzUfK-iU8)

**Layout:**
- Esquerda (50%): título + 1 parágrafo
- Direita (50%): vídeo incorporado

**O que NÃO entra nesta seção na home:**
- Segundo parágrafo separado
- Galeria de 3 fotos
- Botão "saiba mais" (não há página "Sobre" nesta estrutura)

**Função na conversão:** Confirmação de que existe uma empresa real com história verificável por trás da marca. O vídeo permite aprofundamento para quem quiser, sem forçar o conteúdo sobre quem não quer.

---

## Seção 8: Faixa de Credibilidade — Eventos

**Objetivo:** Prova social passiva. Mostrar presença de mercado sem ocupar espaço de seção completa.

**Posição:** Sétima seção — entre "Quem Somos" e o CTA final. Funciona como pausa visual antes da chamada de ação.

**Elementos:**
- Label: "NOSSA PRESENÇA" (ou "EVENTOS")
- 4 fotos selecionadas em carousel ou scroll horizontal (das 8 existentes)
- Sem grid de 2 linhas — faixa estreita apenas

**Layout:** Banda horizontal compacta. Em mobile: swipe horizontal.

**Função na conversão:** Prova visual de que a empresa existe e está ativa no mercado. Não é protagonista — é suporte. Prepara o visitante para o CTA final que vem a seguir.

---

## Seção 9: CTA Final Agressivo

**Objetivo:** Capturar quem chegou até o final da página sem ter agido ainda. Última chance antes do bloco de contatos.

**Posição:** Oitava seção. Banda full-width com fundo na cor principal da marca.

**Elementos:**
1. Headline forte de chamada (espaço estrutural)
2. Subtexto de apoio (espaço estrutural)
3. Dois botões lado a lado:
   - [💬 FALAR NO WHATSAPP] — primário, maior
   - [☎ LIGAR: (81) 3252-1132] — secundário, ao lado

**Regra:** Sem formulário nesta banda. Apenas WhatsApp e telefone. Quem chegou até aqui e ainda não agiu precisa de fricção zero — não de mais um campo para preencher.

**Função na conversão:** Conversão de quem precisou ver todo o conteúdo antes de decidir. O CTA agressivo com dois canais diretos captura esse perfil de visitante sem deixar alternativa mais fácil do que contatar.

---

## Seção 10: Contatos Diretos

**Objetivo:** Centralizar todos os dados de contato em formato clicável e imediato.

**Posição:** Nona seção — âncora `#contato`. Imediatamente após o CTA final.

**Elementos (todos clicáveis em mobile):**
1. Título: "FALE CONOSCO"
2. 💬 WhatsApp: número (link direto para conversa)
3. ☎ (81) 3252-1132 — Recife/PE
4. ☎ (81) 3655-1198 — São Vicente Férrer/PE
5. 📱 (81) 99862-3166
6. ✉ contato@qdeliciafrutas.com.br
7. 📍 Recife/PE
8. 📍 São Vicente Férrer/PE

**Layout:** Bloco único, centralizado ou à esquerda. Todos os dados com ícone identificador. Dados de WhatsApp e telefone no topo do bloco — não enterrados abaixo do e-mail.

**Função na conversão:** Referência final para quem prefere escolher o canal de contato com calma. Também garante que dados de contato sempre tenham um ponto definitivo e completo na página.

---

## Seção 11: Formulário Secundário

**Objetivo:** Canal alternativo para quem prefere contato assíncrono ou chegou fora do horário comercial.

**Posição:** Décima seção — após contatos diretos. Esta ordem é intencional: o formulário não pode receber mais destaque do que WhatsApp e telefone.

**Elementos:**
1. Título secundário: "Prefere deixar uma mensagem? Preencha abaixo."
2. Campo: Nome
3. Campo: Email
4. Campo: Mensagem
5. Botão: [ENVIAR MENSAGEM]

**Layout:** Bloco menor do que a seção de contatos diretos. Visualmente subordinado. Tipografia do título menor do que o "FALE CONOSCO" acima.

**Função na conversão:** Canal de captura para perfis que não convertem via WhatsApp ou telefone. Mantido por ser o único canal de coleta de e-mail da empresa — dado que pode ser utilizado em comunicações futuras.

---

## Seção 12: Rodapé

**Objetivo:** Fechamento institucional e navegação rápida.

**Posição:** Último elemento.

**Elementos:**
1. Logo
2. Breve descrição institucional (baseada no meta do site)
3. Links âncora de navegação
4. Telefone + e-mail resumidos
5. Redes sociais (se existirem — não identificadas no site atual)
6. Copyright

---

---

# 7. Elementos do Site Antigo que Devem Permanecer na V3

## Identidade

- Nome: QDelícia Frutas
- Segmento: Produção e distribuição de frutas, verduras e legumes
- Cobertura declarada: PE, PB, RN, AL, BA (e BA conforme texto — atenção: o meta do site lista apenas 4 estados)

## Textos institucionais

- Conteúdo dos 2 parágrafos de "Nossa História" — condensados em 1 parágrafo compacto na home
- Título "NOSSA HISTÓRIA" — mantido

## Processo de qualidade — 3 etapas — preservar integralmente

- SELECIONAMOS OS PRODUTOS: "Selecionamos cuidadosamente os melhores alimentos para não causar desperdícios e proporcionar aos nossos clientes economia de tempo e consequente redução de custos."
- EMBALAMOS CUIDADOSAMENTE: "Os nossos alimentos são acondicionados com muito cuidado em monoblocos plásticos, que possuem um controle de qualidade e higiene extremamente rigoroso."
- ENTREGAMOS RAPIDAMENTE: "Os prazos de entrega são seguidos rigorosamente e todos os veículos são limpos e desinsetizados periodicamente."

## Dados de contato — todos mantidos

- (81) 3252-1132 — Recife/PE
- (81) 3655-1198 — São Vicente Férrer/PE
- (81) 99862-3166
- contato@qdeliciafrutas.com.br

## Distribuição

- Mapa de cobertura (imagem existente)
- Lista de estados atendidos diretamente
- Menção a distribuidores nacionais
- Identificação das duas unidades

## Produtos

- Estrutura de 3 grupos: Frutas, Legumes e Verduras
- Imagens existentes por categoria
- Nomes individuais dos itens: a definir pelo cliente (não estão em texto no site atual — precisam ser levantados visualmente)

## Mídia

- Vídeo institucional: https://youtu.be/oDEzUfK-iU8 — mantido na seção "Quem Somos"
- 4 fotos de eventos selecionadas — mantidas na faixa de credibilidade

## Formulário de contato

- Campos: Nome, Email, Mensagem — mantidos
- Funcionalidade existente deve ser preservada

---

---

# 8. O que NÃO Fazer na V3

## Erros estruturais a evitar

**1. Criar página separada de produtos sem catálogo extenso**
O catálogo atual cabe na home. Página separada = clique a mais = abandono a mais. Evitar.

**2. Dar protagonismo visual ao formulário**
Formulário não é o canal principal. Se o layout do contato apresentar formulário antes de WhatsApp e telefone, está errado.

**3. Colocar "Quem Somos" antes dos produtos e da distribuição**
O comprador B2B não está interessado na história antes de saber se você tem o que ele precisa e se atende onde ele está. História vem depois — não no início.

**4. Usar CTA genérico ou fraco**
"Entre em Contato" é fraco. "Fale Conosco" é fraco. O CTA deve ter ação específica e canal explícito: "💬 FALAR NO WHATSAPP" ou "☎ LIGAR AGORA". Sem canal visível no CTA, a taxa de clique cai.

**5. Deixar produtos sem nome textual**
Imagens sem texto não indexam no Google e não comunicam para o visitante que está scrollando rápido. Cada item do catálogo precisa de nome em texto. Sem isso, a seção de produtos não serve ao comprador.

**6. Esconder o número de telefone**
Número de telefone deve aparecer no header, no hero (como CTA), após a distribuição, no CTA final e no bloco de contatos. Qualquer layout que coloca o telefone apenas no rodapé está desperdiçando conversão.

**7. Manter "Eventos" como seção de destaque sem contexto textual**
A galeria de eventos atual não tem títulos, datas ou descrições. Sem texto de suporte, ela é apenas uma galeria de fotos sem propósito comunicado. Ela existe como faixa de credibilidade passiva — nunca como protagonista.

**8. Criar navegação com muitos itens de menu**
Menu com mais de 5 itens aumenta tempo de decisão e reduz foco. A V3 tem 4 itens: Produtos, Distribuição, Quem Somos, Contato. Ponto.

**9. Separar WhatsApp em apenas um lugar**
WhatsApp flutuante sozinho não é suficiente. O canal precisa aparecer no header, no hero, após produtos (por grupo), após distribuição, no CTA final e no bloco de contatos. Múltiplas exposições ao mesmo canal aumentam captura sem aumentar percepção de excesso.

**10. Tratar o formulário como elemento de design principal da seção de contato**
O formulário é canal número 3 na hierarquia. Seu tamanho, posição e destaque visual devem refletir isso. Ele não deve receber mais área visual do que os telefones e o WhatsApp.

---

*Fim do documento de arquitetura V3 — QDelícia Frutas — 10/04/2026*