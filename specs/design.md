# Design — JK Imports

Fonte de verdade **visual**. Conteúdo e estrutura ficam em @site.md; histórico em @../memoria.md.

Legenda: **[APROVADO]** decidido pelo usuário · **[PROPOSTA]** derivado das referências por Claude, ainda a validar em protótipo visual.

## 1. Direção visual

Premium, escuro e luminoso: preto profundo como palco, com um brilho cobre/laranja âmbar que sai do produto. O produto é sempre o herói, grande, em ângulo, flutuando, com muito espaço negativo e tipografia forte. Tom: confiante, direto, sem excesso. [PROPOSTA]

## 2. O que herdamos das referências

Fonte de análise: os 3 arquivos de `referencias/` (não havia link). Usar só como atmosfera e estrutura.

| Referência | O que aproveitamos |
|-----------|--------------------|
| Hero iPhone 17 (redesign de Apple Store) | Fundo preto que vira vermelho-queimado e laranja; texto à esquerda, produto inclinado à direita saindo do quadro; título bold + subtítulo leve + parágrafo curto; botão pílula de vidro |
| Watch Ultra 4 | Preto absoluto; composição centralizada (nome, modelo, preço); produto em ângulo baixo cortado na base; luz de contorno; um único acento de cor |
| Pôster iPhone 17 Pro Max | Gradiente âmbar vertical; produto levitando sobre uma mão com luz de contorno; textura sutil de linhas onduladas |

**Não copiar:** textos, logotipo, nome, imagens, marca d'água do pôster, nem layouts de forma idêntica. As fotos do site devem ser da loja ou licenciadas. Não usar logotipos da Apple ou da Xiaomi como identidade da JK Imports; marcas só aparecem como nome do produto.

## 3. Paleta [PROPOSTA]

**Principal:** quase-preto quente `#0B0706` (fundo, tingido pela luz das fotos; substituiu `#050505` em 2026-10-20, aprovado na rodada da skill 10k) e laranja âmbar `#FF6A1F` (acento).
**Secundária:** cobre queimado `#B8400F`, âmbar claro `#FF9A3C`, pêssego `#FFD9B0`, vinho `#4A1006`.

```css
:root {
  /* fundos */
  --bg: #0B0706;
  --bg-elev: #15100D;        /* cards */
  --bg-elev-2: #1E1713;      /* cards em hover / blocos internos */
  --burn: #4A1006;           /* início dos gradientes quentes */

  /* texto */
  --text: #FFFFFF;
  --text-2: rgba(255,255,255,.72);
  --text-3: rgba(255,255,255,.52);   /* mínimo permitido para texto pequeno */

  /* acento */
  --accent: #FF6A1F;
  --accent-hi: #FF9A3C;
  --accent-soft: #FFD9B0;
  --accent-deep: #B8400F;

  /* vidro e linhas */
  --glass: rgba(255,255,255,.08);
  --glass-line: rgba(255,255,255,.16);
  --line: rgba(255,255,255,.10);
  --focus: #FFD9B0;

  /* gradientes */
  --grad-hero: radial-gradient(90% 100% at 85% 55%, #FF7A2B 0%, #B8400F 38%, #4A1006 68%, #0B0706 100%);
  --grad-poster: linear-gradient(180deg, #4A1006 0%, #D9581A 30%, #FF9A3C 62%, #FFD9B0 100%);
  --glow: 0 0 80px rgba(255,106,31,.35);
}
```

Regras de uso:
- Fundo da página sempre `--bg`. Gradientes quentes só atrás de produto (hero e destaques), nunca como fundo de seção inteira de texto.
- Texto corrido em `--text` ou `--text-2`. `--text-3` só para legendas.
- Laranja é acento: botão primário, números, detalhes e brilho. Não usar como cor de parágrafo longo.
- Texto branco sobre `#FF6A1F` não passa no contraste (≈2,9:1). Sobre laranja, usar texto `#050505` (≈7:1).
- Fundo do produto pode ser ajustado ao tom real do aparelho na foto, mantendo a família preto → cobre/âmbar.

## 4. Tipografia [APROVADO: família]

**Geomini** (FontBob, licença OFL, geométrica compacta, x-height alto). Pesos disponíveis 200–800. Fonte do pedido: https://fonts.google.com/specimen/Geomini

- **Self-host** em `assets/fonts/` (WOFF2, subset latino, baixado do Google Fonts) com `preload` do 800 e do 400 [APROVADO 2026-10-20, `plano.md` §16].
- Pesos em uso [APROVADO 2026-10-20]: 800 display; 700 títulos, h3, eyebrow e botões; 400 texto corrido. Sem 600.
- Fallback: `"Geomini Fallback"` (Arial com `size-adjust` 115,1% no 400 e 110,7% no 700/800, ver `plano.md` §3.5), depois `system-ui, sans-serif`.
- **Mono para rótulos [APROVADO 2026-10-20]:** Geist Mono 500 (OFL, 10 KB, `assets/fonts/geist-mono-latin.woff2`), só em rótulos pequenos: eyebrow, números dos passos, chips do "Escolha o seu". Nunca em títulos ou texto corrido.
- Entrelinha mínima de títulos: 1,08. Abaixo de 1,044 os acentos do PT-BR encostam nas descendentes (medido).
- Com x-height alto, manter entrelinha do corpo ≥ 1,5 e evitar caixa-alta em textos longos.

## 5. Escala tipográfica [APROVADO 2026-10-20, `plano.md` §3.3]

| Token | Tamanho | Peso | Entrelinha | Tracking | Uso |
|-------|---------|------|-----------|----------|-----|
| display | `clamp(2.75rem, 3.2vw + 1.75rem, 5.5rem)` | 800 | 1.08 | -0.02em | H1 do hero |
| h2 | `clamp(1.75rem, 1.6vw + 1.25rem, 2.75rem)` | 700 | 1.1 | -0.015em | Título de seção (`max-width: 18em`) |
| h3 | `clamp(1.25rem, 0.5vw + 1.125rem, 1.5rem)` | 700 | 1.2 | -0.01em | Cards, subseções |
| lead | `clamp(1.125rem, 0.4vw + 1rem, 1.375rem)` | 400 | 1.45 | 0 | Subtítulo (`max-width: 30em`) |
| body | `1rem` | 400 | 1.6 | 0 | Texto corrido (`max-width: 34rem`) |
| small | `0.875rem` | 400 | 1.5 | 0 | Legendas, rodapé |
| eyebrow | `0.75rem`, Geist Mono | 500 | 1.2 | 0.14em, caixa-alta | Rótulo acima do título |

Limites de caracteres por elemento e regras de quebra: `plano.md` §4 e §5.

## 6. Espaçamento e grid [PROPOSTA]

- Base de 4 px. Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Padding vertical de seção: `clamp(4rem, 10vw, 8rem)`.
- Container: máx. 1200 px (conteúdo) e 1440 px (hero e mídia). Gutter: `clamp(1.25rem, 4vw, 2.5rem)`, ou seja, 20 px em 360 e 40 px a partir de 1024 [APROVADO 2026-10-20].
- De 768 a 1023 px vale o layout de celular [APROVADO 2026-10-20].
- Grid de 12 colunas no desktop, 4 no celular. Texto corrido com largura máx. de ~60 caracteres.
- Ritmo: alternar seção densa (cards) e seção respirada (um produto + uma frase).

## 7. Bordas e raios [PROPOSTA]

- Botões e chips: pílula (`999px`).
- Cards: `24px` (`20px` no celular). Mídia grande: `28px`.
- Borda padrão: `1px solid var(--line)`. Sem sombras pesadas: profundidade vem de brilho (`--glow`) e de camadas de vidro.

## 8. Botões [PROPOSTA]

- **Primário (WhatsApp):** pílula preenchida de `--accent` (pode ter gradiente suave `--accent-hi` → `--accent`), texto `#050505`, peso 700, ícone de WhatsApp à esquerda, altura 52 px (mín. 48), padding horizontal 28 px.
- **Secundário:** pílula de vidro (`--glass`, borda `--glass-line`, `backdrop-filter: blur(20px)`), texto branco. Equivale ao "Learn more" da referência.
- Hover: leve aumento de brilho e `translateY(-1px)`. Ativo: `scale(.98)`. Foco: anel de 2 px `--focus` com offset de 3 px.
- No máximo 1 botão primário por tela visível.

## 9. Cards [PROPOSTA]

- Fundo `--bg-elev`, borda `--line`, raio 24 px, padding 24–32 px.
- Card de produto: produto grande sobre brilho radial âmbar atrás; nome (h3), linha curta de descrição, CTA secundário ou primário.
- Hover: brilho do fundo intensifica e o produto sobe ~6 px. Sem sombra preta, sem borda colorida grossa.
- Todos os cards de uma vitrine seguem a mesma altura, proporção de imagem e hierarquia interna.

## 10. Direção das fotografias [PROPOSTA]

- Produto em ângulo (15–25°), flutuando, com luz de contorno cobre; recorte na borda do quadro quando fizer sentido.
- Fundo escuro com gradiente âmbar atrás do produto. Mão humana só como apoio ocasional (como no pôster), nunca rosto.
- Preferir fotos próprias ou licenciadas, sem marca d'água. Nada de stock genérico de pessoa sorrindo com celular.
- Mesma temperatura de cor e mesmo tipo de luz em todas as imagens do site.

## 11. Tratamento do produto [PROPOSTA]

- Um produto por cena, grande, descentralizado no hero e centralizado em vitrines.
- Imagens geradas já com o fundo da página: as bordas se dissolvem em `--bg` (`#050505`), ou em `--bg-elev` (`#0F0E0D`) nos cards, sem recorte (o Nano Banana não exporta transparência). Prompts em `imagens.md`.
- Máscaras [APROVADO 2026-10-20]: imagem de card com `radial-gradient` (bordas somem no `--bg-elev`); CTA final com fade nos 25% inferiores; hero desktop com fade lateral de 4% acima de 1440 px.
- Em vez de sombra, usar brilho suave no chão ou atrás (`--glow`).
- Relógios: ângulo baixo, cortado na base, como na referência do Watch. Celulares: inclinados, mostrando tela e câmeras.
- Telas dos aparelhos exibem só conteúdo real da foto ou neutro. Nunca simular dados de saúde falsos como se fossem do produto.

## 12. Movimento [PROPOSTA]

- Curva: `cubic-bezier(.22, 1, .36, 1)`. Durações: 160 ms (microinteração), 320 ms (UI), 700 ms (entrada de seção).
- Entrada ao rolar: fade + `translateY(24px)` via `IntersectionObserver`, uma vez por elemento.
- Hero: produto com flutuação lenta (±8 px, ~6 s, loop) e brilho que respira.
- Animar só `transform` e `opacity`. Sem scroll-jacking, sem som, sem bibliotecas de animação.
- `prefers-reduced-motion: reduce`: desligar flutuação e entradas, mantendo conteúdo visível.
- **Rodada skill 10k [APROVADO 2026-10-20]:** hero com vídeo de scroll no desktop (motor pronto; vídeo gerado no Gemini, ver `pacote-de-design.md`); camada de ambiente fixa (brilho âmbar derivando em ciclo ≥ 60 s + grão); assinatura "luz de contorno" (luz âmbar percorrendo a borda dos cards e do palco do "Escolha o seu"); títulos entram palavra por palavra e grades em sequência. Loops pausam fora da tela e com a aba escondida.

## 13. Desktop e celular

| | Desktop (≥ 1024) | Celular e tablet (< 1024) |
|---|---|---|
| Hero | 2 colunas: texto à esquerda (~40%), produto à direita saindo do quadro | Produto no topo, texto abaixo, CTA em largura total |
| Vitrines | `auto-fit` de cards de 288–380 px, centralizados | 1 coluna, sem carrossel [APROVADO 2026-10-20] |
| Navegação | Barra horizontal com âncoras e botão WhatsApp | Menu em painel de tela cheia; botão WhatsApp sempre acessível |
| Header | Fixo; transparente no topo, vidro (`--glass` + blur) depois de rolar [APROVADO 2026-10-20] | Igual |
| WhatsApp flutuante | Canto inferior direito | Canto inferior direito, fora da área de gestos, sem cobrir texto |
| Tipografia | Escala cheia | Escala fluida via `clamp()`, display nunca quebra palavra |
| Hover | Efeitos de hover ativos | Sem dependência de hover; feedback no toque |

## 14. Evitar

- Copiar texto, logo, nome, imagem ou layout das referências, ou logotipos de Apple e Xiaomi como marca própria.
- Fundos brancos ou claros em seções inteiras. Fundo de seção sempre escuro.
- Mais de um acento de cor. Verde do WhatsApp só dentro do ícone, não como cor do botão.
- Gradientes arco-íris, neon, glassmorphism em excesso (vidro só em botões e barras).
- Sombras escuras pesadas, bordas grossas, cantos retos misturados com pílulas.
- Texto cinza sobre cinza, texto sobre imagem sem contraste garantido.
- Carrosséis automáticos, pop-ups, banners de promoção piscando, contadores falsos de urgência.
- Mais de 2 pesos de fonte por tela além do display, ou fontes além de Geomini (títulos e texto) e Geist Mono (rótulos).
- Prints de tela, claims de saúde ou números de especificação que não tenham sido fornecidos pelo usuário.
