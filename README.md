# Clínica Bem-Estar - Site Institucional

Site profissional desenvolvido para clínicas médicas, com design moderno e responsivo.

## 🎯 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Intuitiva**: Menu fixo com navegação suave entre seções
- **Seções Completas**:
  - Hero/Banner principal com chamada para ação
  - Sobre Nós (missão, visão e valores)
  - Especialidades médicas
  - Equipe de profissionais
  - Formulário de agendamento
  - Informações de contato
- **Botão Flutuante do WhatsApp**: Contato direto e rápido
- **Integração com WhatsApp**: Formulário de agendamento envia dados via WhatsApp
- **Cores Profissionais**: Paleta de cores azul e verde transmitindo confiança

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript para construção da interface
- **Vite**: Build tool rápido e moderno
- **Tailwind CSS**: Framework CSS utility-first
- **Lucide Icons**: Biblioteca de ícones moderna
- **shadcn/ui**: Componentes de UI de alta qualidade

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou pnpm

## 🚀 Como Usar

### 1. Instalação das Dependências

```bash
cd clinica-bem-estar
pnpm install
```

Ou se preferir usar npm:

```bash
npm install
```

### 2. Executar o Projeto em Modo de Desenvolvimento

```bash
pnpm run dev
```

Ou com npm:

```bash
npm run dev
```

O site estará disponível em: `http://localhost:5173`

### 3. Build para Produção

```bash
pnpm run build
```

Ou com npm:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
clinica-bem-estar/
├── public/              # Arquivos públicos
├── src/
│   ├── assets/         # Imagens e outros assets
│   ├── components/     # Componentes React
│   │   ├── ui/        # Componentes UI (shadcn/ui)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Specialties.jsx
│   │   ├── Team.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.css        # Estilos globais
│   ├── App.jsx        # Componente principal
│   └── main.jsx       # Ponto de entrada
├── index.html
├── package.json
└── README.md
```

## 🎨 Personalização

### Alterar Cores

As cores principais podem ser alteradas no arquivo `src/App.css` nas variáveis CSS:

- `--primary`: Cor primária
- `--secondary`: Cor secundária
- `--accent`: Cor de destaque

### Alterar Informações da Clínica

1. **Nome da Clínica**: Edite os componentes `Navbar.jsx`, `Hero.jsx` e `Footer.jsx`
2. **Especialidades**: Edite o array `specialties` em `Specialties.jsx`
3. **Profissionais**: Edite o array `professionals` em `Team.jsx`
4. **Informações de Contato**: Edite o componente `Contact.jsx`
5. **Número do WhatsApp**: Edite a constante `whatsappNumber` em `WhatsAppButton.jsx` e `Appointment.jsx`

### Adicionar Imagens

1. Coloque suas imagens na pasta `src/assets/`
2. Importe-as nos componentes:

```javascript
import minhaImagem from './assets/minha-imagem.jpg'
```

3. Use no JSX:

```jsx
<img src={minhaImagem} alt="Descrição" />
```

## 📱 Funcionalidades do WhatsApp

O site possui integração com WhatsApp em dois pontos:

1. **Botão Flutuante**: No canto inferior direito, sempre visível
2. **Formulário de Agendamento**: Envia os dados preenchidos diretamente para o WhatsApp da clínica

Para configurar o número do WhatsApp, edite:
- `src/components/WhatsAppButton.jsx` (linha 4)
- `src/components/Appointment.jsx` (linha 50)

Formato: `5577999514755` (código do país + DDD + número)

## 🌐 Deploy

O site pode ser facilmente hospedado em plataformas gratuitas como:

- **Vercel**: `vercel --prod`
- **Netlify**: Arraste a pasta `dist/` para o Netlify
- **GitHub Pages**: Configure o GitHub Actions

## 👨‍💻 Desenvolvedor

Desenvolvido por **Ricardo Amorim** - DevClub

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## 📞 Suporte

Para dúvidas ou sugestões sobre o código, entre em contato através do WhatsApp ou e-mail da clínica.
