# PluriMentes

Plataforma educativa sobre neurodivergência e inclusão escolar, construída com
React, TypeScript, Tailwind CSS e Vite.

## Comandos

```bash
npm run dev          # inicia o ambiente de desenvolvimento
npm run build        # valida tipos e gera a build de produção
npm run lint         # executa o Oxlint
npm run format       # formata o projeto com Prettier
npm run format:check # valida a formatação sem alterar arquivos
```

## Estrutura

```text
src/
├── components/  # componentes reutilizáveis da interface
├── constants/   # rotas e valores imutáveis
├── hooks/       # hooks customizados
├── pages/       # páginas da aplicação
├── routes/      # resolução de rotas da aplicação
├── styles/      # estilos globais e tema Tailwind
└── types/       # contratos TypeScript compartilhados
```

Os imports internos usam o alias `@/`, configurado tanto no Vite quanto no
TypeScript.
