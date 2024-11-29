# portofolio

This is portofolio using workspaces built with turborepo and yarn@4.4.1 (berry).

## NOW UNDER WIP:

### PLEASE CHECK AND SEE ISSUES.

## Tech

- [turborepo](https://turbo.build/repo/docs)
- [berry (yarn@4.4.1)](https://github.com/yarnpkg/berry)

### Cloud

- Doppler
- DigitalOcean
- AppWrite
- Sentry

### DB

- Prisma (ORM)
- SQLite (node@22.7.0 native-API)

### Schemes

- GraphQL
  - [generated codes](https://github.com/sujii/portofolio/tree/d59c9a72169d656347b02bec54ffb582cb4a09a7/apps/api-client/dist)

## Setup

### Install yarn@4.4.1 (berry)

```sh
corepack enable
yarn init -2
yarn set version stable
```

### Create Workspaces, with Generate Dev specifics

```sh
pwd
$HOME/Projects/portofolio

make init
```

## Build

```sh
pwd
$HOME/Projects/portofolio

yarn build
```

## Directives

```sh
.
├── LICENSE
├── Makefle
├── README.md
├── apps
│   ├── api-client
│   │   ├── README.md
│   │   ├── codegen.ts
│   │   ├── dist
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── src
│   │   └── tsconfig.json
│   ├── prisma
│   │   ├── migrations
│   │   └── schema.prisma
│   └── web
│       ├── README.md
│       ├── consts
│       ├── instrumentation.ts
│       ├── next-env.d.ts
│       ├── next.config.mjs
│       ├── node_modules
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── public
│       ├── sentry.client.config.ts
│       ├── sentry.edge.config.ts
│       ├── sentry.server.config.ts
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── docs
├── node_modules
│   └── @sujii
│       ├── portofolio-api-client
│       ├── portofolio-assets
│       ├── portofolio-constants
│       ├── portofolio-locales
│       ├── portofolio-prisma
│       ├── portofolio-storybook-server
│       ├── portofolio-testdata
│       ├── portofolio-tests
│       ├── portofolio-typescript-config
│       └── portofolio-ui
├── package.json
├── packages
│   ├── constants
│   ├── css
│   │   └── globals.css
│   ├── public
│   ├── typescript-config
│   │   ├── base.json
│   │   ├── nextjs.json
│   │   ├── package.json
│   │   └── react-library.json
│   └── ui
│       ├── components
│       ├── components.json
│       ├── css
│       ├── lib
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── turbo.json
└── yarn.lock
```
