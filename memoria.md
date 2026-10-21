# Memória do projeto — JK Imports

Histórico vivo. Registrar só o que ajuda na continuidade. Atualizar após cada decisão importante aprovada.

**Status atual (2026-10-20):** site v2 (rodada da skill "Site de 10K", `sitede10k-skill.zip`) com o **hero de vídeo de scroll ligado** (vídeo do Gemini aprovado no gate, `assets/video/hero-scrub.mp4`, 3,2 MB), autoteste completo em Chrome headless aprovado. **Não publicado:** WhatsApp já é o real (+55 83 99615-3441), textos aguardam aprovação, card do iPhone 18 provisório. Servidor local: `.claude/launch.json` (python, porta 8080). Publicar só `index.html` + `assets/`.

## Decisões aprovadas

- **2026-10-20 · Idioma:** português (Brasil) apenas.
- **2026-10-20 · Estrutura:** landing única com um produto herói e vitrines secundárias (relógios, Xiaomi, acessórios).
- **2026-10-20 · Herói:** iPhone 18. Substitui o iPhone 17, por escolha explícita do usuário.
- **2026-10-20 · Stack:** HTML + CSS + JavaScript puros, sem framework nem build.
- **2026-10-20 · Público-alvo:** consumidor final de 18 a 40 anos.
- **2026-10-20 · Objetivo e CTA:** apresentar e vender levando ao WhatsApp. Sem checkout e sem formulário de contato.
- **2026-10-20 · Tipografia:** Geomini (títulos e texto) self-hosted; **Geist Mono 500 só em rótulos pequenos** (aprovado na rodada da skill 10k, substitui "só Geomini").
- **2026-10-20 · Referências:** usar só como direção de atmosfera e estrutura. Identidade final original do JK Imports.
- **2026-10-20 · Temas:** categorias iPhone, Xiaomi, relógios (batimentos, sono, recuperação, bem-estar) e acessórios.
- **2026-10-20 · Imagens:** geradas no Gemini / Nano Banana a partir das fotos de `meus-produtos/`, todas com o mesmo prompt base (`imagens.md`).
- **2026-10-20 · Plano:** `plano.md` aprovado ("crie"), incluindo os 10 ajustes da §16, já aplicados nos specs.
- **2026-10-20 · Rodada skill 10k:**
  - **Hero:** vídeo de scroll no desktop, gerado no Gemini (Veo) com o prompt do `pacote-de-design.md`. Celular e movimento reduzido seguem com hero estático.
  - **Fundo:** quase-preto quente `#0B0706` (substitui `#050505`).
  - **Melhorias aplicadas:** ambiente (brilho âmbar derivando + grão), assinatura "luz de contorno" (luz âmbar percorrendo a borda dos cards e do palco), coreografia (títulos palavra por palavra, grades em sequência) e momento interativo "Escolha o seu" (substitui o CTA final com a IMG-08).
  - **Limite de JS:** de < 3 KB para < 12 KB.
- **2026-10-20 · Vídeo do hero aprovado no gate** pelo usuário: `video-bruto/gemini_generated_video_b6eebdbe.mp4` (Veo, 1280×720, 24 fps, 10 s). Depois o usuário pediu para **cortar os 2 s iniciais** (a onda de energia laranja): o site usa de 2 s a 10 s (8 s), com pôster próprio do novo primeiro quadro (`assets/img/hero-poster.webp`, só no modo scroll).

## Decisões rejeitadas

Alternativas oferecidas e não escolhidas (não reapresentar sem motivo novo):

- Site com várias páginas; landing focada em um único produto.
- Next.js + Tailwind; Astro + Tailwind.
- Versões em inglês e espanhol.
- Revendedores/atacado, entusiastas de tecnologia e público exclusivamente fitness como público principal.
- iPhone 17 como herói (substituído pelo iPhone 18 em 2026-10-20).
- Anel como referência principal das imagens: não existe anel em `meus-produtos/`; o usuário escolheu o iPhone 18.
- AVIF e carrossel de vitrine (descartados na §16 do plano).
- Rodada skill 10k: hero com jornada das imagens atuais, vídeo pelo Higgsfield, manter o hero atual; **seções remodeladas** (Xiaomi lado a lado, linha do tempo em "Como comprar") não foram escolhidas.

## Alterações realizadas

- 2026-10-20: criados `CLAUDE.md`, `specs/site.md`, `specs/design.md` e `memoria.md`, após análise dos 3 arquivos de `referencias/`.
- 2026-10-20: criado `imagens.md` (prompt base + 8 prompts). Herói trocado para iPhone 18.
- 2026-10-20: usuário gerou as 8 imagens em `imagens-site/`; revisadas e medidas. Criado `plano.md`. Prompt da IMG-04 reforçado (card de costas).
- 2026-10-20: site v1 criado (`index.html`, `assets/`, `tools/converter-imagens.sh`).
- 2026-10-20: **site v2 (skill 10k).**
  - Criado `pacote-de-design.md` (premissa "luz de contorno", mapa de 3 faixas, prompt do vídeo para o Gemini).
  - `index.html`, `style.css` e `main.js` reescritos: motor do hero de scroll (Blob transmitido, rAF normalizado por dt, seeks travados, faixas com smoothstep e `--k`, legibilidade em camadas, cinco portões vivos), fundo quente, ambiente, luz de contorno, coreografia e "Escolha o seu" (formulário GET para `wa.me`, troca de imagem por `:has()`, funciona sem JS).
  - Piso da skill: `overflow-x: clip`, favicon SVG provisório, `main` com `tabindex="-1"`, pausa com a aba escondida, comentário `DEPLOY STEP`.
  - Apagados os WebP da IMG-08 (sem uso). Specs e `plano.md` §12 atualizados.
- 2026-10-20: **vídeo ligado.** Encode de scrub (`-crf 18 -g 8 -an`, 3,2 MB) em `assets/video/hero-scrub.mp4`; `data-video` no hero; vídeo e pôster com `object-position: center` no modo scroll; títulos das faixas 2 e 3 com token próprio `--fs-band` e largura `min(40%, 30rem)`. Quadros de revisão em `video-bruto/review/`.
- 2026-10-20: **corte dos 2 s iniciais.** Reencode a partir de 2,0 s (primeiro quadro sem a onda; 8 s, 2,6 MB). Pôster `hero-poster.webp` (20 KB) do novo primeiro quadro, ligado por `data-poster`: o JS carrega o pôster só no modo scroll e começa o Blob do vídeo depois que ele chega (ou em 4 s).

## Problemas encontrados

- A pasta `referencias/` tinha só 3 JPGs; o arquivo com link citado no briefing não existe.
- As imagens de `referencias/` são arte da Apple ou de designers (o pôster tem marca d'água) e não podem ser usadas no site.
- O briefing cita relógios e "entre outros" sem modelos, marcas, preços ou recursos exatos.
- A foto do iPhone 18 tem módulo de câmera quadrado, diferente do platô do iPhone 17; não foi possível confirmar se é o modelo real.
- As fotos de `meus-produtos/` parecem imagens de catálogo ou de terceiros, não fotos próprias.
- IMG-04 (card iPhone 18) saiu de frente, inconsistente com os outros cards.
- Geomini: entrelinha < 1,044 colide acentos; `clamp()` só com `vw` falhava o zoom de 200%.
- `IntersectionObserver` não revela elementos pulados por rolagem rápida.
- A skill 10k lista "quase-preto com âmbar" como visual clichê de IA.
- Higgsfield não está conectado.
- No "Escolha o seu", os chips esticavam com a altura do palco no grid.
- O botão flutuante não sumia quando a faixa 3 do hero (com CTA) aparecia, porque a opacidade da faixa muda depois do evento de scroll.
- O painel de testes atrasa quadros e não emula movimento reduzido; screenshots pegam transições no meio.
- CSS com 23 KB, acima do orçamento de 20 KB do `plano.md` §12 (cerca de 5 KB comprimido).
- O vídeo do Gemini saiu em 720p (não 1080p), com áudio e 10 s; de 0,5 a 2 s tem uma onda de energia laranja atrás do aparelho que a inspeção por 5 quadros não pegou (só apareceu na captura da faixa 1).
- Com o vídeo ancorado à direita, o aparelho dos quadros finais invadia a coluna de texto em 1440×900 e 1024×768.
- O painel de pré-visualização do app parou de compor: `requestAnimationFrame` e eventos de scroll não disparavam, e o scrub parecia quebrado.

## Soluções aplicadas

- Tudo que depende de dado real do produto fica como `[A DEFINIR]`, sem inventar.
- Geomini variável (um WOFF2 de 44 KB); Geist Mono 500 (10 KB); fallback Arial com `size-adjust`.
- Imagens: cada visitante baixa só o tamanho da sua tela.
- Exceção do clichê declarada: âmbar é a luz real das fotos, sem serifa, com assinatura própria.
- Revelação por checagem na rolagem; grades com `--i` e atraso aposentado (`is-settled`).
- Chips: `grid-template-rows: 1fr auto 1fr` e `align-items: center`.
- `updateBands` reavalia o botão flutuante quando uma faixa muda.
- Motor do hero testado com um vídeo sintético (zoom no hero, ffmpeg, depois apagado): tempo do vídeo igual ao alvo em 4 posições, Blob em 0,4 s. Teste de flick: 120 px dá 7, 7 e 9 flicks por faixa; 360 px não pula nenhuma. Portão do celular: sem scrub e sem baixar o vídeo.
- Primeiro portão do hero em 1024 px em vez de 720 px (desvio da skill), porque o layout desktop começa em 1024.
- Gate de texto da skill: zero travessões e zero palavras de estoque no `index.html`.
- **Autoteste do vídeo real em Chrome headless** (script CDP, receita de `solucao-de-problemas.md` da skill): tempo do vídeo igual ao alvo em 7 posições; flick 120 px = 7, 7 e 9 flicks por faixa, 360 px sem faixa pulada; movimento reduzido ligado e desligado ao vivo volta ao estático e ao scroll corretamente; com o vídeo bloqueado a página fica completa; celular 390 e tablet em retrato com toque ficam estáticos sem baixar o vídeo; zero erros no console.
- **Auditoria de contraste do pior quadro** (conservadora, só scrim global): faixa 1 título 6,47, eyebrow 7,03, lead 3,97; faixa 2 título 4,22, lead 7,73; faixa 3 título 5,79. Todas ≥ 3,5:1.
- Para testar o hero, usar Chrome headless; o painel do app pode congelar o rAF.
- Após o corte: autoteste headless de novo todo aprovado (pôster pedido antes do vídeo, 299 ms vs 384 ms; celular e tablet não baixam pôster nem vídeo). Contraste do pior quadro: faixa 1 título 8,18, eyebrow 6,93, lead 3,57; faixa 2 título 4,76, lead 6,04; faixa 3 título 4,59. Todas ≥ 3,5:1.
- Script de teste headless travou uma vez em silêncio (perfil antigo do Chrome de teste); resolvido apagando o perfil e pondo limite de 30 s por comando.

## Pendências

- [x] Vídeo do hero gerado, aprovado no gate, encodado e ligado (2026-10-20).
- [x] Cortar os 2 primeiros segundos do vídeo (feito em 2026-10-20).
- [ ] Opcional: regerar o vídeo em 1080p para mais nitidez em telas grandes.
- [ ] Se um vídeo futuro passar de ~8 MB: adicionar o anel de progresso (hoje é Blob transmitido sem anel; o atual tem 3,2 MB).
- [x] **Número do WhatsApp:** +55 83 99615-3441 (`5583996153441`), confirmado pelo usuário em 2026-10-21, nos 11 links e no `action` do formulário.
- [ ] **Aprovar os textos** propostos por Claude, incluindo as faixas do hero ("Chega mais perto.", "Três lentes no mesmo módulo.", "Quer o seu?") e o "Escolha o seu".
- [ ] Regerar a IMG-04 (card do iPhone 18 de costas); depois rodar `tools/converter-imagens.sh`.
- [ ] Confirmar quais temas de saúde o Apple Watch Series 10 cobre.
- [ ] Especificações, preço ou "consulte", condição, garantia, entrega, diferenciais, FAQ.
- [ ] Logo (hoje texto e favicon provisório), Instagram, cidade, endereço.
- [ ] Domínio e hospedagem (a skill sugere HostGator, Fase 10); `og:image`/`og:url` absolutos no `DEPLOY STEP`.
- [ ] Testes que faltam: movimento reduzido ao vivo (Chrome headless), Lighthouse, Android e iPhone reais, leitor de tela.
- [ ] Decidir sobre o orçamento de CSS (23 KB vs 20 KB).
- [ ] Regra da skill não atendida por escolha do usuário: Relógios e Xiaomi, vizinhas, usam o mesmo molde centralizado.

## Próximos passos

1. Usuário revisar o hero no navegador real (`http://localhost:8080`, não no painel do app).
2. Passar o número do WhatsApp e aprovar os textos.
3. Testes finais (Lighthouse, celular real) e publicação.
