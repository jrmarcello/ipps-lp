<div align="center">

# IPPS - Igreja Presbiteriana Portal do Sol

**Landing Page oficial da Igreja Presbiteriana Portal do Sol**

[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://ipps-igreja-presbiteriana-portal-do-sol.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg?style=for-the-badge)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[Ver Site](https://ipps-igreja-presbiteriana-portal-do-sol.vercel.app) · [Reportar Bug](https://github.com/jrmarcello/ipps-lp/issues)

</div>

---

## Tecnologias

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Google Gemini AI** - Geração de mensagens
- **Vercel** - Hospedagem

## Rodando Localmente

### Pré-requisitos

- Node.js 18+
- Chave da API do [Google Gemini](https://aistudio.google.com/apikey)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/jrmarcello/ipps-lp.git
cd ipps-lp

# Instale as dependências
npm install

# Configure a variável de ambiente
cp .env.example .env.local
# Edite .env.local e adicione sua API_KEY

# Rode o projeto
npm run dev
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza build localmente |

## Estrutura do Projeto

```
├── components/       # Componentes React
├── config/           # Configurações (dados da igreja)
├── services/         # Serviços (integração com Gemini)
├── public/images/    # Imagens estáticas
└── index.html        # Entry point
```

## Configuração

Edite o arquivo `config/church.ts` para personalizar:
- Nome e slogan da igreja
- Informações de contato
- Endereço e localização
- Redes sociais
- Logo (quando disponível)

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<div align="center">

**Igreja Presbiteriana Portal do Sol**

João Pessoa - PB, Brasil

*"Não apenas um lugar para ir, mas uma igreja para crescer!"*

</div>
