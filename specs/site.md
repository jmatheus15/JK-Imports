# Especificação do site — JK Imports

Fonte de verdade sobre **o que construir**. Visual fica em @design.md; histórico em @../memoria.md.

Legenda: **[APROVADO]** decidido pelo usuário · **[PROPOSTA]** sugestão inicial, ainda sem aprovação · **[A DEFINIR]** falta informação real, não inventar.

## 1. Objetivo [APROVADO]

Apresentar o iPhone 18 (destaque; substituiu o iPhone 17 em 2026-10-20) e as demais categorias de forma premium e levar o visitante a falar no WhatsApp para comprar. Não há checkout no site: a venda acontece na conversa.

Métrica principal [PROPOSTA]: cliques nos botões de WhatsApp.

## 2. Público-alvo [APROVADO]

Consumidor final de 18 a 40 anos, que quer iPhone ou Xiaomi e compra pelo WhatsApp.

Fora do foco principal (não selecionados): revendedores/atacado, entusiastas de tecnologia como segmento próprio, público exclusivamente fitness.

## 3. Produto e proposta de valor

- **Loja:** JK Imports, ecommerce de celulares.
- **Categorias [APROVADO]:** iPhone (destaque: iPhone 18), Xiaomi, relógios inteligentes, acessórios. "Entre outros" do briefing: [A DEFINIR].
- **Produtos com foto em `meus-produtos/`:** iPhone 18, iPhone 17, Apple Watch Series 10, Redmi Pad 2. iPhone 17 como segundo modelo da seção iPhone [PROPOSTA]. Prompts das imagens em `imagens.md`.
- **Relógios [APROVADO como tema]:** acompanhamento de batimentos cardíacos, qualidade do sono, recuperação do corpo e indicadores gerais de saúde e bem-estar. Recursos exatos por modelo: [A DEFINIR].
- **Proposta de valor [PROPOSTA]:** tecnologia de ponta com atendimento direto e rápido pelo WhatsApp. Diferenciais comerciais (procedência, garantia, preço, parcelamento, entrega): [A DEFINIR], sem afirmar nada antes de confirmado.
- **Linguagem de saúde:** falar em "acompanhar" e "monitorar". Nunca prometer diagnóstico, tratamento ou resultado médico.

## 4. Idioma [APROVADO]

Português (Brasil) apenas. `<html lang="pt-BR">`. Moeda BRL (`R$ 1.234,00`), se preços forem exibidos.

## 5. Páginas [APROVADO]

1 página: landing única de rolagem contínua (`index.html`), com iPhone 18 em destaque e vitrines secundárias. Sem páginas internas.

## 6. Seções (ordem) [PROPOSTA]

| # | Seção | Conteúdo | CTA |
|---|-------|----------|-----|
| 1 | Header | Logo JK Imports, âncoras (iPhone, Relógios, Xiaomi, Acessórios), botão WhatsApp | WhatsApp |
| 2 | Hero | iPhone 18 em destaque: título, subtítulo curto, produto flutuando | WhatsApp (primário) + "Ver detalhes" (secundário, âncora) |
| 3 | iPhone | Destaques do iPhone 18 + cards do iPhone 18 e do iPhone 17. Só usar especificações fornecidas pelo usuário [A DEFINIR] | WhatsApp com o modelo na mensagem |
| 4 | Relógios | Apple Watch Series 10. Batimentos, sono, recuperação, indicadores de saúde e bem-estar | WhatsApp |
| 5 | Xiaomi | Vitrine: Redmi Pad 2; outros modelos [A DEFINIR] | WhatsApp por modelo |
| 6 | Acessórios | Vitrine de itens [A DEFINIR]. Oculta até haver produto [APROVADO 2026-10-20] | WhatsApp |
| 7 | Por que a JK Imports | Diferenciais reais [A DEFINIR]. Oculta até haver conteúdo [APROVADO 2026-10-20] | — |
| 8 | Como comprar | 3 passos: escolher, chamar no WhatsApp, combinar pagamento e entrega (detalhes [A DEFINIR]) | WhatsApp |
| 9 | FAQ | Só perguntas com respostas reais [A DEFINIR]. Oculta até haver conteúdo [APROVADO 2026-10-20] | — |
| 10 | CTA final "Escolha o seu" + rodapé | O visitante escolhe o produto, a imagem troca e o botão leva a mensagem com o nome dele (formulário GET para `wa.me`, funciona sem JS) [APROVADO 2026-10-20]; contatos, redes [A DEFINIR], aviso de marcas | WhatsApp |

## 7. Funcionalidades

- Links `wa.me` com mensagem pré-preenchida que cita o produto clicado, escritos direto no HTML, sem JS [APROVADO 2026-10-20].
- Botão flutuante de WhatsApp, visível em todas as seções [PROPOSTA].
- Menu responsivo com âncoras e rolagem suave [PROPOSTA].
- Animações de entrada leves ao rolar [PROPOSTA], regras em @design.md.
- Vitrines estáticas, sem carrinho, sem filtro [PROPOSTA].

## 8. Chamadas para ação

- **CTA principal [APROVADO]:** falar no WhatsApp.
- Rótulo padrão [PROPOSTA]: "Comprar pelo WhatsApp". Variações: "Falar com a JK Imports", "Quero este modelo".
- Link: `https://wa.me/55<DDD><NUMERO>?text=<mensagem codificada>`. Número e texto: [A DEFINIR].
- Todo CTA abre em nova aba com `rel="noopener"`.

## 9. Informações que ainda precisam ser definidas

- Número do WhatsApp (com DDD) e mensagem pré-preenchida.
- Modelos exatos: nome comercial e cores do iPhone 18 e do iPhone 17, outros relógios além do Apple Watch Series 10, outros Xiaomi além do Redmi Pad 2, acessórios, e o que significa "entre outros".
- Recursos de saúde que cada relógio realmente mede.
- Preços e parcelamento (exibir ou "consulte no WhatsApp"), condição dos produtos (novo, lacrado, seminovo), garantia, prazo e forma de entrega.
- Cidade/região de atendimento, Instagram e outras redes, endereço (se houver).
- Logo existente, fotos próprias dos produtos.
- Arquivo/link de referência do site (a pasta `referencias/` não continha nenhum link).
- Domínio e hospedagem; analytics/pixel (se houver, exige aviso de cookies); título e descrição para SEO.

## 10. Stack técnica [APROVADO]

HTML5 + CSS3 + JavaScript puro (ES6+). Sem framework, sem build, sem dependências.

- Estrutura prevista [PROPOSTA]: `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/img/`, `assets/fonts/`.
- CSS: custom properties (tokens de @design.md), Grid/Flexbox, `clamp()`.
- Fonte: Geomini (ver @design.md).
- Hospedagem estática: [A DEFINIR] (Netlify, Vercel ou GitHub Pages seriam suficientes).

## 11. Responsividade

- Mobile-first. A maior parte do tráfego vem do celular.
- Larguras de teste: 360, 390, 768, 1024, 1440 px.
- Breakpoints [PROPOSTA]: 768, 1024, 1280.
- Sem rolagem horizontal em nenhuma largura. Alvos de toque de pelo menos 44×44 px.
- Tipografia fluida com `clamp()`. Imagens responsivas (`srcset`/`sizes`).

## 12. Acessibilidade (meta: WCAG 2.2 AA)

- Contraste de 4,5:1 para texto e 3:1 para texto grande e componentes de interface.
- Landmarks semânticos (`header`, `nav`, `main`, `section`, `footer`) e uma única hierarquia de títulos sem saltos.
- Foco visível, navegação completa por teclado e link "pular para o conteúdo".
- `alt` descritivo nas imagens de produto. Imagens decorativas com `alt=""`.
- CTAs com nome acessível claro, por exemplo "Comprar iPhone 18 pelo WhatsApp".
- Texto sobre imagem ou gradiente precisa manter contraste (usar camada de escurecimento se preciso).
- Respeitar `prefers-reduced-motion`.
- Nenhuma informação transmitida só pela cor.

## 13. Desempenho (metas [PROPOSTA])

- Lighthouse mobile: Desempenho ≥ 90, Acessibilidade ≥ 95.
- LCP ≤ 2,5 s, CLS ≤ 0,1, INP ≤ 200 ms.
- Imagens em WebP (sem AVIF [APROVADO 2026-10-20]) com `width`/`height`. Hero com `fetchpriority="high"`. Imagens abaixo da dobra com `loading="lazy"`.
- Fonte em WOFF2 com subset latino, `font-display: swap`, preload do peso principal.
- Sem bibliotecas de terceiros. Animar só `transform` e `opacity`.

## 14. Escopo

**Dentro:** landing única em pt-BR, vitrines por categoria, CTAs para WhatsApp, animações leves, SEO básico (title, description, Open Graph), responsivo.

**Fora:** carrinho, checkout e pagamento online, login/conta, painel administrativo/CMS, backend e banco de dados, blog, múltiplos idiomas, múltiplas páginas, chat embutido, integração com estoque.
