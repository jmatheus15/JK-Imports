# Pacote de design — JK Imports (Nível 1, skill "Site de 10K")

Entrega única da Fase 5 da skill, versão enxuta do Nível 1: uma tomada contínua controlada pelo scroll. Todas as linhas de texto abaixo vão para o site exatamente como estão. Os números das faixas são pontos de partida e só valem depois do teste de flick com o vídeo aprovado.

**Status (2026-10-20):** vídeo gerado no Gemini, aprovado no gate e ligado no hero (`assets/video/hero-scrub.mp4`), sem os 2 s iniciais (8 s) e com pôster do novo primeiro quadro (`assets/img/hero-poster.webp`). Faixas validadas pelo teste de flick e pela auditoria de contraste do pior quadro (ver @memoria.md).

## 1. Premissa da marca

**Luz de contorno.** Na JK Imports, todo produto chega iluminado. A luz âmbar que contorna cada aparelho nas fotos é o fio do site inteiro: ela abre o hero, percorre a borda dos cards e termina no palco do "Escolha o seu", onde a conversa no WhatsApp começa.

## 2. Paleta (tokens)

Amostrada das imagens geradas: luz âmbar, cobre e vinho sobre quase-preto quente.

```css
:root{
  --canvas:#0B0706;        /* fundo, quase-preto quente (nunca preto puro) */
  --panel:#15100D;         /* cards */
  --accent:#FF6A1F;        /* CTA e ênfase rara */
  --accent-hover:#FF9A3C;
  --accent-muted:rgba(255,106,31,.35); /* luz de contorno, brilhos */
  --text-secondary:rgba(255,255,255,.72);
  --text-primary:#FFFFFF;
}
```

Aviso da skill, dito em voz alta: "quase-preto com âmbar" está na lista de visuais clichê de IA. Aqui vale a exceção, porque âmbar é a luz real das fotos dos produtos. Sem serifa, com assinatura própria.

## 3. Fontes

- **Display e texto:** Geomini (variável, 400/700/800).
- **Rótulos:** Geist Mono 500, só em rótulos pequenos.

## 4. Mapa de faixas do hero (desktop)

Hero de 500vh (8 s de vídeo); faixas no espaço negativo à esquerda (~40% da largura), com o aparelho à direita.

| Faixa | Intervalo (ponto de partida) | Momento do vídeo | Texto (ao pé da letra) | Entrada |
|---|---|---|---|---|
| 1 | 0,00 a 0,26 | iPhone 18 flutuando, a câmera começa a se aproximar | "Destaque da loja" · "iPhone 18." · "Tire suas dúvidas e finalize a compra em uma conversa direto pelo WhatsApp." · [Comprar pelo WhatsApp] [Ver detalhes] | Assentada no carregamento, palavra por palavra |
| 2 | 0,36 a 0,62 | A câmera chega perto do módulo de câmera | "Chega mais perto." · "Três lentes no mesmo módulo." | Aproximação da profundidade (cresce de 0,82 até 1) |
| 3 | 0,74 a 1,00 | Repouso: o módulo grande à direita, a esquerda em sombra quente | "Quer o seu?" · [Comprar pelo WhatsApp] | Subida palavra por palavra, depois o botão |

## 5. Hero estático (celular, movimento reduzido, sem vídeo)

A faixa 1 inteira sobre a imagem atual do hero: "Destaque da loja" · "iPhone 18." · lead · dois botões.

## 6. Abaixo da dobra

1. **iPhone:** "Escolha o seu iPhone." · detalhe da câmera · cards do iPhone 18 e 17.
2. **Relógios:** "Apple Watch Series 10" · 4 temas de acompanhamento · nota de saúde.
3. **Xiaomi:** "Também tem Xiaomi." · card do Redmi Pad 2.
4. **Como comprar:** "Simples assim." · 3 passos.
5. **Escolha o seu (momento interativo + CTA final):** "Escolha o seu." · "Toque no produto e a mensagem já sai pronta." · chips iPhone 18, iPhone 17, Apple Watch Series 10, Redmi Pad 2 · [Comprar pelo WhatsApp]. É um formulário que abre o WhatsApp com a mensagem do produto escolhido; funciona até sem JavaScript.
6. **Rodapé:** marca, WhatsApp, aviso de marcas.

Sem formulário de contato: a única chamada para ação é o WhatsApp (decisão aprovada).

## 7. Camada visual

- **Ambiente:** brilho âmbar fixo atrás de tudo, derivando em ciclo de 70 s, mais grão sutil.
- **Assinatura, luz de contorno:** uma luz âmbar percorre a borda dos cards de produto e do palco do "Escolha o seu" (gradiente cônico girando, só `transform`).
- **Coreografia:** títulos sobem palavra por palavra; cards, itens e passos entram em sequência com atraso de 90 ms, aposentado depois da entrada.
- Tudo respeita movimento reduzido e pausa fora da tela e com a aba escondida.

## 8. Engenharia (pipeline-scrub.md)

Vídeo buscado como Blob, tempo interpolado num loop rAF que descansa (normalizado por dt), seeks travados, escritas no DOM só na mudança, faixas com smoothstep e `--k`, legibilidade em quatro camadas (scrim global, scrim por faixa, sombra de texto, chip), cinco portões do hero estático vivos em CSS e JS, página completa sem o vídeo.

## 9. Gate de texto

Toda linha acima vai ao pé da letra. A página passa no gate de grep da Fase 9 (zero travessões, zero palavras de estoque) antes de qualquer pessoa ver.

---

## Vídeo do hero: como gerar no Gemini

1. No Gemini, escolha a ferramenta de **vídeo (Veo)**, formato **16:9**.
2. Anexe `imagens-site/Hero desktop, iPhone 18.jpg` como imagem inicial.
3. Cole o prompt abaixo e gere.
4. Salve o vídeo em `video-bruto/` (fora da pasta publicada) e me avise. Eu confiro os quadros do início, do meio e do fim antes de mostrar a você (o **gate do vídeo**: o site só é finalizado em volta de um vídeo que você aprovou).

```text
One continuous shot, no cuts. Start exactly from the attached image: a wine-coloured iPhone 18 floats on the right side of a dark warm studio, a soft amber glow behind it, the left side of the frame resting in deep warm shadow. The camera slowly pushes forward and slightly down toward the phone's square camera module along one straight, steady path, while the phone turns gently about 15 degrees to face the lens more. The phone stays alive throughout: a very slow natural float and sway, light gliding across the matte wine glass and the copper lens rings. The scene stays alive: the amber glow breathes softly and a few tiny warm dust particles drift through the light. The shot ends at rest: the square camera module with its three lenses fills the right half of the frame in sharp focus, copper rim light on every lens ring, the wine back glass falling softly out of focus, and the left third of the frame resting in the same soft warm shadow of the studio. Keep the product exactly as in the image: same shape, colour, camera layout, buttons and logo placement. No added text, no lettering, no extra logos, no hands, no people. Slow, smooth, premium product film. No music.
```

Por que este prompt (leis da skill): rolar para baixo vira aproximação (lei 1); um assunto e um movimento contínuo (lei 2); caminho travado e corpo vivo (lei 3); o final em repouso foi escrito antes (lei 4); a esquerda fica livre para as legendas (lei 7).

**Depois do gate:** encode de scrub com `-g 8` (receitas da skill), pôster e quadro final, `data-video` ligado no hero, faixas calibradas pelo teste de flick e auditoria de contraste do pior quadro.
