# portofolio

This is `portofolio` App using workspaces built with vercel/turborepo, bonded with yarn@4.4.1 (berry) Workspaces.
This Product is Demonstration of [LEGOJS](https://github.com/VVVVISE/LEGOJS).

## NOW UNDER WIP:

Please see [Issues](https://github.com/sujii/portofolio/issues).

## 1. Tech

### CoreMiddleWares:

- [Turborepo (inclued Nextjs, React)](https://turbo.build/repo/docs)
- [nodejs@23.3.0: API Documentation](https://nodejs.org/docs/latest/api/)
- [Berry (yarn@4.4.1)](https://github.com/yarnpkg/berry)
  - I like PNPM, but it wears on me at times.

### Cloud:

- Doppler
- DigitalOcean
- AppWrite (or Maybe SupaBase)
- Sentry

### DB:

- Prisma (ORM)
- SQLite (node@22.7.0 native-API)

### Schemes:

- GraphQL
    - [MockData/GeneratdCodes](https://github.com/sujii/portofolio/tree/d59c9a72169d656347b02bec54ffb582cb4a09a7/apps/api-client/dist)

### Apps:

1. ApiClients
    - ApiClients generates Interfaces, Modules, Functions, and Hooks from GraphQL.
2. App
    - Web application itself
    - [ComponentsList](https://github.com/sujii/portofolio/issues/16#issue-2703890030)
3. HeadLessAPI (Not Standby)
    - The package will be able to manipulate Prisma's DB schema from the GUI, but currently it is simply Prisma.

### Packages:

1. Constants
2. Styles
3. Statics
4. TypeScriptConfig
5. UI

## 2. Setup

### Install yarn@4.4.1 (berry):

```sh
corepack enable
yarn init -2
yarn set version stable
```

### Create Workspaces, with Setup Developpers Specifications (with Doppler):

```sh
pwd
$HOME/Projects/portofolio

make init
```

## 3. Build

```sh
pwd
$HOME/Projects/portofolio

# To Build, All Apps and Packages.
yarn build
```

## 4. Directives

The arrangement on the directory does not imply the structure of the package as it is. Packages have a domain and are invoked as a thin domain model with up to two layers.

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
│   │   │   ├── modules
│   │   │   └── graphQL
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── src
│   │   └── tsconfig.json
│   └── web
│       ├── README.md
│       ├── next-env.d.ts
│       ├── next.config.mjs
│       ├── node_modules
│       ├── package.json
│       ├── src
│       ├── statics
│       ├── sentry.client.config.ts
│       ├── sentry.edge.config.ts
│       ├── sentry.server.config.ts
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
│   ├── assets
│   ├── constants
│   ├── locales
│   ├── tests
│   ├── error-manager
│   │   ├── README.md
│   │   ├── node_modules
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── error-boundary-logger
│   │   ├── README.md
│   │   ├── node_modules
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── figma-sync-server
│   │   ├── README.md
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── migrations
│   │   └── schema.prisma
│   ├── prisma
│   │   ├── README.md
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── migrations
│   │   └── schema.prisma
│   ├── storybook-sync-server
│   │   ├── README.md
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── migrations
│   │   └── schema.prisma
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
│       └── tsconfig.json
├── turbo.json
└── yarn.lock
```

## 5. License

THE UNLICENSED
