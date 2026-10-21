# Imagens — JK Imports

Prompts de todas as imagens do site, para gerar no **Gemini / Nano Banana**. Todo prompt começa pelo mesmo **prompt base** (seção 3) e termina com o trecho próprio da imagem (`SHOT`). Se o prompt base mudar, atualizar em todos os blocos.

Referência principal: **iPhone 18** (herói do site, aprovado em 2026-10-20). Fontes: `meus-produtos/`, `referencias/`, @specs/site.md, @specs/design.md, @memoria.md.

## 1. Análise

### 1.1 Produtos (`meus-produtos/`)

O que precisa sair **idêntico** à foto em toda imagem gerada:

| Produto | Arquivo | Detalhes de fidelidade |
|---|---|---|
| iPhone 18 (herói) | `imagem iphone 18.jpg` | Acabamento vinho/bordô; traseira de vidro fosco no mesmo tom; moldura metálica acetinada vinho; módulo de câmera **quadrado** no canto superior esquerdo com três lentes em triângulo, aros no tom do aparelho; flash e sensor ao lado; logo da Apple centralizado; botões laterais como na foto. Frente: Dynamic Island e bordas finas uniformes. |
| iPhone 17 | `imagem iphone 17.jpg` | Laranja-cobre claro; **platô de câmera horizontal** em toda a largura do topo, com três lentes em triângulo à esquerda e flash + sensor à direita; painel inferior de vidro fosco levemente mais claro com logo da Apple; moldura arredondada no mesmo tom. |
| Apple Watch Series 10 | `apple watch Series 10.jpg` | Caixa de alumínio preto brilhante, cantos arredondados, tela grande com borda fina; Digital Crown e botão lateral à direita; pulseira esportiva preta com fecho de pino. Mostrador com hora grande em branco. |
| Redmi Pad 2 (Xiaomi) | `redmi pad 2.jpg` | Traseira de metal grafite, câmera única redonda num módulo no canto superior esquerdo, laterais retas, bordas pretas finas na frente, marcação da marca como na foto. |

Observações:
- As fotos parecem imagens de catálogo ou de terceiros. Servem como **referência de fidelidade**, não como imagem final do site.
- O módulo de câmera do iPhone 18 (quadrado) é diferente do platô do iPhone 17. Os prompts seguem a foto fornecida; nome comercial e cores oficiais: [A DEFINIR].
- Não há anel em `meus-produtos/`.

### 1.2 Site de referência (`referencias/`)

Só atmosfera, nada copiado:
- **Hero do iPhone 17 (redesign):** produto inclinado à direita saindo do quadro, texto à esquerda sobre preto → **IMG-01**.
- **Watch Ultra 4:** produto em ângulo baixo cortado na base, composição centralizada, um acento de cor → **IMG-06** e **IMG-08**.
- **Pôster iPhone 17 Pro Max:** produto levitando, luz de contorno, textura sutil de linhas onduladas → flutuação em todas, textura só em IMG-01, IMG-02 e IMG-08.

### 1.3 Seções e imagens (ordem de @specs/site.md)

| # | Seção | Imagem |
|---|---|---|
| 1 | Header | Nenhuma. Logo pendente e não será gerado por IA. |
| 2 | Hero | **IMG-01** (desktop) e **IMG-02** (celular) |
| 3 | iPhone | **IMG-03** (detalhe da câmera), **IMG-04** (card iPhone 18), **IMG-05** (card iPhone 17) |
| 4 | Relógios | **IMG-06** |
| 5 | Xiaomi | **IMG-07** (card Redmi Pad 2) |
| 6 | Acessórios | Pendente: sem foto de referência (seção 6) |
| 7 | Por que a JK Imports | Nenhuma. Ícones SVG feitos no código. |
| 8 | Como comprar | Nenhuma. Ícones SVG feitos no código. |
| 9 | FAQ | Nenhuma |
| 10 | CTA final + rodapé | **IMG-08** |
| — | Open Graph (prévia do link no WhatsApp) | Recorte de IMG-01 para 1200×630, sem prompt próprio |

### 1.4 Regras de @specs/design.md aplicadas

- Fundo `#050505` (`--bg`). Nos cards, `#0F0E0D` (`--bg-elev`). Bordas da imagem se dissolvem nesse tom, então a foto "some" na página sem recorte. O Nano Banana não exporta transparência.
- Luz só quente: contorno cobre/âmbar, brilho atrás do produto (mesma família de `--grad-hero`), brilho embaixo no lugar de sombra.
- Um produto por cena, inclinado de 15° a 25°, flutuando.
- Telas desligadas ou com papel de parede neutro. Nunca apps, notificações ou dados de saúde.
- Sem texto na imagem: título, preço e botão ficam no HTML.

## 2. Como gerar no Gemini / Nano Banana

1. **Gere a IMG-01 primeiro** e só siga quando ela estiver aprovada. Ela vira a referência de estilo de todas as outras.
2. Em cada imagem, anexe nesta ordem: (1) a foto do produto de `meus-produtos/`; (2) a IMG-01 aprovada (exceto na própria IMG-01).
3. Selecione a proporção indicada, se a ferramenta oferecer. Ela também está escrita no prompt.
4. Cole o bloco inteiro (base + SHOT) e gere na maior resolução disponível. Se sair menor que o tamanho de exportação, faça upscale antes de exportar.
5. Se o aparelho sair diferente da foto, corrija no mesmo chat: `Keep everything else, but make the product match the first reference photo exactly.`
6. Exporte em WebP com o nome indicado em `assets/img/`.

**Checklist de aprovação de cada imagem**
- [ ] Câmeras, botões, cor e logo idênticos à foto do produto.
- [ ] Sem texto, marca d'água, mão, pessoa ou objeto extra.
- [ ] Bordas se dissolvem no fundo certo (`#050505` ou `#0F0E0D`).
- [ ] Área reservada para texto sem pontos claros (contraste do título garantido).
- [ ] Mesma luz âmbar e mesmo tratamento de cor da IMG-01.
- [ ] Tela neutra, sem app, notificação ou dado de saúde.

## 3. Prompt base

Vai no início de **todos** os prompts.

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.
```

## 4. Prompts por imagem

### IMG-01 — Hero desktop · iPhone 18

- **Seção:** 2, Hero (≥ 1024 px). **Proporção:** 16:9. **Exportar:** 2400×1350, `hero-iphone18-desktop.webp`.
- **Anexar:** `imagem iphone 18.jpg`.
- **Produto:** um iPhone 18 vinho, de costas em três-quartos, inclinado ~20° no sentido horário, câmera como ponto mais nítido.
- **Enquadramento e luz:** aparelho nos 55% da direita, topo levemente cortado pela borda (saindo do quadro). Brilho radial atrás em ~80% x / 55% y, como `--grad-hero`. Contorno âmbar forte vindo de trás à direita.
- **Cenário:** palco preto com brasa âmbar à direita e textura de linhas onduladas quase invisível dentro do brilho.
- **Encaixe no layout:** imagem de fundo do hero em `<picture>`, `object-fit: cover; object-position: right center`. Os 45% da esquerda ficam preto liso para H1, subtítulo e CTAs. Bordas esquerda e inferior se dissolvem em `#050505` e emendam com a página. Também gera o Open Graph (recorte 1200×630 mantendo o aparelho).

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.

SHOT — Hero, desktop, aspect ratio 16:9. A single iPhone 18 in its wine/burgundy finish, exactly as in the attached photo, seen from the back in a three-quarter view, tilted about 20 degrees clockwise, floating on the right side of the frame. The phone fills the right 55% of the image and its top edge is slightly cut off by the top of the frame, as if rising out of the picture. The square camera module with its three lenses is the sharpest point of the image, each lens ring catching a bright copper highlight. Behind the phone, a large radial ember glow centred about 80% from the left and 55% from the top. Extremely subtle fine wave-line texture inside the glow, barely visible. The left 45% of the image is empty, smooth near-black (#050505) with no light at all, reserved for headline text. The left and bottom edges fade completely into #050505.
```

### IMG-02 — Hero celular · iPhone 18

- **Seção:** 2, Hero (< 1024 px). **Proporção:** 4:5. **Exportar:** 1080×1350, `hero-iphone18-mobile.webp`.
- **Anexar:** `imagem iphone 18.jpg` + IMG-01 aprovada.
- **Produto:** o mesmo iPhone 18, de costas em três-quartos, inclinado ~15°, centralizado.
- **Enquadramento e luz:** aparelho ocupa os 70% superiores, inteiro, com margem lateral. Brilho atrás em 50% x / 40% y.
- **Cenário:** igual à IMG-01, com a mesma textura sutil.
- **Encaixe no layout:** mesmo `<picture>` da IMG-01 (fonte para telas estreitas), acima do texto. Os 25% inferiores se dissolvem em `#050505` para emendar com o bloco de título e o CTA em largura total abaixo. Nada de texto sobre a imagem.

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.

SHOT — Hero, mobile, aspect ratio 4:5. The same iPhone 18 in its wine/burgundy finish, seen from the back in a three-quarter view, tilted about 15 degrees clockwise, floating centred horizontally in the upper 70% of the frame, fully visible with comfortable side margins. The square camera module with its three lenses is the sharpest point. A radial ember glow sits directly behind the phone, centred at 50% from the left and 40% from the top. Extremely subtle fine wave-line texture inside the glow, barely visible. The bottom 25% of the image is empty and fades completely into #050505; the side edges also fade into #050505.
```

### IMG-03 — Detalhe da câmera · iPhone 18

- **Seção:** 3, iPhone, bloco de destaques. **Proporção:** 3:2. **Exportar:** 1800×1200, `iphone18-camera.webp`.
- **Anexar:** `imagem iphone 18.jpg` + IMG-01 aprovada.
- **Produto:** macro do módulo de câmera quadrado do iPhone 18 e do vidro vinho ao redor.
- **Enquadramento e luz:** módulo ocupa ~60% do quadro, ângulo rasante vindo de baixo à direita. Lente mais próxima nítida, vidro ao fundo desfocando suavemente. Contorno âmbar nos aros e na borda do módulo.
- **Cenário:** o próprio aparelho preenche o quadro; o canto superior esquerdo cai para o preto.
- **Encaixe no layout:** bloco de 2 colunas (imagem + texto de destaques [A DEFINIR]) no desktop; no celular fica em largura total acima do texto. `object-fit: cover`, zona segura nos 70% centrais, raio `28px` (mídia grande). Nenhuma especificação técnica é sugerida pela imagem.

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.

SHOT — Detail, aspect ratio 3:2. Extreme close-up macro of the square camera module of the same wine/burgundy iPhone 18, exactly as in the attached photo, with its three lenses in a triangle. The module fills about 60% of the frame, seen at a low raking angle from the lower right. Shallow depth of field: the nearest lens is tack sharp and the wine back glass falls softly out of focus. Amber rim light traces the edge of the camera module and every lens ring; deep reflections inside the lenses. The top-left corner of the frame falls into pure #050505.
```

### Modelo de card de vitrine (IMG-04, IMG-05, IMG-07 e futuros acessórios)

Todos os cards usam o mesmo enquadramento para a vitrine ficar alinhada (@specs/design.md §9):
- **Proporção:** 4:5. **Exportar:** 1080×1350.
- Produto centralizado, de costas em três-quartos, inclinado 15°, ocupando os 60% centrais da altura, com margens iguais.
- Brilho circular atrás em 50% x / 45% y, menor e mais suave que o do hero.
- As quatro bordas se dissolvem em `#0F0E0D` (fundo do card), não em `#050505`.
- **Encaixe:** topo do card, `object-fit: cover`, raio `24px` (`20px` no celular). Nome (h3), linha curta e CTA ficam no HTML abaixo da imagem. No hover, a imagem sobe ~6 px e o brilho do card intensifica (CSS).

### IMG-04 — Card · iPhone 18

- **Seção:** 3, iPhone (vitrine de modelos). **Exportar:** `card-iphone18.webp`.
- **Anexar:** `imagem iphone 18.jpg` + IMG-01 aprovada.
- **Produto e luz:** iPhone 18 vinho **de costas** conforme o modelo de card; contorno âmbar separando o vinho do fundo escuro. (2026-10-20: a 1ª geração saiu de frente; o prompt foi reforçado.)

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.

SHOT — Product card, aspect ratio 4:5. A single iPhone 18 in its wine/burgundy finish, exactly as in the attached photo, seen from the BACK: the square camera module with its three lenses and the Apple logo face the viewer, and the screen is not visible at all. Same pose as the phone in the second attached image, but centred: floating, three-quarter view, tilted 15 degrees clockwise, occupying the central 60% of the frame height with equal margins on both sides. A soft circular amber glow sits directly behind it, centred at 50% from the left and 45% from the top, smaller and softer than a hero glow. The amber rim light clearly separates the wine body from the dark background. All four edges fade completely into #0F0E0D.
```

### IMG-05 — Card · iPhone 17

- **Seção:** 3, iPhone (vitrine de modelos). **Exportar:** `card-iphone17.webp`.
- **Anexar:** `imagem iphone 17.jpg` + IMG-01 aprovada.
- **Produto e luz:** iPhone 17 laranja-cobre conforme o modelo de card. O acabamento é quase da cor do brilho, então o brilho fica mais fraco e o fundo mais escuro ao redor, para o aparelho não se misturar.
- **Atenção:** a foto de referência mostra o aparelho na mão. Na imagem gerada ele flutua, sem mão.

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.

SHOT — Product card, aspect ratio 4:5. A single iPhone 17 in its light copper-orange finish, exactly as in the attached photo (full-width horizontal camera plateau at the top of the back, three lenses in a triangle on the left, flash and sensor on the right), centred and floating with no hand, seen from the back in a three-quarter view, tilted 15 degrees clockwise. It occupies the central 60% of the frame height with equal margins on both sides. A dim, soft circular amber glow sits behind it, centred at 50% from the left and 45% from the top; keep the background darker close to the phone so the orange body stays clearly separated from the glow. All four edges fade completely into #0F0E0D.
```

### IMG-06 — Relógios · Apple Watch Series 10

- **Seção:** 4, Relógios. **Proporção:** 3:2. **Exportar:** 1800×1200, `relogio-watch-s10.webp`.
- **Anexar:** `apple watch Series 10.jpg` + IMG-01 aprovada.
- **Produto:** Apple Watch Series 10 preto brilhante, de frente, levemente virado à direita para mostrar a Digital Crown. Tela só com a hora grande em branco, como na foto. Nenhum dado de saúde na tela.
- **Enquadramento e luz:** câmera baixa olhando um pouco para cima, relógio centralizado, pulseira saindo pela borda inferior (cortado na base). Contorno âmbar na caixa e na coroa.
- **Cenário:** preto absoluto, brilho âmbar baixo atrás do relógio.
- **Encaixe no layout:** seção centralizada. Título e texto (batimentos, sono, recuperação, bem-estar) ficam no HTML **acima** da imagem. Os 30% superiores da imagem são preto liso para emendar com o texto. No celular, `object-position: center bottom`.

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.

SHOT — Watch feature, aspect ratio 3:2. A single Apple Watch Series 10 with a glossy jet-black case and black sport band, exactly as in the attached photo, seen from the front and turned slightly to the right so the Digital Crown and side button show. Low camera angle looking slightly up; the watch is centred horizontally in the lower 70% of the frame and the band runs out through the bottom edge, so the image is cut at the base. The screen shows only large white time digits on black, as in the reference photo, nothing else. Amber rim light traces the case edges and the Digital Crown; a low, wide amber glow sits behind the watch. The top 30% of the image is empty, smooth #050505; side edges fade into #050505.
```

### IMG-07 — Card · Redmi Pad 2

- **Seção:** 5, Xiaomi (vitrine). **Exportar:** `card-redmi-pad-2.webp`.
- **Anexar:** `redmi pad 2.jpg` + IMG-01 aprovada.
- **Produto e luz:** Redmi Pad 2 grafite em pé (retrato), de costas em três-quartos, conforme o modelo de card. O grafite frio ganha contorno âmbar para entrar na paleta; a cor do aparelho não muda. O papel de parede colorido da foto não aparece.
- **Atenção:** a vitrine Xiaomi tem um só produto por enquanto (ver pendências em @memoria.md).

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.

SHOT — Product card, aspect ratio 4:5. A single Redmi Pad 2 tablet in its graphite grey finish, exactly as in the attached photo (single round camera module in the top-left corner of the back), standing in portrait orientation, centred and floating, seen from the back in a three-quarter view, tilted 15 degrees clockwise. It occupies the central 60% of the frame height with equal margins on both sides. The graphite stays its real cool grey; the amber rim light traces its flat edges. A soft circular amber glow sits directly behind it, centred at 50% from the left and 45% from the top. All four edges fade completely into #0F0E0D.
```

### IMG-08 — CTA final · iPhone 18 de frente

- **Seção:** 10, CTA final. **Proporção:** 21:9. **Exportar:** 2520×1080, `cta-iphone18.webp`.
- **Anexar:** `imagem iphone 18.jpg` + IMG-01 aprovada.
- **Produto:** o iPhone 18 vinho, agora **de frente** (fecha a página mostrando o lado que o hero não mostrou), tela com papel de parede neutro vinho/âmbar, Dynamic Island visível.
- **Enquadramento e luz:** aparelho centralizado, em pé, subindo da borda inferior (só os 60% de cima aparecem), leve inclinação de 10°. Contorno âmbar nas laterais da moldura.
- **Cenário:** faixa larga preta com brasa âmbar baixa atrás e a mesma textura sutil do hero.
- **Encaixe no layout:** faixa de largura total no fim da página. Título final e botão de WhatsApp ficam centralizados **acima** do aparelho, sobre a metade superior preta (contraste garantido). No celular, `object-position: center bottom`. A borda inferior emenda com o rodapé em `#050505`.

```text
JK Imports — base visual. Use the first attached photo as the exact reference for the product: keep its real shape, proportions, colour, finish, camera layout, buttons and logo placement. Do not redesign, add or remove any part. If a second image is attached, match its lighting, colour grade and background exactly.
Style: premium studio product photography, photorealistic, medium-format camera, product in sharp focus, accurate materials (glass reflections, metal and matte sheen), clean and minimal, cinematic contrast, no noise.
Stage: near-black background (#050505). Warm light only: a soft copper-amber rim light (#FF6A1F to #FF9A3C) tracing the product edges from behind, an amber glow behind the product fading from #FF7A2B through copper #B8400F and wine #4A1006 into black, and very low fill so shadows stay deep. The product floats in the air with no visible support; a soft warm glow beneath it replaces any cast shadow.
Screens are off (glossy black) or show a neutral abstract dark wine-and-amber wallpaper, unless the shot says otherwise. Never show apps, notifications or health data.
Colour: only black, wine, copper, amber and peach, plus the product's own real colour.
Do not add: text, typography, extra logos, watermarks, props, people, hands, studio equipment or its reflections.

SHOT — Closing banner, aspect ratio 21:9. The same wine/burgundy iPhone 18, now seen from the front, standing upright and tilted about 10 degrees, centred horizontally and rising from the bottom edge so only its upper 60% is visible. The screen shows a neutral abstract dark wine-and-amber wallpaper with the Dynamic Island visible, no icons, no clock, no widgets. Amber rim light traces both sides of the frame. A low, wide ember glow sits behind the phone. Extremely subtle fine wave-line texture inside the glow, barely visible. The top half of the image is empty, smooth #050505, reserved for the closing headline and button. The side edges fade completely into #050505.
```

## 5. Pendentes

- **Acessórios:** sem foto em `meus-produtos/`. Quando houver, usar o modelo de card (prompt base + SHOT de card com o nome e a descrição visual do item tirada da foto).
- **Mais modelos Xiaomi e relógios:** cada novo produto ganha um card no mesmo modelo.
- **Logo JK Imports:** não gerar por IA. Pendente em @memoria.md.
