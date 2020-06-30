# Apollo-TypeORM-Api-Voilerplate

[![GitHub issues](https://img.shields.io/github/issues/gitackt/graphql-api-voilerplate?color=%236971ce)](https://github.com/gitackt/graphql-api-voilerplate/issues)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/gitackt/graphql-api-voilerplate?color=%236971ce)](https://github.com/gitackt/graphql-api-voilerplate/issues)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/gitackt/graphql-api-voilerplate?color=%23ce6990)](https://github.com/gitackt/graphql-api-voilerplate/issues)
[![GitHub pull-requests closed](https://img.shields.io/github/issues-pr-closed/gitackt/graphql-api-voilerplate?color=%23ce6990)](https://github.com/gitackt/graphql-api-voilerplate/issues)
[![GitHub forks](https://img.shields.io/github/forks/gitackt/graphql-api-voilerplate?color=%2369cebf)](https://github.com/gitackt/graphql-api-voilerplate/network)
[![GitHub stars](https://img.shields.io/github/stars/gitackt/graphql-api-voilerplate?color=%2369cebf)](https://github.com/gitackt/graphql-api-voilerplate/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/gitackt/graphql-api-voilerplate?color=%2369cebf)](https://github.com/gitackt/graphql-api-voilerplate/stargazers)

This is a boilerplate for an API server that uses [GraphQL](https://graphql.org/ 'GraphQL') in a [Docker](https://www.docker.com/ 'Docker') container.

- Language: [Typescript](https://www.typescriptlang.org/ 'Typescript')
- GraphQL: [Apollo](https://www.apollographql.com/ 'Apollo')
- Server: [Express](https://expressjs.com/ja/ 'Express')
- ORM: [TypeORM](https://typeorm.io/#/ 'TypeORM')
- Database: [MySQL](https://www.mysql.com/jp/ 'MySQL')

---

## First Setup

### ① Create .env

See `.env.sample`.

```shell
vi .env
```

### ② Create container

The application is launched with [docker-compose](https://docs.docker.com/compose/ 'docker-compose').

```shell
brew install yarn
docker-compose up --build
```

### ③ Run test

```shell
yarn test
```

---

<details>

<summary>
Server 
</summary>

## ① Server

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

</details>

---

<details>

<summary>
Migration
</summary>

## ② Migration

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

</details>

## Licence

[![GitHub license](https://img.shields.io/github/license/gitackt/graphql-api-voilerplate?color=%23ccb868)](https://github.com/gitackt/graphql-api-voilerplate/blob/master/LICENSE)
