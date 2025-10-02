@echo off
REM Script de deploy para GitHub Pages (Windows)
REM Este script faz o build do projeto e envia para o GitHub Pages

echo.
echo ========================================
echo   Deploy para GitHub Pages
echo ========================================
echo.

REM 1. Fazer o build do projeto
echo [1/4] Fazendo build do projeto...
call npm run build
if errorlevel 1 (
    echo ERRO: Falha no build do projeto
    pause
    exit /b 1
)

REM 2. Navegar para a pasta dist
echo [2/4] Navegando para a pasta dist...
cd dist

REM 3. Inicializar repositório Git na pasta dist
echo [3/4] Configurando Git...
git init
git add -A
git commit -m "Deploy para GitHub Pages"

REM 4. Fazer push para a branch gh-pages
echo [4/4] Enviando para GitHub Pages...
git push -f https://github.com/ricardoamorim77/clinica-bem-estar.git main:gh-pages

if errorlevel 1 (
    echo.
    echo ERRO: Falha ao enviar para o GitHub
    echo Verifique se voce esta autenticado no Git
    cd ..
    pause
    exit /b 1
)

cd ..

echo.
echo ========================================
echo   Deploy concluido com sucesso!
echo ========================================
echo.
echo Seu site estara disponivel em alguns minutos em:
echo https://ricardoamorim77.github.io/clinica-bem-estar/
echo.
pause
