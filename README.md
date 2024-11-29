# portofolio

This is `portofolio` App using workspaces built with vercel/turborepo, bonded with yarn@4.4.1 (berry) Workspaces.

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
