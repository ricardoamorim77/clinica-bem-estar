# 📝 Instruções Detalhadas - Clínica Bem-Estar

## Como Abrir o Projeto no VS Code

1. Abra o VS Code
2. Clique em **File** > **Open Folder**
3. Navegue até a pasta `clinica-bem-estar` e selecione-a
4. Clique em **Select Folder**

## Como Instalar as Dependências

Abra o terminal integrado do VS Code (Terminal > New Terminal) e execute:

```bash
npm install --legacy-peer-deps
```

**Importante:** Use `--legacy-peer-deps` para evitar conflitos de dependência. Aguarde a instalação de todas as dependências (pode levar alguns minutos).

## Como Executar o Site Localmente

Após instalar as dependências, execute no terminal:

```bash
npm run dev
```

O site estará disponível em: `http://localhost:5173`

Para parar o servidor, pressione `Ctrl + C` no terminal.

## 📸 Como Adicionar Imagens

### Passo 1: Preparar as Imagens

Prepare as imagens que deseja usar:
- **Logo da clínica**: 200x200px (formato PNG com fundo transparente)
- **Banner principal**: 1920x1080px (formato JPG)
- **Fotos dos profissionais**: 400x400px (formato JPG)
- **Imagens das especialidades**: 300x300px (formato PNG ou JPG)

### Passo 2: Adicionar as Imagens ao Projeto

1. Navegue até a pasta `src/assets/` no VS Code
2. Copie suas imagens para esta pasta
3. Renomeie as imagens com nomes descritivos, por exemplo:
   - `logo.png`
   - `banner-hero.jpg`
   - `dr-carlos-almeida.jpg`
   - `dra-marina-santos.jpg`

### Passo 3: Usar as Imagens nos Componentes

#### Exemplo 1: Adicionar Logo no Navbar

Abra o arquivo `src/components/Navbar.jsx` e modifique:

```jsx
import logo from '../assets/logo.png';

// Dentro do componente, substitua:
<h1 className="text-2xl font-bold text-blue-600">Clínica Bem-Estar</h1>

// Por:
<img src={logo} alt="Clínica Bem-Estar" className="h-12" />
```

#### Exemplo 2: Adicionar Imagem no Banner Hero

Abra o arquivo `src/components/Hero.jsx` e modifique:

```jsx
import bannerImage from '../assets/banner-hero.jpg';

// Substitua a div com o emoji por:
<div className="hidden md:block">
  <img 
    src={bannerImage} 
    alt="Clínica Bem-Estar" 
    className="rounded-lg shadow-xl w-full h-96 object-cover"
  />
</div>
```

#### Exemplo 3: Adicionar Fotos dos Profissionais

Abra o arquivo `src/components/Team.jsx` e no início do arquivo adicione:

```jsx
import drCarlos from '../assets/dr-carlos-almeida.jpg';
import draMarina from '../assets/dra-marina-santos.jpg';
// ... adicione as outras importações
```

Depois, modifique o array de profissionais:

```jsx
const professionals = [
  {
    name: 'Dr. Carlos Almeida',
    specialty: 'Endocrinologista',
    crm: 'CRM-BA 12345',
    bio: 'Médico com 15 anos de experiência...',
    image: drCarlos, // Adicione esta linha
  },
  // ... repita para os outros profissionais
];
```

E no JSX, substitua:

```jsx
<div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center">
  <User className="h-12 w-12 text-white" />
</div>

// Por:
<img 
  src={professional.image} 
  alt={professional.name}
  className="w-24 h-24 rounded-full object-cover"
/>
```

## 🎨 Como Personalizar as Cores

### Método 1: Cores Principais (Recomendado)

Abra o arquivo `src/App.css` e localize as variáveis de cor. Você pode alterá-las para as cores da sua clínica:

```css
:root {
  --primary: oklch(0.205 0 0);  /* Cor primária */
  --secondary: oklch(0.97 0 0);  /* Cor secundária */
  --accent: oklch(0.97 0 0);     /* Cor de destaque */
}
```

### Método 2: Cores Específicas nos Componentes

Você pode alterar cores específicas diretamente nos componentes. Por exemplo, no `Hero.jsx`:

```jsx
// Altere o gradiente do banner:
<section className="relative bg-gradient-to-r from-blue-600 to-green-500">

// Para outras cores:
<section className="relative bg-gradient-to-r from-purple-600 to-pink-500">
```

Cores disponíveis no Tailwind: `blue`, `green`, `purple`, `pink`, `red`, `yellow`, `indigo`, `teal`, etc.

## 📝 Como Alterar os Textos

### Nome da Clínica

Procure por "Clínica Bem-Estar" nos seguintes arquivos e substitua:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Footer.jsx`
- `index.html` (título da página)

### Informações de Contato

Abra `src/components/Contact.jsx` e altere:
- Endereço
- Telefones
- E-mail
- Horário de funcionamento

### Número do WhatsApp

Altere o número do WhatsApp em:
- `src/components/WhatsAppButton.jsx` (linha 4)
- `src/components/Appointment.jsx` (linha 50)

Formato: `5577999514755` (código do país + DDD + número, sem espaços ou caracteres especiais)

### Especialidades

Abra `src/components/Specialties.jsx` e edite o array `specialties`:

```jsx
const specialties = [
  {
    icon: <Heart className="h-10 w-10 text-red-500" />,
    name: 'Nova Especialidade',
    description: 'Descrição da nova especialidade.',
  },
  // ... adicione ou remova especialidades conforme necessário
];
```

### Profissionais

Abra `src/components/Team.jsx` e edite o array `professionals`:

```jsx
const professionals = [
  {
    name: 'Dr. Nome Completo',
    specialty: 'Especialidade',
    crm: 'CRM-BA 12345',
    bio: 'Biografia do profissional.',
  },
  // ... adicione ou remova profissionais conforme necessário
];
```

## 🔗 Como Adicionar seu Portfólio no Rodapé

1.  Abra o arquivo `src/components/Footer.jsx`.
2.  Localize a linha:
    ```jsx
    <p className="mt-2">
      Desenvolvido por Ricardo Amorim - DevClub
    </p>
    ```
3.  Substitua-a por (lembre-se de colocar o link do seu portfólio!):
    ```jsx
    <p className="mt-2">
      Desenvolvido por <a 
        href="SEU_LINK_DO_PORTFOLIO_AQUI" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-400 hover:text-blue-200 transition-colors"
      >
        Ricardo Amorim
      </a> - DevClub
    </p>
    ```

## 🌐 Configuração para GitHub Pages

Para que seu site funcione corretamente no GitHub Pages, duas configurações são essenciais:

1.  **`vite.config.js`**: O caminho base do projeto precisa ser configurado.
    *   Abra o arquivo `vite.config.js` na raiz do seu projeto.
    *   Certifique-se de que ele contenha a propriedade `base` dentro de `defineConfig`:
        ```javascript
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import tailwindcss from '@tailwindcss/vite'
        import path from 'path'

        export default defineConfig({
          base: "/clinica-bem-estar/", // Importante para GitHub Pages
          plugins: [react(),tailwindcss()],
          resolve: {
            alias: {
              "@": path.resolve(__dirname, "./src"),
            },
          },
        })
        ```

2.  **`index.html`**: O idioma da página deve ser definido.
    *   Abra o arquivo `index.html` na raiz do seu projeto.
    *   Certifique-se de que a tag `<html>` esteja configurada para português do Brasil:
        ```html
        <html lang="pt-BR">
        ```

## 🚀 Como Fazer o Deploy (Publicar o Site no GitHub Pages)

Para publicar seu site no GitHub Pages, você usará um script de deploy que já está incluído no projeto. **Recomendo usar o Git Bash para executar este script no Windows, pois ele lida melhor com caminhos e comandos Git.**

**Passo 1: Certifique-se de que o Git está configurado**

*   Verifique se você tem o Git instalado e configurado com seu usuário e e-mail (`git config --global user.name "Seu Nome"` e `git config --global user.email "seu@email.com"`).
*   Certifique-se de que você está logado no GitHub no seu terminal (o Git Bash geralmente pede autenticação na primeira vez que você faz um push).

**Passo 2: Execute o script de deploy**

### Para usuários Windows (usando Git Bash):

1.  **Abra o Git Bash** (procure no menu Iniciar do Windows).
2.  **Navegue até a pasta do seu projeto** (`C:\dev\clinica-bem-estar` ou onde você moveu o projeto):
    ```bash
    cd /c/dev/clinica-bem-estar
    ```
3.  **Execute o script de deploy:**
    ```bash
    ./deploy.sh
    ```
    *Se você tiver problemas com permissão, tente `chmod +x deploy.sh` antes de executar.* 

### Para usuários Windows (usando CMD/PowerShell - Alternativa):

1.  Abra o terminal do VS Code (CMD ou PowerShell).
2.  Navegue até a pasta do seu projeto.
3.  **Execute o script de deploy:**
    ```bash
    deploy.bat
    ```

### Para usuários Linux/macOS:

1.  Abra o terminal.
2.  Navegue até a pasta do seu projeto.
3.  **Execute o script de deploy:**
    ```bash
    ./deploy.sh
    ```
    *Se você tiver problemas com permissão, tente `chmod +x deploy.sh` antes de executar.* 

**O que o script faz:**
*   Ele executa `npm run build` para criar a versão otimizada do seu site na pasta `dist/`.
*   Ele inicializa um repositório Git temporário dentro da pasta `dist/`.
*   Ele faz um `push` forçado (`-f`) para a branch `gh-pages` do seu repositório no GitHub.

**Após o deploy:**

Seu site estará disponível em alguns minutos no link:
`https://ricardoamorim77.github.io/clinica-bem-estar/`

**Importante:** Pode levar alguns minutos para o GitHub Pages processar e publicar as alterações após o deploy.

## ❓ Problemas Comuns e Soluções

### O site não abre após executar `npm run dev`

**Solução**: Verifique se a porta 5173 não está sendo usada por outro programa. Tente fechar outros programas e executar novamente.

### As imagens não aparecem

**Solução**: 
1. Verifique se as imagens estão na pasta `src/assets/`
2. Verifique se o nome do arquivo na importação está correto
3. Verifique se a extensão do arquivo está correta (.jpg, .png, etc.)

### Erro ao instalar dependências

**Solução**: 
1. Certifique-se de ter o Node.js instalado (versão 16+)
2. Tente deletar a pasta `node_modules` e o arquivo `package-lock.json`
3. Execute `npm install --legacy-peer-deps` novamente

### O WhatsApp não abre ao clicar no botão

**Solução**: Verifique se o número está no formato correto: `5577999514755` (sem espaços, parênteses ou hífens)

### Erro `ENAMETOOLONG` ou problemas com caminhos no Windows

**Solução**: Mova a pasta do seu projeto para um caminho mais curto e sem espaços, como `C:\dev\clinica-bem-estar`. Use o **Git Bash** para executar os comandos de deploy, pois ele lida melhor com esses problemas.

## 📞 Precisa de Ajuda?

Se tiver dúvidas ou problemas, você pode:
1. Revisar este documento de instruções
2. Consultar a documentação do React: [react.dev](https://react.dev)
3. Consultar a documentação do Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)

---

**Desenvolvido por Ricardo Amorim - DevClub**

