<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=220&section=header&text=SoulHub&fontSize=70&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Hub%20de%20projetos%20escolares%20e%20profissionais&descAlignY=60&descSize=18" alt="Banner do SoulHub" />

<a href="https://github.com/DzarrefDev/SoulCode_Hub">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1200&color=7C5CFF&center=true&vCenter=true&width=620&lines=Projetos+escolares;Projetos+profissionais;Perfis+dos+criadores;Aprendendo+na+pr%C3%A1tica%2C+do+jeito+profissional" alt="Texto animado" />
</a>

<br />

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Último commit](https://img.shields.io/github/last-commit/DzarrefDev/SoulCode_Hub?style=flat-square&color=7c5cff)
![Tamanho do repositório](https://img.shields.io/github/repo-size/DzarrefDev/SoulCode_Hub?style=flat-square&color=50c8ff)
![Stars](https://img.shields.io/github/stars/DzarrefDev/SoulCode_Hub?style=flat-square&color=f5c542)

</div>

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [O que o site vai ter](#-o-que-o-site-vai-ter)
- [Tecnologias](#-tecnologias)
- [Como rodar localmente](#-como-rodar-localmente)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Fluxo de trabalho](#-fluxo-de-trabalho)
- [Criador](#-criador)
- [Roadmap](#-roadmap)
- [Licença](#-licença)

---

## 💡 Sobre o projeto

O **SoulHub** é um site que funciona como repertório e portfólio de criadores. A ideia é mostrar o que fazemos de forma organizada e profissional e, ao mesmo tempo, **aprender no caminho**: cada etapa do projeto é também uma oportunidade de estudo.

> 🚧 **Projeto em desenvolvimento.** Ele está sendo construído passo a passo e muda com frequência.

---

## ✨ O que o site vai ter

| | Recurso | Descrição |
|---|---|---|
| 🌊 | **Abertura animada** | Uma introdução que toca só na primeira visita |
| 🏠 | **Página inicial** | Apresentação do hub |
| 🗂️ | **Projetos** | Escolares e profissionais, com filtro por categoria |
| 📄 | **Página de projeto** | Descrição e detalhes de cada trabalho |
| 👤 | **Perfil dos criadores** | Quem faz, o que faz e onde encontrar |
| 📬 | **Contato e suporte** | Canal para quem quiser falar com a gente |

---

## 🛠️ Tecnologias

<div align="center">

<img src="https://skillicons.dev/icons?i=nextjs,react,ts,css,nodejs,git,github,vscode,figma,vercel&perline=10" alt="Tecnologias utilizadas" />

</div>

<br />

| Tecnologia | Para que serve no projeto |
|---|---|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) | Páginas, rotas e estrutura do site (App Router) |
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | Componentes reutilizáveis da interface |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Tipagem e segurança no código |
| ![CSS](https://img.shields.io/badge/CSS_Modules-1572B6?style=flat-square&logo=css3&logoColor=white) | Estilos organizados por componente |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | Ambiente de execução |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | Análise e padronização do código |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | Controle de versão e colaboração |
| ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white) | Editor de código |
| ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white) | Desenho da interface (protótipo) |

---

## 🚀 Como rodar localmente

**Pré-requisito:** [Node.js](https://nodejs.org/) (versão LTS).

```bash
# 1. clonar o repositório
git clone https://github.com/DzarrefDev/SoulCode_Hub.git

# 2. entrar na pasta do projeto
cd SoulCode_Hub/nosso-portfolio

# 3. instalar as dependências
npm install

# 4. iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra **[http://localhost:3000](http://localhost:3000)** no navegador.

> 💡 No Windows, se o PowerShell bloquear scripts, rode `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` ou use o Prompt de Comando.

---

## 📁 Estrutura de pastas

```
SoulCode_Hub/
└── nosso-portfolio/
    ├── app/             # páginas do site (cada pasta vira uma rota)
    ├── components/      # componentes reutilizáveis
    │   ├── home/        #   seção inicial (Hero)
    │   └── layout/      #   Header e Footer
    ├── data/            # conteúdo (projetos e criadores)
    ├── types/           # tipos do TypeScript
    ├── public/          # imagens e arquivos estáticos
    └── package.json     # dependências e comandos
```

---

## 🔀 Fluxo de trabalho

O projeto segue um fluxo de branches em etapas, para que a `main` esteja sempre estável:

```mermaid
flowchart LR
    A["feature/..."] --> B["dev"]
    B --> C["test"]
    C --> D["main"]
    style A fill:#7c5cff,color:#fff,stroke:none
    style B fill:#4f7cff,color:#fff,stroke:none
    style C fill:#50c8ff,color:#0f0f14,stroke:none
    style D fill:#2ecc71,color:#0f0f14,stroke:none
```

| Branch | Função |
|---|---|
| `feature/...` | Desenvolvimento de cada tarefa, isolada |
| `dev` | Junta as features prontas |
| `test` | Testes e correção de erros antes de publicar |
| `main` | Versão estável, a que vai ao ar |

**Regras:**

- Uma branch por tarefa (`feature/...`, `fix/...`, `docs/...`)
- Alterações entram por **Pull Request**
- Commits no padrão **Conventional Commits**

```text
feat: adiciona Header com navegação
fix: corrige seletor no CSS do Hero
docs: atualiza README
style: ajusta cores do menu
chore: atualiza dependências
```

---

## 👤 Criador

<div align="center">

<a href="https://github.com/DzarrefDev">
  <img src="https://github.com/DzarrefDev.png" width="110" style="border-radius:50%" alt="Foto de Daniel Ferraz" />
</a>

**Daniel Ferraz**

[![GitHub](https://img.shields.io/badge/GitHub-DzarrefDev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DzarrefDev)

</div>

---

## 🗺️ Roadmap

- [x] Configuração inicial do projeto
- [x] Primeira versão do Hero com animação
- [ ] Header e Footer
- [ ] Design da interface (protótipo no Figma)
- [ ] Animação de abertura (splash)
- [ ] Página de projetos
- [ ] Perfis dos criadores
- [ ] Página de contato
- [ ] Publicação (deploy)

---

## 📜 Licença

Projeto de estudo e portfólio. Todos os direitos reservados aos criadores, salvo indicação em contrário.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=120&section=footer" alt="Rodapé" />

**Feito com 💜 e muito aprendizado.**

</div>
