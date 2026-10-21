# Plano de construção — JK Imports

> **Status (2026-10-20):** aprovado pelo usuário, inclusive a §16. Fases 1–5 executadas (site v1 em `index.html`); Fases 6–7 pendentes. Ver @memoria.md.
> Baseado em @specs/site.md, @specs/design.md, @memoria.md, `imagens.md`, `referencias/`, `meus-produtos/` e nas imagens geradas em `imagens-site/`. Todas as medidas abaixo foram **medidas**, não estimadas, salvo onde indicado.

## 0. Atende?

**Atende em grande parte.** Dá para começar o código assim que você aprovar a seção 16. Antes de **publicar**, ainda faltam os dados comerciais.

| Área | Situação | O que falta |
|---|---|---|
| Imagens | 7 de 8 prontas | Regerar o card do iPhone 18: saiu de frente, e os outros cards estão de costas (§2.2) |
| Tamanho das imagens | Resolve | Converter para WebP: os 13 MB de originais viram cerca de 210 KB (§2.4) |
| Tipografia | **Precisa de ajuste** | Entrelinha 1,02 faz os acentos colidirem; o display estoura a coluna do hero entre 1024 e 1440 px (§3.2) |
| Headlines | **Precisa de ajuste** | Nova escala e limites de caracteres por elemento (§4) |
| Comportamento dos textos | Definido | Regras de quebra, largura, nomes de produto e zoom (§5) |
| Layout e seções | Definido | Tablet (768–1023) não estava definido nos specs; proposta em §6 |
| Conteúdo | **Bloqueia publicação** | WhatsApp, textos, especificações, diferenciais, FAQ (§17) |

## 1. Base consultada

- **Specs:** objetivo, público, 10 seções, stack HTML/CSS/JS puros, metas de acessibilidade e desempenho (@specs/site.md); tokens, escala, botões, cards, movimento (@specs/design.md).
- **Decisões:** iPhone 18 como herói, PT-BR, landing única, WhatsApp como único CTA (@memoria.md).
- **Imagens:** 9 arquivos em `imagens-site/` (8 + 1 duplicata), conferidos com as fotos de `meus-produtos/`.
- **Fonte:** Geomini **confirmada no Google Fonts** (pesos 200 a 800), baixada e medida com fontTools.

## 2. Imagens

### 2.1 Inventário (medido)

| ID | Arquivo em `imagens-site/` | Pixels | Proporção | Peso original | Veredito |
|---|---|---|---|---|---|
| IMG-01 | `Hero desktop, iPhone 18.jpg` | 2752×1536 | 1,79 (16:9) | 1,5 MB | ✅ Aprovada. Zona de texto à esquerda em `#020202` |
| IMG-02 | `Hero celular, iPhone 18.jpg` | 1856×2304 | 0,81 (4:5) | 1,9 MB | ✅ Aprovada |
| IMG-03 | `Detalhe da câmera do iPhone 18.jpg` | 2528×1696 | 1,49 (3:2) | 2,1 MB | ✅ Aprovada. Ocupa o quadro inteiro, então vai com moldura arredondada |
| IMG-04 | `Card do iPhone 18.png` | 1122×1402 | 0,80 (4:5) | 1,3 MB | ❌ **Regerar**: aparelho de frente (§2.2) |
| IMG-05 | `Card do iPhone 17.png` | 1122×1402 | 0,80 (4:5) | 1,6 MB | ✅ Aprovada. Fiel à foto (platô de câmera) |
| IMG-06 | `Relógios, Apple Watch Series 10.png` | 1536×1024 | 1,50 (3:2) | 1,3 MB | ✅ Aprovada, com largura máxima de exibição de 800 px |
| IMG-07 | `Card do Redmi Pad 2.png` | 1122×1402 | 0,80 (4:5) | 1,6 MB | ✅ Aprovada. Fiel à foto |
| IMG-08 | `CTA final, iPhone 18 de frente.png` | 1916×821 | 2,33 (21:9) | 1,4 MB | ✅ Aprovada, com máscara na borda inferior |
| — | `Gemini_Generated_Image_8rmsjb8rmsjb8rms (1).jpg` | 2528×1696 | — | 2,1 MB | 🗑️ Cópia idêntica da IMG-03 (mesmo MD5). Não usar |

Fidelidade: todas mantêm o desenho das fotos de referência. O iPhone 18 aparece com módulo quadrado, três lentes, flash e sensor; o iPhone 17 com o platô horizontal; o Redmi Pad 2 com o módulo de câmera e a marcação "Redmi"; o Watch com a coroa e a pulseira esportiva.

### 2.2 Problemas e ações

| # | Problema | Ação |
|---|---|---|
| 1 | **IMG-04 saiu de frente**, mas os cards do iPhone 17 e do Redmi estão de costas. Na mesma vitrine isso quebra a regra "todos os cards seguem a mesma hierarquia" (@specs/design.md §9), e a vista de frente já é a da IMG-08 | Regerar com o prompt reforçado em §2.3 |
| 2 | O fundo dos cards é `#0F0E0D`, mas as bordas das imagens ficam entre `#000000` e `#040302` (medido). Apareceria um retângulo mais escuro dentro do card | Máscara radial na imagem do card (§2.5). Não precisa regerar |
| 3 | IMG-08 termina com o aparelho cortado na borda inferior (pixel central `#561A13`) e encostaria no rodapé com um corte seco | Máscara de fade nos 25% inferiores |
| 4 | IMG-06 (1536 px) e IMG-08 (1916 px) têm resolução menor que as demais | Limitar a exibição: Watch até 800 px de largura e CTA até 1440 px. Regerar em 2K é opcional |
| 5 | A tela da IMG-04 e da IMG-08 repete o estilo de papel de parede da foto de referência, em vez de um abstrato neutro | Baixo risco. A IMG-04 será regerada de costas; na IMG-08 a tela fica como está, a menos que você prefira regerar |
| 6 | Nomes com espaço, vírgula e acento (`Relógios, Apple…png`) | Renomear na exportação (§2.4) |
| 7 | Acessórios sem imagem | Seção oculta até haver produto (§7) |

### 2.3 Prompt corrigido da IMG-04 (cole no Gemini)

**Anexar:** `imagem iphone 18.jpg` + `Hero desktop, iPhone 18.jpg` · **Proporção:** 4:5

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.

SHOT — Product card, aspect ratio 4:5. A single iPhone 18 in its wine/burgundy finish, exactly as in the attached photo, seen from the BACK: the square camera module with its three lenses and the Apple logo face the viewer, and the screen is not visible at all. Same pose as the phone in the second attached image, but centred: floating, three-quarter view, tilted 15 degrees clockwise, occupying the central 60% of the frame height with equal margins on both sides. A soft circular amber glow sits directly behind it, centred at 50% from the left and 45% from the top, smaller and softer than a hero glow. The amber rim light clearly separates the wine body from the dark background. All four edges fade completely into #0F0E0D.
```

### 2.4 Tamanho de exibição, exportação e peso

Larguras em px CSS. A exportação cobre telas 2x. Os pesos são de WebP gerado com o ffmpeg desta máquina, qualidade 78–80.

| ID | Onde | Exibição 360 / 1024 / 1440 | Exportar (`srcset`) | Nome final em `assets/img/` | Peso medido |
|---|---|---|---|---|---|
| IMG-01 | Hero ≥ 1024 | — / 1024 / 1440 (máx. 1440) | 1440w, 2048w, 2752w | `hero-iphone18-desktop-{w}.webp` | 25 KB (1920w) · 41 KB (2752w) |
| IMG-02 | Hero < 1024 | 360 / — / — (100vw) | 720w, 1080w, 1600w | `hero-iphone18-mobile-{w}.webp` | 24 KB (1080w) |
| IMG-03 | Seção iPhone | 320 / 530 / 680 | 800w, 1200w, 1800w | `iphone18-camera-{w}.webp` | 29 KB (1200w) |
| IMG-04/05/07 | Cards | 320 / 288–380 / 380 | 400w, 800w | `card-iphone18-{w}.webp` etc. | 7 KB (400w) · 18 KB (800w) |
| IMG-06 | Relógios | 320 / 800 / 800 | 800w, 1536w | `relogio-watch-s10-{w}.webp` | 28 KB (1536w) |
| IMG-08 | CTA final | 360 (recorte 4:3) / 1024 / 1440 | 960w, 1916w | `cta-iphone18-{w}.webp` | 16 KB (1916w) |
| OG | Prévia no WhatsApp | 1200×630 fixo | 1 arquivo JPG | `og-jk-imports.jpg` | Meta < 300 KB |

- **Só WebP, sem AVIF.** Com esses pesos, o AVIF não compensa um segundo formato.
- **Banding:** o gradiente âmbar pode criar faixas visíveis com qualidade 78. Se aparecer, subir para 88; ainda ficaria abaixo de 100 KB por arquivo.
- **Todo `<img>`** leva `width` e `height` (zero CLS). O hero usa `fetchpriority="high"`; o resto usa `loading="lazy"` e `decoding="async"`.
- **OG:** recorte da IMG-01 em 2752×1445 (proporção 1,905), centralizado na vertical, reduzido para 1200×630, em JPG q85. O aparelho fica inteiro.

### 2.5 Encaixe no layout

| ID | Regra de encaixe |
|---|---|
| IMG-01 | `<picture>` com `<source media="(min-width: 1024px)">`. `object-fit: cover; object-position: right center`. Altura do hero `clamp(37.5rem, 56.25vw, 56.25rem)`. Acima de 1440 px, a imagem fica centralizada com máscara horizontal de 4% nas laterais (a borda direita mede `#130303`) |
| IMG-02 | `aspect-ratio: 4/5; max-height: 75svh; object-fit: cover; object-position: 50% 45%`. Em 768 px corta 10% em cima e embaixo; o aparelho (14%–82% da altura) continua inteiro |
| IMG-03 | Moldura: raio `28px` (20 px no celular), borda `1px var(--line)`. Sem fusão com o fundo |
| Cards | `mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)`. O produto (21–79% × 18–86%) fica 100% opaco e as bordas somem no `--bg-elev` |
| IMG-06 | `width: min(100%, 800px)`, centralizada. Os 30% superiores, pretos, emendam com o texto acima |
| IMG-08 | Máscara `linear-gradient(to bottom, #000 75%, transparent)`. No celular: `aspect-ratio: 4/3; object-fit: cover; object-position: center bottom` |

**Textos alternativos (`alt`)**, descritivos e sem afirmação comercial:
- IMG-01/02: "iPhone 18 na cor vinho, de costas, flutuando sobre um brilho âmbar"
- IMG-03: "Detalhe do módulo de câmera com três lentes do iPhone 18"
- IMG-04: "iPhone 18 vinho visto de costas"
- IMG-05: "iPhone 17 laranja-cobre visto de costas"
- IMG-06: "Apple Watch Series 10 preto com pulseira esportiva preta"
- IMG-07: "Tablet Redmi Pad 2 grafite visto de costas"
- IMG-08: `alt=""`, decorativa, porque o título ao lado já diz tudo

### 2.6 Conversão (Fase 1)

Um script `tools/converter-imagens.sh` com ffmpeg (já instalado) e um comando por arquivo:

```bash
ffmpeg -y -i "imagens-site/Hero desktop, iPhone 18.jpg" -vf "scale=1440:-2:flags=lanczos" -c:v libwebp -quality 80 -compression_level 6 assets/img/hero-iphone18-desktop-1440.webp
```

`imagens-site/` continua como pasta de originais e não é publicada.

## 3. Tipografia

### 3.1 Medições reais da Geomini

| Métrica | Valor | Consequência |
|---|---|---|
| unitsPerEm / ascender / descender | 1000 / 1033 / −167 | Caixa de linha natural de 1,2em |
| x-height / cap-height | 589 / 737 | x-height alto (0,59em): o texto parece maior que o tamanho nominal |
| Topo do acento em maiúscula (Ã, É, Ô, Ç) | 0,905em | — |
| Fundo da descendente (g, j, p, q, y, ç) | −0,139em | — |
| **Espaço mínimo entre linhas sem colisão** | **1,044em** | Entrelinha **abaixo de 1,044 encosta o acento na descendente** |
| Largura média do caractere (texto PT-BR) | 400: 0,548 · 700: 0,563 · 800: 0,568em | Não é estreita: cerca de 15% mais larga que a Arial |
| "iPhone 18" peso 800 | 5,246em | Largura do título principal |
| "Apple Watch Series 10" peso 700 | 11,705em | Nome de produto mais longo |
| "Comprar pelo WhatsApp" peso 700 | 12,645em | Rótulo de botão mais longo |

### 3.2 Problemas na escala atual (@specs/design.md §5)

1. **Display com entrelinha 1,02 < 1,044:** em PT-BR, o acento de uma linha encosta na perna do "g" ou do "p" da linha de cima.
2. **Display grande demais no desktop:** o token atual dá 87,7 px em 1024. "iPhone 18" mediria 460 px numa coluna de 379 px: estoura ou quebra "iPhone / 18".
3. **h2, h3 e lead usam só `vw`** no valor do meio do `clamp()`. Com zoom de 200% o texto não cresce entre o mínimo e o máximo, o que falha o WCAG 1.4.4.
4. **4 pesos de fonte (400/600/700/800)**, um arquivo a mais do que o necessário: o 600 pode virar 700 sem perda visível.

### 3.3 Escala revisada [PROPOSTA]

Valores em px nas larguras de teste.

| Token | `font-size` | 360 | 390 | 768 | 1024 | 1440 | Entrelinha | Tracking | Peso |
|---|---|---|---|---|---|---|---|---|---|
| display | `clamp(2.75rem, 3.2vw + 1.75rem, 5.5rem)` | 44 | 44 | 52,6 | 60,8 | 74,1 | **1,08** | −0,02em | 800 |
| h2 | `clamp(1.75rem, 1.6vw + 1.25rem, 2.75rem)` | 28 | 28 | 32,3 | 36,4 | 43,0 | 1,1 | −0,015em | 700 |
| h3 | `clamp(1.25rem, 0.5vw + 1.125rem, 1.5rem)` | 20 | 20 | 21,8 | 23,1 | 24 | 1,2 | −0,01em | 700 |
| lead | `clamp(1.125rem, 0.4vw + 1rem, 1.375rem)` | 18 | 18 | 19,1 | 20,1 | 21,8 | 1,45 | 0 | 400 |
| body | `1rem` | 16 | 16 | 16 | 16 | 16 | 1,6 | 0 | 400 |
| small | `0.875rem` | 14 | 14 | 14 | 14 | 14 | 1,5 | 0 | 400 |
| eyebrow | `0.75rem`, caixa-alta | 12 | 12 | 12 | 12 | 12 | 1,2 | 0,14em | 700 |
| botão | `1rem` | 16 | 16 | 16 | 16 | 16 | 1 | 0 | 700 |
| nav | `1rem` | 16 | 16 | 16 | 16 | 16 | 1 | 0 | 400 |

- **Antes → depois do display:** 44 / 44 / 69,8 / 87,7 / 96 → 44 / 44 / 52,6 / 60,8 / 74,1.
- **Hierarquia** display ÷ h2 ÷ h3: 1,57 e 1,40 em 360 px; 1,72 e 1,79 em 1440 px. É clara em todas as larguras.
- Todo `clamp()` tem `rem` no valor do meio, então o zoom funciona.

### 3.4 Pesos e carregamento [PROPOSTA]

- **3 pesos: 400, 700 e 800.** h3 e eyebrow passam de 600 para 700.
- **Self-host em WOFF2** (subset latino, que cobre ã, ç, é, ô), em vez de linkar o Google Fonts. Isso permite `preload` (exigido por @specs/site.md §13), tira a dependência de terceiros e não envia o IP do visitante ao Google. A licença OFL permite.
- `preload` só do 800 (título, LCP) e do 400 (texto). O 700 carrega sob demanda. Total estimado: menos de 90 KB.
- `font-display: swap`.

### 3.5 Fonte substituta sem "pulo" de layout

A Geomini é cerca de 15% mais larga que a Arial (medido). Sem ajuste, o título muda de largura e de quebra quando a fonte carrega:

```css
@font-face { font-family: "Geomini Fallback"; src: local("Arial"); font-weight: 400;
  size-adjust: 115.1%; ascent-override: 89.7%; descent-override: 14.5%; line-gap-override: 0%; }
@font-face { font-family: "Geomini Fallback"; src: local("Arial Bold"); font-weight: 700 800;
  size-adjust: 110.7%; ascent-override: 93.3%; descent-override: 15.1%; line-gap-override: 0%; }
/* font-family: "Geomini", "Geomini Fallback", system-ui, sans-serif; */
```

O Android não tem Arial, então o efeito lá depende do Roboto. Medir o CLS num Android real na Fase 6.

## 4. Headlines: tamanho e limite de texto

A largura da coluna vem do grid de §6. Os caracteres por linha usam a largura média medida.

| Elemento | Coluna 360 / 1024 / 1440 | Caracteres por linha 360 / 1024 / 1440 | Limite de texto |
|---|---|---|---|
| **H1 (hero)** | 320 / 379 / 486 px | 12,8 / 11,0 / 11,5 | **≤ 22 caracteres**, máx. 2 linhas no desktop e 3 no celular; nenhuma palavra com mais de 10 letras. "iPhone 18" ocupa 231 / 319 / 389 px e cabe em todas |
| **H2 (seção)** | 320 / 655 / 774 px (`max-width: 18em`) | 20 / 32 / 32 | **≤ 40 caracteres**, máx. 2 linhas no desktop e 3 no celular. "Apple Watch Series 10" quebra em 2 linhas só em 360 px ("Apple Watch / Series 10") |
| **H3 (card)** | 272 / 240–332 / 332 px | 24 / 18–24 / 24 | **≤ 20 caracteres** para ficar em 1 linha; acima disso, 2 linhas e o grid iguala a altura dos cards |
| **Lead** | 320 / 600 / 654 px (`max-width: 30em`) | 32 / 55 / 55 | **≤ 110 caracteres** (2 linhas no desktop) |
| **Corpo** | 320 / 544 / 544 px (`max-width: 34rem`) | 36 / 62 / 62 | Parágrafos de até 180 caracteres (3 linhas no desktop) |
| **Descrição no card** | largura interna do card | ~ 30 | **≤ 70 caracteres** (2 linhas) |
| **Eyebrow** | — | — | **≤ 24 caracteres** em caixa-alta |
| **Botão** | — | — | **≤ 22 caracteres**, nunca quebra. "Comprar pelo WhatsApp" mede 286 px com ícone e padding e cabe nos 320 px do celular |

Se algum texto aprovado passar desses limites, a decisão é encurtar o texto, não diminuir a fonte.

## 5. Como os textos se comportam

- **Quebra de linha:** títulos com `text-wrap: balance` (linhas equilibradas, sem palavra sozinha na última linha) e parágrafos com `text-wrap: pretty`. Navegadores antigos ignoram as duas regras sem quebrar nada.
- **Nomes de produto nunca se separam do número:** `iPhone&nbsp;18`, `iPhone&nbsp;17`, `Series&nbsp;10`, `Pad&nbsp;2`. "Apple Watch" pode quebrar antes de "Series&nbsp;10".
- **Sem hifenização** (`hyphens: manual`). Nenhuma palavra do display é quebrada no meio (@specs/design.md §13).
- **Largura máxima** por elemento, como em §4. O texto nunca ocupa a largura toda da tela no desktop.
- **Alinhamento:** hero e seção iPhone à esquerda; Relógios e CTA final centralizados (como na referência do Watch); cards à esquerda dentro do card.
- **Botões:** `white-space: nowrap`. Em telas com menos de 1024 px, os CTAs do hero ocupam a largura toda.
- **Cards:** coluna flex com o CTA preso embaixo (`margin-top: auto`), para que todos os botões de uma vitrine fiquem na mesma linha mesmo com títulos de 1 ou 2 linhas.
- **Texto sobre imagem:** só onde a imagem é preta medida (zona do hero, `#020202`, contraste de ~20:1; metade superior da IMG-08). No celular, o texto nunca fica sobre a imagem.
- **Zoom de 200%:** tudo em `rem` e `clamp()` com `rem`, sem altura fixa em blocos de texto, sem rolagem horizontal.
- **Animação:** o texto nasce visível. A animação de entrada só é ativada se o JS carregar (classe `js` no `<html>`). Com `prefers-reduced-motion`, nenhum movimento.
- **Idioma:** `lang="pt-BR"` (leitores de tela e hifenização corretos). Preço, se houver, no formato `R$ 1.234,00` com `&nbsp;` depois do "R$".
- **Truncamento:** nenhum `line-clamp` nem "…". Texto real nunca é cortado.

## 6. Layout e grid [PROPOSTA]

| Item | Valor |
|---|---|
| Container | Conteúdo até 1200 px; hero e mídia até 1440 px |
| Gutter lateral | `clamp(1.25rem, 4vw, 2.5rem)`: 20 px (360) · 31 px (768) · 40 px (≥1024). Hoje os specs só definem celular e desktop |
| Grid | 12 colunas com gap de 24 px (≥1024); 4 colunas (<1024) |
| Breakpoints | 768, 1024, 1280. **De 768 a 1023 px, usa o layout de celular** com gutter maior: o desktop exige pelo menos 379 px de coluna de texto mais o aparelho ao lado |
| Header | 64 px (<1024) / 72 px (≥1024); fixo, transparente no topo e com vidro (`--glass` + blur) depois de rolar |
| Seção | Padding vertical `clamp(4rem, 10vw, 8rem)`: 64 / 102 / 128 px |
| Vitrine | `grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 23.75rem)); justify-content: center; gap: 24px`. Cards de 288 a 380 px, centralizados. Funciona com 1, 2 ou 4 produtos. Sem carrossel |
| Botão flutuante | 56 px, canto inferior direito, `bottom: calc(16px + env(safe-area-inset-bottom))`. O rodapé ganha 88 px de respiro embaixo para o botão não cobrir texto |

## 7. Seções, uma a uma

| # | Seção | Desktop (≥1024) | Celular (<1024) | Imagem | Textos | Pode construir? |
|---|---|---|---|---|---|---|
| 1 | Header | Logo, 4 âncoras, botão WhatsApp | Logo, ícone de WhatsApp (44 px, `aria-label`), botão de menu que abre um painel de tela cheia | — | Logo: texto "JK Imports" em 800 até existir logo [A DEFINIR] | ✅ |
| 2 | Hero | Texto em 5/12 à esquerda sobre a IMG-01; eyebrow, H1, lead, 2 botões | IMG-02 no topo, texto embaixo, 2 botões em largura total | IMG-01, IMG-02 | Eyebrow, H1 e lead [A DEFINIR, eu proponho e você aprova] | ✅ |
| 3 | iPhone | H2 + lead; bloco de destaques (IMG-03 em 7/12 + texto em 5/12); vitrine 18 + 17 | Empilhado: imagem, texto, cards | IMG-03, 04, 05 | Especificações [A DEFINIR]: sem dado, o bloco mostra só nome e CTA | ✅ com placeholders |
| 4 | Relógios | Centralizado: eyebrow, H2, lead, 4 itens (batimentos, sono, recuperação, bem-estar), IMG-06, CTA | Igual, em uma coluna | IMG-06 | **Confirmar quais dos 4 temas o Series 10 realmente mede** antes de publicar | ✅ com pendência |
| 5 | Xiaomi | H2 + 1 card centralizado | Igual | IMG-07 | Nome + descrição curta [A DEFINIR] | ✅ |
| 6 | Acessórios | — | — | — | Sem produtos | ⏸️ Oculta, e a âncora sai do menu, até haver produto |
| 7 | Por que a JK Imports | 3–4 itens com ícone SVG | 1 coluna | — | Diferenciais reais [A DEFINIR] | ⏸️ Oculta até haver conteúdo real |
| 8 | Como comprar | 3 passos em linha, número em `--accent` | 3 passos empilhados | — | Passos genéricos; pagamento e entrega [A DEFINIR] | ✅ |
| 9 | FAQ | `<details>`/`<summary>` nativos (sem JS) | Igual | — | Perguntas com resposta real [A DEFINIR] | ⏸️ Oculta até haver conteúdo |
| 10 | CTA final + rodapé | H2 + botão centralizados sobre a metade preta da IMG-08; rodapé com logo, WhatsApp, redes, aviso de marcas | Texto acima, IMG-08 recortada 4:3 abaixo | IMG-08 | Aviso: "Apple, iPhone, Apple Watch, Xiaomi e Redmi são marcas de seus respectivos proprietários." | ✅ |

Ritmo (@specs/design.md §6): hero respirado → iPhone denso → Relógios respirado → Xiaomi denso → Como comprar → CTA final respirado.

## 8. Componentes

- **Botão primário:** `--accent`, texto `#050505`, 52 px, ícone do WhatsApp. **Botão secundário:** vidro. Ambos com estados hover, active e focus-visible (@specs/design.md §8).
- **Card de produto:** imagem 4:5 com máscara, h3, descrição e CTA embaixo.
- **Item de lista de recursos (Relógios):** ícone SVG de 24 px em `--accent` e rótulo curto.
- **Passo (Como comprar):** número grande em `--accent` (peso 800) e texto.
- **Menu do celular:** painel de tela cheia com `--bg`, âncoras grandes e CTA; fecha com Esc, com o link clicado ou com o botão de fechar; o foco fica preso dentro do painel enquanto aberto.
- **Botão flutuante do WhatsApp.**
- **Link "Pular para o conteúdo".**

Ícones: SVG inline, desenhados no projeto. O ícone do WhatsApp segue o símbolo oficial, só como ícone.

## 9. JavaScript (escopo mínimo)

O site funciona sem JS. O JS só acrescenta:
1. Menu do celular (abrir, fechar, Esc, prender o foco).
2. Header com vidro depois de 8 px de rolagem.
3. Animação de entrada com `IntersectionObserver` (desligada em reduced-motion).

**Links do WhatsApp ficam escritos direto no HTML**, sem JS (`https://wa.me/55NUMERO?text=...`), um por produto. O número é trocado num único localizar-e-substituir. Estimativa: menos de 60 linhas, menos de 3 KB.

## 10. SEO e compartilhamento

- `<title>` (≤ 60 caracteres) e `<meta name="description">` (≤ 155): texto [A DEFINIR, eu proponho].
- Open Graph e Twitter Card com `og-jk-imports.jpg` 1200×630, que é o que aparece quando o link é colado no WhatsApp.
- `theme-color` `#050505`; favicon a partir do logo [A DEFINIR].
- Um único `<h1>`; títulos sem pular nível.

## 11. Acessibilidade (checklist)

- [ ] Contraste: `--text-2` ≈ 11:1, `--text-3` ≈ 5,6:1, `--accent` sobre preto ≈ 7:1, texto preto sobre `--accent` ≈ 7:1.
- [ ] Foco visível em todos os elementos interativos (anel `--focus`).
- [ ] Navegação completa por teclado, inclusive no menu.
- [ ] `alt` conforme §2.5.
- [ ] CTAs com nome específico: `aria-label="Comprar iPhone 18 pelo WhatsApp (abre em nova aba)"`.
- [ ] Alvos de toque ≥ 44 px.
- [ ] Zoom de 200% sem quebrar o layout.
- [ ] `prefers-reduced-motion` respeitado.

## 12. Desempenho (orçamento)

| Recurso | Orçamento |
|---|---|
| HTML | < 20 KB |
| CSS | < 20 KB, um arquivo |
| JS | < 12 KB, `defer` (era < 3 KB; ampliado em 2026-10-20 para o motor do vídeo e a coreografia da skill 10k) |
| Fontes | < 90 KB (3 WOFF2) |
| Imagem do hero (LCP) | 24 KB (celular) / 41 KB (desktop 2x) |
| **Primeira tela no celular** | **< 160 KB** |
| Página inteira (com lazy) | < 400 KB |

Metas de @specs/site.md §13: LCP ≤ 2,5 s, CLS ≤ 0,1, INP ≤ 200 ms, Lighthouse mobile ≥ 90 / ≥ 95.

## 13. Estrutura de arquivos

```text
index.html
assets/css/style.css        tokens → base → layout → componentes → seções
assets/js/main.js
assets/img/                 WebP exportados + og-jk-imports.jpg
assets/fonts/               geomini-400/700/800.woff2
tools/converter-imagens.sh  conversão ffmpeg (não publicado)
imagens-site/               originais (não publicado)
```

## 14. Ordem de execução

| Fase | Entrega | Checkpoint com você |
|---|---|---|
| 0 | Aprovar §16, regerar a IMG-04, aprovar os textos do hero | ✅ Antes de qualquer código |
| 1 | Imagens convertidas, fontes em WOFF2, OG | — |
| 2 | `index.html` base, tokens, tipografia, botões, card | — |
| 3 | **Header + hero** em 360 e 1440 | ✅ Validar paleta, tipografia e movimento com screenshots |
| 4 | Seções iPhone, Relógios, Xiaomi, Como comprar, CTA final + rodapé | ✅ Revisão visual |
| 5 | JS (menu, header, animações) | — |
| 6 | SEO, acessibilidade, desempenho, testes de §15 | ✅ Relatório |
| 7 | Publicação (hospedagem [A DEFINIR]) | ✅ Só com os dados de §17 |

## 15. Testes antes de publicar

- Larguras 360, 390, 768, 1024, 1440 e 1920: sem rolagem horizontal, H1 dentro dos limites, imagens sem emenda visível.
- Zoom de 200%, teclado, leitor de tela (NVDA ou TalkBack) no hero e no menu.
- Reduced motion ativado.
- Lighthouse mobile e CLS medido num Android real.
- Todos os links do WhatsApp abrindo com a mensagem certa.
- Prévia do link colado no WhatsApp.

## 16. Ajustes nos specs que precisam da sua aprovação

| # | Ajuste | Arquivo afetado |
|---|---|---|
| 1 | Nova escala tipográfica e entrelinhas (§3.3) | @specs/design.md §5 |
| 2 | 3 pesos (400/700/800) em vez de 4 | @specs/design.md §4 |
| 3 | Fonte self-hosted em vez do link do Google Fonts | @specs/design.md §4 |
| 4 | Gutter fluido; 768–1023 usa o layout de celular | @specs/design.md §6 e §13 |
| 5 | Vitrine `auto-fit` centralizada, sem carrossel | @specs/design.md §13 |
| 6 | Máscaras nas imagens (cards e CTA) | @specs/design.md §11 |
| 7 | Header fixo com vidro depois de rolar | @specs/design.md §13 |
| 8 | Acessórios, Por que a JK e FAQ ocultos até haver conteúdo real | @specs/site.md §6 |
| 9 | Links do WhatsApp no HTML, sem JS | @specs/site.md §7 |
| 10 | Só WebP, sem AVIF | @specs/site.md §13 |

## 17. Bloqueios de conteúdo (não impedem construir, impedem publicar)

- Número do WhatsApp e mensagem pré-preenchida.
- Textos: hero, títulos, leads (eu proponho, você aprova).
- Especificações do iPhone 18 e 17, e quais recursos de saúde o Series 10 mede.
- Preço ou "consulte", condição, garantia, entrega; diferenciais; FAQ.
- Logo, Instagram, cidade; título e descrição para SEO; domínio e hospedagem.
