#!/usr/bin/env bash
# Converte os originais de imagens-site/ em WebP para assets/img/ (plano.md §2.4). Rodar da raiz do projeto.
set -euo pipefail
src=imagens-site
out=assets/img
mkdir -p "$out"

webp() { ffmpeg -v error -y -i "$src/$1" -vf "scale=$3:-2:flags=lanczos" -c:v libwebp -quality 80 -compression_level 6 "$out/$2-$3.webp"; }

for w in 1440 2048 2752; do webp "Hero desktop, iPhone 18.jpg" hero-iphone18-desktop "$w"; done
for w in 720 1080 1600; do webp "Hero celular, iPhone 18.jpg" hero-iphone18-mobile "$w"; done
for w in 800 1200 1800; do webp "Detalhe da câmera do iPhone 18.jpg" iphone18-camera "$w"; done
for w in 400 800; do
  webp "Card do iPhone 18.png" card-iphone18 "$w"
  webp "Card do iPhone 17.png" card-iphone17 "$w"
  webp "Card do Redmi Pad 2.png" card-redmi-pad-2 "$w"
done
for w in 800 1536; do webp "Relógios, Apple Watch Series 10.png" relogio-watch-s10 "$w"; done

# Open Graph 1200x630: recorte 2752x1445 centralizado na vertical da IMG-01
ffmpeg -v error -y -i "$src/Hero desktop, iPhone 18.jpg" -vf "crop=2752:1445:0:45,scale=1200:630:flags=lanczos" -q:v 3 "$out/og-jk-imports.jpg"
