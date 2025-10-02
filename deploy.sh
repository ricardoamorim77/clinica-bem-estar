#!/bin/bash

# Script de deploy para GitHub Pages
# Este script faz o build do projeto e envia para o GitHub Pages

echo "🚀 Iniciando deploy para GitHub Pages..."

# 1. Fazer o build do projeto
echo "📦 Fazendo build do projeto..."
npm run build

# 2. Navegar para a pasta dist
cd dist

# 3. Inicializar repositório Git na pasta dist
echo "🔧 Configurando Git..."
git init
git add -A
git commit -m 'Deploy para GitHub Pages'

# 4. Fazer push para a branch gh-pages
echo "📤 Enviando para GitHub Pages..."
git push -f git@github.com:ricardoamorim77/clinica-bem-estar.git main:gh-pages

echo "✅ Deploy concluído! Seu site estará disponível em alguns minutos."
echo "🌐 URL: https://ricardoamorim77.github.io/clinica-bem-estar/"

cd ..
