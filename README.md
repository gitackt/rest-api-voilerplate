# Apollo-TypeORM-Api-Voilerplate

[![GitHub issues](https://img.shields.io/github/issues/gitackt/graphql-api-voilerplate?color=%236971ce)](https://github.com/gitackt/graphql-api-voilerplate/issues)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/gitackt/graphql-api-voilerplate?color=%236971ce)](https://github.com/gitackt/graphql-api-voilerplate/issues)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/gitackt/graphql-api-voilerplate?color=%23ce6990)](https://github.com/gitackt/graphql-api-voilerplate/issues)
[![GitHub pull-requests closed](https://img.shields.io/github/issues-pr-closed/gitackt/graphql-api-voilerplate?color=%23ce6990)](https://github.com/gitackt/graphql-api-voilerplate/issues)
[![GitHub forks](https://img.shields.io/github/forks/gitackt/graphql-api-voilerplate?color=%2369cebf)](https://github.com/gitackt/graphql-api-voilerplate/network)
[![GitHub stars](https://img.shields.io/github/stars/gitackt/graphql-api-voilerplate?color=%2369cebf)](https://github.com/gitackt/graphql-api-voilerplate/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/gitackt/graphql-api-voilerplate?color=%2369cebf)](https://github.com/gitackt/graphql-api-voilerplate/stargazers)
[![GitHub license](https://img.shields.io/github/license/gitackt/graphql-api-voilerplate?color=%23ccb868)](https://github.com/gitackt/graphql-api-voilerplate/blob/master/LICENSE)

This is a boilerplate for an API server that uses [GraphQL](https://graphql.org/ 'GraphQL') in a [Docker](https://www.docker.com/ 'Docker') container.

- Language: [Typescript](https://www.typescriptlang.org/ 'Typescript')
- GraphQL: [Apollo](https://www.apollographql.com/ 'Apollo')
- Server: [Express](https://expressjs.com/ja/ 'Express')
- ORM: [TypeORM](https://typeorm.io/#/ 'TypeORM')
- Database: [MySQL](https://www.mysql.com/jp/ 'MySQL')

---

## ① First Setup

### Create .env

See `.env.sample`.

```shell
vi .env
```

### Create container

The application is launched with [docker-compose](https://docs.docker.com/compose/ 'docker-compose').

```shell
brew install yarn
docker-compose up --build
```

## ② Test

The application is tested with [jest](https://jestjs.io/docs/ja/getting-started 'jest').

#### test

```shell
yarn test
```

#### test (watch mode)

```shell
yarn watch
```

---

## ③ Server

### Build image

```shell
docker-compose build
```

### Start server

```shell
docker-compose up
```

### Start server（with build）

```shell
docker-compose up --build
```

### Start server（deamon）

```shell
docker-compose up -d
```

### Start server（deamon with build）

```shell
docker-compose up --build -d
```

### Stop server

```shell
docker-compose down
```

### Stop server (remove volumes)

```shell
docker-compose down -v
```

## ④ Migration

### 1 - Exec app container

```shell
docker-compose exec api bash
```

### 2 - Generate Migrations

(In app container)

```shell
./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -n  <migration-name>
```

### 3 - Run Migrations

(In app container)

```shell
./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run
```

### ⑤ GraphQL

docker-compose up graphQL container & Acceess playground url (http://localhost:3000/graphql )

### Query

```
query {
  users {
      id
  }
}
```

### Mutation

```
mutation {
  createUser(id: 1, firstName: "aa", lastName: "ss", age: 46) {
    id
  }
}
```
