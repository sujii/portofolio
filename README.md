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

## Setup

### to Install yarn@4.4.1 (berry)

```sh
corepack enable
yarn init -2
yarn set version stable
```

### Create Workspaces

```sh
yarn unlink && yarn link
yarn install
```

## Directives

```sh
.
├── .github
├── LICENSE
├── README.md
├── apps
│   └── web
│       ├── dotenv.clstg
│       ├── dotenv.local
│       ├── next.config.ts
│       ├── package.json
│       ├── static
│       ├── scripts
│       └── src
│           ├── components
│           ├── modules
│           ├── pages
│           ├── stores
│           └── utils
├── docs
├── Makefile
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
│   ├── api-client
│   ├── assets
│   ├── constants
│   ├── locales
│   ├── prisma
│   ├── storybook-server
│   ├── testdata
│   ├── tests
│   ├── typescript-config
│   └── ui
├── scripts
├── turbo.json
└── yarn.lock
```
