# SoulHub

> Hub em desenvolvimento para reunir, em um só lugar, projetos escolares e profissionais.

🚧 **Status: em desenvolvimento.** O projeto está sendo construído passo a passo e muda com frequência.

## Sobre o projeto

O SoulHub é um site que funciona como repertório e portfólio de criadores. A ideia é mostrar o que fazemos de forma organizada e profissional e, ao mesmo tempo, aprender no caminho: cada etapa do projeto é também uma oportunidade de estudo.

## O que o site vai ter

- **Abertura animada** na primeira visita
- **Página inicial** apresentando o hub
- **Projetos** escolares e profissionais, com filtro por categoria
- **Página de cada projeto** com descrição e detalhes
- **Perfil de cada criador**
- **Contato e suporte** para quem quiser falar com a gente

## Tecnologias

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS (CSS Modules)
- Git e GitHub para controle de versão

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) (versão LTS).

```bash
# clonar o repositório
git clone https://github.com/DzarrefDev/SoulCode_Hub.git

# entrar na pasta do projeto
cd SoulCode_Hub/nosso-portfolio

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura de pastas

```
├── app/          # páginas do site
├── components/   # componentes reutilizáveis
├── data/         # conteúdo (projetos e criadores)
├── types/        # tipos do TypeScript
└── public/       # imagens e arquivos estáticos
```

## Fluxo de trabalho

O projeto segue um fluxo de branches em etapas:

```
feature/...  →  dev  →  test  →  main
```

| Branch | Função |
|---|---|
| `feature/...` | Desenvolvimento de cada tarefa, isolada |
| `dev` | Junta as features prontas |
| `test` | Testes e correção de erros antes de publicar |
| `main` | Versão estável, a que vai ao ar |

- Uma branch por tarefa (`feature/...`, `fix/...`, `docs/...`)
- Alterações entram por Pull Request
- Commits seguindo o padrão Conventional Commits (`feat:`, `fix:`, `docs:`...)

## Criador

- **Daniel Ferraz**: [@DzarrefDev](https://github.com/DzarrefDev)

## Roadmap

- [x] Configuração inicial do projeto
- [x] Primeira versão do Hero com animação
- [ ] Header e Footer
- [ ] Design da interface (protótipo)
- [ ] Animação de abertura
- [ ] Página de projetos
- [ ] Perfis dos criadores
- [ ] Página de contato
- [ ] Publicação (deploy)

## Licença

Projeto de estudo e portfólio. Todos os direitos reservados aos criadores, salvo indicação em contrário.
